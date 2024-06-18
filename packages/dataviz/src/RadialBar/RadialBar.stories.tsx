import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadialBar } from './RadialBar';
import { RadialBarSweep } from '../RadialBarSweep';

const meta: Meta<typeof RadialBar> = {
  title: 'RadialBar',
  component: RadialBar,
  decorators: (Story) => (
    <svg viewBox="-100 -100 200 200" width="200" height="200">
      <Story />
    </svg>
  ),
  argTypes: {
    radius: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    ratio: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    cornerRadius: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadialBar>;

export const FullCircle: Story = {
  args: {
    cornerRadius: 10,
    radius: 100,
    ratio: 0.8,
    children: [
      <RadialBarSweep key="0" to={100} fill="lightgrey" />,
      <RadialBarSweep key="1" to={60} />,
    ],
    ctx: {
      radialBarScale: {
        angleMin: 0,
        angleMax: 2 * Math.PI,
        valueMin: 0,
        valueMax: 100,
      },
    },
  },
};

export const HalfCircle: Story = {
  args: {
    cornerRadius: 10,
    radius: 100,
    ratio: 0.8,
    children: [
      <RadialBarSweep key="0" to={3} fill="lightgrey" />,
      <RadialBarSweep key="1" to={2} />,
    ],
    ctx: {
      radialBarScale: {
        angleMin: (-1 * Math.PI) / 2,
        angleMax: Math.PI / 2,
        valueMin: 1,
        valueMax: 3,
      },
    },
  },
};
