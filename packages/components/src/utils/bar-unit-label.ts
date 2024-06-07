import { SvgProperties } from 'csstype';
import * as D3Scale from 'd3-scale';
import { BarScaleParams, evalBarScaleLengthMin } from './bar-scale';
import { BarParams } from './bar';

export type BarUnitLabelParams = {
  /**
   * The value at which the unit label is located.
   */
  at: number;
  /**
   * The offset magnitude of the unit label from the bar, in the direction of its position.
   */
  offset?: BarUnitLabelOffsetParam;
  /**
   * The position of the unit label relative to the bar.
   */
  position?: BarUnitLabelPositionParam;
};

export type DrawBarUnitLabelParams = BarUnitLabelParams &
  BarScaleParams &
  Pick<BarParams, 'thickness'>;

export function drawBarUnitLabel(params: DrawBarUnitLabelParams) {
  const lengthMin = evalBarScaleLengthMin(params.lengthMin) ?? 0;

  const scale = D3Scale.scaleLinear()
    .domain([params.valueMin, params.valueMax])
    .range([lengthMin, params.lengthMax]);

  const value = params.at;

  const length = scale(value);

  const offset = evalBarUnitLabelOffset(params.offset);
  const position = evalBarUnitLabelPosition(params.position);

  const x = length;
  let y = 0;
  if (position === 'above') {
    y = -offset;
  } else if (position === 'below') {
    y = params.thickness + offset;
  }

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

export type BarUnitLabelPosition = 'above' | 'below';

const DEFAULT_BAR_UNIT_LABEL_POSITION: BarUnitLabelPosition = 'below';

export type BarUnitLabelPositionParam = BarUnitLabelPosition | undefined;

export function evalBarUnitLabelPosition(param: BarUnitLabelPositionParam) {
  return param ?? DEFAULT_BAR_UNIT_LABEL_POSITION;
}
