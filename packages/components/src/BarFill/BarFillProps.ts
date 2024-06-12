import { BarFillParams, BarParams, BarScaleParams } from '../utils';

export interface BarFillProps
  extends BarFillParams,
    Omit<React.SVGProps<SVGPathElement>, 'to'> {
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: {
    /**
     * The bar on which the fill is located.
     */
    bar: BarParams;
    /**
     * The scale of the bar.
     */
    barScale: BarScaleParams;
  };
}
