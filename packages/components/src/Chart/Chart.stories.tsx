import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadialBar } from '../RadialBar';
import { RadialBarCircle } from '../RadialBarCircle';
import { RadialBarScale } from '../RadialBarScale';
import { RadialBarSweep } from '../RadialBarSweep';
import { Chart } from './Chart';

const meta: Meta<typeof Chart> = {
  title: 'Chart',
  component: Chart,
};

export default meta;

type Story = StoryObj<typeof Chart>;

export const Circular: Story = {
  args: {
    width: 252 + 8 + 8,
    height: 252 + 8 + 8,
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    children: (
      <RadialBarScale
        angleMin={0}
        angleMax={2 * Math.PI}
        valueMin={0}
        valueMax={120}
      >
        <RadialBar radius={126} ratio={0.77} cornerRadius="50%">
          <RadialBarSweep to={120} style={{ fill: '#EBECF0' }} />
          <RadialBarSweep to={105} style={{ fill: '#57D9A3' }} />
        </RadialBar>
        <RadialBar radius={93} ratio={0.87} cornerRadius="50%">
          <RadialBarSweep to={103} style={{ fill: '#C1C7D0' }} />
        </RadialBar>
      </RadialBarScale>
    ),
  },
};

export const Radial: Story = {
  args: {
    width: 544 + 8 + 8,
    height: 162 + 8 + 8,
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    children: (
      <g style={{ transform: `translate(0, ${126 / 2}px)` }}>
        <RadialBarScale
          angleMin={(-1 * Math.PI) / 2}
          angleMax={Math.PI / 2}
          valueMin={1}
          valueMax={3}
        >
          <RadialBar radius={126} ratio={0.77} cornerRadius="50%">
            <RadialBarSweep to={3} style={{ fill: '#EBECF0' }} />
            <RadialBarCircle at={2} style={{ fill: '#5243AA' }} />
          </RadialBar>
          <RadialBar radius={93} ratio={0.87} cornerRadius="50%">
            <RadialBarSweep to={3} style={{ fill: '#EBECF0' }} />
            <RadialBarCircle at={3} style={{ fill: '#C0B6F2' }} />
          </RadialBar>
        </RadialBarScale>
      </g>
    ),
  },
};
