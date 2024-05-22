import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Arc, ArcSweep, Arcs, Chart } from '../../../src';

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
  } = props;

  const Neutral70 = '#EBECF0';
  const Neutral90 = '#C1C7D0';
  const Green400 = '#57D9A3';
  const Yellow400 = '#FFC400';

  const primaryValueSweepFill =
    goalStatus === 'on-track' ? Green400 : Yellow400;

  return (
    <Chart
      width={252 + 8 + 8}
      height={252 + 8 + 8}
      marginBottom={8}
      marginLeft={8}
      marginRight={8}
      marginTop={8}
    >
      <Arcs
        angleMin={0}
        angleMax={2 * Math.PI}
        valueMin={valueMin}
        valueMax={valueMax}
      >
        <Arc
          radius={radiusPrimary}
          ratio={radiusRatioPrimary}
          cornerRadius="50%"
        >
          <ArcSweep style={{ fill: Neutral70 }} />
          <ArcSweep to={valuePrimary} style={{ fill: primaryValueSweepFill }} />
        </Arc>
        <Arc
          radius={radiusSecondary}
          ratio={radiusRatioSecondary}
          cornerRadius="50%"
        >
          <ArcSweep to={valueSecondary} style={{ fill: Neutral90 }} />
        </Arc>
      </Arcs>
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
  },
};

export default meta;

type Story = StoryObj<typeof Chart>;

export const Example: Story = {};
