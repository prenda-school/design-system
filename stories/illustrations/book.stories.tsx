import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { BookIllustration } from '../../src';

export default {
  title: 'prenda-spark/BookIllustration',
  component: BookIllustration,
} as Meta;

export const BookIllustration80 = () => (
  <BookIllustration width={'80'} height={'80'} />
);
export const BookIllustration160 = () => (
  <BookIllustration width={'160'} height={'160'} />
);
export const BookIllustration320 = () => (
  <BookIllustration width={'320'} height={'320'} />
);
export const BookIllustration640 = () => (
  <BookIllustration width={'640'} height={'640'} />
);
