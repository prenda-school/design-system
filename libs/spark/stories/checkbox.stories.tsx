import * as React from 'react';
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { Checkbox, FormControlLabel } from '@material-ui/core';

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

export const Unchecked = Template.bind({});
Unchecked.args = { checked: false };

export const UncheckedHover = Template.bind({});
UncheckedHover.args = { checked: false };
UncheckedHover.parameters = { pseudo: { hover: true } };

export const UncheckedFocus = Template.bind({});
UncheckedFocus.args = { checked: false };
UncheckedFocus.parameters = { pseudo: { focus: true } };

export const UncheckedDisabled = Template.bind({});
UncheckedDisabled.args = { checked: false, disabled: true };

export const Checked = Template.bind({});
Checked.args = { checked: true };

export const CheckedHover = Template.bind({});
CheckedHover.args = { checked: true };
CheckedHover.parameters = { pseudo: { hover: true } };

export const CheckedFocus = Template.bind({});
CheckedFocus.args = { checked: true };
CheckedFocus.parameters = { pseudo: { focus: true } };

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = { checked: true, disabled: true };

export const Indeterminate = Template.bind({});
Indeterminate.args = { indeterminate: true };

export const IndeterminateHover = Template.bind({});
IndeterminateHover.args = { indeterminate: true };
IndeterminateHover.parameters = { pseudo: { hover: true } };

export const IndeterminateFocus = Template.bind({});
IndeterminateFocus.args = { indeterminate: true };
IndeterminateFocus.parameters = { pseudo: { focus: true } };

export const IndeterminateDisabled = Template.bind({});
IndeterminateDisabled.args = { indeterminate: true, disabled: true };

const LabelTemplate: Story = ({ disabled, ...args }) => (
  <FormControlLabel
    label="Label"
    disabled={disabled}
    control={<Checkbox {...args} />}
  />
);

export const LabelUnchecked = LabelTemplate.bind({});
LabelUnchecked.args = { checked: false };

export const LabelUncheckedHover = LabelTemplate.bind({});
LabelUncheckedHover.args = { checked: false };
LabelUncheckedHover.parameters = { pseudo: { hover: true } };

export const LabelUncheckedFocus = LabelTemplate.bind({});
LabelUncheckedFocus.args = { checked: false };
LabelUncheckedFocus.parameters = { pseudo: { focus: true } };

export const LabelUncheckedDisabled = LabelTemplate.bind({});
LabelUncheckedDisabled.args = { checked: false, disabled: true };

export const LabelChecked = LabelTemplate.bind({});
LabelChecked.args = { checked: true };

export const LabelCheckedHover = LabelTemplate.bind({});
LabelCheckedHover.args = { checked: true };
LabelCheckedHover.parameters = { pseudo: { hover: true } };

export const LabelCheckedFocus = LabelTemplate.bind({});
LabelCheckedFocus.args = { checked: true };
LabelCheckedFocus.parameters = { pseudo: { focus: true } };

export const LabelCheckedDisabled = LabelTemplate.bind({});
LabelCheckedDisabled.args = { checked: true, disabled: true };

export const LabelIndeterminate = LabelTemplate.bind({});
LabelIndeterminate.args = { indeterminate: true };

export const LabelIndeterminateHover = LabelTemplate.bind({});
LabelIndeterminateHover.args = { indeterminate: true };
LabelIndeterminateHover.parameters = { pseudo: { hover: true } };

export const LabelIndeterminateFocus = LabelTemplate.bind({});
LabelIndeterminateFocus.args = { indeterminate: true };
LabelIndeterminateFocus.parameters = { pseudo: { focus: true } };

export const LabelIndeterminateDisabled = LabelTemplate.bind({});
LabelIndeterminateDisabled.args = { indeterminate: true, disabled: true };
