import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Input, InputProps as _InputProps } from '..';
import {
  containBoxShadow,
  enableHooks,
  Gear,
  Info,
  sparkThemeProvider,
  statefulValue,
} from '../../../stories';

interface InputProps extends _InputProps {
  defaultValue?: _InputProps['defaultValue'];
  disabled?: _InputProps['disabled'];
  error?: _InputProps['error'];
  fullWidth?: _InputProps['fullWidth'];
  id?: _InputProps['id'];
  leadingEl?: _InputProps['leadingEl'];
  maxRows?: _InputProps['maxRows'];
  minRows?: _InputProps['minRows'];
  multiline?: _InputProps['multiline'];
  name?: _InputProps['name'];
  placeholder?: _InputProps['placeholder'];
  readOnly?: _InputProps['readOnly'];
  required?: _InputProps['required'];
  trailingEl?: _InputProps['trailingEl'];
  type?: _InputProps['type'];
  value?: _InputProps['value'];
}

export const _retyped = (props: InputProps) => <Input {...props} />;

export default {
  title: '@ps/Input',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [statefulValue, enableHooks, containBoxShadow],
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

const Template = (args) => <Input {...args} />;

type Story = DefaultStory<InputProps>;

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

export const FocusVisibleHover: Story = Template.bind({});
FocusVisibleHover.parameters = { pseudo: { focusVisible: true, hover: true } };
FocusVisibleHover.storyName = ':focus-visible :hover';

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

export const FullWidth: Story = Template.bind({});
FullWidth.args = { fullWidth: true };
FullWidth.storyName = 'fullWidth';

export const LeadingEl: Story = Template.bind({});
LeadingEl.args = { leadingEl: '<Gear />' };
LeadingEl.storyName = 'leadingEl';

export const LeadingElSizeSmall: Story = Template.bind({});
LeadingElSizeSmall.args = { leadingEl: '<Gear />', size: 'small' };
LeadingElSizeSmall.storyName = 'leadingEl size="small" ';

export const Success: Story = Template.bind({});
Success.args = { success: true };
Success.storyName = 'success';

export const TrailingEl: Story = Template.bind({});
TrailingEl.args = { trailingEl: '<Info />' };
TrailingEl.storyName = 'trailingEl';

export const TrailingElSizeSmall: Story = Template.bind({});
TrailingElSizeSmall.args = { trailingEl: '<Info />', size: 'small' };
TrailingElSizeSmall.storyName = 'trailingEl size="small" ';

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

export const ValueFocusVisibleHover: Story = Template.bind({});
ValueFocusVisible.args = { value: 'Text' };
ValueFocusVisibleHover.parameters = {
  pseudo: { focusVisible: true, hover: true },
};
ValueFocusVisibleHover.storyName = 'value :focus-visible :hover';

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

export const SizeSmall: Story = Template.bind({});
SizeSmall.args = { size: 'small' };
SizeSmall.storyName = 'size="small"';
