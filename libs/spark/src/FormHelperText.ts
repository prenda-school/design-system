import { palette } from './styles/palette';

export const MuiFormHelperTextStyleOverrides = {
  root: {
    color: palette.text.onLightLowContrast,
    fontSize: '1rem', // 12px
    lineHeight: '1.5rem', // 20px
    marginTop: 8,
    '&$disabled': {
      color: palette.grey.dark,
    },
    '.MuiFormGroup-root ~ &': {
      marginTop: 3,
    },
  },
};
