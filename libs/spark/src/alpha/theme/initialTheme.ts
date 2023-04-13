import { default as createTheme } from '@material-ui/core/styles/createTheme';
import borders from './borders';
import palette from './palette';
import radii from './radii';
import shadows from './shadows';
import typography from './typography';

const initialTheme = createTheme({
  borders,
  palette,
  radii,
  shadows,
  typography,
});

export default initialTheme;
