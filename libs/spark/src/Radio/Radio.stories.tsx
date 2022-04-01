import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { FormControlLabel, Radio, RadioProps } from '..';
import { sparkThemeProvider } from '../../stories';

// Doesn't pick up extended SwitchBaseProps
interface SbRadioProps
  extends Omit<
    RadioProps,
    | 'disableFocusRipple'
    | 'centerRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'TouchRippleProps'
  > {
  checked?: RadioProps['checked'];
  disabled?: RadioProps['disabled'];
  value?: RadioProps['value'];
}

export const SbRadio = (props: SbRadioProps) => <Radio {...props} />;

export default {
  title: '@ps/Radio',
  component: SbRadio,
  excludeStories: ['SbRadio'],
  parameters: { actions: { handles: ['change'] } },
  // Doesn't pick up extended SwitchBaseProps
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [sparkThemeProvider],
} as Meta;

const Template = (args) => (
  <Radio
    // a11y required props when there's no label
    name="Demo"
    value="value"
    inputProps={{ 'aria-label': 'Value' }}
    {...args}
  />
);

export const Configurable: Story = Template.bind({});

const StatesTemplate = () => (
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

const PseudoStatesTemplate = () => (
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

export const States: Story = StatesTemplate.bind({});

export const StatesHover: Story = PseudoStatesTemplate.bind({});
StatesHover.parameters = { pseudo: { hover: true } };

export const StatesFocus: Story = PseudoStatesTemplate.bind({});
StatesFocus.parameters = { pseudo: { focusVisible: true } };

const LabeledStatesTemplate = () => (
  <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
    <FormControlLabel label="Label" control={<Radio />} />
    <FormControlLabel label="Label" control={<Radio />} disabled />
    <FormControlLabel label="Label" control={<Radio />} checked />
    <FormControlLabel label="Label" control={<Radio />} checked disabled />
  </div>
);

const PseudoLabeledStatesTemplate = () => (
  <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
    <FormControlLabel label="Label" control={<Radio />} />
    <FormControlLabel label="Label" control={<Radio />} checked />
  </div>
);

export const LabeledStates: Story = LabeledStatesTemplate.bind({});

export const LabeledStatesHover: Story = PseudoLabeledStatesTemplate.bind({});
LabeledStatesHover.parameters = { pseudo: { hover: true } };

export const LabeledStatesFocus: Story = PseudoLabeledStatesTemplate.bind({});
LabeledStatesFocus.parameters = { pseudo: { focusVisible: true } };
