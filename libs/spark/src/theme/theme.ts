import { createTheme, Theme as MuiTheme } from '@material-ui/core/styles';
import initialTheme from './initialTheme';
import overrides from './overrides';
import props from './props';
import type {} from './themeAugmentation';
import unstable_borders, { Unstable_Borders } from './unstable_borders';
import unstable_palette, { Unstable_Palette } from './unstable_palette';
import unstable_radii, { Unstable_Radii } from './unstable_radii';
import unstable_shadows, { Unstable_Shadows } from './unstable_shadows';
import unstable_typography, {
  Unstable_TypographyOptions,
} from './unstable_typography';

export interface Theme extends MuiTheme {
  unstable_borders: Unstable_Borders;
  unstable_palette: Unstable_Palette;
  unstable_radii: Unstable_Radii;
  unstable_shadows: Unstable_Shadows;
  unstable_typography: Unstable_TypographyOptions;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DefaultTheme extends Theme {}

const theme = createTheme({
  ...initialTheme,
  props,
  overrides: overrides(initialTheme),
});

theme.unstable_borders = unstable_borders;
theme.unstable_palette = unstable_palette;
theme.unstable_radii = unstable_radii;
theme.unstable_shadows = unstable_shadows;
theme.unstable_typography = unstable_typography;

export default theme;
