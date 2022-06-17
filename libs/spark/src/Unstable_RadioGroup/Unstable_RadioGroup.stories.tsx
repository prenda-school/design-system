import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_RadioField, Unstable_RadioGroup } from '..';
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
      options: ['(RadioFields)'],
      mapping: {
        '(RadioFields)': (
          <>
            <Unstable_RadioField label="Label one" value="value-1" />
            <Unstable_RadioField label="Label two" value="value-2" />
            <Unstable_RadioField label="Label three" value="value-3" />
            <Unstable_RadioField label="Label four" value="value-4" disabled />
          </>
        ),
      },
    },
  },
} as Meta;

const Template = (args) => <Unstable_RadioGroup {...args} />;

export const ChildrenLabeledRadios: Story = Template.bind({});
ChildrenLabeledRadios.args = { children: '(RadioFields)' };
ChildrenLabeledRadios.storyName = 'children=(RadioFields)';

export const ChildrenLabeledRadiosSTP: Story = Template.bind({});
ChildrenLabeledRadiosSTP.args = { children: '(RadioFields)' };
ChildrenLabeledRadiosSTP.decorators = [sparkThemeProvider];
ChildrenLabeledRadiosSTP.storyName = 'children=(RadioFields) (STP)';

export const ChildrenLabeledRadiosDefaultValue: Story = Template.bind({});
ChildrenLabeledRadiosDefaultValue.args = {
  children: '(RadioFields)',
  defaultValue: 'value-2',
};
ChildrenLabeledRadiosDefaultValue.storyName =
  'children=(RadioFields) defaultValue';

export const ChildrenLabeledRadiosRequired: Story = Template.bind({});
ChildrenLabeledRadiosRequired.args = {
  children: '(RadioFields)',
  required: true,
};
ChildrenLabeledRadiosRequired.storyName = 'children=(RadioFields) required';

export const ChildrenLabeledRadiosRow: Story = Template.bind({});
ChildrenLabeledRadiosRow.args = {
  children: '(RadioFields)',
  row: true,
};
ChildrenLabeledRadiosRow.storyName = 'children=(RadioFields) row';
