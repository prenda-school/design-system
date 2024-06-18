import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadialBar } from '../RadialBar';
import { RadialBarScale } from './RadialBarScale';
import { RadialBarSweep } from '../RadialBarSweep';

const meta: Meta<typeof RadialBarScale> = {
  title: 'RadialBarScale',
  component: RadialBarScale,
  decorators: (Story) => (
    <svg viewBox="-100 -100 200 200" width="200" height="200">
      <Story />
    </svg>
  ),
  argTypes: {
    angleMin: {
      control: {
        type: 'range',
        min: (-2 * Math.PI).toFixed(2),
        max: (2 * Math.PI).toFixed(2),
        step: 0.01,
      },
    },
    angleMax: {
      control: {
        type: 'range',
        min: (-2 * Math.PI).toFixed(2),
        max: (2 * Math.PI).toFixed(2),
        step: 0.01,
      },
    },
    valueMin: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    valueMax: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadialBarScale>;

export const FullCircles: Story = {
  args: {
    angleMin: 0,
    angleMax: 2 * Math.PI,
    valueMin: 0,
    valueMax: 100,
    children: [
      <RadialBar key="0" radius={100} ratio={0.8} cornerRadius={10}>
        <RadialBarSweep to={100} fill="lightgrey" />
        <RadialBarSweep to={60} />
      </RadialBar>,
      <RadialBar key="1" radius={70} ratio={0.8} cornerRadius={7}>
        <RadialBarSweep to={80} />
      </RadialBar>,
    ],
  },
};

export const HalfCircles: Story = {
  args: {
    angleMin: (-1 * Math.PI) / 2,
    angleMax: Math.PI / 2,
    valueMin: 1,
    valueMax: 3,
    children: [
      <RadialBar key="0" radius={100} ratio={0.8} cornerRadius={10}>
        <RadialBarSweep to={3} fill="lightgrey" />
        <RadialBarSweep to={2} />
      </RadialBar>,
      <RadialBar key="1" radius={70} ratio={0.8} cornerRadius={7}>
        <RadialBarSweep to={3} fill="lightgrey" />
        <RadialBarSweep to={3} />
      </RadialBar>,
    ],
  },
};
