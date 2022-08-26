import type { FormHelperTextClassKey } from './FormHelperText';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiFormHelperTextStyleOverrides = ({
  palette,
  typography,
}: Theme): Partial<StyleRules<FormHelperTextClassKey>> => ({
  root: {
    color: palette.text.darkLowContrast,
    ...typography['paragraph-lg'],
    marginTop: 4,
    '&$disabled': {
      color: palette.grey.dark,
    },
    '[class*=MuiFormGroup-root] ~ &': {
      marginTop: 3,
    },
    '[class*=MuiTextField-root] > &$error': {
      color: palette.text.darkLowContrast,
    },
  },
});
