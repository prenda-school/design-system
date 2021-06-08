import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import {
  BookIllustration,
  CollaborateIllustration,
  ConquerIllustration,
  CreateIllustration,
} from '../src';

export default {
  title: 'prenda-spark/Illustration',
  component: BookIllustration,
} as Meta;

export const BookIllustration80 = () => <BookIllustration fontSize={'80'} />;
export const BookIllustration160 = () => <BookIllustration fontSize={'160'} />;
export const CollaborateIllustration160 = () => (
  <CollaborateIllustration fontSize={'160'} />
);
export const ConquerIllustration320 = () => (
  <ConquerIllustration fontSize={'320'} />
);
export const CreateIllustration640 = () => (
  <CreateIllustration fontSize={'640'} />
);
