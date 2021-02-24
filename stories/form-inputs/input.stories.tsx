import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Input } from '../../src';

export default {
  title: 'prenda-spark/Input',
  component: Input,
} as Meta;

export const SmallInput = () => (
  <Input
    inputId="inputId"
    label="Input Label"
    inputPlaceholder="PizzaTaco"
    bottomInputLabel="Optional Message"
  />
);

export const LargeInput = () => (
  <Input
    inputId="inputId"
    label="Input Label"
    inputPlaceholder="PizzaTaco"
    multiline={true}
    rows={6}
    bottomInputLabel="Optional Message"
  />
);
