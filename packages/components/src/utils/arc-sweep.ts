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

export type DrawArcSweepParams = ArcSweepParams & {
  /**
   * The arc on which the sweep is located.
   */
  arc: ArcParams;
  /**
   * The scale of the arc.
   */
  arcScale: ArcScaleParams;
};

export type DrawArcSweepResult = {
  d: string;
};

export function drawArcSweep(params: DrawArcSweepParams): DrawArcSweepResult {
  // The "angle the filled arc needs to fill until"
  const angleScale = getValueAngleScale({
    value: {
      min: params.arcScale.valueMin,
      max: params.arcScale.valueMax,
    },
    angle: {
      min: params.arcScale.angleMin,
      max: params.arcScale.angleMax,
    },
  });

  const from = params.from ?? params.arcScale.valueMin;
  const to = params.to ?? params.arcScale.valueMax;

  const startAngle = angleScale(from);
  const endAngle = angleScale(to);

  const outerRadius = params.arc.radius;
  const innerRadius = outerRadius * params.arc.ratio;
  const width = outerRadius - innerRadius;
  const cornerRadiusWide =
    params.cornerRadius ?? params.arc.cornerRadius ?? DEFAULT_CORNER_RADIUS;
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
