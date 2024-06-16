import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Bar } from '../Bar';
import { BarFill } from '../BarFill';
import { BarScale } from './BarScale';

const meta: Meta<typeof BarScale> = {
  title: 'BarScale',
  component: BarScale,
  decorators: (Story) => (
    <svg viewBox="0 0 200 200" width="200" height="200">
      <Story />
    </svg>
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
        max: 200,
        step: 1,
      },
    },
    lengthMax: {
      control: {
        type: 'range',
        min: 0,
        max: 200,
        step: 1,
      },
    },
  },
  args: {
    valueMin: 0,
    valueMax: 100,
    lengthMin: 0,
    lengthMax: 200,
    children: (
      <Bar thickness={30}>
        <BarFill to={100} />
      </Bar>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof BarScale>;

export const LengthMaxPartial: Story = {
  name: 'lengthMax=100 (partial)',
  args: {
    lengthMax: 100,
  },
};

export const LengthMaxMax: Story = {
  name: 'lengthMax=200 (max)',
  args: {
    lengthMax: 200,
  },
};
