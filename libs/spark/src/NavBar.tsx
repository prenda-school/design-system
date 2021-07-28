import * as React from 'react';
import { AppBar, AppBarProps, withStyles } from '@material-ui/core';
import { palette } from './styles/palette';

export interface NavBarProps extends AppBarProps {
  color?: 'default';
}

const StyledAppBar = withStyles({
  root: {
    backgroundColor: palette.common.white,
    borderBottom: `2px solid ${palette.grey.medium}`,
    fontSize: '1.125rem',
    color: palette.text.onLightLowContrast,
  },
})(AppBar);

export const NavBar = ({ color = 'default', ...other }: NavBarProps) => {
  return (
    <StyledAppBar
      component="nav"
      position="fixed"
      elevation={0}
      color={color}
      {...other}
    />
  );
};
