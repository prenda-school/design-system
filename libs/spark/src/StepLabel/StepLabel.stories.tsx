import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { GearFilled } from '@prenda/spark-icons';
import { StepLabel, StepLabelProps } from '..';

export default {
  title: 'PDS/@ps/StepLabel',
  component: StepLabel,
  argTypes: {
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
    completed: { control: 'boolean' },
    error: { control: 'boolean' },
    alternativeLabel: { control: 'boolean' },
    icon: {
      control: 'select',
      options: ['1', '2', '3', 'GearFilled'],
      mapping: {
        '1': 1,
        '2': 2,
        '3': 3,
        GearFilled: <GearFilled />,
      },
    },
  },
  args: {
    icon: '1',
    children: 'Label',
  },
} as Meta;

const Template = (args: StepLabelProps) => <StepLabel {...args} />;

export const Configurable: Story = Template.bind({});

export const Active: Story = Template.bind({});
Active.args = { active: true };
Active.storyName = 'active';

export const ActiveCompleted: Story = Template.bind({});
ActiveCompleted.args = { active: true, completed: true };
ActiveCompleted.storyName = 'active completed';

export const ActiveError: Story = Template.bind({});
ActiveError.args = { active: true, error: true };
ActiveError.storyName = 'active error';

export const Completed: Story = Template.bind({});
Completed.args = { completed: true };
Completed.storyName = 'completed';

export const CompletedDisabled: Story = Template.bind({});
CompletedDisabled.args = { completed: true, disabled: true };
CompletedDisabled.storyName = 'completed disabled';

export const Disabled: Story = Template.bind({});
Disabled.args = { disabled: true };
Disabled.storyName = 'disabled';

export const Error: Story = Template.bind({});
Error.args = { error: true };
Error.storyName = 'error';
