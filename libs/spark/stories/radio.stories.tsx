import React from 'react';
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { Radio, RadioProps } from '@material-ui/core';

export default {
  title: 'prenda-spark/Radio',
  component: Radio,
  parameters: { actions: { handles: ['change'] } },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { },
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Configurable = Template.bind({});