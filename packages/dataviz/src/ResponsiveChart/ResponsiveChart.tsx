import React from 'react';
import {
  ResponsiveChartElement,
  ResponsiveChartProps,
} from './ResponsiveChartProps';
import { useResponsiveChart } from './useResponsiveChart';

export const ResponsiveChart = React.forwardRef<
  ResponsiveChartElement,
  ResponsiveChartProps
>(function ResponsiveChart(props, ref) {
  const {
    width,
    height,
    innerWidth,
    innerHeight,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    children,
    ...other
  } = props;

  const {
    container: { props: containerProps, ref: containerRef },
    svg: { props: svgProps },
    inner: { props: innerProps },
  } = useResponsiveChart({
    width,
    height,
    innerWidth,
    innerHeight,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  });

  return (
    <div ref={containerRef} {...containerProps}>
      <svg ref={ref} {...svgProps} {...other}>
        <g {...innerProps}>{children}</g>
      </svg>
    </div>
  );
});
