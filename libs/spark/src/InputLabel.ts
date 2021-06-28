import { colors } from './theme/colors';

export const MuiInputLabelStyleOverrides = {
  root: {
    color: colors.colorsTextIconOnLightHighContrast,
    marginBottom: '0.5rem', // 8px
    fontWeight: 700,
    fontSize: '1rem', // 16px
    lineHeight: '1.125rem', // 18px

    disabled: {
      color: colors.colorsPrendaDarkGrey,
    },
  },
};
