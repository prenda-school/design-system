import { BarCtx, BarParams } from '../utils';

export interface BarProps extends BarParams {
  children?: React.ReactNode;
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: Pick<BarCtx, 'barScale'>;
}

export type BarChildProps = {
  ctx: Pick<BarCtx, 'bar' | 'barScale'>;
};
