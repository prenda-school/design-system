import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_FormHelperText } from '..';
import { Info, sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_FormHelperText as typeof Unstable_FormHelperText;

export default {
  title: '@ps/Unstable_FormHelperText',
  component: _retyped,
  excludeStories: ['_retyped'],
  argTypes: {
    children: {
      control: 'select',
      options: ['(text)', '(Leading Icon)'],
      mapping: {
        '(text)': <>Helper text</>,
        '(Leading Icon)': (
          <>
            <Info fontSize="small" />
            Helper text
          </>
        ),
      },
    },
  },
  args: {
    children: '(text)',
  },
} as Meta;

const Template = (args) => <Unstable_FormHelperText {...args} />;

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

export const ChildrenLeadingIcon: Story = Template.bind({});
ChildrenLeadingIcon.args = { children: '(Leading Icon)' };
ChildrenLeadingIcon.storyName = 'children=(Leading Icon)';

export const ChildrenLeadingIconError: Story = Template.bind({});
ChildrenLeadingIconError.args = { children: '(Leading Icon)', error: true };
ChildrenLeadingIconError.storyName = 'children=(Leading Icon) error';
