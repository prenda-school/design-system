import React from 'react';
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from '../src';

export default {
  title: 'prenda-spark/Checkbox',
  component: Checkbox,
  parameters: { actions: { handles: ['change'] } },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Checkbox label',
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;
export const ConfigurableInput = Template.bind({});
