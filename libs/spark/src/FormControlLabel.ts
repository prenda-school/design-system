import { palette } from './styles/palette';
export const MuiFormControlLabelStyleOverrides = {
  root: {
    color: palette.text.onLightLowContrast,
    '&:hover, &:focus': {
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
