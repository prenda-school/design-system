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
};

export default meta;

type Story = StoryObj<typeof BarFill>;

export const Between: Story = {
  args: {
    valueMin: 0,
    valueMax: 100,
    to: 50,
    lengthMin: 0,
    lengthMax: 212,
    thickness: 30,
    orientation: 'vertical',
    cornerRadius: {
      startStart: 15,
      endStart: 15,
      startEnd: 0,
      endEnd: 0,
    },
  },
};
