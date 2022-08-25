import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Avatar, MenuItem } from '..';
import {
  containFocusIndicator,
  enableHooks,
  statefulValue,
} from '../../stories';
import { default as ListItemMeta } from '../ListItem/ListItem.stories';

export const _retyped = MenuItem as typeof MenuItem;

export default {
  title: '@ps/MenuItem',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [statefulValue, enableHooks, containFocusIndicator],
  args: {
    children: <>Label</>,
  },
  argTypes: {
    primaryAction: ListItemMeta.argTypes.primaryAction,
    secondaryAction: ListItemMeta.argTypes.secondaryAction,
  },
} as Meta;

const Template = (args) => <MenuItem {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

// ============
// = Examples =
// ============

export const SelectedStudent = (args) => (
  <MenuItem
    ContentGroupProps={{
      leadingEl: (
        <Avatar size="small" src="/img/student-boy-1.png" alt="Boy smiling" />
      ),
      row: true,
      tertiary: '4th grade',
    }}
    selected
    {...args}
  >
    John Doe
  </MenuItem>
);
