import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Arc } from '../Arc';
import { ArcScale } from './ArcScale';
import { ArcSweep } from '../ArcSweep';

const meta: Meta<typeof ArcScale> = {
  title: 'ArcScale',
  component: ArcScale,
  decorators: (Story) => (
    <svg viewBox="-100 -100 200 200" width="200" height="200">
      <Story />
    </svg>
  ),
  argTypes: {
    angleMin: {
      control: {
        type: 'range',
        min: (-2 * Math.PI).toFixed(2),
        max: (2 * Math.PI).toFixed(2),
        step: 0.01,
      },
    },
    angleMax: {
      control: {
        type: 'range',
        min: (-2 * Math.PI).toFixed(2),
        max: (2 * Math.PI).toFixed(2),
        step: 0.01,
      },
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
  },
};

export default meta;

type Story = StoryObj<typeof ArcScale>;

export const Circular: Story = {
  args: {
    angleMin: 0,
    angleMax: 2 * Math.PI,
    valueMin: 0,
    valueMax: 100,
    children: [
      <Arc key="0" radius={100} ratio={0.8} cornerRadius={10}>
        <ArcSweep to={100} fill="lightgrey" />
        <ArcSweep to={60} />
      </Arc>,
      <Arc key="1" radius={70} ratio={0.8} cornerRadius={7}>
        <ArcSweep to={80} />
      </Arc>,
    ],
  },
};

export const Radial: Story = {
  args: {
    angleMin: (-1 * Math.PI) / 2,
    angleMax: Math.PI / 2,
    valueMin: 1,
    valueMax: 3,
    children: [
      <Arc key="0" radius={100} ratio={0.8} cornerRadius={10}>
        <ArcSweep to={3} fill="lightgrey" />
        <ArcSweep to={2} />
      </Arc>,
      <Arc key="1" radius={70} ratio={0.8} cornerRadius={7}>
        <ArcSweep to={3} fill="lightgrey" />
        <ArcSweep to={3} />
      </Arc>,
    ],
  },
};
