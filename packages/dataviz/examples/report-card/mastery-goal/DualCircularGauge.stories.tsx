import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadialBar, RadialBarSweep, RadialBarScale, Chart } from '../../../src';

const ReportCardMasteryGoalDualCircularGauge = (props: {
  valueMin: number;
  valueMax: number;
  valuePrimary: number;
  valueSecondary: number;
  radiusPrimary: number;
  radiusRatioPrimary: number;
  radiusSecondary: number;
  radiusRatioSecondary: number;
  goalStatus: 'on-track' | 'off-track';
  // extra
  cornerRadius?: string | number;
}) => {
  const {
    valueMin,
    valueMax,
    valuePrimary,
    valueSecondary,
    radiusPrimary,
    radiusRatioPrimary,
    radiusSecondary,
    radiusRatioSecondary,
    goalStatus,
    cornerRadius,
  } = props;

  const Neutral70 = '#EBECF0';
  const Neutral80 = '#DFE1E6';
  const Neutral90 = '#C1C7D0';
  const Neutral300 = '#505F79';
  const Green400 = '#57D9A3';
  const Yellow400 = '#FFC400';

  const primaryValueSweepFill =
    goalStatus === 'on-track' ? Green400 : Yellow400;

  const Neutral600 = '#091E42';

  const styleT22 = {
    fill: Neutral600,
    fontFamily: 'Poppins',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 600,
    letterSpacing: -0.01,
  };

  const styleDescription = {
    fill: Neutral300,
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
  };

  return (
    <Chart
      width={252 + 8 + 8}
      height={252 + 8 + 8}
      marginBottom={8}
      marginLeft={8}
      marginRight={8}
      marginTop={8}
    >
      {/* center-radial-bar */}
      <g transform={`translate(${radiusPrimary}, ${radiusPrimary})`}>
        <RadialBarScale
          angleMin={0}
          angleMax={2 * Math.PI}
          valueMin={valueMin}
          valueMax={valueMax}
        >
          <RadialBar
            radius={radiusPrimary}
            ratio={radiusRatioPrimary}
            cornerRadius={cornerRadius}
          >
            <RadialBarSweep fill={Neutral70} />
            <RadialBarSweep to={valuePrimary} fill={primaryValueSweepFill} />
          </RadialBar>
          <RadialBar
            radius={radiusSecondary}
            ratio={radiusRatioSecondary}
            cornerRadius={cornerRadius}
          >
            <RadialBarSweep to={valueSecondary} fill={Neutral90} />
          </RadialBar>
        </RadialBarScale>
        <g>
          <rect width={112} height={1} x={-112 / 2} fill={Neutral80} />
          <text x={0} y={0} textAnchor="middle" dominantBaseline="hanging">
            <tspan x={0} y={0} dy={0 - 4 - 16 - 28} style={styleT22}>
              {valuePrimary}/{valueMax}
            </tspan>
            <tspan x={0} y={0} dy={0 - 4 - 16} style={styleDescription}>
              badges
            </tspan>
            <tspan x={0} y={0} dy={0 + 4 + 4} style={styleDescription}>
              {valuePrimary > valueSecondary ? 'Ahead' : 'Behind'} by
            </tspan>
            <tspan x={0} y={0} dy={0 + 4 + 4 + 4 + 16} style={styleDescription}>
              {Math.abs(valuePrimary - valueSecondary)} badges
            </tspan>
          </text>
        </g>
      </g>
    </Chart>
  );
};

const meta: Meta<typeof ReportCardMasteryGoalDualCircularGauge> = {
  title: 'Examples/Report Card/Mastery Goal/DualCircularGauge',
  component: ReportCardMasteryGoalDualCircularGauge,
  args: {
    valueMin: 0,
    valueMax: 120,
    valuePrimary: 105,
    valueSecondary: 103,
    radiusPrimary: 126,
    radiusRatioPrimary: 0.77,
    radiusSecondary: 93,
    radiusRatioSecondary: 0.87,
    goalStatus: 'on-track',
    cornerRadius: '50%',
  },
  argTypes: {
    valuePrimary: {
      control: {
        type: 'range',
        min: 0,
        max: 120,
        step: 1,
      },
    },
    valueSecondary: {
      control: {
        type: 'range',
        min: 0,
        max: 120,
        step: 1,
      },
    },
    goalStatus: {
      options: ['on-track', 'off-track'],
      control: {
        type: 'radio',
      },
    },
    radiusPrimary: {
      control: {
        type: 'range',
        min: 0,
        max: 126,
        step: 1,
      },
    },
    radiusRatioPrimary: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    radiusSecondary: {
      control: {
        type: 'range',
        min: 0,
        max: 126,
        step: 1,
      },
    },
    radiusRatioSecondary: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    cornerRadius: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReportCardMasteryGoalDualCircularGauge>;

export const Example: Story = {};
