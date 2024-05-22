/**
 * The dimensions of an SVG.
 */
export type Dimensions = {
  /**
   * The width of the container.
   */
  width: number;
  /**
   * The height of the container.
   */
  height: number;
  /**
   * The margin of the container.
   */
  margin: Margin;
  /**
   * The width of the (inner) chart.
   */
  innerWidth: number;
  /**
   * The height of the (inner) chart.
   */
  innerHeight: number;
};

/**
 * The inner margin of a chart in an SVG.
 */
export type Margin = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export const makeDimensions = (
  params: Pick<Dimensions, 'width' | 'height' | 'margin'>
): Dimensions => {
  const { width, height, margin } = params;

  const innerWidth = Math.max(0, width - margin.right - margin.left);
  const innerHeight = Math.max(0, height - margin.top - margin.bottom);

  return {
    width,
    height,
    margin,
    innerWidth,
    innerHeight,
  };
};

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

export const toCenteredViewBox = (params: {
  dimensions: Pick<Dimensions, 'height' | 'width'>;
}): ViewBox => {
  // center on 0,0
  return {
    x: 0 - params.dimensions.width / 2,
    y: 0 - params.dimensions.height / 2,
    width: params.dimensions.width,
    height: params.dimensions.height,
  };
};

export const toViewBoxAttr = (params: { viewBox: ViewBox }) => {
  return `${params.viewBox.x} ${params.viewBox.y} ${params.viewBox.width} ${params.viewBox.height}`;
};

/**
 * The coordinates of a point (x, y) in an SVG.
 */
export type Coordinates = {
  x: number;
  y: number;
};
