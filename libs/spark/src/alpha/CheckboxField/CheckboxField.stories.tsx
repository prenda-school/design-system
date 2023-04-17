import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { CheckboxFieldProps } from '..';
import { CheckboxField } from '..';
import { containBoxShadowInline } from '../../../stories';

export const _retyped = CheckboxField as typeof CheckboxField;

export default {
  title: '@ps/CheckboxField',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containBoxShadowInline],
} as Meta;

const Template = (args) => <CheckboxField {...args} />;

type Story = DefaultStory<CheckboxFieldProps>;

export const Label: Story = Template.bind({});
Label.args = { label: 'Label' };
Label.storyName = 'label';

export const LabelChecked: Story = Template.bind({});
LabelChecked.args = { label: 'Label', checked: true };
LabelChecked.storyName = 'label checked';

export const LabelHelperText: Story = Template.bind({});
LabelHelperText.args = { label: 'Label', helperText: 'Helper text' };
LabelHelperText.storyName = 'label helperText';

export const LabelHelperTextDisabled: Story = Template.bind({});
LabelHelperTextDisabled.args = {
  label: 'Label',
  helperText: 'Helper text',
  disabled: true,
};
LabelHelperTextDisabled.storyName = 'label helperText disabled';

export const LabelHelperTextError: Story = Template.bind({});
LabelHelperTextError.args = {
  label: 'Label',
  helperText: 'Helper text',
  error: true,
};
LabelHelperTextError.storyName = 'label helperText error';

export const LabelIndeterminate: Story = Template.bind({});
LabelIndeterminate.args = { label: 'Label', indeterminate: true };
LabelIndeterminate.storyName = 'label indeterminate';
