import { palette } from './styles/palette';

export const MuiIconButtonDefaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
  variant: 'contained' as const,
  size: 'medium' as const,
};

export const MuiIconButtonStyleOverrides = {
  root: {
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: 'solid' as const,
    // sizeMedium
    padding: 10, // plus 2px border width for 12px
    '&$disabled': {
      opacity: '50%',
    },
    '&:focus': {
      boxShadow: `0 0 0 4px ${palette.blue[1]}`,
    },
    '&.SparkIconButton-variantPrimary': {
      borderColor: palette.blue[3],
      backgroundColor: palette.blue[3],
      color: palette.common.white,
      '&:hover': {
        borderColor: palette.blue[4],
        backgroundColor: palette.blue[4],
      },
      '&:active': {
        borderColor: palette.blue[5],
      },
    },
    '&.SparkIconButton-variantSecondary': {
      borderColor: palette.grey.medium,
      backgroundColor: palette.common.white,
      color: palette.blue[3],
      '&:hover': {
        backgroundColor: palette.grey.light,
      },
      '&:active': {
        borderColor: palette.blue[5],
      },
    },
    '&.SparkIconButton-variantGhost': {
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      color: palette.blue[3],
      '&:hover': {
        color: palette.blue[4],
        backgroundColor: 'transparent',
      },
      '&:focus': {
        borderColor: palette.blue[3],
        backgroundColor: palette.blue[1],
      },
      '&:active': {
        color: palette.blue[4],
      },
    },
  },
  label: {
    color: 'inherit',
    fontSize: '1.5rem', // 24px
    lineHeight: '1.5rem', // 24px
    '& > .MuiSvgIcon-root': {
      color: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
    },
  },
  sizeSmall: {
    padding: 4, // plus 2px border width for 6px
    '& > .MuiIconButton-label': {
      fontSize: '1.25rem', // 20px
      lineHeight: '1.25rem', // 20px
    },
  },
};
