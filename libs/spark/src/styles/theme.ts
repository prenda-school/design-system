import { createTheme } from '@material-ui/core';
import { overrides } from './overrides';
import { palette } from './palette';
import { props } from './props';
import { shadows } from './shadows';
import { typography } from './typography';

const initialTheme = createTheme({
  palette,
  props,
  shadows,
  typography,
});

export const theme = createTheme({
  ...initialTheme,
  overrides: overrides(initialTheme),
});
