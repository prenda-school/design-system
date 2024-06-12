import { SvgProperties } from 'csstype';
import * as D3Scale from 'd3-scale';
import { BarScaleParams, evalBarScaleLengthMin } from './bar-scale';
import { BarParams } from './bar';
import { BarUnitsParams } from './bar-units';

export type BarUnitLabelParams = {
  /**
   * The value at which the unit label is located.
   */
  at: number;
  /**
   * The offset of the unit label from the bar from its position.
   */
  offset?: BarUnitLabelOffset;
  /**
   * The position of the unit label relative to the bar.
   */
  position?: BarUnitLabelPosition;
};

export type DrawBarUnitLabelParams = {
  bar: Pick<BarParams, 'thickness'>;
  scale: BarScaleParams;
  units: BarUnitsParams;
  unitLabel: BarUnitLabelParams;
};

export function drawBarUnitLabel(params: DrawBarUnitLabelParams) {
  const lengthMin = evalBarScaleLengthMin(params.scale.lengthMin) ?? 0;

  const scale = D3Scale.scaleLinear()
    .domain([params.scale.valueMin, params.scale.valueMax])
    .range([lengthMin, params.scale.lengthMax]);

  const value = params.unitLabel.at;

  const length = scale(value);

  const offset = evalBarUnitLabelOffset(
    params.unitLabel.offset ?? params.units.offset
  );
  const position = evalBarUnitLabelPosition(
    params.unitLabel.position ?? params.units.position
  );

  const x = length;
  let y: number;
  if (position === 'above') {
    y = -1 * offset;
  } else if (position === 'below') {
    y = params.bar.thickness + offset;
  } else {
    y = 0;
  }

  let textAnchor: SvgProperties['textAnchor'];
  if (x === lengthMin) {
    textAnchor = 'start';
  } else if (x === params.scale.lengthMax) {
    textAnchor = 'end';
  } else {
    textAnchor = 'middle';
  }

  let dominantBaseline: SvgProperties['dominantBaseline'];
  if (position === 'above') {
    dominantBaseline = 'alphabetic';
  } else if (position === 'below') {
    dominantBaseline = 'hanging';
  }

  return {
    x,
    y,
    textAnchor,
    dominantBaseline,
  };
}

export type BarUnitLabelOffset = number;

const DEFAULT_BAR_UNIT_LABEL_OFFSET: BarUnitLabelOffset = 0;

export function evalBarUnitLabelOffset(param?: BarUnitLabelOffset) {
  return param ?? DEFAULT_BAR_UNIT_LABEL_OFFSET;
}

export type BarUnitLabelPosition = 'above' | 'below';

const DEFAULT_BAR_UNIT_LABEL_POSITION: BarUnitLabelPosition = 'below';

export function evalBarUnitLabelPosition(param?: BarUnitLabelPosition) {
  return param ?? DEFAULT_BAR_UNIT_LABEL_POSITION;
}
