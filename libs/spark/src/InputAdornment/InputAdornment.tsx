export { default } from '@material-ui/core/InputAdornment';
export * from '@material-ui/core/InputAdornment';

export const MuiInputAdornmentStylesOverrides = {
  root: {
    '[class*=MuiInputBase-multiline] > &': {
      alignSelf: 'flex-start',
      // half of typical 24px icon height + 10px input top margin
      marginTop: 22,
    },
  },
};
