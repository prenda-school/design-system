import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Checkbox } from '../../dist';

export default {
  title: 'prenda-spark/Checkbox',
  component: Checkbox,
} as Meta;

export const BasicCheckbox = () => (
  <Checkbox label="Basic checkbox" value="basic" name="basicCheckbox" />
);
export const CheckedCheckbox = () => (
  <Checkbox
    label="Checked checkbox"
    value="checked"
    name="checkedCheckbox"
    checked={true}
  />
);
export const DisabledCheckbox = () => (
  <Checkbox
    label="Disabled checkbox"
    value="disabled"
    name="disabledCheckbox"
    disabled={true}
  />
);
