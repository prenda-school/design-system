import type { InputProps } from '@material-ui/core';
import Input from '@material-ui/core/Input';

export default Input;

export type { InputProps };

export const MuiInputDefaultProps = {
  disableUnderline: true,
};

export const MuiInputStyleOverrides = {
  formControl: {
    marginLeft: 0,
    'label + &': {
      marginTop: 4,
    },
  },
};
