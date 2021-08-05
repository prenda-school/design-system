import { palette } from './styles/palette';

export { FormLabel } from '@material-ui/core';

export const MuiFormLabelStyleOverrides = {
  root: {
    fontSize: '1rem',
    lineHeight: 1.25,
    fontWeight: 700,
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
