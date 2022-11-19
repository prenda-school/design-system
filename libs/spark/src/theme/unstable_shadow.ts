import * as CSS from 'csstype';
import unstable_palette from './unstable_palette';

export type Elevation = 100 | 200 | 300 | 400 | 500;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_Shadow {
  none: CSS.Property.BoxShadow;
  E100: CSS.Property.BoxShadow;
  E200: CSS.Property.BoxShadow;
  E300: CSS.Property.BoxShadow;
  E400: CSS.Property.BoxShadow;
  E500: CSS.Property.BoxShadow;
  error: CSS.Property.BoxShadow;
  focus: CSS.Property.BoxShadow;
  info: CSS.Property.BoxShadow;
  success: CSS.Property.BoxShadow;
  warning: CSS.Property.BoxShadow;
}

const unstable_shadow: Unstable_Shadow = {
  none: 'none',
  E100: `0px 1px 1px 0px ${unstable_palette.neutral[600]}29`,
  E200: `0px 3px 5px 0px ${unstable_palette.neutral[600]}29`,
  E300: `0px 8px 12px 0px ${unstable_palette.neutral[600]}29`,
  E400: `0px 10px 18px 0px ${unstable_palette.neutral[600]}29`,
  E500: `0px 18px 28px 0px ${unstable_palette.neutral[600]}29`,
  focus: `0 0 2px 4px ${unstable_palette.teal[300]}`,
  error: `0 0 0 4px ${unstable_palette.red[100]}`,
  info: `0 0 0 4px ${unstable_palette.blue[100]}`,
  success: `0 0 0 4px ${unstable_palette.green[100]}`,
  warning: `0 0 0 4px ${unstable_palette.yellow[100]}`,
};

export default unstable_shadow;
