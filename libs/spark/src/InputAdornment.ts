export { InputAdornment } from '@material-ui/core';

export const MuiInputAdornmentStylesOverrides = {
  root: {
    '.MuiInputBase-multiline > &': {
      alignSelf: 'flex-start',
      // half of typical 24px icon height + 10px input top margin
      marginTop: 22,
    },
  },
};
