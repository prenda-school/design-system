import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { SwitchField, SwitchFieldProps } from '..';
import { containBoxShadow } from '../../../stories';

export const _retyped = SwitchField as typeof SwitchField;

export default {
  title: '@ps/SwitchField',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containBoxShadow],
} as Meta;

const Template = (args) => <SwitchField {...args} />;

type Story = DefaultStory<SwitchFieldProps>;

export const Label: Story = Template.bind({});
Label.args = { label: 'Label' };
Label.storyName = 'label';

export const LabelFullWidth: Story = Template.bind({});
LabelFullWidth.args = {
  label: 'Label',
  fullWidth: true,
};
LabelFullWidth.storyName = 'label fullWidth';

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

export const LabelLabelPlacementStart: Story = Template.bind({});
LabelLabelPlacementStart.args = {
  label: 'Label',
  labelPlacement: 'start',
};
LabelLabelPlacementStart.storyName = 'label labelPlacement=start';

export const LabelLabelPlacementStartFullWidth: Story = Template.bind({});
LabelLabelPlacementStartFullWidth.args = {
  label: 'Label',
  labelPlacement: 'start',
  fullWidth: true,
};
LabelLabelPlacementStartFullWidth.storyName =
  'label labelPlacement=start fullWidth';
