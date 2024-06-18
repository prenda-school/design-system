import { SetOptional } from 'type-fest';
import { ChartProps } from '../Chart/ChartProps';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ResponsiveChartProps
  extends SetOptional<ChartProps, 'width' | 'height'> {}
