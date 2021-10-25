import type { InputAdornmentClassKey } from './InputAdornment';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiInputAdornmentStylesOverrides = ({
  typography,
}: Theme): Partial<StyleRules<InputAdornmentClassKey>> => ({
  root: {
    fontSize: typography.pxToRem(24),
    '[class*=MuiInputBase-multiline] > &': {
      alignSelf: 'flex-start',
      // half of typical icon height + input top margin
      marginTop: 12 + 10,
    },
  },
});
