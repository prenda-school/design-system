import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BarUnitLabel } from './BarUnitLabel';
import { Chart } from '../Chart';
import { BarFill } from '../BarFill';
import { BarScale } from '../BarScale';
import { Bar } from '../Bar/Bar';

const meta: Meta<typeof BarUnitLabel> = {
  title: 'BarUnitLabel',
  component: BarUnitLabel,
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
    at: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
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
    children: <>Label</>,
  },
};

export default meta;

type Story = StoryObj<typeof BarUnitLabel>;

export const AtMinPositionAbove: Story = {
  name: 'at=(min) position=above',
  args: {
    at: 0,
    position: 'above',
  },
};

export const AtMidPositionAbove: Story = {
  name: 'at=(mid) position=above',
  args: {
    at: 50,
    position: 'above',
  },
};

export const AtMaxPositionAbove: Story = {
  name: 'at=(max) position=above',
  args: {
    at: 100,
    position: 'above',
  },
};

export const AtMinPositionBelow: Story = {
  name: 'at=(min) position=below',
  args: {
    at: 0,
    position: 'below',
  },
};

export const AtMidPositionBelow: Story = {
  name: 'at=(mid) position=below',
  args: {
    at: 50,
    position: 'below',
  },
};

export const AtMaxPositionBelow: Story = {
  name: 'at=(max) position=below',
  args: {
    at: 100,
    position: 'below',
  },
};
