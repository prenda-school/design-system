import { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { DecoratorFn } from '@storybook/react';
import { SparkThemeProvider, styled } from '../src';

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
  const [checked, setChecked] = useState(context.args.checked);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(context.args.value);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setChecked(context.args.checked);
    setValue(context.args.value);
  }, [context.args.checked, context.args.value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // don't change uncontrolled to controlled
    if (event.target.checked !== undefined) {
      setChecked(event.target.checked);
    }
    setValue(event.target.value);
  };

  const handleClick = (
    // eslint-disable-next-line @typescript-eslint/ban-types
    event: MouseEvent<{}>,
    value?: string,
    checked?: boolean
  ) => {
    // don't change uncontrolled to controlled
    if (checked !== undefined) {
      // toggle
      setChecked(!checked);
    }
    if (value !== undefined) {
      setValue(value);
    }
  };

  context.args.checked = checked;
  context.args.value = value;
  context.args.onChange = handleChange;
  context.args.onClick = handleClick;

  return <Story />;
};

const ContainFocusIndicatorDiv = styled('div')({
  // width of focus indicator
  padding: 4,
  // without setting it to fit, the story snapshot will expand to 100%
  width: 'fit-content',
  // prevent larger-than-necessary height because of added browser-default space for ascender/descenders.
  display: 'flex',
  // prevent overflowing past viewport
  maxWidth: '100%',
});

/**
 * [Internal] A Storybook decorator that applies padding so that the standard focus indicator is captured in Chromatic snapshots.
 */
export const containFocusIndicator: DecoratorFn = (Story) => (
  <ContainFocusIndicatorDiv>
    <Story />
  </ContainFocusIndicatorDiv>
);

const MediumWidthDiv = styled('div')({
  width: 256,
});

/**
 * [Internal] A Storybook decorator that is a medium width ( 256px) container.
 */
export const mediumWidth: DecoratorFn = (Story) => (
  <MediumWidthDiv>
    <Story />
  </MediumWidthDiv>
);
