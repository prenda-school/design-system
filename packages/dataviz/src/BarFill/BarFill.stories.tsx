import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BarFill } from './BarFill';

const meta: Meta<typeof BarFill> = {
  title: 'BarFill',
  component: BarFill,
  decorators: (Story) => (
    <svg viewBox="0 0 200 200" width="200" height="200">
      <Story />
    </svg>
  ),
  argTypes: {
    to: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
  args: {
    ctx: {
      barScale: {
        valueMin: 0,
        valueMax: 100,
        lengthMin: 0,
        lengthMax: 200,
      },
      bar: {
        thickness: 30,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BarFill>;

export const ToMax: Story = {
  name: 'to=100 (max)',
  args: {
    to: 100,
  },
};

export const ToBetween: Story = {
  name: 'to=50 (between)',
  args: {
    to: 50,
  },
};

export const To1: Story = {
  name: 'to=1',
  args: {
    to: 1,
  },
};

export const ToMin: Story = {
  name: 'to=0 (min)',
  args: {
    to: 0,
  },
};
