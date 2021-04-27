import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { StoryTitle, TextFormatter, StorySubTitle } from '../story-util';

import { Input, InputProps } from '../../dist';

export default {
  title: 'prenda-spark/Input',
  component: Input,
  argTypes: {
    id: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
    success: {
      control: 'boolean',
    },
    multiline: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    id: 'sample',
    label: 'Label',
    helperText: 'Helper text',
  },
} as Meta;


const Template: Story<InputProps> = args => <Input {...args} />;
export const ConfigurableInput = Template.bind({});

// TODO: make custom story that mocks the Figma file spec page