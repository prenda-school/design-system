export interface ResponsiveChartElement extends SVGSVGElement {}

export interface ResponsiveChartProps
  extends Omit<React.SVGProps<ResponsiveChartElement>, 'width' | 'height'> {
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
}
