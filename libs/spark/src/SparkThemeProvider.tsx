import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  StylesProvider,
  ThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { theme } from './styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'spark',
});

const SparkThemeProvider = (props) => {
  return (
    <StylesProvider injectFirst generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </StylesProvider>
  );
};

export default SparkThemeProvider;
