import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { SelectProps as _SelectProps } from '..';
import { CheckboxMenuItem, MenuItem, Select } from '..';
import {
  containBoxShadow,
  enableHooks,
  Home3,
  sparkThemeProvider,
  statefulValue,
} from '../../../stories';

interface SelectProps extends _SelectProps {
  disabled?: _SelectProps['disabled'];
  displayEmpty?: _SelectProps['displayEmpty'];
  error?: _SelectProps['error'];
  open?: _SelectProps['open'];
  leadingEl?: _SelectProps['leadingEl'];
  success?: _SelectProps['success'];
  value?: _SelectProps['value'];
}

export const _retyped = (props: SelectProps) => <Select {...props} />;

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
  decorators: [statefulValue, enableHooks, containBoxShadow],
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
          <MenuItem key={value} value={value}>
            {getLabel(value)}
          </MenuItem>
        )),
        '(CheckboxMenuItem x6)': values.map((value) => (
          <CheckboxMenuItem key={value} value={value}>
            {getLabel(value)}
          </CheckboxMenuItem>
        )),
        '(Placeholder, MenuItem x6)': [
          <MenuItem key="placeholder" value="">
            Placeholder
          </MenuItem>,
        ].concat(
          values.map((value) => (
            <MenuItem key={value} value={value}>
              {getLabel(value)}
            </MenuItem>
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

const Template = (args) => <Select {...args} />;

type Story = DefaultStory<
  SelectProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getTagProps: any;
  }
>;

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

export const FullWidth: Story = Template.bind({});
FullWidth.args = { fullWidth: true };
FullWidth.storyName = 'fullWidth';

export const LeadingEl: Story = Template.bind({});
LeadingEl.args = { leadingEl: '<Home3 />' };
LeadingEl.storyName = 'leadingEl';

export const LeadingElValue: Story = Template.bind({});
LeadingElValue.args = { leadingEl: '<Home3 />', value: 'value-1' };
LeadingElValue.storyName = 'leadingEl value';

export const SizeSmall: Story = Template.bind({});
SizeSmall.args = { size: 'small' };
SizeSmall.storyName = 'size="small"';

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
