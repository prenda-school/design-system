import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Autocomplete, AutocompleteProps } from '..';
import {
  containBoxShadow,
  enableHooks,
  Gear,
  sparkThemeProvider,
  statefulValue,
} from '../../../stories';

const options_empty = [];

const options_one = ['Value'];

const options_string = [
  'value-1',
  'value-2',
  'value-3',
  'value-4',
  'value-5',
  'value-6',
];

const options_object = [
  {
    value: 'value-1',
    label: 'Label 1',
  },
  {
    value: 'value-2',
    label: 'Label 2',
  },
  {
    value: 'value-3',
    label: 'Label 3',
  },
  {
    value: 'value-4',
    label: 'Label 4',
  },
  {
    value: 'value-5',
    label: 'Label 5',
  },
  {
    value: 'value-6',
    label: 'Label 6',
  },
];

const options_alpha = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'cookie',
    label: 'Cookie',
  },
  {
    value: 'cherry',
    label: 'Cherry',
  },
  {
    value: 'fig',
    label: 'Fig',
  },
  {
    value: 'grapes',
    label: 'Grapes',
  },
];

type ObjectOption = typeof options_object[number];

export default {
  title: '@ps/Autocomplete',
  component: Autocomplete,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [statefulValue, enableHooks, containBoxShadow],
  argTypes: {
    options: {
      control: 'select',
      options: ['[]', '[..1]', '[..string]', '[..object]', '[..alpha]'],
      mapping: {
        '[]': options_empty,
        '[..1]': options_one,
        '[..string]': options_string,
        '[..object]': options_object,
        '[..alpha]': options_alpha,
      },
    },
    getOptionLabel: {
      control: 'select',
      options: ['undefined', '..fn'],
      mapping: {
        undefined: undefined,
        '..fn': (option) => option.label,
      },
    },
    groupBy: {
      control: 'select',
      options: ['undefined', '(alpha)'],
      mapping: {
        undefined: undefined,
        '(alpha)': (option) => option.label.charAt(0),
      },
    },
    InputProps: {
      control: 'select',
      options: [
        'undefined',
        '{ leadingEl: $ }',
        '{ leadingEl: <Gear /> }',
        '{ placeholder }',
        '{ placeholder, leadingEl: $ }',
        '{ placeholder, leadingEl: <Gear /> }',
      ],
      mapping: {
        undefined: undefined,
        '{ leadingEl: $ }': { leadingEl: '$' },
        '{ leadingEl: <Gear /> }': { leadingEl: <Gear /> },
        '{ placeholder }': { placeholder: 'Placeholder' },
        '{ placeholder, leadingEl: $ }': {
          placeholder: 'Placeholder',
          leadingEl: '$',
        },
        '{ placeholder, leadingEl: <Gear /> }': {
          placeholder: 'Placeholder',
          leadingEl: <Gear />,
        },
      },
    },
  },
  args: {
    // start component as "controlled"
    value: null,
    options: '[..string]',
    getOptionLabel: 'undefined',
    groupBy: 'undefined',
    InputProps: 'undefined',
  },
} as Meta;

const Template = (args) => <Autocomplete {...args} />;

type WithStoryPresets<T> = Omit<
  T,
  'options' | 'getOptionLabel' | 'groupBy' | 'InputProps'
> & {
  options?: '[]' | '[..1]' | '[..string]' | '[..object]' | '[..alpha]';
  getOptionLabel?: 'undefined' | '..fn';
  groupBy?: 'undefined' | '(alpha)';
  InputProps?:
    | '{ leadingEl: $ }'
    | '{ leadingEl: <Gear /> }'
    | '{ placeholder }'
    | '{ placeholder, leadingEl: $ }'
    | '{ placeholder, leadingEl: <Gear /> }';
};

type StoryAutocomplete<
  T = string,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
> = DefaultStory<
  WithStoryPresets<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>>
>;

export const Default: StoryAutocomplete = Template.bind({});
Default.storyName = '(default)';

export const STP: StoryAutocomplete = Template.bind({});
STP.decorators = [sparkThemeProvider];
STP.storyName = '(STP)';

