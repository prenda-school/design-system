import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import { overrides } from './overrides';
import { palette } from './palette';
import { props } from './props';
import { shadows } from './shadows';
import { typography } from './typography';

export const prendaTheme: ThemeOptions = {
  typography,
  overrides,
  shadows,
  palette,
  props,
};

export const muiTheme = createMuiTheme(prendaTheme);
