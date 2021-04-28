import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Radio } from '../../src';

export default {
  title: 'prenda-spark/Radio',
  component: Radio,
} as Meta;

export const BasicRadioButton = () => (
  <Radio label="Basic Radio Button" value="basic" name="basicRadio" />
);

export const CheckedRadioButton = () => (
  <Radio
    label="Checked Radio Button"
    value="checked"
    name="checkedRadio"
    checked={true}
  />
);

export const DisabledRadioButton = () => (
  <Radio
    label="Disabled Radio Button"
    value="disabled"
    name="disabledRadio"
    disabled={true}
  />
);
