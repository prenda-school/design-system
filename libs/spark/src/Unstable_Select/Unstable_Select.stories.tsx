import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_CheckboxMenuItem,
  Unstable_MenuItem,
  Unstable_Select,
  Unstable_SelectProps as _Unstable_SelectProps,
} from '..';
import {
  containFocusIndicator,
  enableHooks,
  Home3,
  sparkThemeProvider,
  statefulValue,
} from '../../stories';

interface Unstable_SelectProps extends _Unstable_SelectProps {
  disabled?: _Unstable_SelectProps['disabled'];
  displayEmpty?: _Unstable_SelectProps['displayEmpty'];
  error?: _Unstable_SelectProps['error'];
  open?: _Unstable_SelectProps['open'];
  leadingEl?: _Unstable_SelectProps['leadingEl'];
  success?: _Unstable_SelectProps['success'];
  value?: _Unstable_SelectProps['value'];
}

export const _retyped = (props: Unstable_SelectProps) => (
  <Unstable_Select {...props} />
);

const values = [
  'value-1',
  'value-2',
  'value-3',
  'value-4',
  'value-5',
  'value-6',
] as const;

const getLabel = (value: string) =>
  `Value label${value.split('-')[1] === '1' ? '' : ' ' + value.split('-')[1]}`;

export default {
  title: '@ps/Select',
  component: _retyped,
  excludeStories: ['_retyped'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [statefulValue, enableHooks, containFocusIndicator],
  argTypes: {
    getTagProps: {
      control: 'select',
      options: ['undefined', '(getValueLabels)'],
      mapping: {
        undefined: undefined,
        '(getValueLabels)': ({ value }) => ({ label: getLabel(value) }),
      },
    },
    leadingEl: {
      control: 'select',
      options: ['undefined', '<Home3 />'],
      mapping: {
        undefined: undefined,
        '<Home3 />': <Home3 />,
      },
    },
    children: {
      control: 'select',
      options: [
        '(MenuItem x6)',
        '(CheckboxMenuItem x6)',
        '(Placeholder, MenuItem x6)',
      ],
      mapping: {
        '(MenuItem x6)': values.map((value) => (
          <Unstable_MenuItem key={value} value={value}>
            {getLabel(value)}
          </Unstable_MenuItem>
        )),
        '(CheckboxMenuItem x6)': values.map((value) => (
          <Unstable_CheckboxMenuItem key={value} value={value}>
            {getLabel(value)}
          </Unstable_CheckboxMenuItem>
        )),
        '(Placeholder, MenuItem x6)': [
          <Unstable_MenuItem key="placeholder" value="">
            Placeholder
          </Unstable_MenuItem>,
        ].concat(
          values.map((value) => (
            <Unstable_MenuItem key={value} value={value}>
              {getLabel(value)}
            </Unstable_MenuItem>
          ))
        ),
      },
    },
  },
  args: {
    // start component as "controlled"
    value: '',
    children: '(MenuItem x6)',
  },
} as Meta;

const Template = (args) => <Unstable_Select {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const STP: Story = Template.bind({});
STP.decorators = [sparkThemeProvider];
STP.storyName = '(STP)';

export const Hover: Story = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };
Hover.storyName = ':hover';

export const FocusVisible: Story = Template.bind({});
FocusVisible.parameters = { pseudo: { focusVisible: true } };
FocusVisible.storyName = ':focus-visible';

export const Disabled: Story = Template.bind({});
Disabled.args = { disabled: true };
Disabled.storyName = 'disabled';

export const DisabledHover: Story = Template.bind({});
DisabledHover.args = { disabled: true };
DisabledHover.parameters = { pseudo: { hover: true } };
DisabledHover.storyName = 'disabled :hover';

export const Error: Story = Template.bind({});
Error.args = { error: true };
Error.storyName = 'error';

export const LeadingEl: Story = Template.bind({});
LeadingEl.args = { leadingEl: '<Home3 />' };
LeadingEl.storyName = 'leadingEl';

export const LeadingElValue: Story = Template.bind({});
LeadingElValue.args = { leadingEl: '<Home3 />', value: 'value-1' };
LeadingElValue.storyName = 'leadingEl value';

export const Success: Story = Template.bind({});
Success.args = { success: true };
Success.storyName = 'success';

export const Multiple: Story = Template.bind({});
Multiple.args = {
  value: [],
  multiple: true,
};
Multiple.storyName = 'multiple value=[]';

export const MultipleValues: Story = Template.bind({});
MultipleValues.args = {
  value: ['value-1', 'value-2'],
  multiple: true,
};
MultipleValues.storyName = 'multiple value=[...]';

export const Multiple4Values: Story = Template.bind({});
Multiple4Values.args = {
  value: ['value-1', 'value-2', 'value-3', 'value-4'],
  multiple: true,
};
Multiple4Values.storyName = 'multiple value=[...x4]';

export const MultipleValuesDisabled: Story = Template.bind({});
MultipleValuesDisabled.args = {
  value: ['value-1', 'value-2'],
  multiple: true,
  disabled: true,
};
MultipleValuesDisabled.storyName = 'multiple value=[...] disabled';

export const MultipleValuesRenderValueAsTag: Story = Template.bind({});
MultipleValuesRenderValueAsTag.args = {
  value: ['value-1', 'value-2'],
  multiple: true,
  renderValueAsTag: true,
};
MultipleValuesRenderValueAsTag.storyName =
  'multiple value=[...] renderValueAsTag';

export const MultipleValuesRenderValueAsTagDisabled: Story = Template.bind({});
MultipleValuesRenderValueAsTagDisabled.args = {
  value: ['value-1', 'value-2'],
  multiple: true,
  disabled: true,
  renderValueAsTag: true,
};
MultipleValuesRenderValueAsTagDisabled.storyName =
  'multiple value=[...] disabled renderValueAsTag';

export const MultipleValuesGetTagProps: Story = Template.bind({});
MultipleValuesGetTagProps.args = {
  value: ['value-1', 'value-2', 'value-3', 'value-4'],
  multiple: true,
  getTagProps: '(getValueLabels)',
  renderValueAsTag: true,
  preventMultipleOverflow: true,
};
MultipleValuesGetTagProps.storyName =
  'multiple value=[...] getTagProps renderValueAsTag preventMultipleOverflow';
