import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Arc } from '../Arc';
import { ArcScale } from '../ArcScale';
import { ArcSweep } from '../ArcSweep';
import { ArcUnitLabel } from './ArcUnitLabel';
import { Chart } from '../Chart';

const meta: Meta<typeof ArcUnitLabel> = {
  title: 'ArcUnitLabel',
  component: ArcUnitLabel,
  decorators: (Story) => (
    <Chart width={212} height={212}>
      <ArcScale angleMin={0} angleMax={2 * Math.PI} valueMin={0} valueMax={100}>
        <Arc radius={50} ratio={0.9}>
          <ArcSweep to={100} />
          <Story />
        </Arc>
      </ArcScale>
    </Chart>
  ),
  argTypes: {
    at: {
      control: {
        type: 'range',
        min: -100,
        max: 200,
        step: 1,
      },
    },
    offset: {
      control: { type: 'range', min: -20, max: 20, step: 1 },
    },
    position: {
      control: { type: 'select' },
      options: ['inside', 'outside'],
    },
  },
  args: {
    ctx: {
      arcScale: {
        angleMin: 0,
        angleMax: 2 * Math.PI,
        valueMin: 0,
        valueMax: 100,
      },
      arc: {
        radius: 50,
        ratio: 0.9,
      },
      arcUnits: {},
    },
    children: <>Label</>,
  },
};

export default meta;

type Story = StoryObj<typeof ArcUnitLabel>;

export const AtTopPositionOutside: Story = {
  name: 'at=(top) position=outside',
  args: {
    at: 0,
    position: 'outside',
  },
};

export const AtTopRightPositionOutside: Story = {
  name: 'at=(top-right) position=outside',
  args: {
    at: 100 / 8,
    position: 'outside',
  },
};

export const AtRightPositionOutside: Story = {
  name: 'at=(right) position=outside',
  args: {
    at: (2 * 100) / 8,
    position: 'outside',
  },
};

export const AtBottomRightPositionOutside: Story = {
  name: 'at=(bottom-right) position=outside',
  args: {
    at: (3 * 100) / 8,
    position: 'outside',
  },
};

export const AtBottomPositionOutside: Story = {
  name: 'at=(bottom) position=outside',
  args: {
    at: (4 * 100) / 8,
    position: 'outside',
  },
};

export const AtBottomLeftPositionOutside: Story = {
  name: 'at=(bottom-left) position=outside',
  args: {
    at: (5 * 100) / 8,
    position: 'outside',
  },
};

export const AtLeftPositionOutside: Story = {
  name: 'at=(left) position=outside',
  args: {
    at: (6 * 100) / 8,
    position: 'outside',
  },
};

export const AtTopLeftPositionOutside: Story = {
  name: 'at=(top-left) position=outside',
  args: {
    at: (7 * 100) / 8,
    position: 'outside',
  },
};

export const AtTopPositionInside: Story = {
  name: 'at=(top) position=inside',
  args: {
    at: 0,
    position: 'inside',
  },
};

export const AtTopRightPositionInside: Story = {
  name: 'at=(top-right) position=inside',
  args: {
    at: 100 / 8,
    position: 'inside',
  },
};

export const AtRightPositionInside: Story = {
  name: 'at=(right) position=inside',
  args: {
    at: (2 * 100) / 8,
    position: 'inside',
  },
};

export const AtBottomRightPositionInside: Story = {
  name: 'at=(bottom-right) position=inside',
  args: {
    at: (3 * 100) / 8,
    position: 'inside',
  },
};

export const AtBottomPositionInside: Story = {
  name: 'at=(bottom) position=inside',
  args: {
    at: (4 * 100) / 8,
    position: 'inside',
  },
};

export const AtBottomLeftPositionInside: Story = {
  name: 'at=(bottom-left) position=inside',
  args: {
    at: (5 * 100) / 8,
    position: 'inside',
  },
};

export const AtLeftPositionInside: Story = {
  name: 'at=(left) position=inside',
  args: {
    at: (6 * 100) / 8,
    position: 'inside',
  },
};

export const AtTopLeftPositionInside: Story = {
  name: 'at=(top-left) position=inside',
  args: {
    at: (7 * 100) / 8,
    position: 'inside',
  },
};
