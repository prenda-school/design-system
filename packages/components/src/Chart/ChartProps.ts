import React from 'react';

export interface ChartProps
  extends Omit<
    React.SVGTextElementAttributes<SVGSVGElement>,
    'width' | 'height'
  > {
  /**
   * The width of the container.
   */
  width: number;
  /**
   * The height of the container.
   */
  height: number;
  /**
   * The space between the bottom edge of the container and its surroundings.
   */
  marginBottom?: number;
  /**
   * The space between the left edge of the container and its surroundings.
   */
  marginLeft?: number;
  /**
   * The space between the right edge of the container and its surroundings.
   */
  marginRight?: number;
  /**
   * The space between the top edge of the container and its surroundings.
   */
  marginTop?: number;
}
