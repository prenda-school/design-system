import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Checkbox, FormControlLabel, FormGroup } from '..';
import { containFocusIndicator } from '../../stories';

export const _retyped = FormGroup as typeof FormGroup;

export default {
  title: '@ps/FormGroup',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containFocusIndicator],
  argTypes: {
    children: {
      control: 'select',
      options: ['(Labeled Checkboxes)'],
      mapping: {
        '(Labeled Checkboxes)': (
          <>
            <FormControlLabel
              control={<Checkbox />}
              label="Label one"
              value="value-1"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Label two"
              value="value-2"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Label three"
              value="value-3"
            />
            <FormControlLabel
              control={<Checkbox />}
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

const Template = (args) => <FormGroup {...args} />;

export const ChildrenLabeledCheckboxes: Story = Template.bind({});
ChildrenLabeledCheckboxes.args = { children: '(Labeled Checkboxes)' };
ChildrenLabeledCheckboxes.storyName = 'children=(Labeled Checkboxes)';

export const ChildrenLabeledCheckboxesRow: Story = Template.bind({});
ChildrenLabeledCheckboxesRow.args = {
  children: '(Labeled Checkboxes)',
  row: true,
};
ChildrenLabeledCheckboxesRow.storyName = 'children=(Labeled Checkboxes) row';
