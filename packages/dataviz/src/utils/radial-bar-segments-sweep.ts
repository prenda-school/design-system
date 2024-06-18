import { arc as d3Arc, pie as d3Pie } from 'd3-shape';
import { RadialBarParams } from './radial-bar';
import { RadialBarScaleParams } from './radial-bar-scale';
import {
  RadialBarSegmentsParams,
  getValueSegmentsScale,
} from './radial-bar-segments';
import { getNumericalValue } from './value';

export type RadialBarSegmentsSweepParams = {
  /**
   * The value from which the radial bar sweep starts. Defaults to the minimum value.
   */
  from?: number;
  /**
   * The value from which the radial bar sweep ends. Defaults to the maximum value.
   */
  to?: number;
  /**
   * The corner radius of the radial bar sweep. Defaults to 0. Overrides the corner radius set on the radial bar.
   */
  cornerRadius?: number | string;
};

export type DrawRadialBarSegmentsSweepParams = {
  /**
   * The radial bar on which the segments sweep is located.
   */
  bar: RadialBarParams;
  /**
   * The scale of the radial bar.
   */
  scale: RadialBarScaleParams;
  /**
   * The segments of the radial bar.
   */
  segments: RadialBarSegmentsParams;
  /**
   * The properties of the sweep.
   */
  sweep: RadialBarSegmentsSweepParams;
};

export type DrawRadialBarSegmentsSweepResult = {
  d: string;
};

export function drawRadialBarSegmentsSweep(
  params: DrawRadialBarSegmentsSweepParams
): DrawRadialBarSegmentsSweepResult {
  const segmentScale = getValueSegmentsScale({
    value: {
      min: params.scale.valueMin,
      max: params.scale.valueMax,
    },
    segments: params.segments.count,
  });

  const from = params.sweep.from ?? params.scale.valueMin;
  const to = params.sweep.to ?? params.scale.valueMax;

  const startSegment = segmentScale(from);
  const endSegment = segmentScale(to);

  const outerRadius = params.bar.radius;
  const innerRadius = outerRadius * params.bar.ratio;
  const width = outerRadius - innerRadius;
  const cornerRadiusWide =
    params.sweep.cornerRadius ??
    params.segments.cornerRadius ??
    DEFAULT_CORNER_RADIUS;
  const cornerRadius = getNumericalValue(cornerRadiusWide, width);

  const arcGenerator = d3Arc().cornerRadius(cornerRadius);

  // value doesn't matter, because the data is not used
  const data = Array.from({ length: params.segments.count }, () => 1);
  const pieGenerator = d3Pie()
    .padAngle(params.segments.padAngle)
    .startAngle(params.scale.angleMin)
    .endAngle(params.scale.angleMax);
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

  const d = pieArcSweeps.reduce((acc, d) => acc + 'M0,0' + d, '');

  return { d };
}

const DEFAULT_CORNER_RADIUS = 0;
