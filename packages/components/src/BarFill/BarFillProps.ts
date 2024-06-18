import { BarCtx, BarFillParams, WithOverridableCtx } from '../utils';

export interface BarFillElement extends SVGPathElement {}

export interface BarFillProps
  extends BarFillParams,
    WithOverridableCtx<Pick<BarCtx, 'bar' | 'barScale'>>,
    Omit<React.SVGProps<BarFillElement>, 'to'> {}
