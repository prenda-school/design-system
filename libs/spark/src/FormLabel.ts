import { FormLabel, FormLabelClassKey, StyleRules } from '@material-ui/core';
import { palette } from './styles/palette';
import { typography } from './styles/typography';

export { FormLabel };

export const MuiFormLabelStyleOverrides: Partial<
  StyleRules<FormLabelClassKey>
> = {
  root: {
    ...typography['label-lg-strong'],
    color: palette.text.onLight,
    marginBottom: 3,
    // Design doesn't specify focus style, but it improves a11y
    '&$focused': {
      color: palette.blue[3],
    },
    '&$error.MuiInputLabel-root': {
      color: 'inherit',
    },
  },
};
