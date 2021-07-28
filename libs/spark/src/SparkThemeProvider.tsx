import * as React from 'react';
import { ThemeProvider, StylesProvider, CssBaseline } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './styles';

export const SparkThemeProvider = (props) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          {props.children}
        </StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};
