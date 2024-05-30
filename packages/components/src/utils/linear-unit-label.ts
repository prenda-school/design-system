import { SvgProperties } from 'csstype';
import * as D3Scale from 'd3-scale';
import { LinearScaleParams, evalLinearScaleLengthMin } from './linear-scale';

export type LinearUnitLabelParams = {
  /**
   * The value at which the unit label is located.
   */
  at: number;
  /**
   * The offset of the unit label below (positive value) or above (negative value) the line.
   */
  offset?: LinearUnitLabelOffsetParam;
};

export type DrawLinearUnitLabelParams = LinearUnitLabelParams &
  LinearScaleParams;

export function drawLinearUnitLabel(params: DrawLinearUnitLabelParams) {
  const lengthMin = evalLinearScaleLengthMin(params.lengthMin) ?? 0;

  const scale = D3Scale.scaleLinear()
    .domain([params.valueMin, params.valueMax])
    .range([lengthMin, params.lengthMax]);

  const value = params.at;

  const length = scale(value);

  const offset = evalLinearUnitLabelOffset(params.offset);

  const x = length;
  const y = offset;

  const textAnchor: SvgProperties['textAnchor'] =
    x === lengthMin ? 'start' : x === params.lengthMax ? 'end' : 'middle';

  const dominantBaseline: SvgProperties['dominantBaseline'] =
    y === 0 ? 'middle' : y > 0 ? 'hanging' : 'alphabetic';

  return {
    x,
    y,
    textAnchor,
    dominantBaseline,
  };
}

export type LinearUnitLabelOffset = number;

const DEFAULT_LINEAR_UNIT_LABEL_OFFSET: LinearUnitLabelOffset = 8;

export type LinearUnitLabelOffsetParam = number | undefined;

export function evalLinearUnitLabelOffset(param: LinearUnitLabelOffsetParam) {
  return param ?? DEFAULT_LINEAR_UNIT_LABEL_OFFSET;
}
