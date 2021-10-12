export { default } from '@material-ui/core/Input';
export * from '@material-ui/core/Input';

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
