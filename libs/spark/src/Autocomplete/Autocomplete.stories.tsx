import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Autocomplete,
  Checkbox,
  ListItemText,
  ListItemIcon,
  TextField,
  Tag,
} from '..';
import {
  ChangelogTemplate,
  DocumentationTemplate,
} from '../../stories/templates';
import { sparkThemeProvider } from '../../stories';

export default {
  title: '@ps/Autocomplete',
  component: Autocomplete,
  argTypes: {},
  args: {},
  decorators: [sparkThemeProvider],
} as Meta;

const reasons = [
  { value: '1', label: 'Label' },
  { value: '2', label: 'Label' },
  { value: '3', label: 'Label' },
  { value: '4', label: 'Customer service' },
  { value: '5', label: 'Label' },
  { value: '6', label: 'Too expensive' },
  { value: '7', label: 'Label' },
];

export const MultipleValuesCheckboxes: Story = (args) => (
  <Autocomplete
    multiple
    options={reasons}
    disableCloseOnSelect
    disableClearable
    getOptionLabel={({ label }) => label}
    style={{ width: 320 }}
    renderOption={(
      { value, label }: { value: string; label: string },
      { selected }
    ) => (
      <>
        <ListItemIcon>
          <Checkbox
            tabIndex={-1}
            inputProps={{ 'aria-labelledby': `label-for-${value}` }}
            checked={selected}
          />
        </ListItemIcon>
        <ListItemText id={`label-for-${value}`} primary={label} />
      </>
    )}
    renderInput={(params) => (
      <TextField
        {...params}
        label="Reasons for leaving this microschool?"
        placeholder="Reason"
      />
    )}
    renderTags={(value, getTagProps) =>
      value.map(({ label }, index) => (
        <Tag label={label} {...getTagProps({ index })} />
      ))
    }
    {...args}
  />
);

export const Documentation: Story = DocumentationTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'Autocomplete',
    href: 'https://v4.mui.com/components/autocomplete',
  },
  props: {
    extends: {
      href: 'https://v4.mui.com/api/autocomplete/#props',
    },
  },
  css: {
    extends: {
      href: 'https://v4.mui.com/api/autocomplete/#css',
    },
  },
};

export const Changelog: Story = ChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.11.0',
      versionDate: '2021-08-21',
      changes: ['Initial styling implementation.'],
    },
  ],
};
