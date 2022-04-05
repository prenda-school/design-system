import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps, FormControlLabel } from '..';
import { DocumentationTemplate } from '../../stories/templates';
import { sparkThemeProvider } from '../../stories';

// Doesn't pick up extended SwitchBaseProps
interface SbCheckboxProps
  extends Omit<
    CheckboxProps,
    | 'disableFocusRipple'
    | 'centerRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'TouchRippleProps'
  > {
  checked?: CheckboxProps['checked'];
  disabled?: CheckboxProps['disabled'];
  indeterminate?: CheckboxProps['indeterminate'];
  value?: CheckboxProps['value'];
}

export const SbCheckbox = (props: SbCheckboxProps) => <Checkbox {...props} />;

export default {
  title: '@ps/Checkbox',
  component: SbCheckbox,
  excludeStories: ['SbCheckbox'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [sparkThemeProvider],
} as Meta;

const Template = (args) => (
  <Checkbox
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

const PseudoStatesTemplate = () => (
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

export const States: Story = StatesTemplate.bind({});

export const StatesHover: Story = PseudoStatesTemplate.bind({});
StatesHover.parameters = { pseudo: { hover: true } };

export const StatesFocus: Story = PseudoStatesTemplate.bind({});
StatesFocus.parameters = { pseudo: { focusVisible: true } };

const LabeledStatesTemplate = () => (
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

const PseudoLabeledStatesTemplate = () => (
  <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
    <FormControlLabel label="Label" control={<Checkbox />} />
    <FormControlLabel label="Label" control={<Checkbox checked />} />
    <FormControlLabel label="Label" control={<Checkbox indeterminate />} />
  </div>
);

export const LabeledStates: Story = LabeledStatesTemplate.bind({});

export const LabeledStatesHover: Story = PseudoLabeledStatesTemplate.bind({});
LabeledStatesHover.parameters = { pseudo: { hover: true } };

export const LabeledStatesFocus: Story = PseudoLabeledStatesTemplate.bind({});
LabeledStatesFocus.parameters = { pseudo: { focusVisible: true } };

export const Documentation: Story = DocumentationTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'Checkbox',
    href: 'https://v4.mui.com/components/checkboxes/#checkbox',
  },
  props: {
    extends: {
      href: 'https://v4.mui.com/api/checkbox/#props',
    },
    defaults: [
      {
        name: 'color',
        value: "'default'",
      },
      {
        name: 'icon',
        value: '<CheckboxIcon />',
      },
      {
        name: 'checkedIcon',
        value: '<CheckboxIcon checked />',
      },
      {
        name: 'indeterminateIcon',
        value: '<CheckboxIcon indeterminate />',
      },
    ],
  },
  css: {
    extends: {
      href: 'https://v4.mui.com/api/checkbox/#css',
    },
  },
  note:
    'Looking for a group of checkboxes? Checkout the FormControl component stories.',
};
