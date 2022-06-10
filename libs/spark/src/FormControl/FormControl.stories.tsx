import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormControlProps,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '..';
import { sparkThemeProvider } from '../../stories';

export const SbFormControl = (props: FormControlProps) => (
  <FormControl {...props} />
);

export default {
  title: '@ps/FormControl',
  component: SbFormControl,
  excludeStories: ['SbFormControl'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [sparkThemeProvider],
} as Meta;

const CheckboxGroupTemplate = ({
  required,
  error,
  disabled,
  value,
  ...args
}) => (
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

export const CheckboxGroup: Story = CheckboxGroupTemplate.bind({});
CheckboxGroup.storyName = 'Checkbox Group';

const CheckboxGroupStatesTemplate = ({ row, pseudo }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <FormControl component="fieldset">
      <FormLabel component="legend">Group label</FormLabel>
      <FormGroup row={row}>
        <FormControlLabel control={<Checkbox />} label="Option A" />
        <FormControlLabel control={<Checkbox />} label="Option B" />
        <FormControlLabel control={<Checkbox />} label="Option C" />
        <FormControlLabel control={<Checkbox />} label="Option D" />
      </FormGroup>
      <FormHelperText>Helper text</FormHelperText>
    </FormControl>
    <FormControl component="fieldset" error>
      <FormLabel component="legend">Group label</FormLabel>
      <FormGroup row={row}>
        <FormControlLabel control={<Checkbox />} label="Option A" />
        <FormControlLabel control={<Checkbox />} label="Option B" />
        <FormControlLabel control={<Checkbox />} label="Option C" />
        <FormControlLabel control={<Checkbox />} label="Option D" />
      </FormGroup>
      <FormHelperText>Please select an option</FormHelperText>
    </FormControl>
    <FormControl component="fieldset" required>
      <FormLabel component="legend">Group label</FormLabel>
      <FormGroup row={row}>
        <FormControlLabel control={<Checkbox />} label="Option A" />
        <FormControlLabel control={<Checkbox />} label="Option B" />
        <FormControlLabel control={<Checkbox />} label="Option C" />
        <FormControlLabel control={<Checkbox />} label="Option D" />
      </FormGroup>
      <FormHelperText>Please select an option</FormHelperText>
    </FormControl>
    {pseudo ? null : (
      <FormControl component="fieldset" disabled>
        <FormLabel component="legend">Group label</FormLabel>
        <FormGroup row={row}>
          <FormControlLabel control={<Checkbox />} label="Option A" />
          <FormControlLabel control={<Checkbox />} label="Option B" />
          <FormControlLabel control={<Checkbox />} label="Option C" />
          <FormControlLabel control={<Checkbox />} label="Option D" />
        </FormGroup>
        <FormHelperText>Please select an option</FormHelperText>
      </FormControl>
    )}
  </div>
);

export const CheckboxGroupColumnStates: Story = CheckboxGroupStatesTemplate.bind(
  {}
);
CheckboxGroupColumnStates.storyName = 'Checkbox Group, states, column';

export const CheckboxGroupColumnStatesHover: Story = CheckboxGroupStatesTemplate.bind(
  {}
);
CheckboxGroupColumnStatesHover.storyName =
  'Checkbox Group, states, column, hover';
CheckboxGroupColumnStatesHover.args = { pseudo: true };
CheckboxGroupColumnStatesHover.parameters = { pseudo: { hover: true } };

export const CheckboxGroupColumnStatesFocus: Story = CheckboxGroupStatesTemplate.bind(
  {}
);
CheckboxGroupColumnStatesFocus.storyName =
  'Checkbox Group, states, column, focus';
CheckboxGroupColumnStatesFocus.args = { pseudo: true };
CheckboxGroupColumnStatesFocus.parameters = { pseudo: { focusVisible: true } };

export const CheckboxGroupRowStates: Story = CheckboxGroupStatesTemplate.bind(
  {}
);
CheckboxGroupRowStates.storyName = 'Checkbox Group, states, row';
CheckboxGroupRowStates.args = { row: true };

export const CheckboxGroupRowStatesHover: Story = CheckboxGroupStatesTemplate.bind(
  {}
);
CheckboxGroupRowStatesHover.storyName = 'Checkbox Group, states, row, hover';
CheckboxGroupRowStatesHover.args = { pseudo: true, row: true };
CheckboxGroupRowStatesHover.parameters = { pseudo: { hover: true } };

export const CheckboxGroupRowStatesFocus: Story = CheckboxGroupStatesTemplate.bind(
  {}
);
CheckboxGroupRowStatesFocus.storyName = 'Checkbox Group, states, row, focus';
CheckboxGroupRowStatesFocus.args = { pseudo: true, row: true };
CheckboxGroupRowStatesFocus.parameters = { pseudo: { focusVisible: true } };

const CheckboxGroupIndeterminateTemplate = ({
  required,
  error,
  disabled,
  value,
  ...args
}) => {
  const [rows, setRows] = useState([false, true, false]);

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
};

export const CheckboxGroupIndeterminate: Story = CheckboxGroupIndeterminateTemplate.bind(
  {}
);
CheckboxGroupIndeterminate.storyName = 'Checkbox Group, indeterminate';
CheckboxGroupIndeterminate.decorators = [(Story) => <Story />];
