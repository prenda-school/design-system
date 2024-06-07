import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Chart } from '../Chart';
import { ArcScale } from '../ArcScale';
import { Arc } from '../Arc';
import { ArcSweep } from '../ArcSweep';
import { ArcUnits } from './ArcUnits';
import { ArcUnitLabel } from '../ArcUnitLabel';

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
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
  },
  args: {
    // @ts-expect-error fix
    arc: {
      angle: { min: (-1 * Math.PI) / 2, max: Math.PI / 2 },
      radius: 50,
      ratio: 0.9,
      value: { min: 0, max: 100 },
    },
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
  },
};

export default meta;

type Story = StoryObj<typeof ArcUnits>;

export const Offset0: Story = {
  name: 'offset=0',
  args: {
    offset: 0,
  },
};

export const Offset4: Story = {
  name: 'offset=4',
  args: {
    offset: 4,
  },
};
