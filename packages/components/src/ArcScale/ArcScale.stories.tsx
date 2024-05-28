import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Arc } from '../Arc';
import { ArcScale } from './ArcScale';
import { ArcSweep } from '../ArcSweep';
import { Chart } from '../Chart';

const meta: Meta<typeof ArcScale> = {
  title: 'ArcScale',
  component: ArcScale,
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

type Story = StoryObj<typeof ArcScale>;

export const Circular: Story = {
  args: {
    angleMin: 0,
    angleMax: 2 * Math.PI,
    valueMin: 0,
    valueMax: 120,
    children: [
      <Arc key="0" radius={126} ratio={0.77} cornerRadius="50%">
        <ArcSweep to={120} style={{ fill: '#EBECF0' }} />
        <ArcSweep to={85} style={{ fill: '#57D9A3' }} />
      </Arc>,
      <Arc key="1" radius={93} ratio={0.87} cornerRadius="50%">
        <ArcSweep to={80} style={{ fill: '#C1C7D0' }} />
      </Arc>,
    ],
  },
  decorators: (Story) => (
    <Chart width={252} height={252}>
      <Story />
    </Chart>
  ),
};

export const Radial: Story = {
  args: {
    angleMin: (-1 * Math.PI) / 2,
    angleMax: Math.PI / 2,
    valueMin: 1,
    valueMax: 3,
    children: [
      <Arc key="0" radius={126} ratio={0.77} cornerRadius="50%">
        <ArcSweep to={3} style={{ fill: '#EBECF0' }} />
        <ArcSweep to={2} style={{ fill: '#5243AA' }} />
      </Arc>,
      <Arc key="1" radius={93} ratio={0.87} cornerRadius="50%">
        <ArcSweep to={3} style={{ fill: '#EBECF0' }} />
        <ArcSweep to={3} style={{ fill: '#C0B6F2' }} />
      </Arc>,
    ],
  },
  decorators: (Story) => (
    <Chart width={252} height={252}>
      <Story />
    </Chart>
  ),
};
