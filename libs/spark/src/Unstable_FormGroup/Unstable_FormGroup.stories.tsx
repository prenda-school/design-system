import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_Checkbox,
  Unstable_FormControlLabel,
  Unstable_FormGroup,
} from '..';
import { sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_FormGroup as typeof Unstable_FormGroup;

export default {
  title: '@ps/Unstable_FormGroup',
  component: _retyped,
  excludeStories: ['_retyped'],
  argTypes: {
    children: {
      control: 'select',
      options: ['(FormControlLabel & Checkbox)'],
      mapping: {
        '(FormControlLabel & Checkbox)': (
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
  args: {},
} as Meta;

const Template = (args) => <Unstable_FormGroup {...args} />;

export const ChildrenCheckboxes: Story = Template.bind({});
ChildrenCheckboxes.args = { children: '(FormControlLabel & Checkbox)' };
ChildrenCheckboxes.storyName = 'children=(FormControlLabel & Checkbox)';

export const ChildrenCheckboxesSTP: Story = Template.bind({});
ChildrenCheckboxesSTP.args = { children: '(FormControlLabel & Checkbox)' };
ChildrenCheckboxesSTP.decorators = [sparkThemeProvider];
ChildrenCheckboxesSTP.storyName =
  'children=(FormControlLabel & Checkbox) (SparkThemeProvider)';

export const ChildrenCheckboxesRow: Story = Template.bind({});
ChildrenCheckboxesRow.args = {
  children: '(FormControlLabel & Checkbox)',
  row: true,
};
ChildrenCheckboxesRow.storyName = 'children=(FormControlLabel & Checkbox) row';
