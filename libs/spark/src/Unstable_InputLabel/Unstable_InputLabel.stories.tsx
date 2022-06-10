import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_InputLabel,
  Unstable_InputLabelProps as _Unstable_InputLabelProps,
} from '..';
import { sparkThemeProvider } from '../../stories';

interface Unstable_InputLabelProps extends _Unstable_InputLabelProps {
  children?: _Unstable_InputLabelProps['children'];
  disabled?: _Unstable_InputLabelProps['disabled'];
  error?: _Unstable_InputLabelProps['error'];
  focused?: _Unstable_InputLabelProps['focused'];
  required?: _Unstable_InputLabelProps['required'];
}

export const _retyped = (props: Unstable_InputLabelProps) => (
  <Unstable_InputLabel {...props} />
);

export default {
  title: '@ps/Unstable_InputLabel',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    children: <>Label</>,
  },
} as Meta;

const Template = (args) => <Unstable_InputLabel {...args} />;

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

export const Focused: Story = Template.bind({});
Focused.args = { focused: true };
Focused.storyName = 'focused';

export const Required: Story = Template.bind({});
Required.args = { required: true };
Required.storyName = 'required';
