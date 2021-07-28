import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Checkbox, FormControlLabel } from '../src';

export default {
  title: 'prenda-spark/Checkbox',
  component: Checkbox,
  parameters: { actions: { handles: ['change'] } },
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {},
} as Meta;

const Template: Story = (args) => (
  <Checkbox
    // a11y required props when there's no label
    name="Demo"
    value="value"
    inputProps={{ 'aria-label': 'Value' }}
    {...args}
  />
);

export const Configurable = Template.bind({});

const StatesTemplate: Story = () => (
  <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
    <Checkbox
      name="nameA"
      value="valueA"
      inputProps={{ 'aria-label': 'Name A' }}
    />
    <Checkbox
      name="nameB"
      value="valueB"
      inputProps={{ 'aria-label': 'Name B' }}
      disabled
    />
    <Checkbox
      name="nameC"
      value="valueC"
      inputProps={{ 'aria-label': 'Name C' }}
      checked
    />
    <Checkbox
      name="nameD"
      value="valueD"
      inputProps={{ 'aria-label': 'Name D' }}
      checked
      disabled
    />
    <Checkbox
      name="nameC"
      value="valueC"
      inputProps={{ 'aria-label': 'Name C' }}
      indeterminate
    />
    <Checkbox
      name="nameD"
      value="valueD"
      inputProps={{ 'aria-label': 'Name D' }}
      indeterminate
      disabled
    />
  </div>
);

const PseudoStatesTemplate: Story = () => (
  <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
    <Checkbox
      name="nameA"
      value="valueA"
      inputProps={{ 'aria-label': 'Name A' }}
    />
    <Checkbox
      name="nameB"
      value="valueB"
      inputProps={{ 'aria-label': 'Name B' }}
      checked
    />
    <Checkbox
      name="nameC"
      value="valueC"
      inputProps={{ 'aria-label': 'Name C' }}
      indeterminate
    />
  </div>
);

export const States = StatesTemplate.bind({});

export const StatesHover = PseudoStatesTemplate.bind({});
StatesHover.parameters = { pseudo: { hover: true } };

export const StatesFocus = PseudoStatesTemplate.bind({});
StatesFocus.parameters = { pseudo: { focus: true } };

const LabeledStatesTemplate: Story = () => (
  <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
    <FormControlLabel label="Label" control={<Checkbox />} />
    <FormControlLabel label="Label" control={<Checkbox />} disabled />
    <FormControlLabel label="Label" control={<Checkbox checked />} />
    <FormControlLabel label="Label" control={<Checkbox checked />} disabled />
    <FormControlLabel label="Label" control={<Checkbox indeterminate />} />
    <FormControlLabel
      label="Label"
      control={<Checkbox indeterminate />}
      disabled
    />
  </div>
);

const PseudoLabeledStatesTemplate: Story = () => (
  <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
    <FormControlLabel label="Label" control={<Checkbox />} />
    <FormControlLabel label="Label" control={<Checkbox checked />} />
    <FormControlLabel label="Label" control={<Checkbox indeterminate />} />
  </div>
);

export const LabeledStates = LabeledStatesTemplate.bind({});

export const LabeledStatesHover = PseudoLabeledStatesTemplate.bind({});
LabeledStatesHover.parameters = { pseudo: { hover: true } };

export const LabeledStatesFocus = PseudoLabeledStatesTemplate.bind({});
LabeledStatesFocus.parameters = { pseudo: { focus: true } };
