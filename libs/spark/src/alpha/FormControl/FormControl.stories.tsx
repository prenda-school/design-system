import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { FormControlProps } from '..';
import {
  Autocomplete,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from '..';

export default {
  title: '@ps/FormControl',
  component: FormControl,
  argTypes: {
    children: {
      control: 'select',
      options: [
        '(FormLabel, Autocomplete, FormHelperText)',
        '(FormLabel, Input, FormHelperText)',
        '(FormLabel, Select, FormHelperText)',
      ],
      mapping: {
        '(FormLabel, Autocomplete, FormHelperText)': (
          <>
            <FormLabel>Label</FormLabel>
            <Autocomplete options={[]} />
            <FormHelperText>Helper text</FormHelperText>
          </>
        ),
        '(FormLabel, Input, FormHelperText)': (
          <>
            <FormLabel>Label</FormLabel>
            <Input />
            <FormHelperText>Helper text</FormHelperText>
          </>
        ),
        '(FormLabel, Select, FormHelperText)': (
          <>
            <FormLabel>Label</FormLabel>
            <Select />
            <FormHelperText>Helper text</FormHelperText>
          </>
        ),
      },
    },
  },
} as Meta;

const Template = (args) => <FormControl {...args} />;

type Story = DefaultStory<FormControlProps>;

export const DefaultChildrenAutocomplete: Story = Template.bind({});
DefaultChildrenAutocomplete.args = {
  children: '(FormLabel, Autocomplete, FormHelperText)',
};
DefaultChildrenAutocomplete.storyName =
  '(default) children=(FormLabel, Autocomplete, FormHelperText)';

export const DefaultChildrenInput: Story = Template.bind({});
DefaultChildrenInput.args = {
  children: '(FormLabel, Input, FormHelperText)',
};
DefaultChildrenInput.storyName =
  '(default) children=(FormLabel, Input, FormHelperText)';

export const DefaultChildrenSelect: Story = Template.bind({});
DefaultChildrenSelect.args = {
  children: '(FormLabel, Select, FormHelperText)',
};
DefaultChildrenSelect.storyName =
  '(default) children=(FormLabel, Select, FormHelperText)';

export const DisabledChildrenAutocomplete: Story = Template.bind({});
DisabledChildrenAutocomplete.args = {
  disabled: true,
  children: '(FormLabel, Autocomplete, FormHelperText)',
};
DisabledChildrenAutocomplete.storyName =
  'disabled children=(FormLabel, Autocomplete, FormHelperText)';

export const DisabledChildrenInput: Story = Template.bind({});
DisabledChildrenInput.args = {
  disabled: true,
  children: '(FormLabel, Input, FormHelperText)',
};
DisabledChildrenInput.storyName =
  'disabled children=(FormLabel, Input, FormHelperText)';

export const DisabledChildrenSelect: Story = Template.bind({});
DisabledChildrenSelect.args = {
  disabled: true,
  children: '(FormLabel, Select, FormHelperText)',
};
DisabledChildrenSelect.storyName =
  'disabled children=(FormLabel, Select, FormHelperText)';

export const ErrorChildrenAutocomplete: Story = Template.bind({});
ErrorChildrenAutocomplete.args = {
  error: true,
  children: '(FormLabel, Autocomplete, FormHelperText)',
};
ErrorChildrenAutocomplete.storyName =
  'error children=(FormLabel, Autocomplete, FormHelperText)';

export const ErrorChildrenInput: Story = Template.bind({});
ErrorChildrenInput.args = {
  error: true,
  children: '(FormLabel, Input, FormHelperText)',
};
ErrorChildrenInput.storyName =
  'error children=(FormLabel, Input, FormHelperText)';

export const ErrorChildrenSelect: Story = Template.bind({});
ErrorChildrenSelect.args = {
  error: true,
  children: '(FormLabel, Select, FormHelperText)',
};
ErrorChildrenSelect.storyName =
  'error children=(FormLabel, Select, FormHelperText)';

export const RequiredChildrenAutocomplete: Story = Template.bind({});
RequiredChildrenAutocomplete.args = {
  required: true,
  children: '(FormLabel, Autocomplete, FormHelperText)',
};
RequiredChildrenAutocomplete.storyName =
  'required children=(FormLabel, Autocomplete, FormHelperText)';

export const RequiredChildrenInput: Story = Template.bind({});
RequiredChildrenInput.args = {
  required: true,
  children: '(FormLabel, Input, FormHelperText)',
};
RequiredChildrenInput.storyName =
  'required children=(FormLabel, Input, FormHelperText)';

export const RequiredChildrenSelect: Story = Template.bind({});
RequiredChildrenSelect.args = {
  required: true,
  children: '(FormLabel, Select, FormHelperText)',
};
RequiredChildrenSelect.storyName =
  'required children=(FormLabel, Select, FormHelperText)';

export const SizeSmallChildrenAutocomplete: Story = Template.bind({});
SizeSmallChildrenAutocomplete.args = {
  size: 'small',
  children: '(FormLabel, Autocomplete, FormHelperText)',
};
SizeSmallChildrenAutocomplete.storyName =
  'size="small" children=(FormLabel, Autocomplete, FormHelperText)';

export const SizeSmallChildrenInput: Story = Template.bind({});
SizeSmallChildrenInput.args = {
  size: 'small',
  children: '(FormLabel, Input, FormHelperText)',
};
SizeSmallChildrenInput.storyName =
  'size="small" children=(FormLabel, Input, FormHelperText)';

export const SizeSmallChildrenSelect: Story = Template.bind({});
SizeSmallChildrenSelect.args = {
  size: 'small',
  children: '(FormLabel, Select, FormHelperText)',
};
SizeSmallChildrenSelect.storyName =
  'size="small" children=(FormLabel, Select, FormHelperText)';

export const SizeMediumChildrenAutocomplete: Story = Template.bind({});
SizeMediumChildrenAutocomplete.args = {
  size: 'medium',
  children: '(FormLabel, Autocomplete, FormHelperText)',
};
SizeMediumChildrenAutocomplete.storyName =
  'size="medium" children=(FormLabel, Autocomplete, FormHelperText)';

export const SizeMediumChildrenInput: Story = Template.bind({});
SizeMediumChildrenInput.args = {
  size: 'medium',
  children: '(FormLabel, Input, FormHelperText)',
};
SizeMediumChildrenInput.storyName =
  'size="medium" children=(FormLabel, Input, FormHelperText)';

export const SizeMediumChildrenSelect: Story = Template.bind({});
SizeMediumChildrenSelect.args = {
  size: 'medium',
  children: '(FormLabel, Select, FormHelperText)',
};
SizeMediumChildrenSelect.storyName =
  'size="medium" children=(FormLabel, Select, FormHelperText)';

export const SuccessChildrenAutocomplete: Story = Template.bind({});
SuccessChildrenAutocomplete.args = {
  success: true,
  children: '(FormLabel, Autocomplete, FormHelperText)',
};
SuccessChildrenAutocomplete.storyName =
  'success children=(FormLabel, Autocomplete, FormHelperText)';

export const SuccessChildrenInput: Story = Template.bind({});
SuccessChildrenInput.args = {
  success: true,
  children: '(FormLabel, Input, FormHelperText)',
};
SuccessChildrenInput.storyName =
  'success children=(FormLabel, Input, FormHelperText)';

export const SuccessChildrenSelect: Story = Template.bind({});
SuccessChildrenSelect.args = {
  success: true,
  children: '(FormLabel, Select, FormHelperText)',
};
SuccessChildrenSelect.storyName =
  'success children=(FormLabel, Select, FormHelperText)';
