import { palette } from './styles/palette';
export const MuiFormHelperTextStyleOverrides = {
  root: {
    color: palette.text.onLightLowContrast,
    fontSize: '1rem', // 12px
    lineHeight: '1.5rem', // 20px
    marginTop: '0.5rem', // 8px
    '&$disabled': {
      color: palette.grey.dark,
    },
  },
};
