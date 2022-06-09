import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_Radio,
  Unstable_FormControlLabel,
  Unstable_RadioGroup,
} from '..';
import { sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_RadioGroup as typeof Unstable_RadioGroup;

export default {
  title: '@ps/Unstable_RadioGroup',
  component: _retyped,
  excludeStories: ['_retyped'],
  argTypes: {
    children: {
      control: 'select',
      options: ['(FormControlLabel & Radio)'],
      mapping: {
        '(FormControlLabel & Radio)': (
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
  args: {},
} as Meta;

const Template = (args) => <Unstable_RadioGroup {...args} />;

export const ChildrenRadios: Story = Template.bind({});
ChildrenRadios.args = { children: '(FormControlLabel & Radio)' };
ChildrenRadios.storyName = 'children=(FormControlLabel & Radio)';

export const ChildrenRadiosSTP: Story = Template.bind({});
ChildrenRadiosSTP.args = { children: '(FormControlLabel & Radio)' };
ChildrenRadiosSTP.decorators = [sparkThemeProvider];
ChildrenRadiosSTP.storyName =
  'children=(FormControlLabel & Radio) (SparkThemeProvider)';

export const ChildrenRadiosRow: Story = Template.bind({});
ChildrenRadiosRow.args = {
  children: '(FormControlLabel & Radio)',
  row: true,
};
ChildrenRadiosRow.storyName = 'children=(FormControlLabel & Radio) row';

export const ChildrenRadiosDefaultValue: Story = Template.bind({});
ChildrenRadiosDefaultValue.args = {
  children: '(FormControlLabel & Radio)',
  defaultValue: 'value-2',
};
ChildrenRadiosDefaultValue.storyName =
  'children=(FormControlLabel & Radio) defaultValue';
