import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_Checkbox,
  Unstable_FormControlLabel,
  Unstable_Radio,
} from '..';
import { containFocusIndicator, sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_FormControlLabel as typeof Unstable_FormControlLabel;

export default {
  title: '@ps/Unstable_FormControlLabel',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containFocusIndicator],
  argTypes: {
    control: {
      control: 'select',
      options: ['(Checkbox)', '(Radio)'],
      mapping: {
        '(Checkbox)': <Unstable_Checkbox />,
        '(Radio)': <Unstable_Radio />,
      },
    },
  },
} as Meta;

const Template = (args) => <Unstable_FormControlLabel {...args} />;

export const LabelControlCheckbox: Story = Template.bind({});
LabelControlCheckbox.args = { label: 'Label', control: '(Checkbox)' };
LabelControlCheckbox.storyName = 'label control=(Checkbox)';

export const LabelControlCheckboxSTP: Story = Template.bind({});
LabelControlCheckboxSTP.args = { label: 'Label', control: '(Checkbox)' };
LabelControlCheckboxSTP.decorators = [sparkThemeProvider];
LabelControlCheckboxSTP.storyName = 'label control=(Checkbox) (STP)';

export const LabelControlCheckboxHover: Story = Template.bind({});
LabelControlCheckboxHover.args = { label: 'Label', control: '(Checkbox)' };
LabelControlCheckboxHover.parameters = { pseudo: { hover: true } };
LabelControlCheckboxHover.storyName = 'label control=(Checkbox) :hover';

export const LabelControlCheckboxFocusVisible: Story = Template.bind({});
LabelControlCheckboxFocusVisible.args = {
  label: 'Label',
  control: '(Checkbox)',
};
LabelControlCheckboxFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};
LabelControlCheckboxFocusVisible.storyName =
  'label control=(Checkbox) :focus-visible';

export const LabelControlCheckboxDisabled: Story = Template.bind({});
LabelControlCheckboxDisabled.args = {
  label: 'Label',
  control: '(Checkbox)',
  disabled: true,
};
LabelControlCheckboxDisabled.storyName = 'label control=(Checkbox) disabled';

export const LabelControlCheckboxDisabledHover: Story = Template.bind({});
LabelControlCheckboxDisabledHover.args = {
  label: 'Label',
  control: '(Checkbox)',
  disabled: true,
};
LabelControlCheckboxDisabledHover.parameters = { pseudo: { hover: true } };
LabelControlCheckboxDisabledHover.storyName =
  'label control=(Checkbox) disabled :hover';

export const LabelControlCheckboxPlacementStart: Story = Template.bind({});
LabelControlCheckboxPlacementStart.args = {
  label: 'Label',
  control: '(Checkbox)',
  labelPlacement: 'start',
};
LabelControlCheckboxPlacementStart.storyName =
  'label control=(Checkbox) labelPlacement=start';

export const LabelControlCheckboxPlacementTop: Story = Template.bind({});
LabelControlCheckboxPlacementTop.args = {
  label: 'Label',
  control: '(Checkbox)',
  labelPlacement: 'top',
};
LabelControlCheckboxPlacementTop.storyName =
  'label control=(Checkbox) labelPlacement=top';

export const LabelControlCheckboxPlacementBottom: Story = Template.bind({});
LabelControlCheckboxPlacementBottom.args = {
  label: 'Label',
  control: '(Checkbox)',
  labelPlacement: 'bottom',
};
LabelControlCheckboxPlacementBottom.storyName =
  'label control=(Checkbox) labelPlacement=bottom';

export const LabelControlRadio: Story = Template.bind({});
LabelControlRadio.args = { label: 'Label', control: '(Radio)' };
LabelControlRadio.storyName = 'label control=(Radio)';

export const LabelControlRadioSTP: Story = Template.bind({});
LabelControlRadioSTP.args = { label: 'Label', control: '(Radio)' };
LabelControlRadioSTP.decorators = [sparkThemeProvider];
LabelControlRadioSTP.storyName = 'label control=(Radio) (STP)';

export const LabelControlRadioHover: Story = Template.bind({});
LabelControlRadioHover.args = { label: 'Label', control: '(Radio)' };
LabelControlRadioHover.parameters = { pseudo: { hover: true } };
LabelControlRadioHover.storyName = 'label control=(Radio) :hover';

export const LabelControlRadioFocusVisible: Story = Template.bind({});
LabelControlRadioFocusVisible.args = { label: 'Label', control: '(Radio)' };
LabelControlRadioFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};
LabelControlRadioFocusVisible.storyName =
  'label control=(Radio) :focus-visible';

export const LabelControlRadioDisabled: Story = Template.bind({});
LabelControlRadioDisabled.args = {
  label: 'Label',
  control: '(Radio)',
  disabled: true,
};
LabelControlRadioDisabled.storyName = 'label control=(Radio) disabled';
