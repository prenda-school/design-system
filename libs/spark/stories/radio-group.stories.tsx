import React from 'react';
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from '@material-ui/core';

export default {
  title: 'prenda-spark/RadioGroup',
  component: RadioGroup,
  parameters: { actions: { handles: ['change'] } },
  argTypes: {
    value: {
      control: { type: 'select' },
      options: ['valueA', 'valueB', 'valueC', 'valueD'],
    },
    defaultValue: {
      control: { type: 'select' },
      options: ['valueA', 'valueB', 'valueC', 'valueD'],
    },
    row: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    defaultValue: 'valueB',
    'aria-label': 'example group',
    name: 'exampleGroup',
    row: false,
    error: false,
    required: false,
    disabled: false,
  },
} as Meta;

const Template: Story = ({ required, error, disabled, value, ...args }) => (
  <FormControl
    component="fieldset"
    error={error}
    required={required}
    disabled={disabled}
  >
    <FormLabel component="legend">Group label</FormLabel>
    <RadioGroup value={error ? null : value} {...args}>
      <FormControlLabel value="valueA" control={<Radio />} label="Option A" />
      <FormControlLabel value="valueB" control={<Radio />} label="Option B" />
      <FormControlLabel value="valueC" control={<Radio />} label="Option C" />
      <FormControlLabel
        value="valueD"
        disabled
        control={<Radio />}
        label="Option D"
      />
    </RadioGroup>
    <FormHelperText>
      {error ? 'Please select an option' : 'Helper text'}
    </FormHelperText>
  </FormControl>
);

export const Configurable = Template.bind({});

export const Required = Template.bind({});
Required.args = { required: true };

export const Error = Template.bind({});
Error.args = { error: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Hover = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };

export const Focus = Template.bind({});
Focus.parameters = { pseudo: { focus: true } };

export const Row = Template.bind({});
Row.args = { row: true };

export const RowRequired = Template.bind({});
RowRequired.args = { row: true, required: true };

export const RowError = Template.bind({});
RowError.args = { row: true, error: true };

export const RowDisabled = Template.bind({});
RowDisabled.args = { row: true, disabled: true };

export const RowHover = Template.bind({});
RowHover.args = { row: true };
RowHover.parameters = { pseudo: { hover: true } };

export const RowFocus = Template.bind({});
RowFocus.args = { row: true };
RowFocus.parameters = { pseudo: { focus: true } };
