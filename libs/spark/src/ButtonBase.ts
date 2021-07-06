import transitions from '@material-ui/core/styles/transitions';
import { palette } from './styles/palette';
export const MuiButtonBaseDefaultProps = {
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
      borderWidth: '2px',
      borderStyle: 'solid' as const,
      fontWeight: 700,
      '&.Mui-focusVisible': {
        boxShadow: `0 0 0 4px ${palette.blue[1]}`,
      },
      '&$disabled': {
        opacity: '50%',
      },

      '&.SparkButton-variantSolid': {
        borderColor: palette.blue[3],
        backgroundColor: palette.blue[3],
        color: palette.common.white,
        '&:hover': {
          borderColor: palette.blue[4],
          backgroundColor: palette.blue[4],
        },
      },
      '&.SparkButton-variantOutlined': {
        borderColor: palette.grey.medium,
        backgroundColor: palette.common.white,
        color: palette.blue[3],
        '&:hover': {
          backgroundColor: palette.grey.light,
        },
      },
      '&.SparkButton-variantFlat': {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: palette.blue[3],
        '&:hover': {
          color: palette.blue[4],
        },
        '&.Mui-focusVisible': {
          borderColor: palette.blue[3],
          backgroundColor: palette.blue[1],
        },
      },
      // Y-paddings are subtracted by 2 to account for border-width
      '&.SparkButton-sizeLarge': {
        fontSize: '1.125rem', // 18px
        lineHeight: '1.25rem', // 20px
        padding: '.75rem 1rem', // 12px (accounting for 2px border width) 16px
      },
      '&.SparkButton-sizeMedium': {
        fontSize: '1rem', // 16px
        lineHeight: '1.25rem', // 20px
        padding: '.25rem 1rem', // 4px (accounting for 2px border width) 16px
      },
      '&.SparkButton-sizeSmall': {
        fontSize: '0.75rem', // 12px
        lineHeight: '0.75rem', // 12px
        padding: '.25rem 1rem', // 4px (accounting for 2px border width) 16px
      },
      '& .SparkButton-content': {
        // taken from Mui
        width: '100%', // Ensure the correct width for iOS Safari
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit',
        '& .SparkButton-startIcon': {
          display: 'inherit',
          marginRight: '.5rem', // 8px
        },
        '& .SparkButton-endIcon': {
          display: 'inherit',
          marginLeft: '.5rem', // 8px
        },
        '& .SparkButton-iconSizeSmall': {
          fontSize: '1rem', // 16px
        },
        '& .SparkButton-iconSizeMedium': {
          fontSize: '1.25rem', // 20px
        },
        '& .SparkButton-iconSizeLarge': {
          fontSize: '1.5rem', // 24px
        },
      },
    },
  },
};
