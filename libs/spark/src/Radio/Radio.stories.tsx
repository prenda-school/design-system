import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import FormControlLabel from '../FormControlLabel';
import { default as Radio, RadioProps } from './Radio';

export const TypedRadio = (props: RadioProps) => <Radio {...props} />;

export default {
  title: '@ps/Radio',
  component: TypedRadio,
  excludeStories: ['TypedRadio'],
  parameters: { actions: { handles: ['change'] } },
  // Doesn't pick up extended SwitchBaseProps
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
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
