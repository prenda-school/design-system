import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Bar } from '../Bar';
import { BarFill } from '../BarFill';
import { BarScale } from '../BarScale';
import { BarUnitLabel } from './BarUnitLabel';

const meta: Meta<typeof BarUnitLabel> = {
  title: 'BarUnitLabel',
  component: BarUnitLabel,
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
      control: { type: 'range', min: -20, max: 20, step: 1 },
    },
  },
  args: {
    children: <>Label</>,
    ctx: {
      bar: {
        thickness: 30,
      },
      barScale: {
        valueMin: 0,
        valueMax: 100,
        lengthMin: 0,
        lengthMax: 200,
      },
      barUnits: {},
    },
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

export const Offset4PositionAbove: Story = {
  name: 'offset=4 position=above at=..',
  args: {
    at: 0,
    offset: 4,
    position: 'above',
  },
};

export const Offset4PositionBelow: Story = {
  name: 'offset=4 position=below at=..',
  args: {
    at: 0,
    offset: 4,
    position: 'below',
  },
};

export const OffsetNeg4PositionAbove: Story = {
  name: 'offset=-4 position=above at=..',
  args: {
    at: 0,
    offset: -4,
    position: 'above',
  },
};

export const OffsetNeg4PositionBelow: Story = {
  name: 'offset=-4 position=below at=..',
  args: {
    at: 0,
    offset: -4,
    position: 'below',
  },
};
