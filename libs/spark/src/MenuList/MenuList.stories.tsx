import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { MenuItem, MenuList } from '..';

export const _retyped = MenuList as typeof MenuList;

export default {
  title: '@ps/MenuList',
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
          <MenuItem key={i}>Menu item {i}</MenuItem>
        )),
      },
    },
  },
} as Meta;

const Template = (args) => <MenuList {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const DisablePadding: Story = Template.bind({});
DisablePadding.args = { disablePadding: true };
DisablePadding.storyName = 'disablePadding';

export const Subheader: Story = Template.bind({});
Subheader.args = { subheader: 'Subheader' };
Subheader.storyName = 'subheader';
