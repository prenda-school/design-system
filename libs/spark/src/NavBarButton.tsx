import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, ButtonProps } from '@material-ui/core';
import { theme } from './styles';

export type NavBarButtonProps = Omit<ButtonProps, 'variant' | 'color'>;

export const NavBarButton = withStyles({
  root: {
    borderRadius: 8,
    backgroundColor: 'transparent',
    border: '2px solid transparent',
    padding: 6,
    textTransform: 'none',
    color: theme.palette.text.onLightLowContrast,
    '& .MuiSvgIcon-root': {
      color: theme.palette.text.onLightLowContrast,
      '& .MuiSvgIcon-colorPrimary': {
        fill: theme.palette.text.onLightLowContrast,
      },
    },
    '&:hover': {
      backgroundColor: theme.palette.grey.light,
      border: `2px solid ${theme.palette.grey.light}`,
    },
    '&:focus': {
      boxShadow: 'none',
      border: `2px solid ${theme.palette.blue[4]}`,
      outline: 'none',
      backgroundColor: theme.palette.grey.light,
    },
    '&:active, &[aria-current=page]': {
      border: `2px solid ${theme.palette.grey.light}`,
      backgroundColor: theme.palette.grey.light,
      color: theme.palette.text.onLight,
      '& .MuiSvgIcon-colorPrimary': {
        color: theme.palette.text.onLight,
        '& > *:first-child': {
          borderColor: theme.palette.blue[5],
          fill: theme.palette.blue[3],
          fillOpacity: '0.24',
        },
      },
    },
    label: { fontWeight: 700 },
  },
  iconSizeLarge: {
    '& > *:first-child': {
      fontSize: '2rem', // small/medium/large for icons is 16px/24px/32px
      '&.MuiSvgIcon-fontSizeLarge': {
        fontSize: '2rem',
      },
    },
  },
  disabled: {
    '&.MuiButton-contained': {
      opacity: '100%',
      color: theme.palette.grey.dark,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      '& .MuiSvgIcon-colorPrimary': {
        color: theme.palette.grey.dark,
        '& > *:first-child': {
          color: theme.palette.grey.dark,
        },
      },
    },
  },
  focusVisible: {
    backgroundColor: theme.palette.grey.light,
  },
})(Button);
