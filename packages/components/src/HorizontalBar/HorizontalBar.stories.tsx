import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HorizontalBar } from './HorizontalBar';
import { Chart } from '../Chart';

const meta: Meta<typeof HorizontalBar> = {
  title: 'HorizontalBar',
  component: HorizontalBar,
  decorators: (Story) => (
    <Chart width={512} height={30}>
      <g style={{ transform: `translate(-${512 / 2}px, 0px)` }}>
        <Story />
      </g>
    </Chart>
  ),
};

export default meta;

type Story = StoryObj<typeof HorizontalBar>;

export const Between: Story = {
  args: {
    valueMin: 1,
    valueMax: 3,
    value: 2,
    lengthMin: 30,
    lengthMax: 512,
    thickness: 30,
    cornerRadius: {
      topLeft: 15, // "50%"
      topRight: 15,
      bottomLeft: 0,
      bottomRight: 0,
    },
  },
};

export const Minimum: Story = {
  args: {
    valueMin: 1,
    valueMax: 3,
    value: 1,
    lengthMin: 30,
    lengthMax: 512,
    thickness: 30,
    cornerRadius: {
      topLeft: 15, // "50%"
      topRight: 15,
      bottomLeft: 0,
      bottomRight: 0,
    },
  },
};

export const Maximum: Story = {
  args: {
    valueMin: 1,
    valueMax: 3,
    value: 3,
    lengthMin: 30,
    lengthMax: 512,
    thickness: 30,
    cornerRadius: {
      topLeft: 15, // "50%"
      topRight: 15,
      bottomLeft: 0,
      bottomRight: 0,
    },
  },
};
