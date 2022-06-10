import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_FormLabel } from '..';
import { sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_FormLabel as typeof Unstable_FormLabel;

export default {
  title: '@ps/Unstable_FormLabel',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    children: <>Label</>,
  },
} as Meta;

const Template = (args) => <Unstable_FormLabel {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const SparkThemeProvider: Story = Template.bind({});
SparkThemeProvider.decorators = [sparkThemeProvider];
SparkThemeProvider.storyName = '(SparkThemeProvider)';

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
