import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { muiTheme } from './theme';

export const SparkThemeProvider = function ({ children }) {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={muiTheme}>{children}</StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

// Consumer Example

//  <SparkThemeProvider>
//    <App />
//  </SparkThemeProvider>
