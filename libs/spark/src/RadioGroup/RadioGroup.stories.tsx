import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  FormControl,
  FormControlProps,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from '..';
import { DocumentationTemplate } from '../../stories/templates';

interface SbRadioGroupProps extends RadioGroupProps {
  ['aria-label']?: RadioGroupProps['aria-label'];
  defaultValue?: RadioGroupProps['defaultValue'];
  name?: RadioGroupProps['name'];
  onChange?: RadioGroupProps['onChange'];
  row?: RadioGroupProps['row'];
  value?: RadioGroupProps['value'];
  /**
   * **[Storybook-only:** passed to parent `FormControl`.**]**
   */
  sb_FormControl_disabled?: FormControlProps['disabled'];
  /**
   * **[Storybook-only:** passed to parent `FormControl`.**]**
   */
  sb_FormControl_error?: FormControlProps['error'];
  /**
   * **[Storybook-only:** passed to parent `FormControl`.**]**
   */
  sb_FormControl_required?: FormControlProps['required'];
}

export const SbRadioGroup = ({
  sb_FormControl_disabled,
  sb_FormControl_error,
  sb_FormControl_required,
  ...other
}: SbRadioGroupProps) => <RadioGroup {...other} />;

export default {
  title: '@ps/RadioGroup',
  component: SbRadioGroup,
  excludeStories: ['SbRadioGroup'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    value: {
      control: 'select',
      options: ['valueA', 'valueB', 'valueC', 'valueD'],
    },
    defaultValue: {
      control: 'select',
      options: ['valueA', 'valueB', 'valueC', 'valueD'],
    },
  },
  args: {
    defaultValue: 'valueB',
    'aria-label': 'example group',
    name: 'exampleGroup',
  },
} as Meta;

const Template = ({
  sb_FormControl_required,
  sb_FormControl_error,
  sb_FormControl_disabled,
  value,
  ...args
}) => (
  <FormControl
    component="fieldset"
    error={sb_FormControl_error}
    required={sb_FormControl_required}
    disabled={sb_FormControl_disabled}
  >
    <FormLabel component="legend">Group label</FormLabel>
    <RadioGroup value={sb_FormControl_error ? null : value} {...args}>
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
      {sb_FormControl_error ? 'Please select an option' : 'Helper text'}
    </FormHelperText>
  </FormControl>
);

export const Configurable: Story = Template.bind({});

const StatesTemplate = ({ row, pseudo }) => (
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

export const ColumnStates: Story = StatesTemplate.bind({});

export const ColumnStatesHover: Story = StatesTemplate.bind({});
ColumnStatesHover.args = { pseudo: true };
ColumnStatesHover.parameters = { pseudo: { hover: true } };

export const ColumnStatesFocus: Story = StatesTemplate.bind({});
ColumnStatesFocus.args = { pseudo: true };
ColumnStatesFocus.parameters = { pseudo: { focusVisible: true } };

export const RowStates: Story = StatesTemplate.bind({});
RowStates.args = { row: true };

export const RowStatesHover: Story = StatesTemplate.bind({});
RowStatesHover.args = { pseudo: true, row: true };
RowStatesHover.parameters = { pseudo: { hover: true } };

export const RowStatesFocus: Story = StatesTemplate.bind({});
RowStatesFocus.args = { pseudo: true, row: true };
RowStatesFocus.parameters = { pseudo: { focusVisible: true } };

export const Documentation: Story = DocumentationTemplate.bind({});
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
