import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_MenuItem, Unstable_MenuList } from '..';

export const _retyped = Unstable_MenuList as typeof Unstable_MenuList;

export default {
  title: '@ps/Unstable_MenuList',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    children: '(MenuItem x4)',
    style: { maxWidth: 256 },
  },
  argTypes: {
    children: {
      control: 'select',
      options: ['(MenuItem x4)'],
      mapping: {
        '(MenuItem x4)': Array.from(Array(4)).map((_v, i) => (
          <Unstable_MenuItem key={i}>Menu item {i}</Unstable_MenuItem>
        )),
      },
    },
  },
} as Meta;

const Template = (args) => <Unstable_MenuList {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const DisablePadding: Story = Template.bind({});
DisablePadding.args = { disablePadding: true };
DisablePadding.storyName = 'disablePadding';

export const Subheader: Story = Template.bind({});
Subheader.args = { subheader: 'Subheader' };
Subheader.storyName = 'subheader';
