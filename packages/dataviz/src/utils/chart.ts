import { Margin } from './margin';
import { ViewBox } from './view-box';

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

export const toStandardViewBox = (params: {
  dimensions: Pick<Dimensions, 'height' | 'width'>;
}): ViewBox => {
  // anchor top-left at 0,0
  return {
    x: 0,
    y: 0,
    width: params.dimensions.width,
    height: params.dimensions.height,
  };
};
