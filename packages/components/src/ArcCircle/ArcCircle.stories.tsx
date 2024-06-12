import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArcCircle } from './ArcCircle';
import { Chart } from '../Chart';
import { ArcCircleProps } from './ArcCircleProps';

const dim = 252 as const;

const meta: Meta<typeof ArcCircle> = {
  title: 'ArcCircle',
  component: ArcCircle,
  decorators: (Story) => (
    <Chart width={dim} height={dim}>
      <Story />
    </Chart>
  ),
};

export default meta;

type Story = StoryObj<typeof ArcCircle>;

const circularArcCtx: ArcCircleProps['ctx'] = {
  arcScale: {
    valueMin: 0,
    valueMax: 126,
    angleMin: 0,
    angleMax: 2 * Math.PI,
  },
  arc: {
    radius: 126,
    ratio: 0.77,
    cornerRadius: '50%',
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
    at: 100,
    ctx: circularArcCtx,
  },
};

// circular; min = at = max
export const CircularMax: Story = {
  args: {
    at: 126,
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
    radius: 126,
    ratio: 0.77,
    cornerRadius: '50%',
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
