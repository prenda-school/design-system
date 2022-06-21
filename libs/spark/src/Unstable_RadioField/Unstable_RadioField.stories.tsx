import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_RadioField } from '..';
import { containFocusIndicator } from '../../stories';

export const _retyped = Unstable_RadioField as typeof Unstable_RadioField;

export default {
  title: '@ps/Unstable_RadioField',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containFocusIndicator],
} as Meta;

const Template = (args) => <Unstable_RadioField {...args} />;

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
