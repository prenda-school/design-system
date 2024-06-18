import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadialBarCircle } from './RadialBarCircle';
import { RadialBarCircleProps } from './RadialBarCircleProps';

const meta: Meta<typeof RadialBarCircle> = {
  title: 'RadialBarCircle',
  component: RadialBarCircle,
  decorators: (Story) => (
    <svg viewBox="-100 -100 200 200" width="200" height="200">
      <Story />
    </svg>
  ),
};

export default meta;

type Story = StoryObj<typeof RadialBarCircle>;

const fullCircleCtx: RadialBarCircleProps['ctx'] = {
  radialBarScale: {
    valueMin: 0,
    valueMax: 100,
    angleMin: 0,
    angleMax: 2 * Math.PI,
  },
  radialBar: {
    radius: 100,
    ratio: 0.8,
    cornerRadius: 10,
  },
};

// circular; min = at < max
export const FullCircleMin: Story = {
  args: {
    at: 0,
    ctx: fullCircleCtx,
  },
};

// circular; min < at < max
export const FullCirclePartial: Story = {
  args: {
    at: 60,
    ctx: fullCircleCtx,
  },
};

// circular; min = at = max
export const FullCircleMax: Story = {
  args: {
    at: 100,
    ctx: fullCircleCtx,
  },
};

const halfCircleCtx: RadialBarCircleProps['ctx'] = {
  radialBarScale: {
    valueMin: 1,
    valueMax: 3,
    angleMin: (-1 * Math.PI) / 2,
    angleMax: Math.PI / 2,
  },
  radialBar: {
    radius: 100,
    ratio: 0.8,
    cornerRadius: 10,
  },
};

// radial; min = at < max
export const HalfCircleMin: Story = {
  args: {
    at: 1,
    ctx: halfCircleCtx,
  },
};

// radial; min = at < max
export const HalfCirclePartial: Story = {
  args: {
    at: 2,
    ctx: halfCircleCtx,
  },
};

// radial; min = at = max
export const HalfCircleMax: Story = {
  args: {
    at: 3,
    ctx: halfCircleCtx,
  },
};
