import { default as createTheme } from '@material-ui/core/styles/createTheme';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';
import unstable_palette from './unstable_palette';
import unstable_typography from './unstable_typography';

const initialTheme = createTheme({
  palette,
  shadows,
  typography,
});

initialTheme.unstable_palette = unstable_palette;
initialTheme.unstable_typography = unstable_typography;

export default initialTheme;
