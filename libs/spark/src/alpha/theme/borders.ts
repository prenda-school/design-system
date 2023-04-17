import type * as CSS from 'csstype';
import palette from './palette';

export interface Borders {
  none: CSS.Property.Border;
  // stylistic
  transparent: CSS.Property.Border;
  subtle: CSS.Property.Border;
  standard: CSS.Property.Border;
  bold: CSS.Property.Border;
  selected: CSS.Property.Border;
  // action
  active: CSS.Property.Border;
  expanded: CSS.Property.Border;
  hover: CSS.Property.Border;
  focus: CSS.Property.Border;
  // severity
  error: CSS.Property.Border;
  info: CSS.Property.Border;
  success: CSS.Property.Border;
  warning: CSS.Property.Border;
}

const borders: Borders = {
  none: 'none',
  transparent: '1px solid transparent',
  subtle: `1px solid ${palette.neutral[70]}`,
  standard: `1px solid ${palette.neutral[90]}`,
  bold: `1px solid ${palette.neutral[100]}`,
  selected: `1px solid ${palette.blue[600]}`,
  active: `1px solid ${palette.blue[100]}`,
  expanded: `1px solid ${palette.blue[600]}`,
  hover: `1px solid ${palette.neutral[100]}`,
  focus: `1px solid ${palette.blue[600]}`,
  error: `1px solid ${palette.red[700]}`,
  info: `1px solid ${palette.blue[600]}`,
  success: `1px solid ${palette.green[600]}`,
  warning: `1px solid ${palette.yellow[600]}`,
};

export default borders;
