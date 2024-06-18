import { arc as d3Arc } from 'd3-shape';
import { RadialBarParams } from './radial-bar';
import { RadialBarScaleParams } from './radial-bar-scale';
import { getValueAngleScale } from './scale';
import { getNumericalValue } from './value';

export type RadialBarSweepParams = {
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

export type DrawRadialBarSweepParams = {
  /**
   * The radial bar on which the sweep is located.
   */
  bar: RadialBarParams;
  /**
   * The scale of the radial bar.
   */
  scale: RadialBarScaleParams;
  /**
   * The properties of the sweep.
   */
  sweep: RadialBarSweepParams;
};

export type DrawRadialBarSweepResult = {
  d: string;
};

export function drawRadialBarSweep(
  params: DrawRadialBarSweepParams
): DrawRadialBarSweepResult {
  // The "angle the radial bar needs to sweep to" based on the data value
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

  const outerRadius = params.bar.radius;
  const innerRadius = outerRadius * params.bar.ratio;
  const width = outerRadius - innerRadius;
  const cornerRadiusWide =
    params.sweep.cornerRadius ??
    params.bar.cornerRadius ??
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
