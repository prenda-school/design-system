import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_ListSubheader } from '..';

export const _retyped = Unstable_ListSubheader as typeof Unstable_ListSubheader;

export default {
  title: '@ps/Unstable_ListSubheader',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    children: <>Subheader</>,
  },
} as Meta;

const Template = (args) => <Unstable_ListSubheader {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const Inset: Story = Template.bind({});
Inset.args = { inset: true };
Inset.storyName = 'inset';
