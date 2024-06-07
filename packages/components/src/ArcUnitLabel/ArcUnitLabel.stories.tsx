import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArcUnitLabel } from './ArcUnitLabel';
import { ArcScale } from '../ArcScale';
import { Chart } from '../Chart';
import { Arc } from '../Arc/Arc';
import { ArcSweep } from '../ArcSweep';

const meta: Meta<typeof ArcUnitLabel> = {
  title: 'ArcUnitLabel',
  component: ArcUnitLabel,
  decorators: (Story) => (
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
    at: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    offset: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
  },
  args: {
    arc: {
      angle: { min: (-1 * Math.PI) / 2, max: Math.PI / 2 },
      radius: 50,
      ratio: 0.9,
      value: { min: 0, max: 100 },
    },
    children: <>Label</>,
  },
};

export default meta;

type Story = StoryObj<typeof ArcUnitLabel>;

export const AtMin: Story = {
  name: 'at=(min)',
  args: {
    at: 0,
  },
};

export const AtMid: Story = {
  name: 'at=(mid)',
  args: {
    at: 50,
  },
};

export const AtMax: Story = {
  name: 'at=(max)',
  args: {
    at: 100,
  },
};
