import { SvgProperties } from 'csstype';
import { BarParams } from './bar';

export type BarLabelParams = {
  /**
   * The shift along the y-axis of the label.
   */
  dy?: number;
  /**
   * The magnitude of offset of the label from the bar, in the direction of its position.
   */
  offset?: BarLabelOffsetParam;
  /**
   * The position of the label relative to the bar.
   */
  position?: BarLabelPositionParam;
};

export type DrawBarLabelParams = BarLabelParams & Pick<BarParams, 'thickness'>;

export function drawBarLabel(params: DrawBarLabelParams) {
  const offset = Math.abs(params.offset ?? DEFAULT_BAR_LABEL_OFFSET);

  const dy = params.dy ?? 0;
  const position = params.position ?? DEFAULT_BAR_LABEL_POSITION;

  let dominantBaseline: SvgProperties['dominantBaseline'];
  let y: number;
  if (position === 'above') {
    dominantBaseline = 'alphabetic';
    y = dy - offset;
  } else if (position === 'below') {
    dominantBaseline = 'hanging';
    y = dy + params.thickness + offset;
  } else if (position === 'inside') {
    dominantBaseline = 'middle';
    y = dy + params.thickness / 2;
  } else {
    y = dy;
  }

  const textAnchor: SvgProperties['textAnchor'] = 'start';

  return {
    dominantBaseline,
    textAnchor,
    y,
  };
}

export type BarLabelOffset = number;

const DEFAULT_BAR_LABEL_OFFSET: BarLabelOffset = 6;

export type BarLabelOffsetParam = number | undefined;

export function evalBarLabelOffset(param: BarLabelOffsetParam) {
  return param ?? DEFAULT_BAR_LABEL_OFFSET;
}

export type BarLabelPosition = 'above' | 'below' | 'inside';

const DEFAULT_BAR_LABEL_POSITION: BarLabelPosition = 'inside';

export type BarLabelPositionParam = BarLabelPosition | undefined;

export function evalBarLabelPosition(param: BarLabelPositionParam) {
  return param ?? DEFAULT_BAR_LABEL_POSITION;
}
