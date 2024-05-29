import { BarFillParams, BarParams, BarScaleParams } from '../utils';

export interface BarFillProps
  extends Omit<
      React.SVGProps<SVGPathElement>,
      'direction' | 'dx' | 'dy' | 'orientation' | 'from' | 'to'
    >,
    Partial<BarScaleParams>,
    Partial<BarParams>,
    BarFillParams {}
