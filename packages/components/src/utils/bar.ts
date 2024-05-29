import * as D3Scale from 'd3-scale';
import { RectangleCornerRadiusTuple, drawRoundedRectangle } from './rectangle';

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
   * The common corner radius of the bar fill(s).
   */
  cornerRadius?: BarCornerRadiusParam;
  /**
   * The shift along the x-axis for bar's initial point.
   */
  dx?: number;
  /**
   * The shift along the y-axis for bar's initial point.
   */
  dy?: number;
};

export function drawBar(params: {
  valueMin: number;
  valueMax: number;
  to?: number;
  lengthMin: number;
  lengthMax: number;
  thickness: number;
  cornerRadius?: BarCornerRadiusParam;
  orientation?: BarOrientation;
  direction?: BarDirection;
  dx?: number;
  dy?: number;
}) {
  const [x, y] = [params.dx ?? 0, params.dy ?? 0];

  const scale = D3Scale.scaleLinear()
    .domain([params.valueMin, params.valueMax])
    .range([params.lengthMin, params.lengthMax]);

  const value = params.to ?? params.valueMax;

  const length = scale(value);

  const orientation = evalBarOrientation(params.orientation);

  const [width, height] = convertBarToRectangleDimensionTuple(
    length,
    params.thickness,
    orientation
  );

  const cornerRadius = evalBarCornerRadius(params.cornerRadius);

  const direction = evalBarDirection(params.direction);

  const [crtl, crtr, crbr, crbl] = convertBarToRectangleCornerRadiusTuple(
    cornerRadius,
    orientation,
    direction
  );

  return drawRoundedRectangle(x, y, width, height, crtl, crtr, crbr, crbl);
}

export type BarOrientationParam = undefined | 'horizontal' | 'vertical';

export type BarOrientation = 'horizontal' | 'vertical';

export function evalBarOrientation(orientation: BarOrientationParam) {
  return orientation ?? DEFAULT_BAR_ORIENTATION;
}

export const DEFAULT_BAR_ORIENTATION: BarOrientation = 'horizontal' as const;

export type BarDirectionParam = undefined | 'forward' | 'backward';

export function evalBarDirection(direction: BarDirectionParam) {
  return direction ?? DEFAULT_BAR_DIRECTION;
}

export type BarDirection = 'forward' | 'backward';

export const DEFAULT_BAR_DIRECTION: BarDirection = 'forward' as const;

export type BarCornerRadiusParam =
  | undefined
  | number
  | Partial<{
      end: number;
      start: number;
      startStart: number;
      endStart: number;
      endEnd: number;
      startEnd: number;
    }>;

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
  cornerRadius: BarCornerRadiusParam
): BarCornerRadius {
  if (cornerRadius === undefined) {
    return Object.assign({}, DEFAULT_BAR_CORNER_RADIUS);
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
    cornerRadius.end ??
    DEFAULT_BAR_CORNER_RADIUS.startStart;

  const endStart =
    cornerRadius.endStart ??
    cornerRadius.end ??
    DEFAULT_BAR_CORNER_RADIUS.endStart;

  const endEnd =
    cornerRadius.endEnd ??
    cornerRadius.start ??
    DEFAULT_BAR_CORNER_RADIUS.endEnd;

  const startEnd =
    cornerRadius.startEnd ??
    cornerRadius.start ??
    DEFAULT_BAR_CORNER_RADIUS.startEnd;

  return {
    startStart,
    endStart,
    endEnd,
    startEnd,
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
      cornerRadius.startStart,
      cornerRadius.endStart,
      cornerRadius.endEnd,
      cornerRadius.startEnd,
    ];
  } else if (orientation === 'vertical' && direction === 'backward') {
    return [
      cornerRadius.endEnd,
      cornerRadius.startEnd,
      cornerRadius.startStart,
      cornerRadius.endStart,
    ];
  } else if (orientation === 'horizontal' && direction === 'forward') {
    return [
      cornerRadius.startEnd,
      cornerRadius.startStart,
      cornerRadius.endStart,
      cornerRadius.endEnd,
    ];
  } else {
    // (orientation === 'horizontal' && direction === 'backward')
    return [
      cornerRadius.endStart,
      cornerRadius.endEnd,
      cornerRadius.startEnd,
      cornerRadius.startStart,
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
