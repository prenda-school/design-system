import React from 'react';
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';

import { Radio, RadioProps } from '../../src';

export default {
  title: 'prenda-spark/Radio',
  component: Radio,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Radio button label',
  },
} as Meta;



const Template: Story<RadioProps> = args => <Radio {...args} />;
export const ConfigurableInput = Template.bind({});