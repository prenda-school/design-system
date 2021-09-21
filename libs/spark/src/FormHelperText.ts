import {
  FormHelperText,
  FormHelperTextClassKey,
  StyleRules,
  Theme,
} from '@material-ui/core';

export { FormHelperText };

export const MuiFormHelperTextStyleOverrides = ({
  palette,
  typography,
}: Theme): Partial<StyleRules<FormHelperTextClassKey>> => ({
  root: {
    color: palette.text.onLightLowContrast,
    ...typography['paragraph-lg'],
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
});
