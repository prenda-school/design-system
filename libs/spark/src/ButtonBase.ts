import transitions from '@material-ui/core/styles/transitions';
import { colors } from './theme/colors';

export const MuiButtonBasePropOverrides = {
  disableRipple: true,
  disableTouchRipple: true,
  focusRipple: false,
};

export const MuiButtonBaseStyleOverrides = {
  root: {
    '&.SparkButton-root': {
      fontFamily: '"Nunito", Avenir, sans-serif',
      boxSizing: 'border-box' as const,
      transition: transitions.create(
        ['background-color', 'box-shadow', 'border'],
        { duration: transitions.duration.short }
      ),
      borderRadius: 8,
      borderWidth: 2,
      borderStyle: 'solid' as const,
      fontSize: '1rem', // 16px
      lineHeight: '1.125rem', // 18px
      fontWeight: 700,
      '&.Mui-focusVisible': {
        boxShadow: `0 0 0 4px ${colors.colorsBlue[1]}`,
      },
      '&$disabled': {
        opacity: '50%',
      },
    },
    '&.SparkButton-variantSolid': {
      borderColor: colors.colorsBlue[3],
      backgroundColor: colors.colorsBlue[3],
      color: colors.colorsPrendaWhite,
      '&:hover': {
        borderColor: colors.colorsBlue[4],
        backgroundColor: colors.colorsBlue[4],
      },
    },
    '&.SparkButton-variantOutlined': {
      borderColor: colors.colorsPrendaMediumGrey,
      backgroundColor: colors.colorsPrendaWhite,
      color: colors.colorsBlue[3],
      '&:hover': {
        backgroundColor: colors.colorsPrendaLightGrey,
      },
    },
    '&.SparkButton-variantFlat': {
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      color: colors.colorsBlue[3],
      '&:hover': {
        color: colors.colorsBlue[4],
      },
      '&.Mui-focusVisible': {
        borderColor: colors.colorsBlue[3],
        backgroundColor: colors.colorsBlue[1],
      },
    },
    // Y-paddings are subtracted by 2 to account for border-width
    '&.SparkButton-sizeLarge': {
      fontSize: '1.125rem', // 18px
      padding: '.675rem 1rem', // 12-2px 16px
      '.SparkButton-content': {
        height: '1.5rem', // 24px
      },
    },
    '&.SparkButton-sizeMedium': {
      padding: '.25rem 1rem', // 6-2px 16px
      '.SparkButton-content': {
        height: '1.25rem', // 20px
      },
    },
    '&.SparkButton-sizeSmall': {
      fontSize: '0.75rem', // 12px
      lineHeight: '0.75rem', // 12px
      padding: '.125rem 1rem', // 4-2px 16px
      '& .SparkButton-content': {
        height: '1rem', // 16px
      },
    },
    '.SparkButton-content': {
      // taken from Mui
      width: '100%', // Ensure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit',
    },
    '.SparkButton-startIcon': {
      display: 'inherit',
      marginRight: '.5rem', // 8px
    },
    '.SparkButton-endIcon': {
      display: 'inherit',
      marginLeft: '.5rem', // 8px
    },
    '.SparkButton-iconSizeSmall': {
      fontSize: '1rem', // 16px
    },
    '.SparkButton-iconSizeMedium': {
      fontSize: '1.25rem', // 20px
    },
    '.SparkButton-iconSizeLarge': {
      fontSize: '1.5rem', // 24px
    },
  },
};
