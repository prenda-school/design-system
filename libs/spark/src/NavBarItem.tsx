import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, ButtonProps } from '@material-ui/core';
import { theme } from './styles';

export interface NavBarItemProps
  extends Omit<ButtonProps, 'variant' | 'color' | 'size'> {
  children?: React.ReactNode;
}

export const NavBarItem = withStyles({
  root: {
    fontWeight: 500,
    height: 48,
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
    cursor: 'pointer',
    textTransform: 'none',
    color: theme.palette.text.onLightLowContrast,
    fontSize: '1.125rem',
    '&$disabled': {
      opacity: '0.56',
      pointerEvents: 'none',
      cursor: 'default',
    },
    '&$hover': {
      backgroundColor: theme.palette.grey.light,
    },
    '&$focused': {
      border: theme.palette.blue[5],
      outline: 'none',
    },
    '&$active': {
      backgroundColor: theme.palette.blue[1],
    },
  },
  label: {},
  disabled: {},
  focused: {},
})(Button);
