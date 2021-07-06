import { palette } from './styles/palette';
export const MuiInputLabelStyleOverrides = {
  root: {
    color: palette.text.onLight,
    marginBottom: '0.5rem', // 8px
    fontWeight: 700,
    fontSize: '1rem', // 16px
    lineHeight: '1.125rem', // 18px
    '&$disabled': {
      color: palette.grey.dark,
    },
  },
};
