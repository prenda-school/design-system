import type { FormControlLabelClassKey } from './FormControlLabel';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiFormControlLabelStyleOverrides = ({
  palette,
  typography,
}: Theme): Partial<StyleRules<FormControlLabelClassKey>> => ({
  root: {
    marginLeft: -8,
    color: palette.text.darkLowContrast,
    height: 40,
    marginTop: 1,
    marginBottom: 1,
    '&:hover, &:focus': {
      color: palette.text.dark,
    },
    '&$disabled': {
      color: palette.grey.dark,
    },
  },
  label: typography['label-lg'],
});
