import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArcCircle } from './ArcCircle';
import { Chart } from '../Chart';
import { ArcParams, ArcScaleParams } from '../utils';

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

const circularArc: ArcScaleParams & ArcParams = {
  valueMin: 0,
  valueMax: 126,
  angleMin: 0,
  angleMax: 2 * Math.PI,
  radius: 126,
  ratio: 0.77,
  cornerRadius: '50%',
};

// circular; min = at < max
export const CircularMin: Story = {
  args: {
    at: 0,
    ...circularArc,
  },
};

// circular; min < at < max
export const CircularPartial: Story = {
  args: {
    at: 100,
    ...circularArc,
  },
};

// circular; min = at = max
export const CircularMax: Story = {
  args: {
    at: 126,
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

// radial; min = at < max
export const RadialMin: Story = {
  args: {
    at: 1,
    ...radialArc,
  },
};

// radial; min = at < max
export const RadialPartial: Story = {
  args: {
    at: 2,
    ...radialArc,
  },
};

// radial; min = at = max
export const RadialMax: Story = {
  args: {
    at: 3,
    ...radialArc,
  },
};
