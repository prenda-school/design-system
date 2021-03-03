import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Input } from '../../src';

export default {
  title: 'prenda-spark/Input',
  component: Input,
} as Meta;

let selectVal: string = '';

const hasError = (val: string) => {
  return val.includes('u');
};

const handleOnChange = (val: string) => {
  selectVal = val;
  console.log(`Value extracted from input: ${val}`);
};

export const SmallInput = () => (
  <Input
    inputId="inputId"
    label="Input Label"
    bottomInputLabel="Optional Message"
    hasError={hasError}
    onChange={handleOnChange}
    value={selectVal}
  />
);

export const LargeInput = () => (
  <Input
    inputId="inputId"
    label="Input Label"
    multiline={true}
    rows={6}
    bottomInputLabel="Optional Message"
    hasError={hasError}
    onChange={handleOnChange}
    value={selectVal}
  />
);

export const SmallInputError = () => (
  <Input
    inputId="inputId"
    label="Input Label"
    bottomInputLabel="Optional Message"
    hasError={() => true}
    onChange={handleOnChange}
    value={selectVal}
  />
);
