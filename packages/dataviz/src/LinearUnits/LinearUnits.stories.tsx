import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LinearUnitLabel } from '../LinearUnitLabel';
import { LinearUnits } from './LinearUnits';

const meta: Meta<typeof LinearUnits> = {
  title: 'LinearUnits',
  component: LinearUnits,
  decorators: (Story) => (
    <svg viewBox="0 0 200 200" width="200" height="200">
      <Story />
    </svg>
  ),
  argTypes: {
    offset: {
      control: { type: 'range', min: -20, max: 20, step: 1 },
    },
  },
  args: {
    children: [
      <LinearUnitLabel key="0" at={0}>
        Label
      </LinearUnitLabel>,
      <LinearUnitLabel key="1" at={50}>
        Label
      </LinearUnitLabel>,
      <LinearUnitLabel key="2" at={100}>
        Label
      </LinearUnitLabel>,
    ],
    ctx: {
      linearScale: {
        valueMin: 0,
        valueMax: 100,
        lengthMin: 0,
        lengthMax: 200,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinearUnits>;

export const Default: Story = {
  name: '(default)',
  args: {},
};

export const Offset4: Story = {
  name: 'offset=4',
  args: {
    offset: 4,
  },
};

export const OffsetNeg4: Story = {
  name: 'offset=-4',
  args: {
    offset: -4,
  },
};
