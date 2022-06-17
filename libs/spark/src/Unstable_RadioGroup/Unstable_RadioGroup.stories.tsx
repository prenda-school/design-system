import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_Radio,
  Unstable_FormControlLabel,
  Unstable_RadioGroup,
} from '..';
import { containFocusIndicator, sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_RadioGroup as typeof Unstable_RadioGroup;

export default {
  title: '@ps/Unstable_RadioGroup',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containFocusIndicator],
  argTypes: {
    children: {
      control: 'select',
      options: ['(Labeled Radios)'],
      mapping: {
        '(Labeled Radios)': (
          <>
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
          </>
        ),
      },
    },
  },
} as Meta;

const Template = (args) => <Unstable_RadioGroup {...args} />;

export const ChildrenLabeledRadios: Story = Template.bind({});
ChildrenLabeledRadios.args = { children: '(Labeled Radios)' };
ChildrenLabeledRadios.storyName = 'children=(Labeled Radios)';

export const ChildrenLabeledRadiosSTP: Story = Template.bind({});
ChildrenLabeledRadiosSTP.args = { children: '(Labeled Radios)' };
ChildrenLabeledRadiosSTP.decorators = [sparkThemeProvider];
ChildrenLabeledRadiosSTP.storyName = 'children=(Labeled Radios) (STP)';

export const ChildrenLabeledRadiosDefaultValue: Story = Template.bind({});
ChildrenLabeledRadiosDefaultValue.args = {
  children: '(Labeled Radios)',
  defaultValue: 'value-2',
};
ChildrenLabeledRadiosDefaultValue.storyName =
  'children=(Labeled Radios) defaultValue';

export const ChildrenLabeledRadiosRequired: Story = Template.bind({});
ChildrenLabeledRadiosRequired.args = {
  children: '(Labeled Radios)',
  required: true,
};
ChildrenLabeledRadiosRequired.storyName = 'children=(Labeled Radios) required';

export const ChildrenLabeledRadiosRow: Story = Template.bind({});
ChildrenLabeledRadiosRow.args = {
  children: '(Labeled Radios)',
  row: true,
};
ChildrenLabeledRadiosRow.storyName = 'children=(Labeled Radios) row';
