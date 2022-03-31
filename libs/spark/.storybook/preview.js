import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import {
  CssBaseline,
  FontFacesBaseline,
  SparkThemeProvider,
  Unstable_FontFacesBaseline,
} from '../src';

addDecorator((Story) => (
  <Fragment>
    <CssBaseline />
    <FontFacesBaseline />
    <Unstable_FontFacesBaseline />

    <SparkThemeProvider>
      <Story />
    </SparkThemeProvider>
  </Fragment>
));

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
