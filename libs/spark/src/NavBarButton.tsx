import * as React from 'react';
import { withStyles, Button, ButtonProps } from '@material-ui/core';

export type NavBarButtonProps = Omit<ButtonProps, 'variant' | 'color'>;

export const NavBarButton = withStyles((theme) => ({
  root: {
    borderRadius: 8,
    backgroundColor: 'transparent',
    border: '2px solid transparent',
    padding: 6,
    textTransform: 'none',
    color: theme.palette.text.onLightLowContrast,
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
      '& .MuiSvgIcon-root > *[fill="#F0F1F2"]': {
        fill: theme.palette.blue[3],
        fillOpacity: '0.24',
      },
    },
  },
  label: {
    height: 32,
  },
  startIcon: {
    // have to specify individually to override defaults
    marginTop: '-2px',
    marginBottom: '-2px',
    marginRight: '8px',
    marginLeft: 0,
  },
  endIcon: {
    // have to specify individually to override defaults
    marginTop: '-2px',
    marginBottom: '-2px',
    marginLeft: '8px',
    marginRight: 0,
  },
  iconSizeLarge: {
    // artificially increase specificity to win battle with default
    '&& > :first-child': {
      fontSize: '2rem',
    },
  },
  disabled: {
    '&.MuiButton-contained': {
      opacity: '100%',
      color: theme.palette.grey.dark,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
  },
  focusVisible: {
    backgroundColor: theme.palette.grey.light,
  },
}))((props: NavBarButtonProps) => <Button {...props} />);
