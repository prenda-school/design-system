import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  MenuItem,
  Unstable_InputProps,
  Unstable_Select,
  Unstable_SelectProps,
  unstable_createSvgIcon,
} from '..';
import { enableHooks, sparkThemeProvider, statefulValue } from '../../stories';

const Home3 = unstable_createSvgIcon(
  <path d="M10.867 2.307a4.25 4.25 0 012.266 0c.384.106.776.304 1.31.67.542.372 1.186.886 2.086 1.607l2 1.6c1.135.908 1.589 1.279 1.912 1.725.299.412.521.874.656 1.365.147.531.153 1.117.153 2.571V14c0 1.412 0 2.427-.066 3.223-.064.787-.188 1.295-.397 1.706a4.25 4.25 0 01-1.858 1.858c-.411.21-.919.333-1.706.397-.421.035-.903.051-1.473.059V14.975c0-.445 0-.816-.02-1.12a2.824 2.824 0 00-.19-.907 2.75 2.75 0 00-1.488-1.489c-.29-.12-.59-.167-.907-.188-.304-.021-.675-.021-1.12-.021h-.05c-.445 0-.816 0-1.12.02a2.824 2.824 0 00-.907.19 2.75 2.75 0 00-1.489 1.488c-.12.29-.167.59-.188.907-.021.304-.021.675-.021 1.12V21.243a22.174 22.174 0 01-1.473-.059c-.787-.064-1.295-.188-1.706-.397a4.25 4.25 0 01-1.858-1.858c-.21-.411-.333-.919-.397-1.706-.065-.796-.066-1.81-.066-3.223v-2.155c0-1.454.006-2.04.153-2.57a4.25 4.25 0 01.656-1.366c.323-.446.777-.817 1.912-1.725l2-1.6c.9-.72 1.544-1.235 2.086-1.607.534-.366.926-.564 1.31-.67zm-1.91 20.442a.778.778 0 00.08 0l.93.001h4.067l.928-.001a.8.8 0 00.081 0c.906-.004 1.662-.017 2.302-.07.88-.072 1.607-.22 2.265-.556a5.75 5.75 0 002.513-2.513c.336-.658.485-1.385.556-2.265.071-.864.071-1.94.071-3.311V11.73c0-1.302 0-2.103-.206-2.854a5.75 5.75 0 00-.889-1.848c-.457-.63-1.082-1.13-2.099-1.944l-.09-.072-2-1.6-.023-.018c-.872-.698-1.559-1.247-2.151-1.654-.605-.415-1.153-.711-1.759-.879a5.75 5.75 0 00-3.066 0c-.606.168-1.154.464-1.759.88-.592.406-1.279.955-2.151 1.653l-.023.018-2 1.6-.09.072c-1.017.813-1.643 1.314-2.1 1.944a5.75 5.75 0 00-.888 1.848c-.206.75-.206 1.552-.206 2.854v2.304c0 1.371 0 2.447.07 3.311.073.88.221 1.607.557 2.265a5.75 5.75 0 002.513 2.513c.658.336 1.385.484 2.265.556.64.053 1.396.066 2.302.07zm5.293-1.5l-.25.001H9.75V15c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677.077-.032.194-.061.435-.078.247-.017.567-.017 1.043-.017s.796 0 1.043.017c.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043v6.25z" />,
  'Sb_Home3'
);

interface Sb_Unstable_SelectProps extends Unstable_SelectProps {
  /**
   * **Note**: the custom `success` styling is delivered through a class name instead of a prop.
   */
  className?: Unstable_SelectProps['className'];
  disabled?: Unstable_SelectProps['disabled'];
  displayEmpty?: Unstable_SelectProps['displayEmpty'];
  error?: Unstable_SelectProps['error'];
  open?: Unstable_SelectProps['open'];
  leadingEl?: Unstable_InputProps['leadingEl'];
  success?: boolean;
  value?: Unstable_SelectProps['value'];
}

export const Sb_Unstable_Select = (props: Sb_Unstable_SelectProps) => (
  <Unstable_Select {...props} />
);

export default {
  title: '@ps/Unstable_Select',
  component: Sb_Unstable_Select,
  excludeStories: ['Sb_Unstable_Select'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    getTagProps: {
      control: 'select',
      options: ['undefined', 'getValueLabels'],
      mapping: {
        undefined: undefined,
        getValueLabels: () => ({ label: 'Label' }),
      },
    },
    leadingEl: {
      control: 'select',
      options: ['undefined', 'Home'],
      mapping: {
        undefined: undefined,
        Home: <Home3 />,
      },
    },
  },
  args: {
    // start component as "controlled"
    value: '',
  },
  decorators: [statefulValue, enableHooks],
} as Meta;

const Template = (args) => (
  <Unstable_Select {...args}>
    <MenuItem value="Value">Value</MenuItem>
    <MenuItem value="Value 2">Value 2</MenuItem>
    <MenuItem value="Value 3">Value 3</MenuItem>
    <MenuItem value="Value 4">Value 4</MenuItem>
    <MenuItem value="Value 5">Value 5</MenuItem>
    <MenuItem value="Value 6">Value 6</MenuItem>
  </Unstable_Select>
);

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const SparkThemeProvider: Story = Template.bind({});
SparkThemeProvider.decorators = [sparkThemeProvider];
SparkThemeProvider.storyName = '(SparkThemeProvider)';

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
LeadingEl.args = { leadingEl: 'Home' };
LeadingEl.storyName = 'leadingEl';

export const LeadingElValue: Story = Template.bind({});
LeadingElValue.args = { leadingEl: 'Home', value: 'Value' };
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
  value: ['Value', 'Value 2'],
  multiple: true,
};
MultipleValues.storyName = 'multiple value=[...]';

export const MultipleValuesDisabled: Story = Template.bind({});
MultipleValuesDisabled.args = {
  value: ['Value', 'Value 2'],
  multiple: true,
  disabled: true,
};
MultipleValuesDisabled.storyName = 'multiple value=[...] disabled';

export const MultipleValuesGetTagProps: Story = Template.bind({});
MultipleValuesGetTagProps.args = {
  value: ['Value', 'Value 2', 'Value 3'],
  multiple: true,
  getTagProps: 'getValueLabels',
};
MultipleValuesGetTagProps.storyName = 'multiple value=[...] getTagProps';
