import { default as createTheme } from '@material-ui/core/styles/createTheme';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';
import unstable_borders from './unstable_borders';
import unstable_palette from './unstable_palette';
import unstable_radius from './unstable_radius';
import unstable_shadow from './unstable_shadow';
import unstable_typography from './unstable_typography';

const initialTheme = createTheme({
  palette,
  shadows,
  typography,
});

initialTheme.unstable_borders = unstable_borders;
initialTheme.unstable_palette = unstable_palette;
initialTheme.unstable_radius = unstable_radius;
initialTheme.unstable_shadow = unstable_shadow;
initialTheme.unstable_typography = unstable_typography;

export default initialTheme;
