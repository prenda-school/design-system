import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { CssBaseline, FontFacesBaseline } from '../src';

addDecorator((Story) => (
  <Fragment>
    <CssBaseline />
    <FontFacesBaseline />

    <Story />
  </Fragment>
));

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  chromatic: {
    // https://www.chromatic.com/docs/animations
    pauseAnimationAtEnd: true,
  },
};
