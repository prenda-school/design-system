import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BarLabel } from './BarLabel';
import { Chart } from '../Chart';
import { BarFill } from '../BarFill';
import { BarScale } from '../BarScale';
import { Bar } from '../Bar/Bar';

const meta: Meta<typeof BarLabel> = {
  title: 'BarLabel',
  component: BarLabel,
  decorators: (Story, ctx) => (
    <Chart width={212} height={212}>
      <g style={{ transform: `translate(-${212 / 2}px, -${212 / 2}px)` }}>
        <g
          style={{
            transform: `translate(0, ${
              ctx.args.position === 'above' ? 18 : 0
            }px)`,
          }}
        >
          <BarScale valueMin={0} valueMax={100} lengthMax={212}>
            <Bar thickness={30}>
              <BarFill to={80} />
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
      options: ['above', 'below', 'inside'],
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
    children: <>Label</>,
  },
};

export default meta;

type Story = StoryObj<typeof BarLabel>;

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

export const PositionInside: Story = {
  name: 'position=inside',
  args: {
    position: 'inside',
    fill: 'white',
  },
};
