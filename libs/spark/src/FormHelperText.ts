import { colors } from './theme/colors';

export const MuiFormHelperTextStyleOverrides = {
  root: {
    color: colors.colorsTextIconOnLightLowContrast,
    fontSize: '1rem', // 12px
    lineHeight: '1.5rem', // 20px
    marginTop: '0.5rem', // 8px
    '&$disabled': {
      color: colors.colorsPrendaDarkGrey,
    },
  },
};
