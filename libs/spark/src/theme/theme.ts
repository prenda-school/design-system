import { createTheme, Theme as MuiTheme } from '@material-ui/core/styles';
import type {} from './themeAugmentation';
import palette from './palette';
import typography from './typography';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Theme extends MuiTheme {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DefaultTheme extends Theme {}

export default createTheme({
  palette,
  typography,
});
