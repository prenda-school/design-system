import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_FormLabel } from '..';
import { sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_FormLabel as typeof Unstable_FormLabel;

export default {
  title: '@ps/FormLabel',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    children: <>Label</>,
  },
} as Meta;

const Template = (args) => <Unstable_FormLabel {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const STP: Story = Template.bind({});
STP.decorators = [sparkThemeProvider];
STP.storyName = '(STP)';

export const Disabled: Story = Template.bind({});
Disabled.args = { disabled: true };
Disabled.storyName = 'disabled';

export const Error: Story = Template.bind({});
Error.args = { error: true };
Error.storyName = 'error';

export const ErrorDisabled: Story = Template.bind({});
ErrorDisabled.args = { error: true, disabled: true };
ErrorDisabled.storyName = 'error disabled';

export const Focused: Story = Template.bind({});
Focused.args = { focused: true };
Focused.storyName = 'focused';

export const Required: Story = Template.bind({});
Required.args = { required: true };
Required.storyName = 'required';

export const RequiredDisabled: Story = Template.bind({});
RequiredDisabled.args = { required: true, disabled: true };
RequiredDisabled.storyName = 'required disabled';

export const RequiredError: Story = Template.bind({});
RequiredError.args = { required: true, error: true };
RequiredError.storyName = 'required error';

export const RequiredErrorDisabled: Story = Template.bind({});
RequiredErrorDisabled.args = { required: true, error: true, disabled: true };
RequiredErrorDisabled.storyName = 'required error disabled';
