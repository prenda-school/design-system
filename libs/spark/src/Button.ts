import { ButtonClassKey, StyleRules, Theme } from '@material-ui/core';

export { Button } from '@material-ui/core';
export type { ButtonProps } from '@material-ui/core';

export const MuiButtonDefaultProps = {
  // No disableElevation: true because it makes styling box-shadow's
  //  VERY difficult. Instead, just override wherever it pops up.
  disableFocusRipple: true,
  disableRipple: true,
  variant: 'contained' as const,
  size: 'large' as const,
};

export const MuiButtonStyleOverrides = ({
  palette,
  typography,
}: Theme): Partial<StyleRules<ButtonClassKey>> => ({
  root: {
    ...typography['label-lg-strong'],
    // account for 2px border width
    padding: `${typography.pxToRem(6 - 2)} ${typography.pxToRem(16 - 2)}`,
    borderRadius: 24,
    borderWidth: '2px',
    borderStyle: 'solid' as const,
    '&$disabled': {
      opacity: '50%',
    },
  },
  contained: {
    boxShadow: 'none',
    border: `2px solid ${palette.blue[3]}`,
    backgroundColor: palette.blue[3],
    color: palette.common.white,
    '&$disabled': {
      border: `2px solid ${palette.blue[3]}`,
      backgroundColor: palette.blue[3],
      color: palette.common.white,
    },
    '&:hover': {
      boxShadow: 'none',
      borderColor: palette.blue[4],
      backgroundColor: palette.blue[4],
    },
    '&.Mui-focusVisible, &:focus': {
      boxShadow: `0 0 0 4px ${palette.blue[1]}`,
    },
    '&:active': {
      boxShadow: 'none',
      borderColor: palette.blue[5],
    },
  },
  outlined: {
    boxShadow: 'none',
    // re-declare to override default outlined style
    border: `2px solid ${palette.grey.medium}`,
    backgroundColor: palette.common.white,
    color: palette.blue[3],
    '&$disabled': {
      border: `2px solid ${palette.grey.medium}`,
      backgroundColor: palette.common.white,
      color: palette.blue[3],
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: palette.grey.light,
    },
    '&.Mui-focusVisible, &:focus': {
      boxShadow: `0 0 0 4px ${palette.blue[1]}`,
    },
    '&:active': {
      boxShadow: 'none',
      borderColor: palette.blue[5],
    },
  },
  text: {
    boxShadow: 'none',
    border: '2px solid transparent',
    backgroundColor: 'transparent',
    color: palette.blue[3],
    '&$disabled': {
      border: '2px solid transparent',
      backgroundColor: 'transparent',
      color: palette.blue[3],
    },
    '&:hover': {
      boxShadow: 'none',
      color: palette.blue[4],
      backgroundColor: 'transparent',
    },
    '&.Mui-focusVisible, &:focus': {
      boxShadow: `0 0 0 4px ${palette.blue[1]}`,
      borderColor: palette.blue[3],
      backgroundColor: palette.blue[1],
    },
    '&:active': {
      boxShadow: 'none',
      color: palette.blue[4],
    },
  },
  sizeLarge: {
    ...typography['label-xl-strong'],
    // account for 2px border width
    padding: `${typography.pxToRem(14 - 2)} ${typography.pxToRem(16 - 2)}`,
  },
  sizeSmall: {
    ...typography['label-sm-strong'],
    // account for 2px border width
    padding: `${typography.pxToRem(2 - 2)} ${typography.pxToRem(16 - 2)}`,
  },
  label: {
    color: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
  },
  startIcon: {
    display: 'inherit',
    // -2px accounts for label vs icon size difference
    // have to specify individually to override defaults
    marginTop: '-2px',
    marginBottom: '-2px',
    marginRight: '8px',
    marginLeft: 0,
    color: 'inherit',
    '& > .MuiSvgIcon-root': {
      color: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
    },
    // artificially increase specificity to win battle with default
    '&& > :first-child': {
      fontSize: 'inherit',
    },
  },
  endIcon: {
    display: 'inherit',
    // -2px accounts for label vs icon size difference
    // have to specify individually to override defaults
    marginTop: '-2px',
    marginBottom: '-2px',
    marginLeft: '8px',
    marginRight: 0,
    color: 'inherit',
    '& > .MuiSvgIcon-root': {
      color: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
    },
    // artificially increase specificity to win battle with default
    '&& > :first-child': {
      fontSize: 'inherit',
    },
  },
  iconSizeSmall: {
    fontSize: typography.pxToRem(16),
    lineHeight: typography.pxToRem(16),
  },
  iconSizeMedium: {
    fontSize: typography.pxToRem(20),
    lineHeight: typography.pxToRem(20),
  },
  iconSizeLarge: {
    fontSize: typography.pxToRem(24),
    lineHeight: typography.pxToRem(24),
  },
});