export const Hover: StoryAutocomplete = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };
Hover.storyName = ':hover';

export const FocusVisible: StoryAutocomplete = Template.bind({});
FocusVisible.parameters = { pseudo: { focusVisible: true } };
FocusVisible.storyName = ':focus-visible';

export const Disabled: StoryAutocomplete = Template.bind({});
Disabled.args = { disabled: true };
Disabled.storyName = 'disabled';

export const DisabledHover: StoryAutocomplete = Template.bind({});
DisabledHover.args = { disabled: true };
DisabledHover.parameters = { pseudo: { hover: true } };
DisabledHover.storyName = 'disabled :hover';

export const Error: StoryAutocomplete = Template.bind({});
Error.args = { error: true };
Error.storyName = 'error';

export const FullWidth: StoryAutocomplete = Template.bind({});
FullWidth.args = { fullWidth: true };
FullWidth.storyName = 'fullWidth';

export const InputPropsLeadingEl: StoryAutocomplete = Template.bind({});
InputPropsLeadingEl.args = { InputProps: '{ leadingEl: <Gear /> }' };
InputPropsLeadingEl.storyName = 'InputProps.leadingEl';

export const InputPropsPlaceholder: StoryAutocomplete = Template.bind({});
InputPropsPlaceholder.args = { InputProps: '{ placeholder }' };
InputPropsPlaceholder.storyName = 'InputProps.placeholder';

export const InputPropsPlaceholderLeadingEl: StoryAutocomplete = Template.bind(
  {}
);
InputPropsPlaceholderLeadingEl.args = {
  InputProps: '{ placeholder, leadingEl: <Gear /> }',
};
InputPropsPlaceholderLeadingEl.storyName = 'InputProps.placeholder,leadingEl';

export const SizeSmall: StoryAutocomplete = Template.bind({});
SizeSmall.args = { size: 'small' };
SizeSmall.storyName = 'size="small"';

export const Success: StoryAutocomplete = Template.bind({});
Success.args = { success: true };
Success.storyName = 'success';

// options primitive

export const OptionsPrimitiveValue: StoryAutocomplete = Template.bind({});
OptionsPrimitiveValue.args = {
  options: '[..string]',
  value: 'value-1',
};
OptionsPrimitiveValue.storyName = 'value';

export const OptionsPrimitiveValueInputPropsLeadingEl: StoryAutocomplete =
  Template.bind({});
OptionsPrimitiveValueInputPropsLeadingEl.args = {
  options: '[..string]',
  value: 'value-1',
  InputProps: '{ leadingEl: <Gear /> }',
};
OptionsPrimitiveValueInputPropsLeadingEl.storyName =
  'value InputProps.leadingEl';

export const OptionsPrimitiveInputValue: StoryAutocomplete = Template.bind({});
OptionsPrimitiveInputValue.args = {
  options: '[..string]',
  inputValue: 'Input value',
};
OptionsPrimitiveInputValue.storyName = 'inputValue';

export const OptionsPrimitiveValueInputValueInputPropsLeadingEl: StoryAutocomplete =
  Template.bind({});
OptionsPrimitiveValueInputValueInputPropsLeadingEl.args = {
  options: '[..string]',
  inputValue: 'Input value',
  InputProps: '{ leadingEl: <Gear /> }',
};
OptionsPrimitiveValueInputValueInputPropsLeadingEl.storyName =
  'inputValue InputProps.leadingEl';

export const OptionsPrimitiveInputValueSizeSmall: StoryAutocomplete =
  Template.bind({});
OptionsPrimitiveInputValueSizeSmall.args = {
  options: '[..string]',
  inputValue: 'Input value',
  size: 'small',
};
OptionsPrimitiveInputValueSizeSmall.storyName = 'inputValue size=small';

export const OptionsPrimitiveInputValueSizeSmallInputPropsLeadingEl: StoryAutocomplete =
  Template.bind({});
OptionsPrimitiveInputValueSizeSmallInputPropsLeadingEl.args = {
  options: '[..string]',
  inputValue: 'Input value',
  size: 'small',
  InputProps: '{ leadingEl: <Gear /> }',
};
OptionsPrimitiveInputValueSizeSmallInputPropsLeadingEl.storyName =
  'inputValue size=small InputProps.leadingEl';

