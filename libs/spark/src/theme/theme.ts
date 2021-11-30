import { createTheme, Theme as MuiTheme } from '@material-ui/core/styles';
import initialTheme from './initialTheme';
import overrides from './overrides';
import props from './props';
import type {} from './themeAugmentation';
import __next__palette, { __next__Palette } from './__next__palette';
import __next__typography, {
  __next__TypographyOptions,
} from './__next__typography';

export interface Theme extends MuiTheme {
  __next__palette: __next__Palette;
  __next__typography: __next__TypographyOptions;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DefaultTheme extends Theme {}

const theme = createTheme({
  ...initialTheme,
  props,
  overrides: overrides(initialTheme),
});

theme.__next__palette = __next__palette;
theme.__next__typography = __next__typography;

export default theme;
