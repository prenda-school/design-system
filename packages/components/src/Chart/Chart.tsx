import React from 'react';
import { ChartElement, ChartProps } from './ChartProps';
import { useChart } from './useChart';

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
