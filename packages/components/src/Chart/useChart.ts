import { SVGProps } from 'react';
import { ChartProps } from './ChartProps';
import {
  Margin,
  makeDimensions,
  toCenteredViewBox,
  toViewBoxAttr,
} from '../utils';

export interface ChartAPI {
  svgProps: SVGProps<SVGSVGElement>;
}

export function useChart(props: ChartProps): ChartAPI {
  const {
    width,
    height,
    marginBottom = DEFAULT_MARGIN.bottom,
    marginLeft = DEFAULT_MARGIN.left,
    marginRight = DEFAULT_MARGIN.right,
    marginTop = DEFAULT_MARGIN.top,
    ...other
  } = props;

  const dimensions = makeDimensions({
    width,
    height,
    margin: {
      top: marginTop,
      right: marginRight,
      bottom: marginBottom,
      left: marginLeft,
    },
  });

  const viewBox = toCenteredViewBox({ dimensions });

  return {
    svgProps: {
      viewBox: toViewBoxAttr({ viewBox }),
      width: dimensions.width,
      height: dimensions.height,
      style: { maxWidth: '100%', height: 'auto' },
      ...other,
    },
  };
}

const DEFAULT_MARGIN: Margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
} as const;
