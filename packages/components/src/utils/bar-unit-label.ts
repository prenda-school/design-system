import { SvgProperties } from 'csstype';
import * as D3Scale from 'd3-scale';
import { BarScaleParams, evalBarScaleLengthMin } from './bar-scale';

export type BarUnitLabelParams = {
  /**
   * The value at which the unit label is located.
   */
  at: number;
  /**
   * The offset of the unit label below (positive value) or above (negative value) the bar.
   */
  offset?: number;
};

export type DrawBarUnitLabelParams = BarUnitLabelParams & BarScaleParams;

export function drawBarUnitLabel(params: DrawBarUnitLabelParams) {
  const lengthMin = evalBarScaleLengthMin(params.lengthMin) ?? 0;

  const scale = D3Scale.scaleLinear()
    .domain([params.valueMin, params.valueMax])
    .range([lengthMin, params.lengthMax]);

  const value = params.at;

  const length = scale(value);

  const offset = evalBarUnitLabelOffset(params.offset);

  const x = length;
  const y = offset;

  const textAnchor: SvgProperties['textAnchor'] =
    x === lengthMin ? 'start' : x === params.lengthMax ? 'end' : 'middle';

  const dominantBaseline: SvgProperties['dominantBaseline'] =
    y > 0 ? 'hanging' : 'alphabetic';

  return {
    x,
    y,
    textAnchor,
    dominantBaseline,
  };
}

export type BarUnitLabelOffset = number;

const DEFAULT_BAR_UNIT_LABEL_OFFSET: BarUnitLabelOffset = 8;

export type BarUnitLabelOffsetParam = number | undefined;

export function evalBarUnitLabelOffset(param: BarUnitLabelOffsetParam) {
  return param ?? DEFAULT_BAR_UNIT_LABEL_OFFSET;
}
