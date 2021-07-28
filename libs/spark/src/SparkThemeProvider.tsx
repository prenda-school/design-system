import * as React from 'react';
import { ThemeProvider, StylesProvider, CssBaseline } from '@material-ui/core';
import { theme } from './styles';

export const SparkThemeProvider = (props) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </StylesProvider>
  );
};
