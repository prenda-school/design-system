import type { InputAdornmentProps } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

export default InputAdornment;

export type { InputAdornmentProps };

export const MuiInputAdornmentStylesOverrides = {
  root: {
    '[class*=MuiInputBase-multiline] > &': {
      alignSelf: 'flex-start',
      // half of typical 24px icon height + 10px input top margin
      marginTop: 22,
    },
  },
};
