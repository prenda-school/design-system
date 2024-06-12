import { BarParams, BarScaleParams } from '../utils';

export interface BarProps extends BarParams {
  children?: React.ReactNode;
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: {
    /**
     * The scale of the bar.
     */
    barScale: BarScaleParams;
  };
}

export type BarChildProps = {
  ctx: {
    bar: BarParams;
    barScale: BarScaleParams;
  };
};
