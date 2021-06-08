import * as React from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { muiTheme } from './theme';
import { CssBaseline } from '@material-ui/core';

export const SparkThemeProvider = (props) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={muiTheme}>
          <CssBaseline />
          {props.children}
        </StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};
