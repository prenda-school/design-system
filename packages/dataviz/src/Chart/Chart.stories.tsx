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

export const FullCircles: Story = {
  args: {
    width: 252 + 8 + 8,
    height: 252 + 8 + 8,
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    children: (
      <g transform="translate(126,126)">
        <RadialBarScale
          angleMin={0}
          angleMax={2 * Math.PI}
          valueMin={0}
          valueMax={120}
        >
          <RadialBar radius={126} ratio={0.77} cornerRadius="50%">
            <RadialBarSweep to={120} fill="lightgrey" />
            <RadialBarSweep to={105} />
          </RadialBar>
          <RadialBar radius={93} ratio={0.87} cornerRadius="50%">
            <RadialBarSweep to={103} fill="grey" />
          </RadialBar>
        </RadialBarScale>
      </g>
    ),
  },
};

export const HalfCircles: Story = {
  args: {
    width: 544 + 8 + 8,
    height: 162 + 8 + 8,
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    children: (
      <g transform="translate(126,126)">
        <RadialBarScale
          angleMin={(-1 * Math.PI) / 2}
          angleMax={Math.PI / 2}
          valueMin={1}
          valueMax={3}
        >
          <RadialBar radius={126} ratio={0.77} cornerRadius="50%">
            <RadialBarSweep to={3} fill="lightgrey" />
            <RadialBarCircle at={2} />
          </RadialBar>
          <RadialBar radius={93} ratio={0.87} cornerRadius="50%">
            <RadialBarSweep to={3} fill="lightgrey" />
            <RadialBarCircle at={3} />
          </RadialBar>
        </RadialBarScale>
      </g>
    ),
  },
};
