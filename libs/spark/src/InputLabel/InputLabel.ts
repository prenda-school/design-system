import type {
  InputLabelClassKey,
  InputLabelProps,
  StyleRules,
  Theme,
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

export default InputLabel;

export type { InputLabelProps };

export const MuiInputLabelDefaultProps = {
  disableAnimation: true,
};

export const MuiInputLabelStyleOverrides = ({
  palette,
  typography,
}: Theme): Partial<StyleRules<InputLabelClassKey>> => ({
  root: {
    ...typography['label-lg-strong'],
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
});
