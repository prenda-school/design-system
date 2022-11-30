import React from 'react';
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
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StylesProvider>
  );
};

export default SparkThemeProvider;
