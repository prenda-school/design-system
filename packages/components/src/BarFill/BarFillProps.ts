import { BarCtx, BarFillParams, WithOverridableCtx } from '../utils';

export interface BarFillProps
  extends BarFillParams,
    WithOverridableCtx<Pick<BarCtx, 'bar' | 'barScale'>>,
    Omit<React.SVGProps<SVGPathElement>, 'to'> {}
