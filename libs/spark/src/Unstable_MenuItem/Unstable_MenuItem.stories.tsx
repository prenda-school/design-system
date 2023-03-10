import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Unstable_Avatar, Unstable_MenuItem, Unstable_MenuItemProps } from '..';
import { containBoxShadow, enableHooks, statefulValue } from '../../stories';
import { default as Unstable_ListItemMeta } from '../Unstable_ListItem/Unstable_ListItem.stories';

export const _retyped = Unstable_MenuItem as typeof Unstable_MenuItem;

export default {
  title: '@ps/MenuItem',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [statefulValue, enableHooks],
  args: {
    children: <>Label</>,
  },
  argTypes: {
    primaryAction: Unstable_ListItemMeta.argTypes.primaryAction,
    secondaryAction: Unstable_ListItemMeta.argTypes.secondaryAction,
  },
} as Meta;

const Template = (args) => <Unstable_MenuItem {...args} />;

type Story = DefaultStory<Unstable_MenuItemProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const FocusVisible: Story = Template.bind({});
FocusVisible.decorators = [containBoxShadow];
FocusVisible.parameters = { pseudo: { focusVisible: true } };
FocusVisible.storyName = ':focus-visible';

// ============
// = Examples =
// ============

export const SelectedStudent = (args) => (
  <Unstable_MenuItem
    ContentGroupProps={{
      leadingEl: (
        <Unstable_Avatar
          size="small"
          src="/img/student-boy-1.png"
          alt="Boy smiling"
        />
      ),
      row: true,
      tertiary: '4th grade',
    }}
    selected
    {...args}
  >
    John Doe
  </Unstable_MenuItem>
);
