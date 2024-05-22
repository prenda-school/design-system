import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Arc, ArcCircle, ArcSweep, Arcs, Chart } from '../../../src';

const ReportCardEmpowermentMetricRadialArc = (props: {
  valueMin: number;
  valueMax: number;
  valuePrimary: number;
  valueSecondary: number;
  primaryRadius: number;
  primaryRadiusRatio: number;
  secondaryRadius: number;
  secondaryRadiusRatio: number;
}) => {
  const {
    valueMin,
    valueMax,
    valuePrimary,
    valueSecondary,
    primaryRadius,
    primaryRadiusRatio,
    secondaryRadius,
    secondaryRadiusRatio,
  } = props;

  const Neutral70 = '#EBECF0';
  const Purple600 = '#5243AA';
  const Purple200 = '#C0B6F2';

  return (
    <Chart
      width={544 + 8 + 8}
      height={162 + 8 + 8}
      marginBottom={8}
      marginLeft={8}
      marginRight={8}
      marginTop={8}
    >
      <g style={{ transform: `translate(0, ${126 / 2}px)` }}>
        <Arcs
          angleMin={(-1 * Math.PI) / 2}
          angleMax={Math.PI / 2}
          valueMin={valueMin}
          valueMax={valueMax}
        >
          <Arc
            radius={primaryRadius}
            ratio={primaryRadiusRatio}
            cornerRadius="50%"
          >
            <ArcSweep style={{ fill: Neutral70 }} />
            <ArcCircle at={valuePrimary} style={{ fill: Purple600 }} />
          </Arc>
          <Arc
            radius={secondaryRadius}
            ratio={secondaryRadiusRatio}
            cornerRadius="50%"
          >
            <ArcSweep style={{ fill: Neutral70 }} />
            <ArcCircle at={valueSecondary} style={{ fill: Purple200 }} />
          </Arc>
        </Arcs>
      </g>
    </Chart>
  );
};

const meta: Meta<typeof ReportCardEmpowermentMetricRadialArc> = {
  title: 'Examples/Report Card/Empowerment Metric/Radial Arc',
  component: ReportCardEmpowermentMetricRadialArc,
  args: {
    valueMin: 1,
    valueMax: 3,
    valuePrimary: 2,
    valueSecondary: 3,
    primaryRadius: 126,
    primaryRadiusRatio: 0.77,
    secondaryRadius: 93,
    secondaryRadiusRatio: 0.87,
  },
  argTypes: {
    valuePrimary: {
      control: {
        type: 'range',
        min: 1,
        max: 3,
        step: 1,
      },
    },
    valueSecondary: {
      control: {
        type: 'range',
        min: 1,
        max: 3,
        step: 1,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chart>;

export const Example: Story = {};
