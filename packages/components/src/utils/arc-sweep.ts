import { arc as d3Arc } from 'd3-shape';
import { ArcOut } from '../Arc/generateArc';
import { getNumericalValue, getValueAngleScale } from '.';

type ArcSweepIn = {
  from?: number;
  to?: number;
  cornerRadius?: number | string;
  arc: ArcOut;
};

type ArcSweepOut = {
  d: string;
};

export function generateArcSweep(params: ArcSweepIn): ArcSweepOut {
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
