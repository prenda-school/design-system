import React from 'react';
import { ChartProps } from './ChartProps';
import { useChart } from './useChart';

export type ChartElement = SVGSVGElement;

export const Chart = React.forwardRef<ChartElement, ChartProps>(function Chart(
  props,
  ref
) {
  const { svgProps, gProps } = useChart(props);

  return (
    <svg ref={ref} {...svgProps}>
      <g {...gProps}>{svgProps.children}</g>
    </svg>
  );
});
