import React, { FC } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  ButtonBase,
  ButtonBaseProps as MuiButtonBaseProps,
  ButtonProps,
} from '@material-ui/core';
import { theme } from './styles';

export interface NavBarItemProps
  extends Omit<ButtonProps, 'variant' | 'color' | 'size'> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  fullWidth?: boolean;
  href?: string;
}

export const NavBarItem = withStyles({
  root: {
    height: 48,
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
    cursor: 'pointer',
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
    '&$checked': {
      color: theme.palette.blue[5],
    },
  },
  label: {
    color: theme.palette.text.onLightLowContrast,
    fontSize: '1.125rem',
  },
  disabled: {},
  focused: {},
})(Button);
