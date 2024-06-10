/**
 * The position and dimension, in user space, of an SVG viewport.
 */
export type ViewBox = {
  /** The minimum x coordinate */
  x: number;
  /** The minimum y coordinate */
  y: number;
  /** The width in user coordinates/px units */
  width: number;
  /** The height in user coordinates/px units */
  height: number;
};

/**
 * Convert a `ViewBox` value to a `viewBox` attribute value.
 */
export const toViewBoxAttr = (params: { viewBox: ViewBox }): string => {
  return `${params.viewBox.x} ${params.viewBox.y} ${params.viewBox.width} ${params.viewBox.height}`;
};
