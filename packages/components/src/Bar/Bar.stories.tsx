import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Bar } from './Bar';
import { Chart } from '../Chart';
import { BarFill } from '../BarFill';

const meta: Meta<typeof Bar> = {
  title: 'Bar',
  component: Bar,
  decorators: (Story) => (
    <Chart width={212} height={212}>
      <g style={{ transform: `translate(-${212 / 2}px, -${212 / 2}px)` }}>
        <Story />
      </g>
    </Chart>
  ),
  argTypes: {
    orientation: {
      control: {
        type: 'radio',
      },
      options: ['horizontal', 'vertical'],
    },
    direction: {
      control: {
        type: 'radio',
      },
      options: ['forward', 'backward'],
    },
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
    thickness: {
      control: {
        type: 'range',
        min: 0,
        max: 212,
        step: 1,
      },
    },
    cornerRadius: {
      control: {
        type: 'object',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Bar>;

export const Between: Story = {
  args: {
    valueMin: 0,
    valueMax: 100,
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
    children: <BarFill to={50} />,
  },
};
