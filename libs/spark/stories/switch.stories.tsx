import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Switch, FormControlLabel } from '../src';

export default {
  title: 'prenda-spark/Switch',
  component: Switch,
  parameters: { actions: { handles: ['change'] } },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['large', 'small'] },
  },
  args: {
    checked: false,
    disabled: false,
    size: 'small',
  },
} as Meta;

const Template: Story = (args) => (
  <Switch
    // a11y required props when there's no label
    name="Demo"
    value="value"
    inputProps={{ 'aria-label': 'Value' }}
    {...args}
  />
);

export const Configurable = Template.bind({});

const StatesTemplate: Story = () => (
  <>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <Switch
        name="nameA"
        value="valueA"
        inputProps={{ 'aria-label': 'Name A' }}
      />
      <Switch
        name="nameB"
        value="valueB"
        inputProps={{ 'aria-label': 'Name B' }}
        disabled
      />
      <Switch
        name="nameC"
        value="valueC"
        inputProps={{ 'aria-label': 'Name C' }}
        checked
      />
      <Switch
        name="nameD"
        value="valueD"
        inputProps={{ 'aria-label': 'Name D' }}
        checked
        disabled
      />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <Switch
        name="nameA"
        value="valueA"
        inputProps={{ 'aria-label': 'Name A' }}
        size="large"
      />
      <Switch
        name="nameB"
        value="valueB"
        inputProps={{ 'aria-label': 'Name B' }}
        size="large"
        disabled
      />
      <Switch
        name="nameC"
        value="valueC"
        inputProps={{ 'aria-label': 'Name C' }}
        size="large"
        checked
      />
      <Switch
        name="nameD"
        value="valueD"
        inputProps={{ 'aria-label': 'Name D' }}
        size="large"
        checked
        disabled
      />
    </div>
  </>
);

const PseudoStatesTemplate: Story = () => (
  <>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <Switch
        name="nameA"
        value="valueA"
        inputProps={{ 'aria-label': 'Name A' }}
      />
      <Switch
        name="nameB"
        value="valueB"
        inputProps={{ 'aria-label': 'Name B' }}
        checked
      />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <Switch
        name="nameA"
        value="valueA"
        inputProps={{ 'aria-label': 'Name A' }}
        size="large"
      />
      <Switch
        name="nameB"
        value="valueB"
        inputProps={{ 'aria-label': 'Name B' }}
        size="large"
        checked
      />
    </div>
  </>
);

export const States = StatesTemplate.bind({});

export const StatesHover = PseudoStatesTemplate.bind({});
StatesHover.parameters = { pseudo: { hover: true } };

export const StatesFocus = PseudoStatesTemplate.bind({});
StatesFocus.parameters = { pseudo: { focus: true } };

const LabeledStatesTemplate: Story = () => (
  <>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel label="Label" control={<Switch />} />
      <FormControlLabel label="Label" control={<Switch />} disabled />
      <FormControlLabel label="Label" control={<Switch checked />} />
      <FormControlLabel label="Label" control={<Switch checked />} disabled />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel label="Label" control={<Switch size="large" />} />
      <FormControlLabel
        label="Label"
        control={<Switch size="large" />}
        disabled
      />
      <FormControlLabel
        label="Label"
        control={<Switch size="large" checked />}
      />
      <FormControlLabel
        label="Label"
        control={<Switch size="large" checked />}
        disabled
      />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch />}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch />}
        disabled
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch checked />}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch checked />}
        disabled
      />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" />}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" />}
        disabled
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" checked />}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" checked />}
        disabled
      />
    </div>
  </>
);

const PseudoLabeledStatesTemplate: Story = (args) => (
  <>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel label="Label" control={<Switch />} {...args} />
      <FormControlLabel label="Label" control={<Switch checked />} {...args} />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel
        label="Label"
        control={<Switch size="large" />}
        {...args}
      />
      <FormControlLabel
        label="Label"
        control={<Switch size="large" checked />}
        {...args}
      />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch />}
        {...args}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch checked />}
        {...args}
      />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" />}
        {...args}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" checked />}
        {...args}
      />
    </div>
  </>
);

export const LabeledStates = LabeledStatesTemplate.bind({});

export const LabeledStatesHover = PseudoLabeledStatesTemplate.bind({});
LabeledStatesHover.parameters = { pseudo: { hover: true } };

export const LabeledStatesFocus = PseudoLabeledStatesTemplate.bind({});
LabeledStatesFocus.parameters = { pseudo: { focus: true } };
