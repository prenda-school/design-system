import React from 'react';
import { AppBar, AppBarProps, Toolbar, withStyles } from '@material-ui/core/';
import { PrendaMonogramDark } from './logos';
import { palette } from './styles/palette';

export interface NavbarProps extends AppBarProps {
  color?: 'default';
}

export const Navbar = ({ color = 'default', ...other }: NavbarProps) => {
  const PrendaAppBar = withStyles({
    root: {
      borderBottom: `2px solid ${palette.grey.medium}`,
      fontSize: '18px',
      color: palette.text.onLightLowContrast,
    },
  })(AppBar);

  return (
    <PrendaAppBar position="fixed" color="inherit" elevation={0}>
      <Toolbar>
        <PrendaMonogramDark fontSize="62px" />
        {other.children}
      </Toolbar>
    </PrendaAppBar>
  );
};
