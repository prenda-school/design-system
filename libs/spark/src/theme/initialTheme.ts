import { default as createTheme } from '@material-ui/core/styles/createTheme';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

const initialTheme = createTheme({
  palette,
  shadows,
  typography,
});

export default initialTheme;
