import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { InputAdornment } from '..';
import { Search } from '../../stories';

export const _retyped = InputAdornment as typeof InputAdornment;

export default {
  title: '@ps/InputAdornment',
  component: _retyped,
  excludeStories: ['_retyped'],
  argTypes: {
    children: {
      control: 'select',
      options: ['kg', '<Search />'],
      mapping: {
        kg: 'kg',
        '<Search />': <Search />,
      },
    },
  },
  args: {
    children: '<Search />',
  },
} as Meta;

const Template = (args) => <InputAdornment {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const PositionStart: Story = Template.bind({});
PositionStart.args = { position: 'start' };
PositionStart.storyName = 'position=start';

export const PositionEnd: Story = Template.bind({});
PositionEnd.args = { position: 'end' };
PositionEnd.storyName = 'position=end';

export const ChildrenKg: Story = Template.bind({});
ChildrenKg.args = { children: 'kg' };
ChildrenKg.storyName = 'children=kg';
