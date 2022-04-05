import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { GearFilled } from '@prenda/spark-icons';
import { StepIcon, StepIconProps } from '..';
import { sparkThemeProvider } from '../../stories';

export default {
  title: '@ps/StepIcon',
  component: StepIcon,
  argTypes: {
    icon: {
      control: 'select',
      options: ['1', '2', '3', 'A', 'GearFilled'],
      mapping: {
        '1': 1,
        '2': 2,
        '3': 3,
        A: 'A',
        GearFilled: <GearFilled />,
      },
    },
  },
  args: {
    icon: '1',
    titleAccess: 'Step one',
  },
  decorators: [sparkThemeProvider],
} as Meta;

const Template = (args: StepIconProps) => (
  <span style={{ display: 'inline-block', width: 48, height: 48 }}>
    <StepIcon {...args} />
  </span>
);

export const Configurable: Story = Template.bind({});

export const Text: Story = Template.bind({});
Text.args = { icon: '1' };

export const TextActive: Story = Template.bind({});
TextActive.args = { active: true, icon: '1' };
TextActive.storyName = 'Text active';

export const TextCompleted: Story = Template.bind({});
TextCompleted.args = { completed: true, icon: '1' };
TextCompleted.storyName = 'Text completed';

export const TextError: Story = Template.bind({});
TextError.args = { error: true, icon: '1' };
TextError.storyName = 'Text error';

export const TextActiveCompleted: Story = Template.bind({});
TextActiveCompleted.args = { active: true, completed: true, icon: '1' };
TextActiveCompleted.storyName = 'Text active completed';

export const TextActiveError: Story = Template.bind({});
TextActiveError.args = { active: true, error: true, icon: '1' };
TextActiveError.storyName = 'Text active error';

export const Icon: Story = Template.bind({});
Icon.args = { icon: 'GearFilled' };

export const IconActive: Story = Template.bind({});
IconActive.args = { active: true, icon: 'GearFilled' };
IconActive.storyName = 'Icon active';

export const IconCompleted: Story = Template.bind({});
IconCompleted.args = { completed: true, icon: 'GearFilled' };
IconCompleted.storyName = 'Icon completed';

export const IconError: Story = Template.bind({});
IconError.args = { error: true, icon: 'GearFilled' };
IconError.storyName = 'Icon error';

export const IconActiveCompleted: Story = Template.bind({});
IconActiveCompleted.args = {
  active: true,
  completed: true,
  icon: 'GearFilled',
};
IconActiveCompleted.storyName = 'Icon active completed';

export const IconActiveError: Story = Template.bind({});
IconActiveError.args = { active: true, error: true, icon: 'GearFilled' };
IconActiveError.storyName = 'Icon active error';
