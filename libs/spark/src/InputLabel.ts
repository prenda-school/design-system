import { InputLabel, InputLabelClassKey, StyleRules } from '@material-ui/core';
import { palette } from './styles/palette';
import { typography } from './styles/typography';

export { InputLabel };

export const MuiInputLabelDefaultProps = {
  disableAnimation: true,
};

export const MuiInputLabelStyleOverrides: Partial<
  StyleRules<InputLabelClassKey>
> = {
  root: {
    ...typography['label-lg'],
    fontWeight: 700,
    color: palette.text.onLight,
    marginBottom: 4,
    '&$disabled': {
      color: palette.grey.dark,
    },
  },
  shrink: {
    transform: 'none',
    transformOrigin: 'unset',
  },
  formControl: {
    transform: 'none',
    position: 'relative' as const,
  },
};
