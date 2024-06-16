import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArcSegments } from './ArcSegments';
import { ArcSegmentsSweep } from '../ArcSegmentsSweep';

const meta: Meta<typeof ArcSegments> = {
  title: 'ArcSegments',
  component: ArcSegments,
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

type Story = StoryObj<typeof ArcSegments>;

export const Circular: Story = {
  args: {
    padAngle: 0.05,
    count: 20,
    cornerRadius: 2,
    children: [
      <ArcSegmentsSweep key="0" to={100} fill="lightgrey" />,
      <ArcSegmentsSweep key="1" to={60} />,
    ],
    ctx: {
      arcScale: {
        angleMin: 0,
        angleMax: 2 * Math.PI,
        valueMin: 0,
        valueMax: 100,
      },
      arc: {
        radius: 100,
        ratio: 0.8,
      },
    },
  },
};

export const Radial: Story = {
  args: {
    padAngle: 0.05,
    count: 20,
    cornerRadius: 2,
    children: [
      <ArcSegmentsSweep key="0" to={3} fill="lightgrey" />,
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
        radius: 100,
        ratio: 0.8,
      },
    },
  },
};
