import { arc as d3Arc, pie as d3Pie } from 'd3-shape';
import { ArcOut } from '../Arc/generateArc';
import { getNumericalValue, getValueSegmentsScale } from '../utils';

type ArcSegmentsSweepIn = {
  from?: number;
  to?: number;
  cornerRadius?: number | string;
  arc: ArcOut;
  segments: {
    count: number;
    padAngle: number;
    cornerRadius?: number | string;
  };
};

type ArcSegmentsSweepOut = {
  d: string;
}[];

export function generateArcSegmentsSweep(
  params: ArcSegmentsSweepIn
): ArcSegmentsSweepOut {
  const segmentScale = getValueSegmentsScale({
    value: {
      min: params.arc.value.min,
      max: params.arc.value.max,
    },
    segments: params.segments.count,
  });

  const from = params.from ?? params.arc.value.min;
  const to = params.to ?? params.arc.value.max;

  const startSegment = segmentScale(from);
  const endSegment = segmentScale(to);

  const outerRadius = params.arc.radius;
  const innerRadius = outerRadius * params.arc.ratio;
  const width = outerRadius - innerRadius;
  const cornerRadiusWide =
    params.cornerRadius ??
    params.segments.cornerRadius ??
    DEFAULT_CORNER_RADIUS;
  const cornerRadius = getNumericalValue(cornerRadiusWide, width);

  const arcGenerator = d3Arc().cornerRadius(cornerRadius);

  // value doesn't matter, because the data is not used
  const data = Array.from({ length: params.segments.count }, () => 1);
  const pieGenerator = d3Pie()
    .padAngle(params.segments.padAngle)
    .startAngle(params.arc.angle.min)
    .endAngle(params.arc.angle.max);
  const pieArcs = pieGenerator(data);
  const pieArcSweeps = pieArcs
    .filter(
      (datum) =>
        datum.index + 1 >= startSegment && datum.index + 1 <= endSegment
    )
    .map(
      (datum) =>
        arcGenerator({
          outerRadius,
          innerRadius,
          startAngle: datum.startAngle,
          endAngle: datum.endAngle,
          padAngle: datum.padAngle,
          // cast out `null` because the rendering context is not given
        }) as string
    );

  const dMultiple = pieArcSweeps.map((d) => ({ d }));

  return dMultiple;
}

const DEFAULT_CORNER_RADIUS = 0;
