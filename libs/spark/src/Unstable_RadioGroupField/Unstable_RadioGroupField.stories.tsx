import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import {
  Unstable_RadioField,
  Unstable_RadioGroupField,
  Unstable_RadioGroupFieldProps,
} from '..';
import { containFocusIndicator, Info } from '../../stories';

export const _retyped =
  Unstable_RadioGroupField as typeof Unstable_RadioGroupField;

export default {
  title: '@ps/RadioGroupField',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containFocusIndicator],
  argTypes: {
    children: {
      control: 'select',
      options: ['(RadioFields)', '(RadioFields helperText)'],
      mapping: {
        '(RadioFields)': (
          <>
            <Unstable_RadioField label="Label one" value="value-1" />
            <Unstable_RadioField label="Label two" value="value-2" />
            <Unstable_RadioField label="Label three" value="value-3" />
            <Unstable_RadioField label="Label four" value="value-4" disabled />
          </>
        ),
        '(RadioFields helperText)': (
          <>
            <Unstable_RadioField
              helperText="Helper text one"
              label="Label one"
              value="value-1"
            />
            <Unstable_RadioField
              FormHelperTextProps={{
                // @ts-expect-error component prop isn't recognized
                component: 'span',
              }}
              helperText={
                <ul>
                  <li>Helping line item one</li>
                  <li>Helping line item two</li>
                  <li>Helping line item three</li>
                </ul>
              }
              label="Label two"
              value="value-2"
            />
            <Unstable_RadioField
              FormHelperTextProps={{
                // @ts-expect-error component prop isn't recognized
                component: 'span',
                leadingIcon: <Info />,
              }}
              helperText={
                <span>
                  More help:
                  <ol>
                    <li>Helping line item</li>
                    <li>Helping line item</li>
                    <li>Helping line item</li>
                  </ol>
                </span>
              }
              label="Label three"
              value="value-3"
            />
            <Unstable_RadioField
              helperText="Helper text four"
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

const Template = (args) => <Unstable_RadioGroupField {...args} />;

type Story = DefaultStory<Unstable_RadioGroupFieldProps>;

export const LabelHelperText: Story = Template.bind({});
LabelHelperText.args = {
  children: '(RadioFields)',
  label: 'Label',
  helperText: 'Helper text',
};
LabelHelperText.storyName = 'children=(RadioFields) label helperText';

export const LabelHelperTextDefaultValue: Story = Template.bind({});
LabelHelperTextDefaultValue.args = {
  children: '(RadioFields)',
  label: 'Label',
  helperText: 'Helper text',
  defaultValue: 'value-1',
};
LabelHelperTextDefaultValue.storyName =
  'children=(RadioFields) label helperText defaultValue';

export const LabelHelperTextDisabled: Story = Template.bind({});
LabelHelperTextDisabled.args = {
  children: '(RadioFields)',
  label: 'Label',
  helperText: 'Helper text',
  disabled: true,
};
LabelHelperTextDisabled.storyName =
  'children=(RadioFields) label helperText disabled';

export const LabelHelperTextError: Story = Template.bind({});
LabelHelperTextError.args = {
  children: '(RadioFields)',
  label: 'Label',
  helperText: 'Helper text',
  error: true,
};
LabelHelperTextError.storyName =
  'children=(RadioFields) label helperText error';

export const LabelHelperTextErrorDisabled: Story = Template.bind({});
LabelHelperTextErrorDisabled.args = {
  children: '(RadioFields)',
  label: 'Label',
  helperText: 'Helper text',
  error: true,
  disabled: true,
};
LabelHelperTextErrorDisabled.storyName =
  'children=(RadioFields) label helperText error disabled';

export const LabelHelperTextRequired: Story = Template.bind({});
LabelHelperTextRequired.args = {
  children: '(RadioFields)',
  label: 'Label',
  helperText: 'Helper text',
  required: true,
};
LabelHelperTextRequired.storyName =
  'children=(RadioFields) label helperText required';

export const LabelHelperTextRequiredError: Story = Template.bind({});
LabelHelperTextRequiredError.args = {
  children: '(RadioFields)',
  label: 'Label',
  helperText: 'Helper text',
  required: true,
  error: true,
};
LabelHelperTextRequiredError.storyName =
  'children=(RadioFields) label helperText required error';

export const LabelHelperTextRequiredErrorDisabled: Story = Template.bind({});
LabelHelperTextRequiredErrorDisabled.args = {
  children: '(RadioFields)',
  label: 'Label',
  helperText: 'Helper text',
  required: true,
  error: true,
  disabled: true,
};
LabelHelperTextRequiredErrorDisabled.storyName =
  'children=(RadioFields) label helperText required error disabled';

export const LabelHelperTextRow: Story = Template.bind({});
LabelHelperTextRow.args = {
  children: '(RadioFields)',
  label: 'Label',
  helperText: 'Helper text',
  row: true,
};
LabelHelperTextRow.storyName = 'children=(RadioFields) label helperText row';

export const LabelHelperTextValue: Story = Template.bind({});
LabelHelperTextValue.args = {
  children: '(RadioFields)',
  label: 'Label',
  helperText: 'Helper text',
  value: 'value-1',
};
LabelHelperTextValue.storyName =
  'children=(RadioFields) label helperText value';

export const LabelHelperTextValueDisabled: Story = Template.bind({});
LabelHelperTextValueDisabled.args = {
  children: '(RadioFields)',
  label: 'Label',
  helperText: 'Helper text',
  value: 'value-1',
  disabled: true,
};
LabelHelperTextValueDisabled.storyName =
  'children=(RadioFields) label helperText value disabled';

export const LabelHelperTextValueError: Story = Template.bind({});
LabelHelperTextValueError.args = {
  children: '(RadioFields)',
  label: 'Label',
  helperText: 'Helper text',
  value: 'value-1',
  error: true,
};
LabelHelperTextValueError.storyName =
  'children=(RadioFields) label helperText value error';

export const LabelHelperTextValueErrorDisabled: Story = Template.bind({});
LabelHelperTextValueErrorDisabled.args = {
  children: '(RadioFields)',
  label: 'Label',
  helperText: 'Helper text',
  value: 'value-1',
  error: true,
  disabled: true,
};
LabelHelperTextValueErrorDisabled.storyName =
  'children=(RadioFields) label helperText value error disabled';

export const Children2LabelHelperText: Story = Template.bind({});
Children2LabelHelperText.args = {
  children: '(RadioFields helperText)',
  label: 'Label',
  helperText: 'Helper text',
};
Children2LabelHelperText.storyName =
  'children=(RadioFields helperText) label helperText';
