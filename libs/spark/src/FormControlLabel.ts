import { palette } from './theme/palette';
export const MuiFormControlLabelStyleOverrides = {
  root: {
    color: palette.text.onLightLowContrast,
    '&:hover': {
      color: palette.text.onLight,
    },
    '&$disabled': {
      color: palette.grey.dark,
    },
  },
  label: {
    // Figma says 600, but that appears heavier in-browser than in design
    fontWeight: 500,
    lineHeight: '1.125rem',
  },
};
