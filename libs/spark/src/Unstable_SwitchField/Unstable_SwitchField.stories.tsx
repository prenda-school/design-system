import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Unstable_SwitchField, Unstable_SwitchFieldProps } from '..';
import { containFocusIndicator, mediumWidth } from '../../stories';

export const _retyped = Unstable_SwitchField as typeof Unstable_SwitchField;

export default {
  title: '@ps/SwitchField',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containFocusIndicator],
} as Meta;

const Template = (args) => <Unstable_SwitchField {...args} />;

type Story = DefaultStory<Unstable_SwitchFieldProps>;

export const Label: Story = Template.bind({});
Label.args = { label: 'Label' };
Label.storyName = 'label';

export const LabelFullWidth: Story = Template.bind({});
LabelFullWidth.args = {
  label: 'Label',
  fullWidth: true,
};
LabelFullWidth.decorators = [mediumWidth];
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
LabelLabelPlacementStartFullWidth.decorators = [mediumWidth];
LabelLabelPlacementStartFullWidth.storyName =
  'label labelPlacement=start fullWidth';
