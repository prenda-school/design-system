import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BarUnits } from './BarUnits';
import { Chart } from '../Chart';
import { BarFill } from '../BarFill';
import { BarScale } from '../BarScale';
import { Bar } from '../Bar/Bar';
import { BarUnitLabel } from '../BarUnitLabel';

const meta: Meta<typeof BarUnits> = {
  title: 'BarUnits',
  component: BarUnits,
  decorators: (Story, ctx) => (
    <Chart width={212} height={212}>
      <g style={{ transform: `translate(-${212 / 2}px, -${212 / 2}px)` }}>
        <g
          style={{
            transform: `translate(0, ${
              ctx.args.position === 'above' ? 20 : 0
            }px)`,
          }}
        >
          <BarScale valueMin={0} valueMax={100} lengthMax={212}>
            <Bar thickness={30}>
              <BarFill to={100} />
              <Story />
            </Bar>
          </BarScale>
        </g>
      </g>
    </Chart>
  ),
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['above', 'below'],
    },
    offset: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
  },
  args: {
    valueMin: 0,
    valueMax: 100,
    lengthMin: 0,
    lengthMax: 212,
    thickness: 30,
    children: [
      <BarUnitLabel key="0" at={0}>
        Label
      </BarUnitLabel>,
      <BarUnitLabel key="1" at={50}>
        Label
      </BarUnitLabel>,
      <BarUnitLabel key="2" at={100}>
        Label
      </BarUnitLabel>,
    ],
  },
};

export default meta;

type Story = StoryObj<typeof BarUnits>;

export const PositionAbove: Story = {
  name: 'position=above',
  args: {
    position: 'above',
  },
};

export const PositionBelow: Story = {
  name: 'position=below',
  args: {
    position: 'below',
  },
};

export const PositionAboveOffset2: Story = {
  name: 'position=above offset=2',
  args: {
    position: 'above',
    offset: 2,
  },
};

export const PositionBelowOffset2: Story = {
  name: 'position=below offset=2',
  args: {
    position: 'below',
    offset: 2,
  },
};
