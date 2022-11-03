import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Unstable_ListSubheader, Unstable_ListSubheaderProps } from '..';

export const _retyped = Unstable_ListSubheader as typeof Unstable_ListSubheader;

export default {
  title: '@ps/ListSubheader',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    children: <>Subheader</>,
  },
} as Meta;

const Template = (args) => <Unstable_ListSubheader {...args} />;

type Story = DefaultStory<Unstable_ListSubheaderProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const Inset: Story = Template.bind({});
Inset.args = { inset: true };
Inset.storyName = 'inset';
