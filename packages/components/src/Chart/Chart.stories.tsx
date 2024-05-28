import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Arc } from '../Arc';
import { ArcCircle } from '../ArcCircle';
import { ArcScale } from '../ArcScale';
import { ArcSweep } from '../ArcSweep';
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
      <ArcScale angleMin={0} angleMax={2 * Math.PI} valueMin={0} valueMax={120}>
        <Arc radius={126} ratio={0.77} cornerRadius="50%">
          <ArcSweep to={120} style={{ fill: '#EBECF0' }} />
          <ArcSweep to={105} style={{ fill: '#57D9A3' }} />
        </Arc>
        <Arc radius={93} ratio={0.87} cornerRadius="50%">
          <ArcSweep to={103} style={{ fill: '#C1C7D0' }} />
        </Arc>
      </ArcScale>
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
        <ArcScale
          angleMin={(-1 * Math.PI) / 2}
          angleMax={Math.PI / 2}
          valueMin={1}
          valueMax={3}
        >
          <Arc radius={126} ratio={0.77} cornerRadius="50%">
            <ArcSweep to={3} style={{ fill: '#EBECF0' }} />
            <ArcCircle at={2} style={{ fill: '#5243AA' }} />
          </Arc>
          <Arc radius={93} ratio={0.87} cornerRadius="50%">
            <ArcSweep to={3} style={{ fill: '#EBECF0' }} />
            <ArcCircle at={3} style={{ fill: '#C0B6F2' }} />
          </Arc>
        </ArcScale>
      </g>
    ),
  },
};
