import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Unstable_TextField, Unstable_TextFieldProps } from '..';
import { default as Unstable_SelectMeta } from '../Unstable_Select/Unstable_Select.stories';
import {
  containFocusIndicator,
  enableHooks,
  Gear,
  Info,
  sparkThemeProvider,
  statefulValue,
} from '../../stories';

export const _retyped = Unstable_TextField as typeof Unstable_TextField;

export default {
  title: '@ps/TextField',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [statefulValue, enableHooks, containFocusIndicator],
  args: {
    // start component as "controlled"
    value: '',
  },
  argTypes: {
    children: {
      control: Unstable_SelectMeta.argTypes.children.control,
      options: ['undefined'].concat(
        Unstable_SelectMeta.argTypes.children.options
      ),
      mapping: {
        undefined: undefined,
        ...Unstable_SelectMeta.argTypes.children.mapping,
      },
    },
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
    // narrow controls because "raw object" default will crash story
    label: { control: 'text' },
    helperText: { control: 'text' },
    value: { control: 'text' },
    minRows: { control: 'number' },
    maxRows: { control: 'number' },
  },
} as Meta;

const Template = (args) => <Unstable_TextField {...args} />;

type Story = DefaultStory<Unstable_TextFieldProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const STP: Story = Template.bind({});
STP.decorators = [sparkThemeProvider];
STP.storyName = '(STP)';

export const LabelHelperText: Story = Template.bind({});
LabelHelperText.args = { label: 'Label', helperText: 'Helper text' };
LabelHelperText.storyName = 'label helperText';

export const LabelHelperTextHover: Story = Template.bind({});
LabelHelperTextHover.args = { label: 'Label', helperText: 'Helper text' };
LabelHelperTextHover.parameters = { pseudo: { hover: true } };
LabelHelperTextHover.storyName = 'label helperText :hover';

export const LabelHelperTextFocusVisible: Story = Template.bind({});
LabelHelperTextFocusVisible.args = {
  label: 'Label',
  helperText: 'Helper text',
};
LabelHelperTextFocusVisible.parameters = { pseudo: { focusVisible: true } };
LabelHelperTextFocusVisible.storyName = 'label helperText :focus-visible';

export const LabelHelperTextDisabled: Story = Template.bind({});
LabelHelperTextDisabled.args = {
  label: 'Label',
  helperText: 'Helper text',
  disabled: true,
};
LabelHelperTextDisabled.storyName = 'label helperText disabled';

export const LabelHelperTextDisabledHover: Story = Template.bind({});
LabelHelperTextDisabledHover.args = {
  label: 'Label',
  helperText: 'Helper text',
  disabled: true,
};
LabelHelperTextDisabledHover.parameters = { pseudo: { hover: true } };
LabelHelperTextDisabledHover.storyName = 'label helperText disabled :hover';

export const LabelHelperTextError: Story = Template.bind({});
LabelHelperTextError.args = {
  label: 'Label',
  helperText: 'Helper text',
  error: true,
};
LabelHelperTextError.storyName = 'label helperText error';

export const LabelHelperTextLeadingEl: Story = Template.bind({});
LabelHelperTextLeadingEl.args = {
  label: 'Label',
  helperText: 'Helper text',
  leadingEl: '<Gear />',
};
LabelHelperTextLeadingEl.storyName = 'label helperText leadingEl';

export const LabelHelperTextSuccess: Story = Template.bind({});
LabelHelperTextSuccess.args = {
  label: 'Label',
  helperText: 'Helper text',
  success: true,
};
LabelHelperTextSuccess.storyName = 'label helperText success';

export const LabelHelperTextTrailingEl: Story = Template.bind({});
LabelHelperTextTrailingEl.args = {
  label: 'Label',
  helperText: 'Helper text',
  trailingEl: '<Info />',
};
LabelHelperTextTrailingEl.storyName = 'label helperText trailingEl';

export const LabelHelperTextMultilineMinRows: Story = Template.bind({});
LabelHelperTextMultilineMinRows.args = {
  label: 'Label',
  helperText: 'Helper text',
  multiline: true,
  minRows: 3,
};
LabelHelperTextMultilineMinRows.storyName =
  'label helperText multiline minRows=3';

export const LabelHelperTextMultilineMinRowsLeadingEl: Story = Template.bind(
  {}
);
LabelHelperTextMultilineMinRowsLeadingEl.args = {
  label: 'Label',
  helperText: 'Helper text',
  multiline: true,
  minRows: 3,
  leadingEl: '<Gear />',
};
LabelHelperTextMultilineMinRowsLeadingEl.storyName =
  'label helperText multiline minRows=3 leadingEl';

export const LabelHelperTextMultilineMinRowsTrailingEl: Story = Template.bind(
  {}
);
LabelHelperTextMultilineMinRowsTrailingEl.args = {
  label: 'Label',
  helperText: 'Helper text',
  multiline: true,
  minRows: 3,
  trailingEl: '<Info />',
};
LabelHelperTextMultilineMinRowsTrailingEl.storyName =
  'label helperText multiline minRows=3 trailingEl';

