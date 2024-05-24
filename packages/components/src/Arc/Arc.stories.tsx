import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Arc } from './Arc';
import { ArcSweep } from '../ArcSweep';
import { Chart } from '../Chart';

const dim = 252 as const;

const meta: Meta<typeof Arc> = {
  title: 'Arc',
  component: Arc,
  decorators: (Story) => (
    <Chart width={dim} height={dim}>
      <Story />
    </Chart>
  ),
  argTypes: {
    radius: {
      control: {
        type: 'range',
        min: 0,
        max: dim / 2,
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
        type: 'text',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Arc>;

export const Circular: Story = {
  args: {
    arcs: {
      angleMax: 2 * Math.PI,
      angleMin: 0,
      valueMax: 120,
      valueMin: 0,
    },
    cornerRadius: '50%',
    radius: 126,
    ratio: 0.77,
    children: [
      <ArcSweep key="0" to={120} style={{ fill: '#EBECF0' }} />,
      <ArcSweep key="1" to={85} style={{ fill: '#57D9A3' }} />,
    ],
  },
};

export const Radial: Story = {
  args: {
    arcs: {
      angleMax: Math.PI / 2,
      angleMin: (-1 * Math.PI) / 2,
      valueMax: 3,
      valueMin: 1,
    },
    cornerRadius: '50%',
    radius: 126,
    ratio: 0.77,
    children: [
      <ArcSweep key="0" to={3} style={{ fill: '#EBECF0' }} />,
      <ArcSweep key="1" to={2} style={{ fill: '#5243AA' }} />,
    ],
  },
};
