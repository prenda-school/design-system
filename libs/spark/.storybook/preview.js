import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import {
  CssBaseline,
  FontFacesBaseline,
  Unstable_FontFacesBaseline,
  withStyles,
} from '../src';

const ChromaticCssBaseline = withStyles((theme) => ({
  '@global': {
    '*': {
      animationPlayState: 'paused !important',
      transition: 'none !important',
      scrollBehavior: 'auto !important',
    },
  },
}))(() => null);

addDecorator((Story) => (
  <Fragment>
    {isChromatic() ? <ChromaticCssBaseline /> : null}
    <CssBaseline />
    <FontFacesBaseline />
    <Unstable_FontFacesBaseline />

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
