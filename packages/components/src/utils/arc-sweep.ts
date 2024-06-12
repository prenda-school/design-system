import { arc as d3Arc } from 'd3-shape';
import {
  ArcParams,
  ArcScaleParams,
  getNumericalValue,
  getValueAngleScale,
} from '.';

export type ArcSweepParams = {
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

export type DrawArcSweepParams = {
  /**
   * The arc on which the sweep is located.
   */
  arc: ArcParams;
  /**
   * The scale of the arc.
   */
  scale: ArcScaleParams;
  /**
   * The properties of the sweep.
   */
  sweep: ArcSweepParams;
};

export type DrawArcSweepResult = {
  d: string;
};

export function drawArcSweep(params: DrawArcSweepParams): DrawArcSweepResult {
  // The "angle the filled arc needs to fill until"
  const angleScale = getValueAngleScale({
    value: {
      min: params.scale.valueMin,
      max: params.scale.valueMax,
    },
    angle: {
      min: params.scale.angleMin,
      max: params.scale.angleMax,
    },
  });

  const from = params.sweep.from ?? params.scale.valueMin;
  const to = params.sweep.to ?? params.scale.valueMax;

  const startAngle = angleScale(from);
  const endAngle = angleScale(to);

  const outerRadius = params.arc.radius;
  const innerRadius = outerRadius * params.arc.ratio;
  const width = outerRadius - innerRadius;
  const cornerRadiusWide =
    params.sweep.cornerRadius ??
    params.arc.cornerRadius ??
    DEFAULT_CORNER_RADIUS;
  const cornerRadius = getNumericalValue(cornerRadiusWide, width);

  const d = d3Arc().cornerRadius(cornerRadius)({
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    // cast out `null` because the rendering context is not given
  }) as string;

  return { d };
}

const DEFAULT_CORNER_RADIUS = 0;