export const LabelHelperTextPlaceholder: Story = Template.bind({});
LabelHelperTextPlaceholder.args = {
  label: 'Label',
  helperText: 'Helper text',
  placeholder: 'Placeholder',
};
LabelHelperTextPlaceholder.storyName = 'label helperText placeholder';

export const LabelHelperTextRequired: Story = Template.bind({});
LabelHelperTextRequired.args = {
  label: 'Label',
  helperText: 'Helper text',
  required: true,
};
LabelHelperTextRequired.storyName = 'label helperText required';

export const LabelHelperTextValue: Story = Template.bind({});
LabelHelperTextValue.args = {
  label: 'Label',
  helperText: 'Helper text',
  value: 'Value',
};
LabelHelperTextValue.storyName = 'label helperText value';

export const LabelHelperTextValueHover: Story = Template.bind({});
LabelHelperTextValueHover.args = {
  label: 'Label',
  helperText: 'Helper text',
  value: 'Value',
};
LabelHelperTextValueHover.parameters = { pseudo: { hover: true } };
LabelHelperTextValueHover.storyName = 'label helperText value :hover';

export const LabelHelperTextValueFocusVisible: Story = Template.bind({});
LabelHelperTextValueFocusVisible.args = {
  label: 'Label',
  helperText: 'Helper text',
  value: 'Value',
};
LabelHelperTextValueFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};
LabelHelperTextValueFocusVisible.storyName =
  'label helperText value :focus-visible';

export const LabelHelperTextValueDisabled: Story = Template.bind({});
LabelHelperTextValueDisabled.args = {
  label: 'Label',
  helperText: 'Helper text',
  value: 'Value',
  disabled: true,
};
LabelHelperTextValueDisabled.storyName = 'label helperText value disabled';

export const LabelHelperTextValueError: Story = Template.bind({});
LabelHelperTextValueError.args = {
  label: 'Label',
  helperText: 'Helper text',
  value: 'Value',
  error: true,
};
LabelHelperTextValueError.storyName = 'label helperText value error';

export const LabelHelperTextValueRequired: Story = Template.bind({});
LabelHelperTextValueRequired.args = {
  label: 'Label',
  helperText: 'Helper text',
  value: 'Value',
  required: true,
};
LabelHelperTextValueRequired.storyName = 'label helperText value required';

export const LabelHelperTextValueSuccess: Story = Template.bind({});
LabelHelperTextValueSuccess.args = {
  label: 'Label',
  helperText: 'Helper text',
  value: 'Value',
  success: true,
};
LabelHelperTextValueSuccess.storyName = 'label helperText value success';

export const LabelHelperTextSelect: Story = Template.bind({});
LabelHelperTextSelect.args = {
  label: 'Label',
  helperText: 'Helper text',
  value: '',
  select: true,
  children: '(MenuItem x6)',
};
LabelHelperTextSelect.storyName = 'label helperText select';

export const LabelHelperTextSelectValue: Story = Template.bind({});
LabelHelperTextSelectValue.args = {
  label: 'Label',
  helperText: 'Helper text',
  select: true,
  children: '(MenuItem x6)',
  value: 'value-1',
};
LabelHelperTextSelectValue.storyName = 'label helperText select value';

export const LabelHelperTextSelectValueDisabled: Story = Template.bind({});
LabelHelperTextSelectValueDisabled.args = {
  label: 'Label',
  helperText: 'Helper text',
  select: true,
  children: '(MenuItem x6)',
  value: 'value-1',
  disabled: true,
};
LabelHelperTextSelectValueDisabled.storyName =
  'label helperText select value disabled';

export const LabelHelperTextSelectValueError: Story = Template.bind({});
LabelHelperTextSelectValueError.args = {
  label: 'Label',
  helperText: 'Helper text',
  select: true,
  children: '(MenuItem x6)',
  value: 'value-1',
  error: true,
};
LabelHelperTextSelectValueError.storyName =
  'label helperText select value error';

export const LabelHelperTextSelectValueSuccess: Story = Template.bind({});
LabelHelperTextSelectValueSuccess.args = {
  label: 'Label',
  helperText: 'Helper text',
  select: true,
  children: '(MenuItem x6)',
  value: 'value-1',
  success: true,
};
LabelHelperTextSelectValueSuccess.storyName =
  'label helperText select value success';

export const LabelHelperTextSelectMultiple: Story = Template.bind({});
LabelHelperTextSelectMultiple.args = {
  label: 'Label',
  helperText: 'Helper text',
  value: [],
  select: true,
  children: '(MenuItem x6)',
  SelectProps: {
    multiple: true,
  },
};
LabelHelperTextSelectMultiple.storyName =
  'label helperText select multiple value=[]';

export const LabelHelperTextSelectMultipleValues: Story = Template.bind({});
LabelHelperTextSelectMultipleValues.args = {
  label: 'Label',
  helperText: 'Helper text',
  value: ['value-1', 'value-2'],
  select: true,
  children: '(MenuItem x6)',
  SelectProps: {
    multiple: true,
  },
};
LabelHelperTextSelectMultipleValues.storyName =
  'label helperText select multiple value=[...]';
