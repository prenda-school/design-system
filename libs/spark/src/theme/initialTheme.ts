import { default as createTheme } from '@material-ui/core/styles/createTheme';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';
import borders_alpha from '../alpha/theme/borders';
import palette_alpha from '../alpha/theme/palette';
import radii_alpha from '../alpha/theme/radii';
import shadows_alpha from '../alpha/theme/shadows';
import typography_alpha from '../alpha/theme/typography';

const initialTheme = createTheme({
  palette,
  shadows,
  typography,
});

initialTheme.unstable_borders = borders_alpha;
initialTheme.borders_alpha = borders_alpha;
initialTheme.unstable_palette = palette_alpha;
initialTheme.palette_alpha = palette_alpha;
initialTheme.unstable_radii = radii_alpha;
initialTheme.radii_alpha = radii_alpha;
initialTheme.unstable_shadows = shadows_alpha;
initialTheme.shadows_alpha = shadows_alpha;
initialTheme.unstable_typography = typography_alpha;
initialTheme.typography_alpha = typography_alpha;

export default initialTheme;
