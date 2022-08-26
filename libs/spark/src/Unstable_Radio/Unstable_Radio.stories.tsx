import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_Radio } from '..';
import {
  containFocusIndicator,
  enableHooks,
  sparkThemeProvider,
  statefulValue,
} from '../../stories';

export const _retyped = Unstable_Radio as typeof Unstable_Radio;

export default {
  title: '@ps/Radio',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [statefulValue, enableHooks, containFocusIndicator],
  args: {
    inputProps: { 'aria-label': 'Label' },
  },
} as Meta;

const Template = (args) => <Unstable_Radio {...args} />;

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

export const DisabledError: Story = Template.bind({});
DisabledError.args = { disabled: true, error: true };
DisabledError.storyName = 'disabled error';

export const DisabledErrorHover: Story = Template.bind({});
DisabledErrorHover.args = { disabled: true, error: true };
DisabledErrorHover.parameters = { pseudo: { hover: true } };
DisabledErrorHover.storyName = 'disabled error :hover';

export const Error: Story = Template.bind({});
Error.args = { error: true };
Error.storyName = 'error';

export const ErrorHover: Story = Template.bind({});
ErrorHover.args = { error: true };
ErrorHover.parameters = { pseudo: { hover: true } };
ErrorHover.storyName = 'error :hover';

export const ErrorFocusVisible: Story = Template.bind({});
ErrorFocusVisible.args = { error: true };
ErrorFocusVisible.parameters = { pseudo: { focusVisible: true } };
ErrorFocusVisible.storyName = 'error :focus-visible';

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

export const CheckedDisabledError: Story = Template.bind({});
CheckedDisabledError.args = { checked: true, disabled: true, error: true };
CheckedDisabledError.storyName = 'checked disabled error';

export const CheckedDisabledErrorHover: Story = Template.bind({});
CheckedDisabledErrorHover.args = { checked: true, disabled: true, error: true };
CheckedDisabledErrorHover.parameters = { pseudo: { hover: true } };
CheckedDisabledErrorHover.storyName = 'checked disabled error :hover';

export const CheckedError: Story = Template.bind({});
CheckedError.args = { checked: true, error: true };
CheckedError.storyName = 'checked error';

export const CheckedErrorHover: Story = Template.bind({});
CheckedErrorHover.args = { checked: true, error: true };
CheckedErrorHover.parameters = { pseudo: { hover: true } };
CheckedErrorHover.storyName = 'checked error :hover';

export const CheckedErrorFocusVisible: Story = Template.bind({});
CheckedErrorFocusVisible.args = { checked: true, error: true };
CheckedErrorFocusVisible.parameters = { pseudo: { focusVisible: true } };
CheckedErrorFocusVisible.storyName = 'checked error :focus-visible';
