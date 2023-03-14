import { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { SparkThemeProvider, styled } from '../src';

/**
 * [Internal] A Storybook decorator that wraps a story in the `SparkThemeProvider`.
 */
export const sparkThemeProvider = (Story, context) => (
  <SparkThemeProvider>
    <Story {...context} />
  </SparkThemeProvider>
);

/**
 * [Internal] A Storybook decorator to enable the use of hooks in a story (otherwise, crashes).
 */
export const enableHooks = (Story, context) => <Story {...context} />;

/**
 * [Internal] A Storybook decorator to transform a story's `args.value` into a stateful value with an `onChange` handler passed on.
 *
 * Note, must be used in tandem with `enableHooks` coming after in the `decorators` array.
 * @example
 *  Story.decorators = [statefulValue, enableHooks];
 */
export const statefulValue = (Story, context) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [checked, setChecked] = useState(context.args.checked);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(context.args.value);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setChecked(context.args.checked);
    setValue(context.args.value);
  }, [context.args.checked, context.args.value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>, value) => {
    // don't change uncontrolled to controlled
    if (event.target.checked !== undefined) {
      setChecked(event.target.checked);
    }
    if (value !== undefined) {
      setValue(value);
    } else {
      setValue(event.target.value);
    }
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

  return <Story {...context} />;
};

const InverseBackgroundSpan = styled('span')(({ theme }) => ({
  backgroundColor: theme.unstable_palette.background.inverse,
  display: 'inline-flex',
}));

/**
 * [Internal] A Storybook decorator that applies the inverse background to a story.
 */
export const inverseBackground = (Story, context) => (
  <InverseBackgroundSpan>
    <Story {...context} />
  </InverseBackgroundSpan>
);

const ContainBoxShadowDiv = styled('div')({
  // width of box shadows like focus indicator, input state severity
  padding: 4,
});

/**
 * [Internal] A Storybook decorator that applies padding so that the standard focus indicator is captured in Chromatic snapshots.
 */
export const containBoxShadow = (Story, context) => (
  <ContainBoxShadowDiv>
    <Story {...context} />
  </ContainBoxShadowDiv>
);

const MediumWidthDiv = styled('div')({
  width: 256,
});

/**
 * [Internal] A Storybook decorator that is a medium width (256px) container.
 */
export const mediumWidth = (Story, context) => (
  <MediumWidthDiv>
    <Story {...context} />
  </MediumWidthDiv>
);

const LargeWidthDiv = styled('div')({
  width: 512,
});

/**
 * [Internal] A Storybook decorator that is a large width (512px) container.
 */
export const largeWidth = (Story, context) => (
  <LargeWidthDiv>
    <Story {...context} />
  </LargeWidthDiv>
);

const ContainElevationDiv = styled('div')({
  // width of highest elevation
  padding: 28,
  // without setting it to fit, the story snapshot will expand to 100%
  width: 'fit-content',
  // prevent larger-than-necessary height because of added browser-default space for ascender/descenders.
  display: 'flex',
  // prevent overflowing past viewport
  maxWidth: '100%',
});

/**
 * [Internal] A Storybook decorator that applies padding so that any elevation is captured in Chromatic snapshots.
 */
export const containElevation = (Story, context) => (
  <ContainElevationDiv>
    <Story {...context} />
  </ContainElevationDiv>
);

const ContainBoxShadowInlineDiv = styled(ContainBoxShadowDiv)({
  // 'inline' => prevent taking up full width available (block-level element default) (results in story snapshot being width being window width rather than element width)
  // 'grid' / 'flex' => prevent added space for font ascender/descender (inline element default) (results in story snapshot height being larger than necessary by a pixel or two)
  display: 'inline-grid',
});

/**
 * [Internal] ...
 *
 * Prevents `fullWidth` feature.
 */
export const containBoxShadowInline = (Story, context) => (
  <ContainBoxShadowInlineDiv>
    <Story {...context} />
  </ContainBoxShadowInlineDiv>
);
