import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_Avatar, Unstable_CheckboxListItem } from '..';
import {
  containFocusIndicator,
  enableHooks,
  statefulValue,
} from '../../stories';
import { default as Unstable_ListItemMeta } from '../Unstable_ListItem/Unstable_ListItem.stories';

export const _retyped = Unstable_CheckboxListItem as typeof Unstable_CheckboxListItem;

export default {
  title: '@ps/Unstable_CheckboxListItem',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [statefulValue, enableHooks, containFocusIndicator],
  args: { children: <>Label</> },
  argTypes: {
    secondaryAction: Unstable_ListItemMeta.argTypes.secondaryAction,
  },
} as Meta;

const Template = (args) => <Unstable_CheckboxListItem {...args} />;

export const Value: Story = Template.bind({});
Value.args = { value: 'value', checked: false };
Value.storyName = 'value';

export const ValueHover: Story = Template.bind({});
ValueHover.args = { value: 'value', checked: false };
ValueHover.parameters = { pseudo: { hover: true } };
ValueHover.storyName = 'value :hover';

export const ValueChecked: Story = Template.bind({});
ValueChecked.args = { value: 'value', checked: true };
ValueChecked.storyName = 'value checked';

export const ValueCheckedDisabled: Story = Template.bind({});
ValueCheckedDisabled.args = {
  value: 'value',
  checked: true,
  disabled: true,
};
ValueCheckedDisabled.storyName = 'value checked disabled';

export const ValueDisabled: Story = Template.bind({});
ValueDisabled.args = {
  value: 'value',
  disabled: true,
};
ValueDisabled.storyName = 'value disabled';

export const ValueSelected: Story = Template.bind({});
ValueSelected.args = {
  primary: 'Label',
  value: 'value',
  selected: true,
};
ValueSelected.storyName = 'value selected';

// ============
// = Examples =
// ============

export const Student: Story = Template.bind({});
Student.args = {
  checked: true,
  children: <>John Doe</>,
  ContentGroupProps: {
    leadingEl: (
      <Unstable_Avatar
        size="small"
        src="/img/student-boy-1.png"
        alt="Boy smiling"
      />
    ),
    row: true,
    tertiary: '4th grade',
  },
  value: 'value',
};
