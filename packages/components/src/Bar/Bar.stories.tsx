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
  args: {
    children: <BarFill to={100} />,
    ctx: {
      barScale: {
        valueMin: 0,
        valueMax: 100,
        lengthMin: 0,
        lengthMax: 212,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Bar>;

export const Thickness1: Story = {
  name: 'thickness=1',
  args: {
    thickness: 1,
  },
};

export const Thickness10: Story = {
  name: 'thickness=10',
  args: {
    thickness: 10,
  },
};

export const Thickness30: Story = {
  name: 'thickness=30',
  args: {
    thickness: 30,
  },
};

export const OrientationVertical: Story = {
  name: 'orientation=vertical ',
  args: {
    thickness: 25,
    orientation: 'vertical',
  },
};

export const OrientationHorizontal: Story = {
  name: 'orientation=horizontal',
  args: {
    thickness: 25,
    orientation: 'horizontal',
  },
};

export const CornerRadiusNumber: Story = {
  name: 'cornerRadius=(number)',
  args: {
    thickness: 25,
    orientation: 'horizontal',
    cornerRadius: 4,
  },
};

export const CornerRadiusPx: Story = {
  name: 'cornerRadius=(pixels)',
  args: {
    thickness: 25,
    orientation: 'horizontal',
    cornerRadius: '8px',
  },
};

export const CornerRadiusTenth: Story = {
  name: 'cornerRadius=(percent)',
  args: {
    thickness: 25,
    orientation: 'horizontal',
    cornerRadius: '10%',
  },
};

export const CornerRadiusFull: Story = {
  name: 'cornerRadius=50%',
  args: {
    thickness: 25,
    orientation: 'horizontal',
    cornerRadius: '50%',
  },
};

export const CornerRadiusStart: Story = {
  name: 'cornerRadius={ start: any }',
  args: {
    thickness: 25,
    orientation: 'horizontal',
    cornerRadius: { start: '25%' },
  },
};

export const CornerRadiusEnd: Story = {
  name: 'cornerRadius={ end: any }',
  args: {
    thickness: 25,
    orientation: 'horizontal',
    cornerRadius: { end: '25%' },
  },
};

export const CornerRadiusStartEnd: Story = {
  name: 'cornerRadius={ start: any, end: any }',
  args: {
    thickness: 25,
    orientation: 'horizontal',
    cornerRadius: { start: '40%', end: '25%' },
  },
};

export const CornerRadiusEndStartExact: Story = {
  name: 'cornerRadius={ startStart: any, startEnd: any, end: any }',
  args: {
    thickness: 25,
    orientation: 'horizontal',
    cornerRadius: { startStart: 4, startEnd: 8, end: 12 },
  },
};

export const CornerRadiusStartEndExact: Story = {
  name: 'cornerRadius={ start: any, endStart: any, endEnd: any }',
  args: {
    thickness: 25,
    orientation: 'horizontal',
    cornerRadius: { start: 4, endStart: 8, endEnd: 12 },
  },
};

export const CornerRadiusExact: Story = {
  name: 'cornerRadius={ startStart: any, startEnd: any, endStart: any, endEnd: any }',
  args: {
    thickness: 25,
    orientation: 'horizontal',
    cornerRadius: { startStart: 4, startEnd: 8, endStart: 12, endEnd: 16 },
  },
};

export const OrientationVerticalDirectionForward: Story = {
  name: 'orientation=vertical direction=forward',
  args: {
    thickness: 25,
    orientation: 'vertical',
    direction: 'forward',
    cornerRadius: { end: '40%' },
  },
};

export const OrientationVerticalDirectionBackward: Story = {
  name: 'orientation=vertical direction=backward',
  args: {
    thickness: 25,
    orientation: 'vertical',
    direction: 'backward',
    cornerRadius: { end: '40%' },
  },
};

export const OrientationHorizontalDirectionForward: Story = {
  name: 'orientation=horizontal direction=forward',
  args: {
    thickness: 25,
    orientation: 'horizontal',
    direction: 'forward',
    cornerRadius: { end: '40%' },
  },
};

export const OrientationHorizontalDirectionBackward: Story = {
  name: 'orientation=horizontal direction=backward',
  args: {
    thickness: 25,
    orientation: 'horizontal',
    direction: 'backward',
    cornerRadius: { end: '40%' },
  },
};
