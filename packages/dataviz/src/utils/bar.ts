import { RectangleCornerRadiusTuple } from './rectangle';
import { getNumericalValue } from './value';

export type BarParams = {
  /**
   * The distance between the parallel, lengthwise edges of the bar, in pixels.
   */
  thickness: number;
  /**
   * The direction in which the bar is oriented.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The direction in which the bar grows along its orientation.
   */
  direction?: 'forward' | 'backward';
  /**
   * The radius of the corners of the bar.
   */
  cornerRadius?:
    | number
    | string
    | Partial<{
        end: number | string;
        start: number | string;
        startStart: number | string;
        endStart: number | string;
        endEnd: number | string;
        startEnd: number | string;
      }>;
  /**
   * The shift along the x-axis for bar's initial point.
   */
  dx?: number;
  /**
   * The shift along the y-axis for bar's initial point.
   */
  dy?: number;
  /**
   * The width of the border of the bar.
   */
  borderWidth?: number;
};

export type BarOrientation = 'horizontal' | 'vertical';

export function evalBarOrientation(
  orientation?: BarParams['orientation']
): BarOrientation {
  return orientation ?? DEFAULT_BAR_ORIENTATION;
}

export const DEFAULT_BAR_ORIENTATION: BarOrientation = 'horizontal' as const;

export type BarDirection = 'forward' | 'backward';

export function evalBarDirection(
  direction?: BarParams['direction']
): BarDirection {
  return direction ?? DEFAULT_BAR_DIRECTION;
}

export const DEFAULT_BAR_DIRECTION: BarDirection = 'forward' as const;

/*
  W3 calls these "directional-keyword values that are flow-relative" as an alternative to "directional-keyword values that are physical"

  Block Direction: The direction in which the bar grows or extends. 
    - For a vertical bar graph, this is the vertical direction (upwards or downwards).
    - For a horizontal bar graph, this is the horizontal direction (leftwards or rightwards).

  Inline Direction: The direction along the baseline of the bars, which aligns with how the bars are laid out next to one another.
    - For a vertical bar graph, this is the horizontal direction (left to right).
    - For a horizontal bar graph, this is the vertical direction (top to bottom).

  { 
    start = block-start, 
    end   = block-end,
  }

  { 
    startStart  = block-start-inline-start, 
    startEnd    = block-start-inline-end,
    endStart    = block-end-inline-start,
    endEnd      = block-end-inline-end,
  }
*/
export type BarCornerRadius = {
  startStart: number;
  endStart: number;
  endEnd: number;
  startEnd: number;
};

export const DEFAULT_BAR_CORNER_RADIUS: BarCornerRadius = {
  startStart: 0,
  endStart: 0,
  endEnd: 0,
  startEnd: 0,
} as const;

export function evalBarCornerRadius(
  cornerRadius: BarParams['cornerRadius'],
  thickness: BarParams['thickness']
): BarCornerRadius {
  if (cornerRadius === undefined) {
    return Object.assign({}, DEFAULT_BAR_CORNER_RADIUS);
  }

  const toNum = (value: number | string) => getNumericalValue(value, thickness);

  if (typeof cornerRadius === 'string') {
    cornerRadius = toNum(cornerRadius);
  }

  if (typeof cornerRadius === 'number') {
    return {
      startStart: cornerRadius,
      endStart: cornerRadius,
      endEnd: cornerRadius,
      startEnd: cornerRadius,
    };
  }

  const startStart =
    cornerRadius.startStart ??
    cornerRadius.start ??
    DEFAULT_BAR_CORNER_RADIUS.startStart;

  const startEnd =
    cornerRadius.startEnd ??
    cornerRadius.start ??
    DEFAULT_BAR_CORNER_RADIUS.startEnd;

  const endStart =
    cornerRadius.endStart ??
    cornerRadius.end ??
    DEFAULT_BAR_CORNER_RADIUS.endStart;

  const endEnd =
    cornerRadius.endEnd ?? cornerRadius.end ?? DEFAULT_BAR_CORNER_RADIUS.endEnd;

  return {
    startStart: toNum(startStart),
    endStart: toNum(endStart),
    endEnd: toNum(endEnd),
    startEnd: toNum(startEnd),
  };
}

/**
 * Convert the corner-radius of a bar to a rectangle corner-radius tuple.
 */
export function convertBarToRectangleCornerRadiusTuple(
  cornerRadius: BarCornerRadius,
  orientation: BarOrientation,
  direction: BarDirection
): RectangleCornerRadiusTuple {
  if (orientation === 'vertical' && direction === 'forward') {
    return [
      cornerRadius.endStart,
      cornerRadius.endEnd,
      cornerRadius.startEnd,
      cornerRadius.startStart,
    ];
  } else if (orientation === 'vertical' && direction === 'backward') {
    return [
      cornerRadius.startStart,
      cornerRadius.startEnd,
      cornerRadius.endEnd,
      cornerRadius.endStart,
    ];
  } else if (orientation === 'horizontal' && direction === 'forward') {
    return [
      cornerRadius.startStart,
      cornerRadius.endEnd,
      cornerRadius.endStart,
      cornerRadius.startEnd,
    ];
  } else {
    // (orientation === 'horizontal' && direction === 'backward')
    return [
      cornerRadius.endStart,
      cornerRadius.startStart,
      cornerRadius.startEnd,
      cornerRadius.endEnd,
    ];
  }
}

/**
 * Convert the dimensions of a bar to a rectangle dimension tuple.
 */
export function convertBarToRectangleDimensionTuple(
  length: number,
  thickness: number,
  orientation: BarOrientation
) {
  if (orientation === 'vertical') {
    return [thickness, length];
  } else {
    // (orientation === 'horizontal')
    return [length, thickness];
  }
}

export type BarBorderWidth = number;

export const DEFAULT_BAR_BORDER_WIDTH: BarBorderWidth = 0 as const;

export function evalBarBorderWidth(
  param?: BarParams['borderWidth']
): BarBorderWidth {
  return param ?? DEFAULT_BAR_BORDER_WIDTH;
}
