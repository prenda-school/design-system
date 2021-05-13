import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SparkThemeProvider } from '../src/theme/Provider';

addDecorator(withKnobs);
addDecorator((Story) => (
  <SparkThemeProvider>
    <Story />
  </SparkThemeProvider>
));

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