// multiple

export const OptionsPrimitiveMultipleValue0: StoryAutocomplete<string, true> =
  Template.bind({});
OptionsPrimitiveMultipleValue0.args = {
  options: '[..string]',
  multiple: true,
  value: [],
};
OptionsPrimitiveMultipleValue0.storyName = 'multiple value=[]';

export const OptionsPrimitiveMultipleValue1: StoryAutocomplete<string, true> =
  Template.bind({});
OptionsPrimitiveMultipleValue1.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
};
OptionsPrimitiveMultipleValue1.storyName = 'multiple value=[..1]';

export const OptionsPrimitiveMultipleValue1SizeSmall: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue1SizeSmall.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  size: 'small',
};
OptionsPrimitiveMultipleValue1SizeSmall.storyName =
  'multiple value=[..1] size="small"';

export const OptionsPrimitiveMultipleValue1InputPropsLeadingEl: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue1InputPropsLeadingEl.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  InputProps: '{ leadingEl: <Gear /> }',
};
OptionsPrimitiveMultipleValue1InputPropsLeadingEl.storyName =
  'multiple value=[..1] InputProps.leadingEl';

export const OptionsPrimitiveMultipleValue1Disabled: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue1Disabled.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  disabled: true,
};
OptionsPrimitiveMultipleValue1Disabled.storyName =
  'multiple value=[..1] disabled';

export const OptionsPrimitiveMultipleValue1InputValue: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue1InputValue.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  inputValue: 'Input value',
};
OptionsPrimitiveMultipleValue1InputValue.storyName =
  'multiple value=[..1] inputValue';

export const OptionsPrimitiveMultipleValue1InputValueInputPropsLeadingEl: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue1InputValueInputPropsLeadingEl.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  inputValue: 'Input value',
  InputProps: '{ leadingEl: <Gear /> }',
};
OptionsPrimitiveMultipleValue1InputValueInputPropsLeadingEl.storyName =
  'multiple value=[..1] inputValue InputProps.leadingEl';

export const OptionsPrimitiveMultipleValue1InputValueSizeSmall: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue1InputValueSizeSmall.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  inputValue: 'Input value',
  size: 'small',
};
OptionsPrimitiveMultipleValue1InputValueSizeSmall.storyName =
  'multiple value=[..1] inputValue size=small';

export const OptionsPrimitiveMultipleValue1InputValueSizeSmallInputPropsLeadingEl: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue1InputValueSizeSmallInputPropsLeadingEl.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  inputValue: 'Input value',
  size: 'small',
  InputProps: '{ leadingEl: <Gear /> }',
};
OptionsPrimitiveMultipleValue1InputValueSizeSmallInputPropsLeadingEl.storyName =
  'multiple value=[..1] inputValue size=small InputProps.leadingEl';

export const OptionsPrimitiveMultipleValue2: StoryAutocomplete<string, true> =
  Template.bind({});
OptionsPrimitiveMultipleValue2.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2'],
};
OptionsPrimitiveMultipleValue2.storyName = 'multiple value=[..2]';

export const OptionsPrimitiveMultipleValue2InputValue: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue2InputValue.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2'],
  inputValue: 'Input value',
};
OptionsPrimitiveMultipleValue2InputValue.storyName =
  'multiple value=[..2] inputValue';

export const OptionsPrimitiveMultipleValue2InputValueSizeSmall: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue2InputValueSizeSmall.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2'],
  inputValue: 'Input value',
  size: 'small',
};
OptionsPrimitiveMultipleValue2InputValueSizeSmall.storyName =
  'multiple value=[..2] inputValue size=small';

export const OptionsPrimitiveMultipleValue3: StoryAutocomplete<string, true> =
  Template.bind({});
OptionsPrimitiveMultipleValue3.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
};
OptionsPrimitiveMultipleValue3.storyName = 'multiple value=[..3]';

export const OptionsPrimitiveMultipleValue3InputValue: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue3InputValue.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  inputValue: 'Input value',
};
OptionsPrimitiveMultipleValue3InputValue.storyName =
  'multiple value=[..3] inputValue';

