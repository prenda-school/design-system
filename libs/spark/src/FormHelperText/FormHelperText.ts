import type { FormHelperTextClassKey } from '@material-ui/core/FormHelperText';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export { default } from '@material-ui/core/FormHelperText';
export * from '@material-ui/core/FormHelperText';

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
