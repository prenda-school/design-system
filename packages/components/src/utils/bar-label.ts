import { SvgProperties } from 'csstype';
import { BarParams } from './bar';

export type BarLabelParams = {
  /**
   * The shift along the y-axis of the label.
   */
  dy?: number;
  /**
   * The offset of the label from the bar from its position.
   */
  offset?: BarLabelOffset;
  /**
   * The position of the label relative to the bar.
   */
  position?: BarLabelPosition;
};

export type DrawBarLabelParams = {
  /**
   * The label properties.
   */
  label: BarLabelParams;
  /**
   * The bar on which the label is located.
   */
  bar: Pick<BarParams, 'thickness'>;
};

export function drawBarLabel(params: DrawBarLabelParams) {
  const dy = params.label.dy ?? 0;
  const offset = evalBarLabelOffset(params.label.offset);
  const position = evalBarLabelPosition(params.label.position);

  let y: number;
  if (position === 'above') {
    y = dy + -1 * offset;
  } else if (position === 'below') {
    y = dy + params.bar.thickness + offset;
  } else if (position === 'inside') {
    y = dy + params.bar.thickness / 2 + offset;
  } else {
    y = dy;
  }

  let dominantBaseline: SvgProperties['dominantBaseline'];
  if (position === 'above') {
    dominantBaseline = 'alphabetic';
  } else if (position === 'below') {
    dominantBaseline = 'hanging';
  } else {
    dominantBaseline = 'middle';
  }

  const textAnchor: SvgProperties['textAnchor'] = 'start';

  return {
    dominantBaseline,
    textAnchor,
    y,
  };
}

export type BarLabelOffset = number;

const DEFAULT_BAR_LABEL_OFFSET: BarLabelOffset = 0;

export function evalBarLabelOffset(param?: BarLabelOffset) {
  return param ?? DEFAULT_BAR_LABEL_OFFSET;
}

export type BarLabelPosition = 'above' | 'below' | 'inside';

const DEFAULT_BAR_LABEL_POSITION: BarLabelPosition = 'inside';

export function evalBarLabelPosition(param?: BarLabelPosition) {
  return param ?? DEFAULT_BAR_LABEL_POSITION;
}
