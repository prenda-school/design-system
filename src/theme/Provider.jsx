import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { muiTheme } from './theme';

export const SparkThemeProvider = function ({ children }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={muiTheme}>{children}</StyledThemeProvider>
    </ThemeProvider>
  );
};

// Consumer

{
  /* <SparkThemeProvider>
  <App />
</SparkThemeProvider> */
}

// useTheme();
