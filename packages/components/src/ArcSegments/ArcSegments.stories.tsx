import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArcSegments } from './ArcSegments';
import { ArcSegmentsSweep } from '../ArcSegmentsSweep';
import { Chart } from '../Chart';

const dim = 252 as const;

const meta: Meta<typeof ArcSegments> = {
  title: 'ArcSegments',
  component: ArcSegments,
  decorators: (Story) => (
    <Chart width={dim} height={dim}>
      <Story />
    </Chart>
  ),
  argTypes: {
    padAngle: {
      control: {
        type: 'range',
        min: 0,
        max: 0.5,
        step: 0.005,
      },
    },
    count: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1,
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

type Story = StoryObj<typeof ArcSegments>;

export const Circular: Story = {
  args: {
    padAngle: 0.05,
    count: 20,
    cornerRadius: '2px',
    children: [
      <ArcSegmentsSweep key="0" to={120} />,
      <ArcSegmentsSweep key="1" to={85} />,
    ],
    ctx: {
      arcScale: {
        angleMin: 0,
        angleMax: 2 * Math.PI,
        valueMin: 0,
        valueMax: 126,
      },
      arc: {
        radius: 126,
        ratio: 0.77,
        cornerRadius: '50%',
      },
    },
  },
};

export const Radial: Story = {
  args: {
    padAngle: 0.05,
    count: 20,
    cornerRadius: '2px',
    children: [
      <ArcSegmentsSweep key="0" to={3} />,
      <ArcSegmentsSweep key="1" to={2} />,
    ],
    ctx: {
      arcScale: {
        angleMin: (-1 * Math.PI) / 2,
        angleMax: Math.PI / 2,
        valueMin: 1,
        valueMax: 3,
      },
      arc: {
        radius: 126,
        ratio: 0.77,
        cornerRadius: '50%',
      },
    },
  },
};
