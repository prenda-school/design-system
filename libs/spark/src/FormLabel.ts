import {
  FormLabel,
  FormLabelClassKey,
  StyleRules,
  Theme,
} from '@material-ui/core';

export { FormLabel };

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
    '&$error.MuiInputLabel-root': {
      color: 'inherit',
    },
  },
});
