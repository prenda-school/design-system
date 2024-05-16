import type { Meta, StoryObj } from '@storybook/react';
import { LinearMeter } from './LinearMeter';

const meta: Meta<typeof LinearMeter> = {
  title: 'LinearMeter',
  component: LinearMeter,
};

export default meta;

type Story = StoryObj<typeof LinearMeter>;

export const Example: Story = {
  args: {
    label: 'Motivation',
    value: 2,
    minValue: 1,
    maxValue: 3,
    height: 30,
    width: 512,
  },
};
