import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_Checkbox } from '..';
import {
  containFocusIndicator,
  enableHooks,
  sparkThemeProvider,
  statefulValue,
} from '../../stories';

export const _retyped = Unstable_Checkbox as typeof Unstable_Checkbox;

export default {
  title: '@ps/Unstable_Checkbox',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [statefulValue, enableHooks, containFocusIndicator],
  args: {
    inputProps: { 'aria-label': 'Label' },
  },
} as Meta;

const Template = (args) => <Unstable_Checkbox {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const STP: Story = Template.bind({});
STP.decorators = [sparkThemeProvider];
STP.storyName = '(STP)';

export const Hover: Story = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };
Hover.storyName = ':hover';

export const FocusVisible: Story = Template.bind({});
FocusVisible.parameters = { pseudo: { focusVisible: true } };
FocusVisible.storyName = ':focus-visible';

export const Disabled: Story = Template.bind({});
Disabled.args = { disabled: true };
Disabled.storyName = 'disabled';

export const DisabledHover: Story = Template.bind({});
DisabledHover.args = { disabled: true };
DisabledHover.parameters = { pseudo: { hover: true } };
DisabledHover.storyName = 'disabled :hover';

export const Checked: Story = Template.bind({});
Checked.args = { checked: true };
Checked.storyName = 'checked';

export const CheckedHover: Story = Template.bind({});
CheckedHover.args = { checked: true };
CheckedHover.parameters = { pseudo: { hover: true } };
CheckedHover.storyName = 'checked :hover';

export const CheckedFocusVisible: Story = Template.bind({});
CheckedFocusVisible.args = { checked: true };
CheckedFocusVisible.parameters = { pseudo: { focusVisible: true } };
CheckedFocusVisible.storyName = 'checked :focus-visible';

export const CheckedDisabled: Story = Template.bind({});
CheckedDisabled.args = { checked: true, disabled: true };
CheckedDisabled.storyName = 'checked disabled';

export const CheckedDisabledHover: Story = Template.bind({});
CheckedDisabledHover.args = { checked: true, disabled: true };
CheckedDisabledHover.parameters = { pseudo: { hover: true } };
CheckedDisabledHover.storyName = 'checked disabled :hover';

export const Indeterminate: Story = Template.bind({});
Indeterminate.args = { indeterminate: true };
Indeterminate.storyName = 'indeterminate';

export const IndeterminateHover: Story = Template.bind({});
IndeterminateHover.args = { indeterminate: true };
IndeterminateHover.parameters = { pseudo: { hover: true } };
IndeterminateHover.storyName = 'indeterminate :hover';

export const IndeterminateFocusVisible: Story = Template.bind({});
IndeterminateFocusVisible.args = { indeterminate: true };
IndeterminateFocusVisible.parameters = { pseudo: { focusVisible: true } };
IndeterminateFocusVisible.storyName = 'indeterminate :focus-visible';

export const IndeterminateDisabled: Story = Template.bind({});
IndeterminateDisabled.args = { indeterminate: true, disabled: true };
IndeterminateDisabled.storyName = 'indeterminate disabled';

export const IndeterminateDisabledHover: Story = Template.bind({});
IndeterminateDisabledHover.args = { indeterminate: true, disabled: true };
IndeterminateDisabledHover.parameters = { pseudo: { hover: true } };
IndeterminateDisabledHover.storyName = 'indeterminate disabled :hover';