export const OptionsPrimitiveMultipleValue3InputValueDisableClearable: StoryAutocomplete<
  string,
  true,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue3InputValueDisableClearable.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  inputValue: 'Input value',
  disableClearable: true,
};
OptionsPrimitiveMultipleValue3InputValueDisableClearable.storyName =
  'multiple value=[..3] inputValue disableClearable';

export const OptionsPrimitiveMultipleValue3InputValueSizeSmall: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue3InputValueSizeSmall.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  inputValue: 'Input value',
  size: 'small',
};
OptionsPrimitiveMultipleValue3InputValueSizeSmall.storyName =
  'multiple value=[..3] inputValue size=small';

export const OptionsPrimitiveMultipleValue3Limit1: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue3Limit1.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  multipleValueVisibleLimit: 1,
};
OptionsPrimitiveMultipleValue3Limit1.storyName =
  'multiple value=[..3] limit..=1';

export const OptionsPrimitiveMultipleValue3Limit1WhenFocused: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue3Limit1WhenFocused.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  multipleValueVisibleLimit: 1,
  multipleValueVisibleLimitWhenFocused: true,
};
OptionsPrimitiveMultipleValue3Limit1WhenFocused.storyName =
  'multiple value=[..3] limit..=1 limit..WhenFocused';

export const OptionsPrimitiveMultipleValue3Limit1InputValue: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue3Limit1InputValue.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  multipleValueVisibleLimit: 1,
  inputValue: 'Input value',
};
OptionsPrimitiveMultipleValue3Limit1InputValue.storyName =
  'multiple value=[..3] limit..=1 inputValue';

export const OptionsPrimitiveMultipleValue3Limit2InputValueSizeSmall: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue3Limit2InputValueSizeSmall.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  multipleValueVisibleLimit: 2,
  inputValue: 'Input value',
  size: 'small',
};
OptionsPrimitiveMultipleValue3Limit2InputValueSizeSmall.storyName =
  'multiple value=[..3] limit..=2 inputValue size=small';

export const OptionsPrimitiveMultipleValue3Limit2WhenFocusedSizeSmall: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue3Limit2WhenFocusedSizeSmall.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  multipleValueVisibleLimit: 2,
  size: 'small',
  multipleValueVisibleLimitWhenFocused: true,
};
OptionsPrimitiveMultipleValue3Limit2WhenFocusedSizeSmall.storyName =
  'multiple value=[..3] limit..=2 limit..WhenFocused inputValue size=small';

export const OptionsPrimitiveMultipleValue3NoWrap: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OptionsPrimitiveMultipleValue3NoWrap.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  noWrap: true,
};
OptionsPrimitiveMultipleValue3NoWrap.storyName = 'multiple value=[..3] noWrap';

// open (0, 1, primitive multiple, checkboxes)

export const OpenNoOptions: StoryAutocomplete = Template.bind({});
OpenNoOptions.args = {
  options: '[]',
  open: true,
};
OpenNoOptions.storyName = 'open options=[] open';

export const OpenNoOptionsLoadingOptions: StoryAutocomplete = Template.bind({});
OpenNoOptionsLoadingOptions.args = {
  options: '[]',
  loadingOptions: true,
  open: true,
};
OpenNoOptionsLoadingOptions.storyName = 'open options=[] loadingOptions';

export const OpenOptions1: StoryAutocomplete = Template.bind({});
OpenOptions1.args = {
  options: '[..1]',
  open: true,
};
OpenOptions1.storyName = 'open options=[..1]';

export const OpenOptionsPrimitiveMultipleValue1: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OpenOptionsPrimitiveMultipleValue1.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  open: true,
};
OpenOptionsPrimitiveMultipleValue1.storyName = 'open multiple value=[..1]';

export const OpenCheckboxesOptionsPrimitiveMultipleValue2: StoryAutocomplete<
  string,
  true
> = Template.bind({});
OpenCheckboxesOptionsPrimitiveMultipleValue2.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2'],
  open: true,
  checkboxes: true,
};
OpenCheckboxesOptionsPrimitiveMultipleValue2.storyName =
  'open checkboxes multiple value=[..2]';

