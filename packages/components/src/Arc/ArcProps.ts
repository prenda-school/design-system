import { ReactNode } from 'react';
import { ArcCtx, ArcParams } from '../utils';

export interface ArcProps extends ArcParams {
  children?: ReactNode;
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: Pick<ArcCtx, 'arcScale'>;
}

export type ArcChildProps = {
  ctx: Pick<ArcCtx, 'arc' | 'arcScale'>;
};
