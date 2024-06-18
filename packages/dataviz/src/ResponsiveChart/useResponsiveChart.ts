import { useParentSize } from '@visx/responsive';
import React, { SVGProps } from 'react';
import {
  Margin,
  evalMargin,
  makeDimensions,
  toStandardViewBox,
  toViewBoxAttr,
} from '../utils';

export type ResponsiveChartParams = {
  /**
   * The width of the container.
   */
  width?: number;
  /**
   * The height of the container.
   */
  height?: number;
  /**
   * The width of the inner svg area.
   */
  innerWidth?: number;
  /**
   * The height of the inner svg area.
   */
  innerHeight?: number;
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

export interface ResponsiveChartAPI {
  container: {
    props: React.HTMLProps<HTMLDivElement>;
    ref: React.RefObject<HTMLDivElement>;
  };
  svg: {
    dim: {
      width: number;
      height: number;
    };
    props: SVGProps<SVGSVGElement>;
  };
  inner: {
    dim: {
      width: number;
      height: number;
      margin: Margin;
    };
    props: SVGProps<SVGGElement>;
  };
}

export const useResponsiveChart = (
  params: ResponsiveChartParams
): ResponsiveChartAPI => {
  const {
    parentRef,
    width: parentWidth,
    height: parentHeight,
  } = useParentSize({ debounceTime: 10 });

  const margin = evalMargin({
    top: params.marginTop,
    right: params.marginRight,
    bottom: params.marginBottom,
    left: params.marginLeft,
  });

  const dimensions = makeDimensions({
    width: params.width ?? parentWidth,
    height: params.height ?? parentHeight,
    margin,
  });

  const container = {
    props: {
      style: divStyle({
        width: params.width,
        height: params.height,
      }),
    },
    ref: parentRef,
  };

  const inner = {
    dim: {
      width: params.innerWidth ?? dimensions.innerWidth,
      height: params.innerHeight ?? dimensions.innerHeight,
      margin: dimensions.margin,
    },
    props: {
      transform: `translate(${dimensions.margin.left}, ${dimensions.margin.top})`,
    },
  };

  const viewBox = toStandardViewBox({
    dimensions: {
      width: params.width ?? parentWidth,
      height: params.height ?? parentHeight,
    },
  });

  const svg = {
    dim: {
      width: params.width ?? parentWidth,
      height: params.height ?? parentHeight,
    },
    props: {
      viewBox: toViewBoxAttr({ viewBox }),
      width: params.width ?? parentWidth,
      height: params.height ?? parentHeight,
      style: { ...svgStyle },
    },
  };

  console.log('useResponsiveChart', { container, svg, inner });
  return {
    container,
    svg,
    inner,
  };
};

const divStyle = (params: { width?: number; height?: number }) =>
  ({
    width: params.width ?? '100%',
    height: params.height ?? '100%',
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  } as const);

const svgStyle = {
  width: '100%',
  height: '100%',
};
