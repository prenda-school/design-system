import React from 'react';
import { ResponsiveChartProps } from './ResponsiveChartProps';
import { useResponsiveChart } from './useResponsiveChart';

export interface ResponsiveChartElement extends SVGSVGElement {}

export const ResponsiveChart = React.forwardRef<
  ResponsiveChartElement,
  ResponsiveChartProps
>(function ResponsiveChart(props, ref) {
  const {
    container: { props: containerProps, ref: containerRef },
    svg: { props: svgProps },
    inner: { props: innerProps },
  } = useResponsiveChart(props);

  return (
    <div ref={containerRef} {...containerProps}>
      <svg ref={ref} {...svgProps}>
        <g {...innerProps} />
      </svg>
    </div>
  );
});
