import * as React from 'react';
import type { ButtonProps } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import withStyles from './withStyles';

export type NavBarButtonProps = Omit<ButtonProps, 'variant' | 'color'>;

const NavBarButton = withStyles((theme) => ({
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
      '& *[fill="#F0F1F2"]': {
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
    // artificially increase specificity to win battle with mui default
    '&& > :first-child': {
      fontSize: '2rem',
    },
  },
  disabled: {
    // artificially increase specificity to win battle with spark default
    '&&': {
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

export default NavBarButton;
