import {
  FormHelperText,
  FormHelperTextClassKey,
  StyleRules,
} from '@material-ui/core';
import { palette } from './styles/palette';
import { typography } from './styles/typography';

export { FormHelperText };

export const MuiFormHelperTextStyleOverrides: Partial<
  StyleRules<FormHelperTextClassKey>
> = {
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
};
