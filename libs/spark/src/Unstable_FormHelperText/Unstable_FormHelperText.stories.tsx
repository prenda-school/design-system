import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_FormHelperText,
  Unstable_FormHelperTextProps,
  unstable_createSvgIcon,
} from '..';
import { sparkThemeProvider } from '../../stories';

const Info = unstable_createSvgIcon(
  <path d="M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zM12 10.25a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0v-5a.75.75 0 01.75-.75zM12 9a1 1 0 100-2 1 1 0 000 2z" />,
  'Sb_Info'
);

interface Sb_Unstable_FormHelperTextProps extends Unstable_FormHelperTextProps {
  children?: Unstable_FormHelperTextProps['children'];
  disabled?: Unstable_FormHelperTextProps['disabled'];
  error?: Unstable_FormHelperTextProps['error'];
  focused?: Unstable_FormHelperTextProps['focused'];
  required?: Unstable_FormHelperTextProps['required'];
}

// underlying props don't have descriptions
export const Sb_Unstable_FormHelperText = (
  props: Sb_Unstable_FormHelperTextProps
) => <Unstable_FormHelperText {...props} />;

export default {
  title: '@ps/Unstable_FormHelperText',
  component: Sb_Unstable_FormHelperText,
  excludeStories: ['Sb_Unstable_FormHelperText'],
  args: {
    children: 'Helper text',
  },
} as Meta;

const Template = (args) => <Unstable_FormHelperText {...args} />;

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

export const LeadingIcon: Story = Template.bind({});
LeadingIcon.args = {
  children: (
    <React.Fragment>
      <Info fontSize="small" />
      Helper text
    </React.Fragment>
  ),
};
LeadingIcon.storyName = '(leading icon)';

export const LeadingIconError: Story = Template.bind({});
LeadingIconError.args = {
  children: (
    <React.Fragment>
      <Info fontSize="small" />
      Helper text
    </React.Fragment>
  ),
  error: true,
};
LeadingIconError.storyName = '(leading icon) error';
