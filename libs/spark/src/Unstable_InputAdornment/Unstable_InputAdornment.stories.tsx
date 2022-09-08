import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_InputAdornment } from '..';
import { Search, sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_InputAdornment as typeof Unstable_InputAdornment;

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

const Template = (args) => <Unstable_InputAdornment {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const STP: Story = Template.bind({});
STP.decorators = [sparkThemeProvider];
STP.storyName = '(STP)';

export const PositionStart: Story = Template.bind({});
PositionStart.args = { position: 'start' };
PositionStart.storyName = 'position=start';

export const PositionEnd: Story = Template.bind({});
PositionEnd.args = { position: 'end' };
PositionEnd.storyName = 'position=end';

export const ChildrenKg: Story = Template.bind({});
ChildrenKg.args = { children: 'kg' };
ChildrenKg.storyName = 'children=kg';