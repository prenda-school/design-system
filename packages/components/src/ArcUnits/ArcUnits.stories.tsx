import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArcScale } from '../ArcScale';
import { Arc } from '../Arc';
import { ArcSweep } from '../ArcSweep';
import { ArcUnits } from './ArcUnits';
import { ArcUnitLabel } from '../ArcUnitLabel';
import { Chart } from '../Chart';

const meta: Meta<typeof ArcUnits> = {
  title: 'ArcUnits',
  component: ArcUnits,
  decorators: (Story, ctx) => (
    <Chart width={212} height={212}>
      <ArcScale
        angleMin={(-1 * Math.PI) / 2}
        angleMax={Math.PI / 2}
        valueMin={0}
        valueMax={100}
      >
        <Arc radius={50} ratio={0.9}>
          <ArcSweep to={100} />
          <Story />
        </Arc>
      </ArcScale>
    </Chart>
  ),
  argTypes: {
    offset: {
      control: { type: 'range', min: -20, max: 20, step: 1 },
    },
    position: {
      control: { type: 'select' },
      options: ['inside', 'outside'],
    },
  },
  args: {
    children: [
      <ArcUnitLabel key="0" at={0}>
        Label
      </ArcUnitLabel>,
      <ArcUnitLabel key="1" at={50}>
        Label
      </ArcUnitLabel>,
      <ArcUnitLabel key="2" at={100}>
        Label
      </ArcUnitLabel>,
    ],
    ctx: {
      arcScale: {
        angleMin: (-1 * Math.PI) / 2,
        angleMax: Math.PI / 2,
        valueMin: 0,
        valueMax: 100,
      },
      arc: {
        radius: 50,
        ratio: 0.9,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArcUnits>;

export const PositionOutside: Story = {
  name: 'position=outside',
  args: {
    position: 'outside',
  },
};

export const PositionOutsideOffset4: Story = {
  name: 'position=outside offset=4',
  args: {
    position: 'outside',
    offset: 4,
  },
};

export const PositionOutsideOffsetNeg4: Story = {
  name: 'position=outside offset=-4',
  args: {
    position: 'outside',
    offset: -4,
  },
};

export const PositionInside: Story = {
  name: 'position=inside',
  args: {
    position: 'inside',
  },
};

export const PositionInsideOffset4: Story = {
  name: 'position=inside offset=4',
  args: {
    position: 'inside',
    offset: 4,
  },
};

export const PositionInsideOffsetNeg4: Story = {
  name: 'position=inside offset=-4',
  args: {
    position: 'inside',
    offset: -4,
  },
};
