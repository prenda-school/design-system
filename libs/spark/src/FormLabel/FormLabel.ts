import type { FormLabelClassKey } from '@material-ui/core/FormLabel';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export { default } from '@material-ui/core/FormLabel';
export * from '@material-ui/core/FormLabel';

export const MuiFormLabelStyleOverrides = ({
  palette,
  typography,
}: Theme): Partial<StyleRules<FormLabelClassKey>> => ({
  root: {
    ...typography['label-lg-strong'],
    color: palette.text.onLight,
    marginBottom: 3,
    // Design doesn't specify focus style, but it improves a11y
    '&$focused': {
      color: palette.blue[3],
    },
    // ONLY override for Input (not in a Checkbox / Radio group)
    '&$error[class*=MuiInputLabel-root]': {
      color: 'inherit',
    },
  },
});
