import { ResponsiveChartParams } from './useResponsiveChart';

export interface ResponsiveChartElement extends SVGSVGElement {}

export interface ResponsiveChartProps
  extends ResponsiveChartParams,
    Omit<React.SVGProps<ResponsiveChartElement>, 'width' | 'height'> {}
