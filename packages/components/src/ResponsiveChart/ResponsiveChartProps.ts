import { SetOptional } from 'type-fest';
import { ChartProps } from '../Chart/ChartProps';

export interface ResponsiveChartElement extends SVGSVGElement {}

export interface ResponsiveChartProps
  extends SetOptional<ChartProps, 'width' | 'height'> {}
