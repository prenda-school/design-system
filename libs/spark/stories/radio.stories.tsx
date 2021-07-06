import React from 'react';
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { FormControlLabel, Radio, RadioProps } from '@material-ui/core';

export default {
  title: 'prenda-spark/Radio',
  component: Radio,
  parameters: { actions: { handles: ['change'] } },
  argTypes: {
    label: { control: 'input' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Label',
  },
} as Meta;

const Template: Story = ({ label, ...args }) => (
  <FormControlLabel label={label} control={<Radio {...args} />} />
);

export const Configurable = Template.bind({});