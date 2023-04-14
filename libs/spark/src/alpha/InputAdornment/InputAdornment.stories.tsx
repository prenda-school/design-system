import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { InputAdornmentProps } from '..';
import { InputAdornment } from '..';
import { Search, sparkThemeProvider } from '../../../stories';

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

type Story = DefaultStory<InputAdornmentProps>;

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

export const SizeSmall: Story = Template.bind({});
SizeSmall.args = { size: 'small' };
SizeSmall.storyName = 'size="small"';

export const ChildrenKg: Story = Template.bind({});
ChildrenKg.args = { children: 'kg' };
ChildrenKg.storyName = 'children=kg';
