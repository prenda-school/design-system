import { SVGProps } from 'react';
import { ChartProps } from './ChartProps';
import {
  evalMargin,
  makeDimensions,
  toStandardViewBox,
  toViewBoxAttr,
} from '../utils';

export type ChartParams = {
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
};

export interface ChartAPI {
  svgProps: SVGProps<SVGSVGElement>;
  gProps: SVGProps<SVGGElement>;
}

export function useChart(props: ChartProps): ChartAPI {
  const {
    width,
    height,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    children,
    ...other
  } = props;

  const margin = evalMargin({
    bottom: marginBottom,
    left: marginLeft,
    right: marginRight,
    top: marginTop,
  });

  const dimensions = makeDimensions({
    width,
    height,
    margin,
  });

  const viewBox = toStandardViewBox({ dimensions });

  const transform = `translate(${dimensions.margin.left}, ${dimensions.margin.top})`;

  return {
    svgProps: {
      viewBox: toViewBoxAttr({ viewBox }),
      width: dimensions.width,
      height: dimensions.height,
      ...other,
      style: { maxWidth: '100%', height: 'auto', ...other?.style },
    },
    gProps: {
      transform,
      children,
    },
  };
}
