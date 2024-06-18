import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Bar } from '../Bar';
import { BarFill } from '../BarFill';
import { BarScale } from '../BarScale';
import { BarUnitLabel } from '../BarUnitLabel';
import { BarUnits } from './BarUnits';

const meta: Meta<typeof BarUnits> = {
  title: 'BarUnits',
  component: BarUnits,
  decorators: (Story, ctx) => (
    <svg viewBox="0 0 200 200" width="200" height="200">
      <g
        style={{
          transform: `translate(0, ${
            ctx.args.position === 'above' ? 20 : 0
          }px)`,
        }}
      >
        <BarScale valueMin={0} valueMax={100} lengthMax={200}>
          <Bar thickness={30}>
            <BarFill to={100} />
            <Story />
          </Bar>
        </BarScale>
      </g>
    </svg>
  ),
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['above', 'below'],
    },
    offset: {
      control: { type: 'range', min: -20, max: 20, step: 1 },
    },
  },
  args: {
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
    ctx: {
      barScale: {
        valueMin: 0,
        valueMax: 100,
        lengthMin: 0,
        lengthMax: 200,
      },
      bar: {
        thickness: 30,
      },
    },
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

export const PositionAboveOffset4: Story = {
  name: 'position=above offset=4',
  args: {
    position: 'above',
    offset: 4,
  },
};

export const PositionBelowOffset4: Story = {
  name: 'position=below offset=4',
  args: {
    position: 'below',
    offset: 4,
  },
};

export const PositionAboveOffsetNeg4: Story = {
  name: 'position=above offset=-4',
  args: {
    position: 'above',
    offset: -4,
  },
};

export const PositionBelowOffsetNeg4: Story = {
  name: 'position=below offset=-4',
  args: {
    position: 'below',
    offset: -4,
  },
};
