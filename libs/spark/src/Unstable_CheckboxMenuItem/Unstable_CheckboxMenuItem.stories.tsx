import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_CheckboxMenuItem } from '..';
import {
  containFocusIndicator,
  enableHooks,
  statefulValue,
} from '../../stories';
import { default as Unstable_CheckboxListItemMeta } from '../Unstable_CheckboxListItem/Unstable_CheckboxListItem.stories';

export const _retyped = Unstable_CheckboxMenuItem as typeof Unstable_CheckboxMenuItem;

export default {
  title: '@ps/Unstable_CheckboxMenuItem',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [statefulValue, enableHooks, containFocusIndicator],
  args: {
    children: <>Label</>,
  },
  argTypes: {
    secondaryAction: Unstable_CheckboxListItemMeta.argTypes.secondaryAction,
  },
} as Meta;

const Template = (args) => <Unstable_CheckboxMenuItem {...args} />;

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
