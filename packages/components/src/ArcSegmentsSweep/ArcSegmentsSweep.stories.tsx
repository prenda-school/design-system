import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArcSegmentsSweep } from './ArcSegmentsSweep';
import { ArcSegmentsSweepProps } from './ArcSegmentsSweepProps';

const meta: Meta<typeof ArcSegmentsSweep> = {
  title: 'ArcSegmentsSweep',
  component: ArcSegmentsSweep,
  decorators: (Story) => (
    <svg viewBox="-100 -100 200 200" width="200" height="200">
      <Story />
    </svg>
  ),
};

export default meta;

type Story = StoryObj<typeof ArcSegmentsSweep>;

const circularArcCtx: ArcSegmentsSweepProps['ctx'] = {
  arcScale: {
    valueMin: 0,
    valueMax: 100,
    angleMin: 0,
    angleMax: 2 * Math.PI,
  },
  arc: {
    radius: 100,
    ratio: 0.8,
  },
  arcSegments: {
    cornerRadius: 2,
    count: 20,
    padAngle: 0.02,
  },
};

// circular; min = from < to < max
export const CircularPartial: Story = {
  args: {
    from: undefined,
    to: 40,
    cornerRadius: undefined,
    ctx: circularArcCtx,
  },
};

// circular; min < from < to < max
export const CircularPartial2: Story = {
  args: {
    from: 20,
    to: 80,
    cornerRadius: undefined,
    ctx: circularArcCtx,
  },
};

// circular; min < from < to = max
export const CircularPartial3: Story = {
  args: {
    from: 20,
    to: 100,
    cornerRadius: undefined,
    ctx: circularArcCtx,
  },
};

// circular; min = from < to = max
export const CircularMax: Story = {
  args: {
    from: undefined,
    to: 100,
    cornerRadius: undefined,
    ctx: circularArcCtx,
  },
};

// circular; min = from = to < max
export const CircularMin: Story = {
  args: {
    from: undefined,
    to: 0,
    cornerRadius: undefined,
    ctx: circularArcCtx,
  },
};

const radialArcCtx: ArcSegmentsSweepProps['ctx'] = {
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
  arcSegments: {
    cornerRadius: 2,
    count: 15,
    padAngle: 0.02,
  },
};

// radial; min = from < to < max
export const RadialPartial: Story = {
  args: {
    from: undefined,
    to: 2,
    cornerRadius: undefined,
    ctx: radialArcCtx,
  },
};

// radial; min = from < to < max; cornerRadius = 0
export const RadialPartialSharp: Story = {
  args: {
    from: undefined,
    to: 2,
    cornerRadius: 0,
    ctx: radialArcCtx,
  },
};

// radial; min = from < to < max; cornerRadius = 4
export const RadialPartialSoft: Story = {
  args: {
    from: undefined,
    to: 2,
    cornerRadius: 4,
    ctx: radialArcCtx,
  },
};

// radial; min = from < to = max
export const RadialMax: Story = {
  args: {
    from: undefined,
    to: 3,
    cornerRadius: undefined,
    ctx: radialArcCtx,
  },
};

// radial; min = from = to < max
export const RadialMin: Story = {
  args: {
    from: undefined,
    to: 1,
    cornerRadius: undefined,
    ctx: radialArcCtx,
  },
};
