import { useState, useEffect } from 'react';
import { DecoratorFn } from '@storybook/react';
import { SparkThemeProvider } from '../src';

/**
 * [Internal] A Storybook decorator that wraps a story in the `SparkThemeProvider`.
 */
export const sparkThemeProvider: DecoratorFn = (Story) => (
  <SparkThemeProvider>
    <Story />
  </SparkThemeProvider>
);

/**
 * [Internal] A Storybook decorator to enable the use of hooks in a story (otherwise, crashes).
 */
export const enableHooks: DecoratorFn = (Story) => <Story />;

/**
 * [Internal] A Storybook decorator to transform a story's `args.value` into a stateful value with an `onChange` handler passed on.
 *
 * Note, must be used in tandem with `enableHooks` coming after in the `decorators` array.
 * @example
 *  Story.decorators = [statefulValue, enableHooks];
 */
export const statefulValue: DecoratorFn = (Story, context) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(context.args.value);
  const handleChange = (event) => setValue(event.target.value);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setValue(context.args.value);
  }, [context.args.value]);

  context.args.value = value;
  context.args.onChange = handleChange;

  return <Story />;
};
