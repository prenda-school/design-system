import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_Avatar, Unstable_MenuItem } from '..';
import {
  containFocusIndicator,
  enableHooks,
  statefulValue,
} from '../../stories';
import { default as Unstable_ListItemMeta } from '../Unstable_ListItem/Unstable_ListItem.stories';

export const _retyped = Unstable_MenuItem as typeof Unstable_MenuItem;

export default {
  title: '@ps/Unstable_MenuItem',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [statefulValue, enableHooks, containFocusIndicator],
  args: {
    children: <>Label</>,
  },
  argTypes: {
    leadingEl: Unstable_ListItemMeta.argTypes.leadingEl,
    primaryAction: Unstable_ListItemMeta.argTypes.primaryAction,
    secondaryAction: Unstable_ListItemMeta.argTypes.secondaryAction,
  },
} as Meta;

const Template = (args) => <Unstable_MenuItem {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

// ============
// = Examples =
// ============

export const SelectedStudent = (args) => (
  <Unstable_MenuItem
    leadingEl={
      <Unstable_Avatar
        size="small"
        src="/img/student-boy-1.png"
        alt="Boy smiling"
      />
    }
    row
    selected
    tertiary="4th grade"
    {...args}
  >
    John Doe
  </Unstable_MenuItem>
);
