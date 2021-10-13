import {
  default as createTheme,
  Theme,
} from '@material-ui/core/styles/createTheme';
import initialTheme from './initialTheme';
import overrides from './overrides';
import props from './props';

export type { Theme } from '@material-ui/core/styles/createTheme';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DefaultTheme extends Theme {}

declare module '@material-ui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
export default createTheme({
  ...initialTheme,
  props,
  overrides: overrides(initialTheme),
});
