import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Bar } from '../Bar';
import { BarFill } from '../BarFill';
import { BarScale } from '../BarScale';
import { BarLabel } from './BarLabel';

const meta: Meta<typeof BarLabel> = {
  title: 'BarLabel',
  component: BarLabel,
  decorators: (Story, ctx) => (
    <svg viewBox="0 0 200 200" width="200" height="200">
      <g
        style={{
          transform: `translate(0, ${
            ctx.args.position === 'above' ? 18 : 0
          }px)`,
        }}
      >
        <BarScale valueMin={0} valueMax={100} lengthMax={200}>
          <Bar thickness={30}>
            <BarFill to={80} />
            <Story />
          </Bar>
        </BarScale>
      </g>
    </svg>
  ),
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['above', 'below', 'inside'],
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
    },
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

export const Offset4PositionAbove: Story = {
  name: 'offset=4 position=above',
  args: {
    position: 'above',
    offset: 4,
  },
};

export const Offset4PositionBelow: Story = {
  name: 'offset=4 position=below',
  args: {
    position: 'below',
    offset: 4,
  },
};

export const Offset4PositionInside: Story = {
  name: 'offset=4 position=inside',
  args: {
    position: 'inside',
    fill: 'white',
    offset: 4,
  },
};

export const OffsetNeg4PositionAbove: Story = {
  name: 'offset=-4 position=above',
  args: {
    position: 'above',
    offset: -4,
  },
};

export const OffsetNeg4PositionBelow: Story = {
  name: 'offset=-4 position=below',
  args: {
    position: 'below',
    offset: -4,
  },
};

export const OffsetNeg4PositionInside: Story = {
  name: 'offset=-4 position=inside',
  args: {
    position: 'inside',
    fill: 'white',
    offset: -4,
  },
};
