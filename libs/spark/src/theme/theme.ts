import type { Theme as MuiTheme } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import initialTheme from './initialTheme';
import overrides from './overrides';
import props from './props';
import type {} from './themeAugmentation';
import type {
  Borders as Borders_alpha,
} from '../alpha/theme/borders';
import borders_alpha from '../alpha/theme/borders';
import type {
  Palette as Palette_alpha,
} from '../alpha/theme/palette';
import palette_alpha from '../alpha/theme/palette';
import type { Radii as Radii_alpha } from '../alpha/theme/radii';
import radii_alpha from '../alpha/theme/radii';
import type {
  Shadows as Shadows_alpha,
} from '../alpha/theme/shadows';
import shadows_alpha from '../alpha/theme/shadows';
import type {
  TypographyOptions as TypographyOptions_alpha,
} from '../alpha/theme/typography';
import typography_alpha from '../alpha/theme/typography';
export interface Theme extends MuiTheme {
  borders_alpha: Borders_alpha;
  palette_alpha: Palette_alpha;
  radii_alpha: Radii_alpha;
  shadows_alpha: Shadows_alpha;
  typography_alpha: TypographyOptions_alpha;
  /** @deprecated use borders_alpha */
  unstable_borders: Borders_alpha;
  /** @deprecated use `palette_alpha` */
  unstable_palette: Palette_alpha;
  /** @deprecated use `radii_alpha` */
  unstable_radii: Radii_alpha;
  /** @deprecated use `shadows_alpha` */
  unstable_shadows: Shadows_alpha;
  /** @deprecated use `typography_alpha` */
  unstable_typography: TypographyOptions_alpha;
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
