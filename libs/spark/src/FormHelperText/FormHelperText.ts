import type {
  FormHelperTextClassKey,
  FormHelperTextProps,
  StyleRules,
  Theme,
} from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';

export default FormHelperText;

export type { FormHelperTextProps };

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
    '[class*=MuiFormGroup-root] ~ &': {
      marginTop: 3,
    },
    '[class*=MuiTextField-root] > &$error': {
      color: palette.text.onLightLowContrast,
    },
  },
});
