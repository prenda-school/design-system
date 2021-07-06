import * as React from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './styles';
import { CssBaseline } from '@material-ui/core';

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
