/**
 * The margin of an SVG element.
 */
export type Margin = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export const DEFAULT_MARGIN: Margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
} as const;

export const evalMargin = (param?: number | Partial<Margin>): Margin => {
  if (param === undefined) {
    return { ...DEFAULT_MARGIN };
  }

  if (typeof param === 'number') {
    return {
      top: param,
      right: param,
      bottom: param,
      left: param,
    };
  }

  return {
    top: param.top ?? DEFAULT_MARGIN.top,
    right: param.right ?? DEFAULT_MARGIN.right,
    bottom: param.bottom ?? DEFAULT_MARGIN.bottom,
    left: param.left ?? DEFAULT_MARGIN.left,
  };
};
