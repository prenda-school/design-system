import { SVGProps } from 'react';
import { ChartProps } from './ChartProps';
import {
  evalMargin,
  makeDimensions,
  toStandardViewBox,
  toViewBoxAttr,
} from '../utils';

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
    },
  };
}
