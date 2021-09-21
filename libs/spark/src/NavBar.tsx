import * as React from 'react';
import type { AppBarProps } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import withStyles from './withStyles';

export interface NavBarProps extends AppBarProps {
  color?: 'default';
}

const NavBar = withStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.common.white,
    borderBottom: `2px solid ${palette.grey.medium}`,
    fontSize: '1.125rem',
    color: palette.text.onLightLowContrast,
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

export default NavBar;
