import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { CssBaseline, FontFacesBaseline } from '../src';
import { FontFacesBaseline as FontFacesBaseline_alpha } from '../src/alpha';

addDecorator((Story) => (
  <Fragment>
    <CssBaseline />
    <FontFacesBaseline />
    <FontFacesBaseline_alpha />

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
