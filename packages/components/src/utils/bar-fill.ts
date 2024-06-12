import * as D3Scale from 'd3-scale';
import {
  BarCornerRadiusParam,
  BarParams,
  convertBarToRectangleCornerRadiusTuple,
  convertBarToRectangleDimensionTuple,
  evalBarBorderWidth,
  evalBarCornerRadius,
  evalBarDirection,
  evalBarOrientation,
} from './bar';
import { BarScaleParams, evalBarScaleLengthMin } from './bar-scale';
import { drawRoundedRectangle } from './rectangle';

export type BarFillParams = {
  /**
   * The value from which the bar fill ends. Defaults to the maximum value.
   */
  to?: number;
  /**
   * The corner radius of the bar fill.
   */
  cornerRadius?: BarCornerRadiusParam;
};

export type DrawBarFillParams = {
  bar: BarParams;
  fill: BarFillParams;
  scale: BarScaleParams;
};

export function drawBarFill(params: DrawBarFillParams) {
  const dx = params.bar.dx ?? 0;
  const dy = params.bar.dy ?? 0;

  const borderWidth = evalBarBorderWidth(params.bar.borderWidth);

  const [x, y] = [dx + borderWidth, dy + borderWidth];

  const lengthMin = evalBarScaleLengthMin(params.scale.lengthMin);

  const lengthMax = params.scale.lengthMax - 2 * borderWidth;

  const scale = D3Scale.scaleLinear()
    .domain([params.scale.valueMin, params.scale.valueMax])
    .range([lengthMin, lengthMax]);

  const value = params.fill.to ?? params.scale.valueMax;

  const length = scale(value);

  const orientation = evalBarOrientation(params.bar.orientation);

  const thickness = params.bar.thickness - 2 * borderWidth;

  const [width, height] = convertBarToRectangleDimensionTuple(
    length,
    thickness,
    orientation
  );

  const cornerRadius = evalBarCornerRadius(
    params.fill.cornerRadius ?? params.bar.cornerRadius,
    thickness
  );

  const direction = evalBarDirection(params.bar.direction);

  const [crtl, crtr, crbr, crbl] = convertBarToRectangleCornerRadiusTuple(
    cornerRadius,
    orientation,
    direction
  );

  const { d } = drawRoundedRectangle(
    x,
    y,
    width,
    height,
    crtl,
    crtr,
    crbr,
    crbl
  );

  return { d };
}
