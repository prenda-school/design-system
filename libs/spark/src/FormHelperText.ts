import { palette } from './styles/palette';

export { FormHelperText } from '@material-ui/core';

export const MuiFormHelperTextStyleOverrides = {
  root: {
    color: palette.text.onLightLowContrast,
    fontSize: '1rem', // 12px
    lineHeight: '1.5rem', // 20px
    marginTop: 4,
    '&$disabled': {
      color: palette.grey.dark,
    },
    '.MuiFormGroup-root ~ &': {
      marginTop: 3,
    },
    '.MuiTextField-root > &$error': {
      color: palette.text.onLightLowContrast,
    },
  },
};