// tags

export const TagsOptionsPrimitiveMultipleValue1: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue1.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  tags: true,
};
TagsOptionsPrimitiveMultipleValue1.storyName = 'tags multiple value=[..1]';

export const TagsOptionsPrimitiveMultipleValue1InputPropsLeadingEl: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue1InputPropsLeadingEl.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  tags: true,
  InputProps: '{ leadingEl: <Gear /> }',
};
TagsOptionsPrimitiveMultipleValue1InputPropsLeadingEl.storyName =
  'tags multiple value=[..1] InputProps.leadingEl';

export const TagsOptionsPrimitiveMultipleValue1SizeSmall: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue1SizeSmall.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  tags: true,
  size: 'small',
};
TagsOptionsPrimitiveMultipleValue1SizeSmall.storyName =
  'tags multiple value=[..1] size="small"';

export const TagsOptionsPrimitiveMultipleValue1Disabled: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue1Disabled.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  disabled: true,
  tags: true,
};
TagsOptionsPrimitiveMultipleValue1Disabled.storyName =
  'tags multiple value=[..1] disabled';

export const TagsOptionsPrimitiveMultipleValue1InputValue: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue1InputValue.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  inputValue: 'Input value',
  tags: true,
};
TagsOptionsPrimitiveMultipleValue1InputValue.storyName =
  'tags multiple value=[..1] inputValue';

export const TagsOptionsPrimitiveMultipleValue1InputValueInputPropsLeadingEl: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue1InputValueInputPropsLeadingEl.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  inputValue: 'Input value',
  tags: true,
  InputProps: '{ leadingEl: <Gear /> }',
};
TagsOptionsPrimitiveMultipleValue1InputValueInputPropsLeadingEl.storyName =
  'tags multiple value=[..1] inputValue InputProps.leadingEl';

export const TagsOptionsPrimitiveMultipleValue1InputValueSizeSmall: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue1InputValueSizeSmall.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1'],
  inputValue: 'Input value',
  size: 'small',
  tags: true,
};
TagsOptionsPrimitiveMultipleValue1InputValueSizeSmall.storyName =
  'tags multiple value=[..1] inputValue size=small';

export const TagsOptionsPrimitiveMultipleValue1InputValueSizeSmallInputPropsLeadingEl: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue1InputValueSizeSmallInputPropsLeadingEl.args =
  {
    options: '[..string]',
    multiple: true,
    value: ['value-1'],
    inputValue: 'Input value',
    size: 'small',
    tags: true,
    InputProps: '{ leadingEl: <Gear /> }',
  };
TagsOptionsPrimitiveMultipleValue1InputValueSizeSmallInputPropsLeadingEl.storyName =
  'tags multiple value=[..1] inputValue size=small InputProps.leadingEl';

export const TagsOptionsPrimitiveMultipleValue2: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue2.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2'],
  tags: true,
};
TagsOptionsPrimitiveMultipleValue2.storyName = 'tags multiple value=[..2]';

export const TagsOptionsPrimitiveMultipleValue2InputValue: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue2InputValue.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2'],
  inputValue: 'Input value',
  tags: true,
};
TagsOptionsPrimitiveMultipleValue2InputValue.storyName =
  'tags multiple value=[..2] inputValue';

export const TagsOptionsPrimitiveMultipleValue2InputValueSizeSmall: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue2InputValueSizeSmall.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2'],
  inputValue: 'Input value',
  size: 'small',
  tags: true,
};
TagsOptionsPrimitiveMultipleValue2InputValueSizeSmall.storyName =
  'tags multiple value=[..2] inputValue size=small';

export const TagsOptionsPrimitiveMultipleValue3: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue3.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  tags: true,
};
TagsOptionsPrimitiveMultipleValue3.storyName = 'tags multiple value=[..3]';

export const TagsOptionsPrimitiveMultipleValue3Limit1: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue3Limit1.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  multipleValueVisibleLimit: 1,
  tags: true,
};
TagsOptionsPrimitiveMultipleValue3Limit1.storyName =
  'tags multiple value=[..3] limit..=1';

