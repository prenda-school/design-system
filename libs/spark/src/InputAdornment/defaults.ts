import type { InputAdornmentClassKey } from './InputAdornment';
import type { StyleRules } from '../withStyles';

export const MuiInputAdornmentStylesOverrides: Partial<
  StyleRules<InputAdornmentClassKey>
> = {
  root: {
    '[class*=MuiInputBase-multiline] > &': {
      alignSelf: 'flex-start',
      // half of typical 24px icon height + 10px input top margin
      marginTop: 22,
    },
  },
};
