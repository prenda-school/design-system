import * as CSS from 'csstype';
import palette from './palette';

export interface Shadows {
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

const shadows: Shadows = {
  none: 'none',
  // stylistic (elevations)
  E100: `0px 1px 1px 0px ${palette.neutral[600]}29`,
  E200: `0px 3px 5px 0px ${palette.neutral[600]}29`,
  E300: `0px 8px 12px 0px ${palette.neutral[600]}29`,
  E400: `0px 10px 18px 0px ${palette.neutral[600]}29`,
  E500: `0px 18px 28px 0px ${palette.neutral[600]}29`,
  // action
  focus: `0 0 2px 4px ${palette.teal[300]}`,
  // severity
  error: `0 0 0 4px ${palette.red[100]}`,
  info: `0 0 0 4px ${palette.blue[100]}`,
  success: `0 0 0 4px ${palette.green[100]}`,
  warning: `0 0 0 4px ${palette.yellow[100]}`,
};

export default shadows;
