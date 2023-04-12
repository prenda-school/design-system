import { createTheme, Theme as MuiTheme } from '@material-ui/core/styles';
import initialTheme from './initialTheme';
import overrides from './overrides';
import props from './props';
import type {} from './themeAugmentation';
import borders_alpha, {
  Borders as Borders_alpha,
} from '../alpha/theme/borders';
import palette_alpha, {
  Palette as Palette_alpha,
} from '../alpha/theme/palette';
import radii_alpha, { Radii as Radii_alpha } from '../alpha/theme/radii';
import shadows_alpha, {
  Shadows as Shadows_alpha,
} from '../alpha/theme/shadows';
import typography_alpha, {
  TypographyOptions as TypographyOptions_alpha,
} from '../alpha/theme/typography';
export interface Theme extends MuiTheme {
  unstable_borders: Borders_alpha;
  border_alpha: Borders_alpha;
  unstable_palette: Palette_alpha;
  palette_alpha: Palette_alpha;
  unstable_radii: Radii_alpha;
  radii_alpha: Radii_alpha;
  unstable_shadows: Shadows_alpha;
  shadows_alpha: Shadows_alpha;
  unstable_typography: TypographyOptions_alpha;
  typography_alpha: TypographyOptions_alpha;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DefaultTheme extends Theme {}

const theme = createTheme({
  ...initialTheme,
  props,
  overrides: overrides(initialTheme),
});

theme.unstable_borders = borders_alpha;
theme.borders_alpha = borders_alpha;
theme.unstable_palette = palette_alpha;
theme.palette_alpha = palette_alpha;
theme.unstable_radii = radii_alpha;
theme.radii_alpha = radii_alpha;
theme.unstable_shadows = shadows_alpha;
theme.shadows_alpha = shadows_alpha;
theme.unstable_typography = typography_alpha;
theme.typography_alpha = typography_alpha;

export default theme;
