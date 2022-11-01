import * as CSS from 'csstype';
import unstable_palette from './unstable_palette';

export type Elevation = 0 | 100 | 200 | 300 | 400 | 500;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_Elevations
  extends Record<Elevation, CSS.Property.BoxShadow> {}

const unstable_elevations: Unstable_Elevations = {
  0: 'none',
  100: `0px 1px 1px 0px ${unstable_palette.neutral[600]}29`,
  200: `0px 3px 5px 0px ${unstable_palette.neutral[600]}29`,
  300: `0px 8px 12px 0px ${unstable_palette.neutral[600]}29`,
  400: `0px 10px 18px 0px ${unstable_palette.neutral[600]}29`,
  500: `0px 18px 28px 0px ${unstable_palette.neutral[600]}29`,
};

export default unstable_elevations;
