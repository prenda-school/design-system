import { DecoratorFn } from '@storybook/react';
import { SparkThemeProvider } from '../src';

/**
 * [Internal] Wrap a story in the `SparkThemeProvider`.
 */
export const sparkThemeProvider: DecoratorFn = (Story) => (
  <SparkThemeProvider>
    <Story />
  </SparkThemeProvider>
);
