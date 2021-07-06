import React from 'react';
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { FormControlLabel, Radio } from '@material-ui/core';

export default {
  title: 'prenda-spark/Radio',
  component: Radio,
  parameters: { actions: { handles: ['change'] } },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {},
} as Meta;

const Template: Story = (args) => (
  <Radio
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
    <Radio
      name="nameA"
      value="valueA"
      inputProps={{ 'aria-label': 'Name A' }}
    />
    <Radio
      name="nameB"
      value="valueB"
      inputProps={{ 'aria-label': 'Name B' }}
      disabled
    />
    <Radio
      name="nameC"
      value="valueC"
      inputProps={{ 'aria-label': 'Name C' }}
      checked
    />
    <Radio
      name="nameD"
      value="valueD"
      inputProps={{ 'aria-label': 'Name D' }}
      checked
      disabled
    />
  </div>
);

const PseudoStatesTemplate: Story = () => (
  <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
    <Radio
      name="nameA"
      value="valueA"
      inputProps={{ 'aria-label': 'Name A' }}
    />
    <Radio
      name="nameC"
      value="valueC"
      inputProps={{ 'aria-label': 'Name C' }}
      checked
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
    <FormControlLabel label="Label" control={<Radio />} />
    <FormControlLabel label="Label" control={<Radio />} disabled />
    <FormControlLabel label="Label" control={<Radio />} checked />
    <FormControlLabel label="Label" control={<Radio />} checked disabled />
  </div>
);

const PseudoLabeledStatesTemplate: Story = () => (
  <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
    <FormControlLabel label="Label" control={<Radio />} />
    <FormControlLabel label="Label" control={<Radio />} checked />
  </div>
);

export const LabeledStates = LabeledStatesTemplate.bind({});

export const LabeledStatesHover = PseudoLabeledStatesTemplate.bind({});
LabeledStatesHover.parameters = { pseudo: { hover: true } };

export const LabeledStatesFocus = PseudoLabeledStatesTemplate.bind({});
LabeledStatesFocus.parameters = { pseudo: { focus: true } };