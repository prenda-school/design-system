import React from 'react';
import { AppBar, AppBarProps, withStyles } from '@material-ui/core/';
import { palette } from './styles/palette';

export interface NavBarProps extends AppBarProps {
  color?: 'default';
}

const StyledAppBar = withStyles({
  root: {
    borderBottom: `2px solid ${palette.grey.medium}`,
    fontSize: '18px',
    color: palette.text.onLightLowContrast,
  },
})(AppBar);

export const NavBar = ({ color = 'default', ...other }: NavBarProps) => {
  return (
    <StyledAppBar position="fixed" elevation={0} color={color} {...other} />
  );
};
