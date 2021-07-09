import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, ButtonProps } from '@material-ui/core';
import { theme } from './styles';

export type NavBarItemProps = Omit<ButtonProps, 'variant' | 'color' | 'size'>;

export const NavBarItem = withStyles({
  root: {
    height: 48,
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
    cursor: 'pointer',
    textTransform: 'none',
    color: theme.palette.text.onLightLowContrast,
    fontSize: '1.125rem',
    '&[aria-current=page]': {
      backgroundColor: theme.palette.grey.light,
      color: theme.palette.blue[5],
      '& .MuiSvgIcon-colorPrimary': {
        color: theme.palette.blue[5],
      },
    },
    '&$disabled': {
      opacity: '0.56',
      pointerEvents: 'none',
      cursor: 'default',
    },
    '&$hover': {
      '&$focused': {
        '&$active': {
          backgroundColor: theme.palette.grey.light,
        },
      },
    },
    '&$focused, &:focus': {
      border: `2px solid ${theme.palette.blue[4]}`,
      outline: 'none',
    },

    '& .MuiSvgIcon-root': {
      marginRight: 7,
      color: theme.palette.text.onLightLowContrast,
      '& .MuiSvgIcon-colorPrimary': {
        fill: theme.palette.text.onLightLowContrast,
      },
    },
    '& .MuiButton-label': { fontWeight: 700 },
  },
  disabled: {},
  focused: {},
})(Button);
