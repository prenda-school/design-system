import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import FormControl from '../FormControl';
import FormControlLabel from '../FormControlLabel';
import FormHelperText from '../FormHelperText';
import FormLabel from '../FormLabel';
import Radio from '../Radio';
import { default as RadioGroup, RadioGroupProps } from './RadioGroup';
import { DocumentationTemplate } from '../../stories/templates';

export const TypedRadioGroup = (props: RadioGroupProps) => (
  <RadioGroup {...props} />
);

export default {
  title: 'Packages/@ps/RadioGroup',
  component: TypedRadioGroup,
  excludeStories: ['TypedRadioGroup'],
  parameters: { actions: { handles: ['change'] } },
  // Doesn't pickup props
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

const StatesTemplate: Story = ({ row, pseudo }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <FormControl component="fieldset">
      <FormLabel component="legend">Group label</FormLabel>
      <RadioGroup row={row}>
        <FormControlLabel value="valueA" control={<Radio />} label="Option A" />
        <FormControlLabel value="valueB" control={<Radio />} label="Option B" />
        <FormControlLabel value="valueC" control={<Radio />} label="Option C" />
        <FormControlLabel value="valueD" control={<Radio />} label="Option D" />
      </RadioGroup>
      <FormHelperText>Helper text</FormHelperText>
    </FormControl>
    <FormControl component="fieldset" error>
      <FormLabel component="legend">Group label</FormLabel>
      <RadioGroup row={row}>
        <FormControlLabel value="valueA" control={<Radio />} label="Option A" />
        <FormControlLabel value="valueB" control={<Radio />} label="Option B" />
        <FormControlLabel value="valueC" control={<Radio />} label="Option C" />
        <FormControlLabel value="valueD" control={<Radio />} label="Option D" />
      </RadioGroup>
      <FormHelperText>Please select an option</FormHelperText>
    </FormControl>
    <FormControl component="fieldset" required>
      <FormLabel component="legend">Group label</FormLabel>
      <RadioGroup row={row}>
        <FormControlLabel value="valueA" control={<Radio />} label="Option A" />
        <FormControlLabel value="valueB" control={<Radio />} label="Option B" />
        <FormControlLabel value="valueC" control={<Radio />} label="Option C" />
        <FormControlLabel value="valueD" control={<Radio />} label="Option D" />
      </RadioGroup>
      <FormHelperText>Please select an option</FormHelperText>
    </FormControl>
    {pseudo ? null : (
      <FormControl component="fieldset" disabled>
        <FormLabel component="legend">Group label</FormLabel>
        <RadioGroup row={row}>
          <FormControlLabel
            value="valueA"
            control={<Radio />}
            label="Option A"
          />
          <FormControlLabel
            value="valueB"
            control={<Radio />}
            label="Option B"
          />
          <FormControlLabel
            value="valueC"
            control={<Radio />}
            label="Option C"
          />
          <FormControlLabel
            value="valueD"
            control={<Radio />}
            label="Option D"
          />
        </RadioGroup>
        <FormHelperText>Please select an option</FormHelperText>
      </FormControl>
    )}
  </div>
);

export const ColumnStates = StatesTemplate.bind({});

export const ColumnStatesHover = StatesTemplate.bind({});
ColumnStatesHover.args = { pseudo: true };
ColumnStatesHover.parameters = { pseudo: { hover: true } };

export const ColumnStatesFocus = StatesTemplate.bind({});
ColumnStatesFocus.args = { pseudo: true };
ColumnStatesFocus.parameters = { pseudo: { focus: true } };

export const RowStates = StatesTemplate.bind({});
RowStates.args = { row: true };

export const RowStatesHover = StatesTemplate.bind({});
RowStatesHover.args = { pseudo: true, row: true };
RowStatesHover.parameters = { pseudo: { hover: true } };

export const RowStatesFocus = StatesTemplate.bind({});
RowStatesFocus.args = { pseudo: true, row: true };
RowStatesFocus.parameters = { pseudo: { focus: true } };

export const Documentation = DocumentationTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'RadioGroup',
    href: 'https://v4.mui.com/components/radio-buttons/#radiogroup',
  },
  props: {
    extends: {
      href: 'https://v4.mui.com/api/radio-group/#props',
    },
  },
  css: {
    extends: {
      href: 'https://v4.mui.com/api/radio-group/#css',
    },
  },
  note:
    'Looking for a group of checkboxes? Checkout the FormControl component stories.',
};
