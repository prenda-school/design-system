import { palette } from './styles/palette';

export const MuiButtonDefaultProps = {
  // No disableElevation: true because it makes styling box-shadow's
  //  VERY difficult. Instead, just override wherever it pops up.
  disableFocusRipple: true,
  disableRipple: true,
  variant: 'contained' as const,
  size: 'large' as const,
};

export const MuiButtonStyleOverrides = {
  root: {
    borderRadius: 8,
    borderWidth: '2px',
    borderStyle: 'solid' as const,
    '&$disabled': {
      opacity: '50%',
    },
  },
  contained: {
    boxShadow: 'none',
    padding: '.25rem 1rem', // 4px (accounting for 2px border width) 16px
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
    padding: '.25rem 1rem', // 4px (accounting for 2px border width) 16px
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
    padding: '.25rem 1rem', // 4px (accounting for 2px border width) 16px
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
    fontSize: '1.125rem', // 18px
    lineHeight: '1.5rem', // 20px
    padding: '.75rem 1rem', // 12px (accounting for 2px border width) 16px
  },
  sizeSmall: {
    fontSize: '0.75rem', // 12px
    lineHeight: '1rem', // 12px
    padding: '.125rem 1rem', // 4px (accounting for 2px border width) 16px
  },
  label: {
    color: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
  },
  startIcon: {
    display: 'inherit',
    marginRight: 8,
    color: 'inherit',
    '& > .MuiSvgIcon-root': {
      color: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
    },
  },
  endIcon: {
    display: 'inherit',
    marginLeft: 8,
    color: 'inherit',
    '& > .MuiSvgIcon-root': {
      color: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
    },
  },
  iconSizeSmall: {
    fontSize: '1rem', // 16px
    lineHeight: '1rem',
  },
  iconSizeMedium: {
    fontSize: '1.25rem', // 20px
    lineHeight: '1.25rem',
  },
  iconSizeLarge: {
    fontSize: '1.5rem', // 24px
    lineHeight: '1.5rem',
  },
};
