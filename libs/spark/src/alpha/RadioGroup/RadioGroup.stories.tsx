import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { RadioField, RadioGroup, RadioGroupProps } from '..';
import { containBoxShadow, sparkThemeProvider } from '../../../stories';

export const _retyped = RadioGroup as typeof RadioGroup;

export default {
  title: '@ps/RadioGroup',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containBoxShadow],
  argTypes: {
    children: {
      control: 'select',
      options: ['(RadioFields)'],
      mapping: {
        '(RadioFields)': (
          <>
            <RadioField label="Label one" value="value-1" />
            <RadioField label="Label two" value="value-2" />
            <RadioField label="Label three" value="value-3" />
            <RadioField label="Label four" value="value-4" disabled />
          </>
        ),
      },
    },
  },
} as Meta;

const Template = (args) => <RadioGroup {...args} />;

type Story = DefaultStory<RadioGroupProps>;

export const ChildrenRadioFields: Story = Template.bind({});
ChildrenRadioFields.args = { children: '(RadioFields)' };
ChildrenRadioFields.storyName = 'children=(RadioFields)';

export const ChildrenRadioFieldsSTP: Story = Template.bind({});
ChildrenRadioFieldsSTP.args = { children: '(RadioFields)' };
ChildrenRadioFieldsSTP.decorators = [sparkThemeProvider];
ChildrenRadioFieldsSTP.storyName = 'children=(RadioFields) (STP)';

export const ChildrenRadioFieldsDefaultValue: Story = Template.bind({});
ChildrenRadioFieldsDefaultValue.args = {
  children: '(RadioFields)',
  defaultValue: 'value-2',
};
ChildrenRadioFieldsDefaultValue.storyName =
  'children=(RadioFields) defaultValue';

export const ChildrenRadioFieldsRequired: Story = Template.bind({});
ChildrenRadioFieldsRequired.args = {
  children: '(RadioFields)',
  required: true,
};
ChildrenRadioFieldsRequired.storyName = 'children=(RadioFields) required';

export const ChildrenRadioFieldsRow: Story = Template.bind({});
ChildrenRadioFieldsRow.args = {
  children: '(RadioFields)',
  row: true,
};
ChildrenRadioFieldsRow.storyName = 'children=(RadioFields) row';
