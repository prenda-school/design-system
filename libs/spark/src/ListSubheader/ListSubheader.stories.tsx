import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { ListSubheader } from '..';

export const _retyped = ListSubheader as typeof ListSubheader;

export default {
  title: '@ps/ListSubheader',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    children: <>Subheader</>,
  },
} as Meta;

const Template = (args) => <ListSubheader {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const Inset: Story = Template.bind({});
Inset.args = { inset: true };
Inset.storyName = 'inset';
