import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArcSegmentsSweep } from './ArcSegmentsSweep';
import { Chart } from '../Chart';
import { generateArc } from '../Arc/generateArc';
import { generateArcSegments } from '../ArcSegments/generateArcSegments';

const dim = 252 as const;

const meta: Meta<typeof ArcSegmentsSweep> = {
  title: 'ArcSegmentsSweep',
  component: ArcSegmentsSweep,
  decorators: (Story) => (
    <Chart width={dim} height={dim}>
      <Story />
    </Chart>
  ),
};

export default meta;

type Story = StoryObj<typeof ArcSegmentsSweep>;

const circularArc = generateArc({
  valueMin: 0,
  valueMax: 126,
  angleMin: 0,
  angleMax: 2 * Math.PI,
  radius: 126,
  ratio: 0.77,
});

const circularArcSegments = generateArcSegments({
  cornerRadius: '2px',
  count: 20,
  padAngle: 0.02,
});

// circular; min = from = to < max
export const CircularMin: Story = {
  args: {
    from: undefined,
    to: 0,
    cornerRadius: undefined,
    ctx: {
      arc: circularArc,
      arcSegments: circularArcSegments,
    },
  },
};

// circular; min = from < to < max
export const CircularPartial: Story = {
  args: {
    from: undefined,
    to: 100,
    cornerRadius: undefined,
    ctx: {
      arc: circularArc,
      arcSegments: circularArcSegments,
    },
  },
};

// circular; min < from < to < max
export const CircularPartial2: Story = {
  args: {
    from: 20,
    to: 110,
    cornerRadius: undefined,
    ctx: {
      arc: circularArc,
      arcSegments: circularArcSegments,
    },
  },
};

// circular; min < from < to = max
export const CircularPartial3: Story = {
  args: {
    from: 20,
    to: 126,
    cornerRadius: undefined,
    ctx: {
      arc: circularArc,
      arcSegments: circularArcSegments,
    },
  },
};

// circular; min = from < to = max
export const CircularMax: Story = {
  args: {
    from: undefined,
    to: 126,
    cornerRadius: undefined,
    ctx: {
      arc: circularArc,
      arcSegments: circularArcSegments,
    },
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

const radialArcSegments = generateArcSegments({
  cornerRadius: '2px',
  count: 15,
  padAngle: 0.02,
});

// radial; min = from = to < max
export const RadialMin: Story = {
  args: {
    from: undefined,
    to: 1,
    cornerRadius: undefined,
    ctx: {
      arc: radialArc,
      arcSegments: radialArcSegments,
    },
  },
};

// radial; min = from < to < max
export const RadialPartial: Story = {
  args: {
    from: undefined,
    to: 2,
    cornerRadius: undefined,
    ctx: {
      arc: radialArc,
      arcSegments: radialArcSegments,
    },
  },
};

// radial; min = from < to < max; cornerRadius = 0
export const RadialPartialSharp: Story = {
  args: {
    from: undefined,
    to: 2,
    cornerRadius: 0,
    ctx: {
      arc: radialArc,
      arcSegments: radialArcSegments,
    },
  },
};

// radial; min = from < to < max; cornerRadius = 4px
export const RadialPartialSoft: Story = {
  args: {
    from: undefined,
    to: 2,
    cornerRadius: '8px',
    ctx: {
      arc: radialArc,
      arcSegments: radialArcSegments,
    },
  },
};

// radial; min = from < to = max
export const RadialMax: Story = {
  args: {
    from: undefined,
    to: 3,
    cornerRadius: undefined,
    ctx: {
      arc: radialArc,
      arcSegments: radialArcSegments,
    },
  },
};
