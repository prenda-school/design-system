import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_Checkbox,
  Unstable_FormControl,
  Unstable_FormControlLabel,
  Unstable_FormGroup,
  Unstable_FormHelperText,
  Unstable_FormLabel,
  Unstable_Radio,
  Unstable_RadioGroup,
} from '..';
import { containFocusIndicator, sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_FormControl as typeof Unstable_FormControl;

export default {
  title: '@ps/Unstable_FormControl',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containFocusIndicator],
  argTypes: {
    children: {
      control: 'select',
      options: ['(Checkbox Field)', '(Radio Field)'],
      mapping: {
        '(Checkbox Field)': (
          <>
            <Unstable_FormLabel component="legend">Label</Unstable_FormLabel>
            <Unstable_FormGroup>
              <Unstable_FormControlLabel
                control={<Unstable_Checkbox />}
                label="Label one"
                value="value-1"
              />
              <Unstable_FormControlLabel
                control={<Unstable_Checkbox />}
                label="Label two"
                value="value-2"
              />
              <Unstable_FormControlLabel
                control={<Unstable_Checkbox />}
                label="Label three"
                value="value-3"
              />
              <Unstable_FormControlLabel
                control={<Unstable_Checkbox />}
                disabled
                label="Label four"
                value="value-4"
              />
            </Unstable_FormGroup>
            <Unstable_FormHelperText>Helper text</Unstable_FormHelperText>
          </>
        ),
        '(Radio Field)': (
          <>
            <Unstable_FormLabel component="legend">Label</Unstable_FormLabel>
            <Unstable_RadioGroup>
              <Unstable_FormControlLabel
                control={<Unstable_Radio />}
                label="Label one"
                value="value-1"
              />
              <Unstable_FormControlLabel
                control={<Unstable_Radio />}
                label="Label two"
                value="value-2"
              />
              <Unstable_FormControlLabel
                control={<Unstable_Radio />}
                label="Label three"
                value="value-3"
              />
              <Unstable_FormControlLabel
                control={<Unstable_Radio />}
                disabled
                label="Label four"
                value="value-4"
              />
            </Unstable_RadioGroup>
            <Unstable_FormHelperText>Helper text</Unstable_FormHelperText>
          </>
        ),
      },
    },
  },
} as Meta;

const Template = (args) => <Unstable_FormControl {...args} />;

export const ChildrenCheckboxField: Story = Template.bind({});
ChildrenCheckboxField.args = {
  children: '(Checkbox Field)',
  component: 'fieldset',
};
ChildrenCheckboxField.storyName =
  'children=(Checkbox Field) component=fieldset';

export const ChildrenCheckboxFieldSTP: Story = Template.bind({});
ChildrenCheckboxFieldSTP.args = {
  children: '(Checkbox Field)',
  component: 'fieldset',
};
ChildrenCheckboxFieldSTP.decorators = [sparkThemeProvider];
ChildrenCheckboxFieldSTP.storyName =
  'children=(Checkbox Field) component=fieldset (STP)';

export const ChildrenCheckboxFieldDisabled: Story = Template.bind({});
ChildrenCheckboxFieldDisabled.args = {
  children: '(Checkbox Field)',
  component: 'fieldset',
  disabled: true,
};
ChildrenCheckboxFieldDisabled.storyName =
  'children=(Checkbox Field) component=fieldset disabled';

export const ChildrenCheckboxFieldError: Story = Template.bind({});
ChildrenCheckboxFieldError.args = {
  children: '(Checkbox Field)',
  component: 'fieldset',
  error: true,
};
ChildrenCheckboxFieldError.storyName =
  'children=(Checkbox Field) component=fieldset error';

export const ChildrenCheckboxFieldRequired: Story = Template.bind({});
ChildrenCheckboxFieldRequired.args = {
  children: '(Checkbox Field)',
  component: 'fieldset',
  required: true,
};
ChildrenCheckboxFieldRequired.storyName =
  'children=(Checkbox Field) component=fieldset required';

export const ChildrenRadioField: Story = Template.bind({});
ChildrenRadioField.args = { children: '(Radio Field)', component: 'fieldset' };
ChildrenRadioField.storyName = 'children=(Radio Field) component=fieldset';

export const ChildrenRadioFieldSTP: Story = Template.bind({});
ChildrenRadioFieldSTP.args = {
  children: '(Radio Field)',
  component: 'fieldset',
};
ChildrenRadioFieldSTP.decorators = [sparkThemeProvider];
ChildrenRadioFieldSTP.storyName =
  'children=(Radio Field) component=fieldset (STP)';

export const ChildrenRadioFieldDisabled: Story = Template.bind({});
ChildrenRadioFieldDisabled.args = {
  children: '(Radio Field)',
  component: 'fieldset',
  disabled: true,
};
ChildrenRadioFieldDisabled.storyName =
  'children=(Radio Field) component=fieldset disabled';

export const ChildrenRadioFieldError: Story = Template.bind({});
ChildrenRadioFieldError.args = {
  children: '(Radio Field)',
  component: 'fieldset',
  error: true,
};
ChildrenRadioFieldError.storyName =
  'children=(Radio Field) component=fieldset error';

export const ChildrenRadioFieldRequired: Story = Template.bind({});
ChildrenRadioFieldRequired.args = {
  children: '(Radio Field)',
  component: 'fieldset',
  required: true,
};
ChildrenRadioFieldRequired.storyName =
  'children=(Radio Field) component=fieldset required';
