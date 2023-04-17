import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { FormControlLabelProps } from '..';
import { Checkbox, FormControlLabel, Radio } from '..';
import { containBoxShadowInline, sparkThemeProvider } from '../../../stories';

export const _retyped = FormControlLabel as typeof FormControlLabel;

export default {
  title: '@ps/FormControlLabel',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containBoxShadowInline],
  argTypes: {
    control: {
      control: 'select',
      options: ['(Checkbox)', '(Radio)'],
      mapping: {
        '(Checkbox)': <Checkbox />,
        '(Radio)': <Radio />,
      },
    },
  },
} as Meta;

const Template = (args) => <FormControlLabel {...args} />;

type Story = DefaultStory<
  FormControlLabelProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any;
  }
>;

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

export const LabelControlCheckboxDisabledError: Story = Template.bind({});
LabelControlCheckboxDisabledError.args = {
  label: 'Label',
  control: '(Checkbox)',
  disabled: true,
  error: true,
};
LabelControlCheckboxDisabledError.storyName =
  'label control=(Checkbox) disabled error';

export const LabelControlCheckboxDisabledErrorHover: Story = Template.bind({});
LabelControlCheckboxDisabledErrorHover.args = {
  label: 'Label',
  control: '(Checkbox)',
  disabled: true,
  error: true,
};
LabelControlCheckboxDisabledErrorHover.parameters = { pseudo: { hover: true } };
LabelControlCheckboxDisabledErrorHover.storyName =
  'label control=(Checkbox) disabled error :hover';

export const LabelControlCheckboxError: Story = Template.bind({});
LabelControlCheckboxError.args = {
  label: 'Label',
  control: '(Checkbox)',
  error: true,
};
LabelControlCheckboxError.storyName = 'label control=(Checkbox) error';

export const LabelControlCheckboxErrorHover: Story = Template.bind({});
LabelControlCheckboxErrorHover.args = {
  label: 'Label',
  control: '(Checkbox)',
  error: true,
};
LabelControlCheckboxErrorHover.parameters = { pseudo: { hover: true } };
LabelControlCheckboxErrorHover.storyName =
  'label control=(Checkbox) error :hover';

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

export const LabelControlRadioDisabledHover: Story = Template.bind({});
LabelControlRadioDisabledHover.args = {
  label: 'Label',
  control: '(Radio)',
  disabled: true,
};
LabelControlRadioDisabledHover.parameters = { pseudo: { hover: true } };
LabelControlRadioDisabledHover.storyName =
  'label control=(Radio) disabled :hover';

export const LabelControlRadioDisabledError: Story = Template.bind({});
LabelControlRadioDisabledError.args = {
  label: 'Label',
  control: '(Radio)',
  disabled: true,
  error: true,
};
LabelControlRadioDisabledError.storyName =
  'label control=(Radio) disabled error';

export const LabelControlRadioDisabledErrorHover: Story = Template.bind({});
LabelControlRadioDisabledErrorHover.args = {
  label: 'Label',
  control: '(Radio)',
  disabled: true,
  error: true,
};
LabelControlRadioDisabledErrorHover.parameters = { pseudo: { hover: true } };
LabelControlRadioDisabledErrorHover.storyName =
  'label control=(Radio) disabled error :hover';

export const LabelControlRadioError: Story = Template.bind({});
LabelControlRadioError.args = {
  label: 'Label',
  control: '(Checkbox)',
  error: true,
};
LabelControlRadioError.storyName = 'label control=(Checkbox) error';

export const LabelControlRadioErrorHover: Story = Template.bind({});
LabelControlRadioErrorHover.args = {
  label: 'Label',
  control: '(Checkbox)',
  error: true,
};
LabelControlRadioErrorHover.parameters = { pseudo: { hover: true } };
LabelControlRadioErrorHover.storyName = 'label control=(Checkbox) error :hover';
