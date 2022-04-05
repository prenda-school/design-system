import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_InputLabel, Unstable_InputLabelProps } from '..';
import { sparkThemeProvider } from '../../stories';

interface Sb_Unstable_InputLabelProps extends Unstable_InputLabelProps {
  children?: Unstable_InputLabelProps['children'];
  disabled?: Unstable_InputLabelProps['disabled'];
  error?: Unstable_InputLabelProps['error'];
  focused?: Unstable_InputLabelProps['focused'];
  required?: Unstable_InputLabelProps['required'];
}

// underlying props don't have descriptions
export const Sb_Unstable_InputLabel = (props: Sb_Unstable_InputLabelProps) => (
  <Unstable_InputLabel {...props} />
);

export default {
  title: '@ps/Unstable_InputLabel',
  component: Sb_Unstable_InputLabel,
  excludeStories: ['Sb_Unstable_InputLabel'],
  args: {
    children: 'Label',
  },
} as Meta;

const Template = (args) => <Unstable_InputLabel {...args} />;

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
