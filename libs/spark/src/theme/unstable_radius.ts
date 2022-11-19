import * as CSS from 'csstype';

export type Radius = 'zero' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_Radius
  extends Record<Radius, CSS.Property.BorderRadius> {}

const unstable_radius: Unstable_Radius = {
  zero: 0,
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '32px',
  full: '9999px',
};

export default unstable_radius;
