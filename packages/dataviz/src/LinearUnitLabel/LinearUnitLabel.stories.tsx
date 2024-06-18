import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LinearUnitLabel } from './LinearUnitLabel';

const meta: Meta<typeof LinearUnitLabel> = {
  title: 'LinearUnitLabel',
  component: LinearUnitLabel,
  decorators: (Story) => (
    <svg viewBox="0 0 200 200" width="200" height="200">
      <Story />
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
    dominantBaseline: {
      control: { type: 'select' },
      options: [
        'text-before-edge',
        'text-after-edge',
        'middle',
        'hanging',
        'alphabetic',
        'auto',
      ],
    },
    offset: {
      control: { type: 'range', min: -20, max: 20, step: 1 },
    },
  },
  args: {
    children: <>Label</>,
    ctx: {
      linearScale: {
        valueMin: 0,
        valueMax: 100,
        lengthMin: 0,
        lengthMax: 200,
      },
      linearUnits: {},
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinearUnitLabel>;

export const AtMin: Story = {
  name: 'at=(min)',
  args: {
    at: 0,
  },
};

export const AtMid: Story = {
  name: 'at=(mid)',
  args: {
    at: 50,
  },
};

export const AtMax: Story = {
  name: 'at=(max)',
  args: {
    at: 100,
  },
};

export const Offset4: Story = {
  name: 'offset=4 at=..',
  args: {
    at: 0,
    offset: 4,
  },
};

export const OffsetNeg4: Story = {
  name: 'offset=-4 at=..',
  args: {
    at: 0,
    offset: -4,
  },
};
