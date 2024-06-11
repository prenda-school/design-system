import { arc as d3Arc } from 'd3-shape';
import { ArcOut } from '../Arc/generateArc';
import { getNumericalValue, getValueAngleScale } from '.';

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

type ArcSweepIn = {
  from?: number;
  to?: number;
  cornerRadius?: number | string;
  arc: ArcOut;
};

type ArcSweepOut = {
  d: string;
};

export function drawArcSweep(params: ArcSweepIn): ArcSweepOut {
  // The "angle the filled arc needs to fill until"
  const angleScale = getValueAngleScale({
    value: {
      min: params.arc.value.min,
      max: params.arc.value.max,
    },
    angle: {
      min: params.arc.angle.min,
      max: params.arc.angle.max,
    },
  });

  const from = params.from ?? params.arc.value.min;
  const to = params.to ?? params.arc.value.max;

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
