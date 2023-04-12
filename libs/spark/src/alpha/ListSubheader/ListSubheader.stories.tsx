import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { ListSubheader, ListSubheaderProps } from '..';

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

type Story = DefaultStory<ListSubheaderProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const Inset: Story = Template.bind({});
Inset.args = { inset: true };
Inset.storyName = 'inset';
