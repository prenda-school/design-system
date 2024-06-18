import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadialBarSweep } from './RadialBarSweep';
import { RadialBarSweepProps } from './RadialBarSweepProps';

const meta: Meta<typeof RadialBarSweep> = {
  title: 'RadialBarSweep',
  component: RadialBarSweep,
  decorators: (Story) => (
    <svg viewBox="-100 -100 200 200" width="200" height="200">
      <Story />
    </svg>
  ),
};

export default meta;

type Story = StoryObj<typeof RadialBarSweep>;

const fullCircleCtx: RadialBarSweepProps['ctx'] = {
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

// circular; min = from < to < max
export const FullCirclePartial: Story = {
  args: {
    from: undefined,
    to: 60,
    cornerRadius: undefined,
    ctx: fullCircleCtx,
  },
};

// circular; min < from < to < max
export const FullCirclePartial2: Story = {
  args: {
    from: 20,
    to: 80,
    cornerRadius: undefined,
    ctx: fullCircleCtx,
  },
};

// circular; min < from < to = max
export const FullCirclePartial3: Story = {
  args: {
    from: 20,
    to: 100,
    cornerRadius: undefined,
    ctx: fullCircleCtx,
  },
};

// circular; min = from < to = max
export const FullCircleMax: Story = {
  args: {
    from: undefined,
    to: 100,
    cornerRadius: undefined,
    ctx: fullCircleCtx,
  },
};

// circular; min = from = to < max
export const FullCircleMin: Story = {
  args: {
    from: undefined,
    to: 0,
    cornerRadius: undefined,
    ctx: fullCircleCtx,
  },
};

const halfCircleCtx: RadialBarSweepProps['ctx'] = {
  radialBarScale: {
    valueMin: 1,
    valueMax: 3,
    angleMin: (-1 * Math.PI) / 2,
    angleMax: Math.PI / 2,
  },
  radialBar: {
    radius: 100,
    ratio: 0.8,
    cornerRadius: 5,
  },
};

// radial; min = from < to < max
export const HalfCirclePartial: Story = {
  args: {
    from: undefined,
    to: 2,
    cornerRadius: undefined,
    ctx: halfCircleCtx,
  },
};

// radial; min = from < to < max; cornerRadius = 0
export const HalfCirclePartialSharp: Story = {
  args: {
    from: undefined,
    to: 2,
    cornerRadius: 0,
    ctx: halfCircleCtx,
  },
};

// radial; min = from < to < max; cornerRadius = 4
export const HalfCirclePartialSoft: Story = {
  args: {
    from: undefined,
    to: 2,
    cornerRadius: 4,
    ctx: halfCircleCtx,
  },
};

// radial; min = from < to = max
export const HalfCircleMax: Story = {
  args: {
    from: undefined,
    to: 3,
    cornerRadius: undefined,
    ctx: halfCircleCtx,
  },
};

// radial; min = from = to < max
export const HalfCircleMin: Story = {
  args: {
    from: undefined,
    to: 1,
    cornerRadius: undefined,
    ctx: halfCircleCtx,
  },
};
