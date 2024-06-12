import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Bar } from '../Bar';
import { BarFill } from '../BarFill';
import { BarScale } from './BarScale';
import { Chart } from '../Chart';

const meta: Meta<typeof BarScale> = {
  title: 'BarScale',
  component: BarScale,
  decorators: (Story) => (
    <Chart width={212} height={212}>
      <g style={{ transform: `translate(-${212 / 2}px, -${212 / 2}px)` }}>
        <Story />
      </g>
    </Chart>
  ),
  argTypes: {
    valueMin: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    valueMax: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    lengthMin: {
      control: {
        type: 'range',
        min: 0,
        max: 212,
        step: 1,
      },
    },
    lengthMax: {
      control: {
        type: 'range',
        min: 0,
        max: 212,
        step: 1,
      },
    },
  },
  args: {
    valueMin: 0,
    valueMax: 100,
    lengthMin: 0,
    lengthMax: 212,
    children: (
      <Bar thickness={30}>
        <BarFill to={100} />
      </Bar>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof BarScale>;

export const LengthMax100: Story = {
  name: 'lengthMax=100',
  args: {
    lengthMax: 100,
  },
};

export const LengthMax200: Story = {
  name: 'lengthMax=200',
  args: {
    lengthMax: 200,
  },
};
