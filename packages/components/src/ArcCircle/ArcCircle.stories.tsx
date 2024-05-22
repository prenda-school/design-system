import type { Meta, StoryObj } from '@storybook/react';
import { ArcCircle } from './ArcCircle';
import { Chart } from '../Chart';
import { generateArc } from '../Arc/generateArc';

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

const circularArc = generateArc({
  valueMin: 0,
  valueMax: 126,
  angleMin: 0,
  angleMax: 2 * Math.PI,
  radius: 126,
  ratio: 0.77,
  cornerRadius: '50%',
});

// circular; min = at < max
export const CircularMin: Story = {
  args: {
    at: 0,
    arc: circularArc,
  },
};

// circular; min < at < max
export const CircularPartial: Story = {
  args: {
    at: 100,
    arc: circularArc,
  },
};

// circular; min = at = max
export const CircularMax: Story = {
  args: {
    at: 126,
    arc: circularArc,
  },
};

const radialArc = generateArc({
  valueMin: 1,
  valueMax: 3,
  angleMin: (-1 * Math.PI) / 2,
  angleMax: Math.PI / 2,
  radius: 126,
  ratio: 0.77,
  cornerRadius: '50%',
});

// radial; min = at < max
export const RadialMin: Story = {
  args: {
    at: 1,
    arc: radialArc,
  },
};

// radial; min = at < max
export const RadialPartial: Story = {
  args: {
    at: 2,
    arc: radialArc,
  },
};

// radial; min = at = max
export const RadialMax: Story = {
  args: {
    at: 3,
    arc: radialArc,
  },
};
