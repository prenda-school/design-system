import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArcSweep } from './ArcSweep';
import { Chart } from '../Chart';
import { ArcParams, ArcScaleParams } from '../utils';

const dim = 252 as const;

const meta: Meta<typeof ArcSweep> = {
  title: 'ArcSweep',
  component: ArcSweep,
  decorators: (Story) => (
    <Chart width={dim} height={dim}>
      <Story />
    </Chart>
  ),
};

export default meta;

type Story = StoryObj<typeof ArcSweep>;

const circularArc: ArcScaleParams & ArcParams = {
  valueMin: 0,
  valueMax: 126,
  angleMin: 0,
  angleMax: 2 * Math.PI,
  radius: 126,
  ratio: 0.77,
  cornerRadius: '50%',
};

// circular; min = from = to < max
export const CircularMin: Story = {
  args: {
    from: undefined,
    to: 0,
    cornerRadius: undefined,
    ...circularArc,
  },
};

// circular; min = from < to < max
export const CircularPartial: Story = {
  args: {
    from: undefined,
    to: 100,
    cornerRadius: undefined,
    ...circularArc,
  },
};

// circular; min < from < to < max
export const CircularPartial2: Story = {
  args: {
    from: 20,
    to: 110,
    cornerRadius: undefined,
    ...circularArc,
  },
};

// circular; min < from < to = max
export const CircularPartial3: Story = {
  args: {
    from: 20,
    to: 126,
    cornerRadius: undefined,
    ...circularArc,
  },
};

// circular; min = from < to = max
export const CircularMax: Story = {
  args: {
    from: undefined,
    to: 126,
    cornerRadius: undefined,
    ...circularArc,
  },
};

const radialArc: ArcScaleParams & ArcParams = {
  valueMin: 1,
  valueMax: 3,
  angleMin: (-1 * Math.PI) / 2,
  angleMax: Math.PI / 2,
  radius: 126,
  ratio: 0.77,
  cornerRadius: '50%',
};

// radial; min = from = to < max
export const RadialMin: Story = {
  args: {
    from: undefined,
    to: 1,
    cornerRadius: undefined,
    ...radialArc,
  },
};

// radial; min = from < to < max
export const RadialPartial: Story = {
  args: {
    from: undefined,
    to: 2,
    cornerRadius: undefined,
    ...radialArc,
  },
};

// radial; min = from < to < max; cornerRadius = 0
export const RadialPartialSharp: Story = {
  args: {
    from: undefined,
    to: 2,
    cornerRadius: 0,
    ...radialArc,
  },
};

// radial; min = from < to < max; cornerRadius = 4px
export const RadialPartialSoft: Story = {
  args: {
    from: undefined,
    to: 2,
    cornerRadius: '8px',
    ...radialArc,
  },
};

// radial; min = from < to = max
export const RadialMax: Story = {
  args: {
    from: undefined,
    to: 3,
    cornerRadius: undefined,
    ...radialArc,
  },
};
