import { colors } from './theme/colors';

export const MuiFormControlLabelStyleOverrides = {
  root: {
    color: colors.colorsTextIconOnLightLowContrast,
    '&:hover': {
      color: colors.colorsTextIconOnLightHighContrast,
    },
    '&.Mui-disabled': {
      color: colors.colorsPrendaDarkGrey,
    },
  },
  label: {
    // Figma says 600, but that appears heavier in-browser than in design
    fontWeight: 500,
    lineHeight: '1.125rem',
  },
};
