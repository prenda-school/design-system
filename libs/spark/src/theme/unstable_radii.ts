import * as CSS from 'csstype';

export type Radius = keyof Unstable_Radii;

export interface Unstable_Radii {
  zero: CSS.Property.BorderRadius;
  xs: CSS.Property.BorderRadius;
  sm: CSS.Property.BorderRadius;
  md: CSS.Property.BorderRadius;
  lg: CSS.Property.BorderRadius;
  xl: CSS.Property.BorderRadius;
  full: CSS.Property.BorderRadius;
}

const unstable_radii: Unstable_Radii = {
  zero: 0,
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '32px',
  full: '9999px',
};

export default unstable_radii;
