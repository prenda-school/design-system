import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArcCircle } from './ArcCircle';
import { ArcCircleProps } from './ArcCircleProps';

const meta: Meta<typeof ArcCircle> = {
  title: 'ArcCircle',
  component: ArcCircle,
  decorators: (Story) => (
    <svg viewBox="-100 -100 200 200" width="200" height="200">
      <Story />
    </svg>
  ),
};

export default meta;

type Story = StoryObj<typeof ArcCircle>;

const circularArcCtx: ArcCircleProps['ctx'] = {
  arcScale: {
    valueMin: 0,
    valueMax: 100,
    angleMin: 0,
    angleMax: 2 * Math.PI,
  },
  arc: {
    radius: 100,
    ratio: 0.8,
    cornerRadius: 10,
  },
};

// circular; min = at < max
export const CircularMin: Story = {
  args: {
    at: 0,
    ctx: circularArcCtx,
  },
};

// circular; min < at < max
export const CircularPartial: Story = {
  args: {
    at: 60,
    ctx: circularArcCtx,
  },
};

// circular; min = at = max
export const CircularMax: Story = {
  args: {
    at: 100,
    ctx: circularArcCtx,
  },
};

const radialArcCtx: ArcCircleProps['ctx'] = {
  arcScale: {
    valueMin: 1,
    valueMax: 3,
    angleMin: (-1 * Math.PI) / 2,
    angleMax: Math.PI / 2,
  },
  arc: {
    radius: 100,
    ratio: 0.8,
    cornerRadius: 10,
  },
};

// radial; min = at < max
export const RadialMin: Story = {
  args: {
    at: 1,
    ctx: radialArcCtx,
  },
};

// radial; min = at < max
export const RadialPartial: Story = {
  args: {
    at: 2,
    ctx: radialArcCtx,
  },
};

// radial; min = at = max
export const RadialMax: Story = {
  args: {
    at: 3,
    ctx: radialArcCtx,
  },
};
