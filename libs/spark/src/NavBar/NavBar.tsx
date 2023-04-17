import React from 'react';
import type { AppBarProps } from '@material-ui/core/AppBar';
import { default as AppBar } from '@material-ui/core/AppBar';
import withStyles from '../withStyles';

/** @deprecated */
export interface NavBarProps extends Omit<AppBarProps, 'color'> {
  /**
   * @default 'default'
   */
  color?: 'default';
}

/** @deprecated use `alpha/TopBar` */
export default withStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.common.white,
    borderBottom: `2px solid ${palette.grey.medium}`,
    fontSize: '1.125rem',
    color: palette.text.darkLowContrast,
  },
}))(({ color = 'default', ...other }: NavBarProps) => (
  <AppBar
    component="nav"
    position="fixed"
    elevation={0}
    color={color}
    {...other}
  />
));
