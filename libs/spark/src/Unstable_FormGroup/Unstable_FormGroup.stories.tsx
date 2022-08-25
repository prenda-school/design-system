import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_Checkbox,
  Unstable_FormControlLabel,
  Unstable_FormGroup,
} from '..';
import { containFocusIndicator, sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_FormGroup as typeof Unstable_FormGroup;

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
          </>
        ),
      },
    },
  },
} as Meta;

const Template = (args) => <Unstable_FormGroup {...args} />;

export const ChildrenLabeledCheckboxes: Story = Template.bind({});
ChildrenLabeledCheckboxes.args = { children: '(Labeled Checkboxes)' };
ChildrenLabeledCheckboxes.storyName = 'children=(Labeled Checkboxes)';

export const ChildrenLabeledCheckboxesSTP: Story = Template.bind({});
ChildrenLabeledCheckboxesSTP.args = { children: '(Labeled Checkboxes)' };
ChildrenLabeledCheckboxesSTP.decorators = [sparkThemeProvider];
ChildrenLabeledCheckboxesSTP.storyName = 'children=(Labeled Checkboxes) (STP)';

export const ChildrenLabeledCheckboxesRow: Story = Template.bind({});
ChildrenLabeledCheckboxesRow.args = {
  children: '(Labeled Checkboxes)',
  row: true,
};
ChildrenLabeledCheckboxesRow.storyName = 'children=(Labeled Checkboxes) row';
