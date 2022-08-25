import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { RadioField } from '..';
import { containFocusIndicator } from '../../stories';

export const _retyped = RadioField as typeof RadioField;

export default {
  title: '@ps/RadioField',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containFocusIndicator],
} as Meta;

const Template = (args) => <RadioField {...args} />;

export const Label: Story = Template.bind({});
Label.args = { label: 'Label' };
Label.storyName = 'label';

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
