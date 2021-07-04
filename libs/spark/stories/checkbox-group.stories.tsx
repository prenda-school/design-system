import * as React from 'react';
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  FormGroup,
  Box,
} from '@material-ui/core';

export default {
  title: 'prenda-spark/CheckboxGroup',
  // component: FormGroup,
  parameters: { actions: { handles: ['change'] } },
  argTypes: {
    row: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
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
    <FormGroup {...args}>
      <FormControlLabel
        value="valueA"
        control={<Checkbox />}
        label="Option A"
      />
      <FormControlLabel
        value="valueB"
        control={<Checkbox />}
        label="Option B"
      />
      <FormControlLabel
        value="valueC"
        control={<Checkbox />}
        label="Option C"
      />
      <FormControlLabel
        value="valueD"
        disabled
        control={<Checkbox />}
        label="Option D"
      />
    </FormGroup>
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

export const Row = Template.bind({});
Row.args = { row: true };

export const RowRequired = Template.bind({});
RowRequired.args = { row: true, required: true };

export const RowError = Template.bind({});
RowError.args = { row: true, error: true };

export const RowDisabled = Template.bind({});
RowDisabled.args = { row: true, disabled: true };

function IndeterminateTemplate({ required, error, disabled, value, ...args }) {
  const [rows, setRows] = React.useState([false, true, false]);

  const handleChange = (event) => {
    const { name, checked } = event.target;

    if (name === 'allRows') {
      setRows([checked, checked, checked]);
    } else {
      setRows((prev) => {
        const next = [...prev];
        next[parseInt(name)] = checked;
        return next;
      });
    }
  };

  return (
    <FormControl
      component="fieldset"
      error={error}
      required={required}
      disabled={disabled}
    >
      <FormLabel component="legend">Table Rows</FormLabel>
      <FormGroup {...args}>
        <FormControlLabel
          control={
            <Checkbox
              name="allRows"
              checked={rows.every((row) => row)}
              indeterminate={
                rows.some((row) => row) && !rows.every((row) => row)
              }
              onChange={handleChange}
            />
          }
          label="All rows"
        />
        <Box display="flex" flexDirection="column" ml={3}>
          <FormControlLabel
            control={
              <Checkbox name="0" checked={rows[0]} onChange={handleChange} />
            }
            label="Row 0"
          />
          <FormControlLabel
            control={
              <Checkbox name="1" checked={rows[1]} onChange={handleChange} />
            }
            label="Row 1"
          />
          <FormControlLabel
            control={
              <Checkbox name="2" checked={rows[2]} onChange={handleChange} />
            }
            label="Row 2"
          />
        </Box>
      </FormGroup>
      <FormHelperText>Select the rows to view</FormHelperText>
    </FormControl>
  );
}

export const Indeterminate = IndeterminateTemplate.bind({});
Indeterminate.decorators = [(Story) => <Story />];
