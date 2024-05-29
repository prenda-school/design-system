import { BarParams, BarScaleParams } from '../utils';

export interface BarProps
  extends Omit<
      React.SVGProps<SVGPathElement>,
      'direction' | 'dx' | 'dy' | 'orientation'
    >,
    Partial<BarScaleParams>,
    BarParams {
  children: React.ReactNode;
}
