import * as React from 'react';
import { SparkThemeProvider } from '../src/theme/Provider';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  (Story: any) => (
    <SparkThemeProvider>
      <Story />
    </SparkThemeProvider>
  ),
];
