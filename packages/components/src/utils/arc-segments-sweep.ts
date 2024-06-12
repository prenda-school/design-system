import { arc as d3Arc, pie as d3Pie } from 'd3-shape';
import {
  ArcParams,
  ArcScaleParams,
  ArcSegmentsParams,
  getNumericalValue,
  getValueSegmentsScale,
} from '.';

export type ArcSegmentsSweepParams = {
  /**
   * The value from which the arc sweep starts. Defaults to the minimum value.
   */
  from?: number;
  /**
   * The value from which the arc sweep ends. Defaults to the maximum value.
   */
  to?: number;
  /**
   * The corner radius of the arc sweep. Defaults to 0. Overrides the corner radius set on the `arc`.
   */
  cornerRadius?: number | string;
};

export type DrawArcSegmentsSweepParams = ArcSegmentsSweepParams & {
  /**
   * The arc on which the segments sweep is located.
   */
  arc: ArcParams;
  /**
   * The scale of the arc.
   */
  arcScale: ArcScaleParams;
  /**
   * The segments of the arc.
   */
  arcSegments: ArcSegmentsParams;
};

export type DrawArcSegmentsSweepResult = {
  d: string;
}[];

export function drawArcSegmentsSweep(
  params: DrawArcSegmentsSweepParams
): DrawArcSegmentsSweepResult {
  const segmentScale = getValueSegmentsScale({
    value: {
      min: params.arcScale.valueMin,
      max: params.arcScale.valueMax,
    },
    segments: params.arcSegments.count,
  });

  const from = params.from ?? params.arcScale.valueMin;
  const to = params.to ?? params.arcScale.valueMax;

  const startSegment = segmentScale(from);
  const endSegment = segmentScale(to);

  const outerRadius = params.arc.radius;
  const innerRadius = outerRadius * params.arc.ratio;
  const width = outerRadius - innerRadius;
  const cornerRadiusWide =
    params.cornerRadius ??
    params.arcSegments.cornerRadius ??
    DEFAULT_CORNER_RADIUS;
  const cornerRadius = getNumericalValue(cornerRadiusWide, width);

  const arcGenerator = d3Arc().cornerRadius(cornerRadius);

  // value doesn't matter, because the data is not used
  const data = Array.from({ length: params.arcSegments.count }, () => 1);
  const pieGenerator = d3Pie()
    .padAngle(params.arcSegments.padAngle)
    .startAngle(params.arcScale.angleMin)
    .endAngle(params.arcScale.angleMax);
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
