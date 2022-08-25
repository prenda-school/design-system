import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { CheckboxMenuItem } from '..';
import {
  containFocusIndicator,
  enableHooks,
  statefulValue,
} from '../../stories';
import { default as CheckboxListItemMeta } from '../CheckboxListItem/CheckboxListItem.stories';

export const _retyped = CheckboxMenuItem as typeof CheckboxMenuItem;

export default {
  title: '@ps/CheckboxMenuItem',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [statefulValue, enableHooks, containFocusIndicator],
  args: {
    children: <>Label</>,
  },
  argTypes: {
    secondaryAction: CheckboxListItemMeta.argTypes.secondaryAction,
  },
} as Meta;

const Template = (args) => <CheckboxMenuItem {...args} />;

export const FocusVisible: Story = Template.bind({});
FocusVisible.parameters = { pseudo: { focusVisible: true } };
FocusVisible.storyName = ':focus-visible';

export const Value: Story = Template.bind({});
Value.args = { value: 'value', checked: false };
Value.storyName = 'value';

export const ValueChecked: Story = Template.bind({});
ValueChecked.args = { value: 'value', checked: true };
ValueChecked.storyName = 'value checked';

export const ValueSelected: Story = Template.bind({});
ValueSelected.args = { value: 'value', selected: true };
ValueSelected.storyName = 'value selected';
