import * as React from 'react';
import CssBaseline from '../CssBaseline';
import ThemeProvider from '../ThemeProvider';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import theme from '../theme';

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
