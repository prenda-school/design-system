import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadialBarScale } from '../RadialBarScale';
import { RadialBar } from '../RadialBar';
import { RadialBarSweep } from '../RadialBarSweep';
import { RadialBarUnits } from './RadialBarUnits';
import { RadialBarUnitLabel } from '../RadialBarUnitLabel';

const meta: Meta<typeof RadialBarUnits> = {
  title: 'RadialBarUnits',
  component: RadialBarUnits,
  decorators: (Story) => (
    <svg viewBox="-100 -100 200 200" width="200" height="200">
      <RadialBarScale
        angleMin={(-1 * Math.PI) / 2}
        angleMax={Math.PI / 2}
        valueMin={0}
        valueMax={100}
      >
        <RadialBar radius={50} ratio={0.8}>
          <RadialBarSweep to={100} />
          <Story />
        </RadialBar>
      </RadialBarScale>
    </svg>
  ),
  argTypes: {
    offset: {
      control: { type: 'range', min: -20, max: 20, step: 1 },
    },
    position: {
      control: { type: 'select' },
      options: ['inside', 'outside'],
    },
  },
  args: {
    children: [
      <RadialBarUnitLabel key="0" at={0}>
        Label
      </RadialBarUnitLabel>,
      <RadialBarUnitLabel key="1" at={50}>
        Label
      </RadialBarUnitLabel>,
      <RadialBarUnitLabel key="2" at={100}>
        Label
      </RadialBarUnitLabel>,
    ],
    ctx: {
      radialBarScale: {
        angleMin: (-1 * Math.PI) / 2,
        angleMax: Math.PI / 2,
        valueMin: 0,
        valueMax: 100,
      },
      radialBar: {
        radius: 50,
        ratio: 0.8,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadialBarUnits>;

export const PositionOutside: Story = {
  name: 'position=outside',
  args: {
    position: 'outside',
  },
};

export const PositionOutsideOffset4: Story = {
  name: 'position=outside offset=4',
  args: {
    position: 'outside',
    offset: 4,
  },
};

export const PositionOutsideOffsetNeg4: Story = {
  name: 'position=outside offset=-4',
  args: {
    position: 'outside',
    offset: -4,
  },
};

export const PositionInside: Story = {
  name: 'position=inside',
  args: {
    position: 'inside',
  },
};

export const PositionInsideOffset4: Story = {
  name: 'position=inside offset=4',
  args: {
    position: 'inside',
    offset: 4,
  },
};

export const PositionInsideOffsetNeg4: Story = {
  name: 'position=inside offset=-4',
  args: {
    position: 'inside',
    offset: -4,
  },
};
