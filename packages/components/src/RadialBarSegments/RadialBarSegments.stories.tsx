import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadialBarSegments } from './RadialBarSegments';
import { RadialBarSegmentsSweep } from '../RadialBarSegmentsSweep';

const meta: Meta<typeof RadialBarSegments> = {
  title: 'RadialBarSegments',
  component: RadialBarSegments,
  decorators: (Story) => (
    <svg viewBox="-100 -100 200 200" width="200" height="200">
      <Story />
    </svg>
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

type Story = StoryObj<typeof RadialBarSegments>;

export const FullCircle: Story = {
  args: {
    padAngle: 0.05,
    count: 20,
    cornerRadius: 2,
    children: [
      <RadialBarSegmentsSweep key="0" to={100} fill="lightgrey" />,
      <RadialBarSegmentsSweep key="1" to={60} />,
    ],
    ctx: {
      radialBarScale: {
        angleMin: 0,
        angleMax: 2 * Math.PI,
        valueMin: 0,
        valueMax: 100,
      },
      radialBar: {
        radius: 100,
        ratio: 0.8,
      },
    },
  },
};

export const HalfCircle: Story = {
  args: {
    padAngle: 0.05,
    count: 20,
    cornerRadius: 2,
    children: [
      <RadialBarSegmentsSweep key="0" to={3} fill="lightgrey" />,
      <RadialBarSegmentsSweep key="1" to={2} />,
    ],
    ctx: {
      radialBarScale: {
        angleMin: (-1 * Math.PI) / 2,
        angleMax: Math.PI / 2,
        valueMin: 1,
        valueMax: 3,
      },
      radialBar: {
        radius: 100,
        ratio: 0.8,
      },
    },
  },
};
