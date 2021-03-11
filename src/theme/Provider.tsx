import * as React from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { muiTheme } from './theme';

export const SparkThemeProvider = (props: { children: any }) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={muiTheme}>
          {props.children}
        </StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};
