import { createMuiTheme } from '@material-ui/core';
import { overrides } from './overrides';
import { palette } from './palette';
import { props } from './props';
import { shadows } from './shadows';
import { typography } from './typography';

export const theme = createMuiTheme({
  overrides,
  palette,
  props,
  shadows,
  typography,
});