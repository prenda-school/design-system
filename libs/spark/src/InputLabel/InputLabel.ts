import type { InputLabelClassKey } from '@material-ui/core/InputLabel';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export { default } from '@material-ui/core/InputLabel';
export * from '@material-ui/core/InputLabel';

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
