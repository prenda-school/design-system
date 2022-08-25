import { createTheme, Theme as MuiTheme } from '@material-ui/core/styles';
import initialTheme from './initialTheme';
import overrides from './overrides';
import props from './props';
import type {} from './themeAugmentation';
import unstable_palette, { Unstable_Palette } from './unstable_palette';
import unstable_typography, {
  Unstable_TypographyOptions,
} from './unstable_typography';

export interface Theme extends MuiTheme {
  unstable_palette: Unstable_Palette;
  unstable_typography: Unstable_TypographyOptions;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DefaultTheme extends Theme {}

const theme = createTheme({
  ...initialTheme,
  props,
  overrides: overrides(initialTheme),
});

theme.unstable_palette = unstable_palette;
theme.unstable_typography = unstable_typography;

export default theme;
