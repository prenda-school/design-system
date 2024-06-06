import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BarFill } from './BarFill';
import { Chart } from '../Chart';

const meta: Meta<typeof BarFill> = {
  title: 'BarFill',
  component: BarFill,
  decorators: (Story) => (
    <Chart width={212} height={212}>
      <g style={{ transform: `translate(-${212 / 2}px, -${212 / 2}px)` }}>
        <Story />
      </g>
    </Chart>
  ),
  argTypes: {
    to: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
  args: {
    valueMin: 0,
    valueMax: 100,
    lengthMin: 0,
    lengthMax: 212,
    thickness: 30,
  },
};

export default meta;

type Story = StoryObj<typeof BarFill>;

export const ToMin: Story = {
  name: 'to=0 (min)',
  args: {
    to: 0,
  },
};

export const To1: Story = {
  name: 'to=1',
  args: {
    to: 1,
  },
};

export const ToBetween: Story = {
  name: 'to=50 (between)',
  args: {
    to: 50,
  },
};

export const ToMax: Story = {
  name: 'to=100 (max)',
  args: {
    to: 100,
  },
};
