import createTheme from '@material-ui/core/styles/createTheme';
import type { Theme } from '@material-ui/core/styles/createTheme';
import overrides from './overrides';
import palette from './palette';
import props from './props';
import shadows from './shadows';
import typography from './typography';

const initialTheme = createTheme({
  palette,
  props,
  shadows,
  typography,
});

const theme = createTheme({
  ...initialTheme,
  overrides: overrides(initialTheme),
});

export default theme;

export type { Theme };
