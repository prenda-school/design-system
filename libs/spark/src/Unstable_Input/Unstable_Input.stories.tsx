import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_Input,
  Unstable_InputProps as _Unstable_InputProps,
} from '..';
import {
  containFocusIndicator,
  enableHooks,
  Gear,
  Info,
  sparkThemeProvider,
  statefulValue,
} from '../../stories';

interface Unstable_InputProps extends _Unstable_InputProps {
  defaultValue?: _Unstable_InputProps['defaultValue'];
  disabled?: _Unstable_InputProps['disabled'];
  error?: _Unstable_InputProps['error'];
  fullWidth?: _Unstable_InputProps['fullWidth'];
  id?: _Unstable_InputProps['id'];
  leadingEl?: _Unstable_InputProps['leadingEl'];
  maxRows?: _Unstable_InputProps['maxRows'];
  minRows?: _Unstable_InputProps['minRows'];
  multiline?: _Unstable_InputProps['multiline'];
  name?: _Unstable_InputProps['name'];
  placeholder?: _Unstable_InputProps['placeholder'];
  readOnly?: _Unstable_InputProps['readOnly'];
  required?: _Unstable_InputProps['required'];
  trailingEl?: _Unstable_InputProps['trailingEl'];
  type?: _Unstable_InputProps['type'];
  value?: _Unstable_InputProps['value'];
}

export const _retyped = (props: Unstable_InputProps) => (
  <Unstable_Input {...props} />
);

export default {
  title: '@ps/Unstable_Input',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [statefulValue, enableHooks, containFocusIndicator],
  argTypes: {
    leadingEl: {
      control: 'select',
      options: ['undefined', '$', '<Gear />'],
      mapping: {
        undefined: undefined,
        $: '$',
        '<Gear />': <Gear />,
      },
    },
    trailingEl: {
      control: 'select',
      options: ['undefined', 'kg', '<Info />'],
      mapping: {
        undefined: undefined,
        kg: 'kg',
        '<Info />': <Info />,
      },
    },
  },
  args: {
    // start component as "controlled"
    value: '',
  },
} as Meta;

const Template = (args) => <Unstable_Input {...args} />;

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

export const Error: Story = Template.bind({});
Error.args = { error: true };
Error.storyName = 'error';

export const LeadingEl: Story = Template.bind({});
LeadingEl.args = { leadingEl: '<Gear />' };
LeadingEl.storyName = 'leadingEl';

export const Success: Story = Template.bind({});
Success.args = { success: true };
Success.storyName = 'success';

export const TrailingEl: Story = Template.bind({});
TrailingEl.args = { trailingEl: '<Info />' };
TrailingEl.storyName = 'trailingEl';

export const MultilineMinRows: Story = Template.bind({});
MultilineMinRows.args = { multiline: true, minRows: 3 };
MultilineMinRows.storyName = 'multiline minRows';

export const MultilineMinRowsDisabled: Story = Template.bind({});
MultilineMinRowsDisabled.args = {
  multiline: true,
  minRows: 3,
  disabled: true,
};
MultilineMinRowsDisabled.storyName = 'multiline minRows disabled';

export const MultilineMinRowsTrailingEl: Story = Template.bind({});
MultilineMinRowsTrailingEl.args = {
  multiline: true,
  minRows: 3,
  trailingEl: '<Info />',
};
MultilineMinRowsTrailingEl.storyName = 'multiline minRows trailingEl';

export const MultilineMinRowsLeadingEl: Story = Template.bind({});
MultilineMinRowsLeadingEl.args = {
  multiline: true,
  minRows: 3,
  leadingEl: '<Gear />',
};
MultilineMinRowsLeadingEl.storyName = 'multiline minRows leadingEl';

export const Placeholder: Story = Template.bind({});
Placeholder.args = { placeholder: 'Placeholder' };
Placeholder.storyName = 'placeholder';

export const Value: Story = Template.bind({});
Value.args = { value: 'Text' };
Value.storyName = 'value';

export const ValueHover: Story = Template.bind({});
ValueHover.args = { value: 'Text' };
ValueHover.parameters = { pseudo: { hover: true } };
ValueHover.storyName = 'value :hover';

export const ValueFocusVisible: Story = Template.bind({});
ValueFocusVisible.args = { value: 'Text' };
ValueFocusVisible.parameters = { pseudo: { focusVisible: true } };
ValueFocusVisible.storyName = 'value :focus-visible';

export const ValueDisabled: Story = Template.bind({});
ValueDisabled.args = { value: 'Text', disabled: true };
ValueDisabled.storyName = 'value disabled';

export const ValueTrailingEl: Story = Template.bind({});
ValueTrailingEl.args = { value: 'Text', trailingEl: '<Info />' };
ValueTrailingEl.storyName = 'value trailingEl';

export const ValueDisabledHover: Story = Template.bind({});
ValueDisabledHover.args = { value: 'Text', disabled: true };
ValueDisabledHover.parameters = { pseudo: { hover: true } };
ValueDisabledHover.storyName = 'value disabled :hover';

export const ValueLeadingEl: Story = Template.bind({});
ValueLeadingEl.args = { value: 'Text', leadingEl: '<Gear />' };
ValueLeadingEl.storyName = 'value leadingEl';

export const ValueMultilineMinRows: Story = Template.bind({});
ValueMultilineMinRows.args = { value: 'Text', multiline: true, minRows: 3 };
ValueMultilineMinRows.storyName = 'value multiline minRows';

export const ValueMultilineMinRowsDisabled: Story = Template.bind({});
ValueMultilineMinRowsDisabled.args = {
  value: 'Text',
  multiline: true,
  minRows: 3,
  disabled: true,
};
ValueMultilineMinRowsDisabled.storyName = 'value multiline minRows disabled';

export const ValueMultilineMinRowsTrailingEl: Story = Template.bind({});
ValueMultilineMinRowsTrailingEl.args = {
  value: 'Text',
  multiline: true,
  minRows: 3,
  trailingEl: '<Info />',
};
ValueMultilineMinRowsTrailingEl.storyName =
  'value multiline minRows trailingEl';

export const ValueMultilineMinRowsLeadingEl: Story = Template.bind({});
ValueMultilineMinRowsLeadingEl.args = {
  value: 'Text',
  multiline: true,
  minRows: 3,
  leadingEl: '<Gear />',
};
ValueMultilineMinRowsLeadingEl.storyName = 'value multiline minRows leadingEl ';