export const TagsOptionsPrimitiveMultipleValue3Limit1InputValue: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue3Limit1InputValue.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  multipleValueVisibleLimit: 1,
  inputValue: 'Input value',
  tags: true,
};
TagsOptionsPrimitiveMultipleValue3Limit1InputValue.storyName =
  'tags multiple value=[..3] limit..=1 inputValue';

export const TagsOptionsPrimitiveMultipleValue3Limit2InputValueSizeSmall: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue3Limit2InputValueSizeSmall.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  multipleValueVisibleLimit: 2,
  inputValue: 'Input value',
  size: 'small',
  tags: true,
};
TagsOptionsPrimitiveMultipleValue3Limit2InputValueSizeSmall.storyName =
  'tags multiple value=[..3] limit..=2 inputValue size=small';

export const TagsOptionsPrimitiveMultipleValue3NoWrap: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue3NoWrap.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  tags: true,
  noWrap: true,
};
TagsOptionsPrimitiveMultipleValue3NoWrap.storyName =
  'tags multiple value=[..3] noWrap';

export const TagsOptionsPrimitiveMultipleValue3NoWrapLimit2WhenFocused: StoryAutocomplete<
  string,
  true
> = Template.bind({});
TagsOptionsPrimitiveMultipleValue3NoWrapLimit2WhenFocused.args = {
  options: '[..string]',
  multiple: true,
  value: ['value-1', 'value-2', 'value-3'],
  tags: true,
  noWrap: true,
  multipleValueVisibleLimit: 2,
  multipleValueVisibleLimitWhenFocused: true,
};
TagsOptionsPrimitiveMultipleValue3NoWrapLimit2WhenFocused.storyName =
  'tags multiple value=[..3] noWrap limit..=2 limit..WhenFocused';

// options=[..object] (free solo, disable clearable)

export const OptionsObjectValue: StoryAutocomplete<ObjectOption> =
  Template.bind({});
OptionsObjectValue.args = {
  options: '[..object]',
  getOptionLabel: '..fn',
  value: options_object[0],
};
OptionsObjectValue.storyName = '(label) value';

export const OptionsObjectMultipleValue2: StoryAutocomplete<
  ObjectOption,
  true
> = Template.bind({});
OptionsObjectMultipleValue2.args = {
  options: '[..object]',
  getOptionLabel: '..fn',
  multiple: true,
  value: [options_object[0], options_object[1]],
};
OptionsObjectMultipleValue2.storyName = '(label) multiple value=[..2]';

// options alpha (free solo, disable clearable)

export const OptionsAlphaDisableClearable: StoryAutocomplete<
  ObjectOption,
  false,
  true,
  false
> = Template.bind({});
OptionsAlphaDisableClearable.args = {
  options: '[..alpha]',
  getOptionLabel: '..fn',
  value: options_alpha[0],
  disableClearable: true,
};
OptionsAlphaDisableClearable.storyName = '(alpha) disableClearable';

export const OptionsAlphaFreeSolo: StoryAutocomplete<
  ObjectOption,
  false,
  false,
  true
> = Template.bind({});
OptionsAlphaFreeSolo.args = {
  options: '[..alpha]',
  getOptionLabel: '..fn',
  freeSolo: true,
};
OptionsAlphaFreeSolo.storyName = '(alpha) freeSolo';

export const OptionsAlphaFreeSoloDisableClearable: StoryAutocomplete<
  ObjectOption,
  false,
  true,
  true
> = Template.bind({});
OptionsAlphaFreeSoloDisableClearable.args = {
  options: '[..alpha]',
  getOptionLabel: '..fn',
  freeSolo: true,
  disableClearable: true,
};
OptionsAlphaFreeSoloDisableClearable.storyName =
  '(alpha) freeSolo disableClearable';

export const OptionsAlphaOpenGroupBy: StoryAutocomplete = Template.bind({});
OptionsAlphaOpenGroupBy.args = {
  options: '[..alpha]',
  getOptionLabel: '..fn',
  open: true,
  groupBy: '(alpha)',
};
OptionsAlphaOpenGroupBy.storyName = '(alpha) open groupBy=(alpha)';
