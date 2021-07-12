import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, ButtonProps } from '@material-ui/core';
import { theme } from './styles';

export type NavBarButtonProps = Omit<ButtonProps, 'variant' | 'color' | 'size'>;

export const NavBarButton = withStyles({
  root: {
    height: 48,
    borderRadius: 8,
    padding: 8,
    textTransform: 'none',
    color: theme.palette.text.onLightLowContrast,
    fontSize: '1.125rem',
    '& .MuiSvgIcon-root': {
      color: theme.palette.text.onLightLowContrast,
      '& .MuiSvgIcon-colorPrimary': {
        fill: theme.palette.text.onLightLowContrast,
      },
    },
    '&:hover': {
      backgroundColor: theme.palette.grey.light,
    },
    '&:focus': {
      border: `2px solid ${theme.palette.blue[4]}`,
      outline: 'none',
      backgroundColor: theme.palette.grey.light,
    },
    '&:active, &[aria-current=page]': {
      backgroundColor: theme.palette.grey.light,
      color: theme.palette.text.onLight,
      '& .MuiSvgIcon-colorPrimary': {
        color: theme.palette.text.onLight,
        '& > path:first-child': {
          fill: theme.palette.blue[3],
          fillOpacity: '0.24',
        },
      },
    },
    label: { fontWeight: 700 },
  },
  disabled: { color: theme.palette.grey.dark },
  focusVisible: {
    backgroundColor: theme.palette.grey.light,
  },
})(Button);
