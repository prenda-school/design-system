export { Input } from '@material-ui/core';

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
