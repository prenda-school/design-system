import * as React from 'react';
import {
  ThemeProvider,
  StylesProvider,
  CssBaseline,
  createGenerateClassName,
} from '@material-ui/core';
import { theme } from './styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'spark',
  seed: 'spark',
});

export const SparkThemeProvider = (props) => {
  return (
    <StylesProvider injectFirst generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </StylesProvider>
  );
};
