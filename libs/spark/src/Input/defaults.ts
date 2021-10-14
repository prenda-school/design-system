import type { InputClassKey, InputProps } from './Input';
import type { StyleRules } from '../withStyles';

export const MuiInputDefaultProps: Partial<InputProps> = {
  disableUnderline: true,
};

export const MuiInputStyleOverrides: Partial<StyleRules<InputClassKey>> = {
  formControl: {
    marginLeft: 0,
    'label + &': {
      marginTop: 4,
    },
  },
};
