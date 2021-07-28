import * as React from 'react';
import { addDecorator } from '@storybook/react';
import { SparkThemeProvider } from '../src';

addDecorator((Story) => (
  <SparkThemeProvider>
    <Story />
  </SparkThemeProvider>
));

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
