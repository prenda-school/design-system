import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Arc,
  ArcCircle,
  ArcSweep,
  ArcUnitLabel,
  Arcs,
  Chart,
} from '../../../src';

const ReportCardEmpowermentMetricDualRadialGauge = (props: {
  valueMin: number;
  valueMax: number;
  // current week
  valuePrimary: number;
  radiusPrimary: number;
  radiusRatioPrimary: number;
  // previous week
  valueSecondary: number;
  radiusSecondary: number;
  radiusRatioSecondary: number;
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
  } = props;

  const Neutral70 = '#EBECF0';
  const Purple600 = '#5243AA';
  const Purple200 = '#C0B6F2';

  const Neutral400 = '#42526E';
  const Neutral100 = '#6B778C';
  const FontWeightNormal = 400;
  const FontWeightBold = 600;
  const unitLabelStyle = (at: number) => {
    const isPrimaryValue = at === valuePrimary;
    const fontWeight = isPrimaryValue ? FontWeightBold : FontWeightNormal;
    const fill = isPrimaryValue ? Neutral400 : Neutral100;
    return {
      fontFamily: '"Inter"',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight,
      fill,
    };
  };

  return (
    <Chart
      width={544 - 68 * 2 + 8 + 8}
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
            radius={radiusPrimary}
            ratio={radiusRatioPrimary}
            cornerRadius="50%"
          >
            <ArcSweep style={{ fill: Neutral70 }} />
            <ArcCircle at={valuePrimary} style={{ fill: Purple600 }} />
            <ArcUnitLabel at={1} style={unitLabelStyle(1)}>
              <tspan>Too easy</tspan>
            </ArcUnitLabel>
            <ArcUnitLabel at={2} style={unitLabelStyle(2)}>
              Just right
            </ArcUnitLabel>
            <ArcUnitLabel at={3} style={unitLabelStyle(3)}>
              Too hard
            </ArcUnitLabel>
          </Arc>
          <Arc
            radius={radiusSecondary}
            ratio={radiusRatioSecondary}
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

const meta: Meta<typeof ReportCardEmpowermentMetricDualRadialGauge> = {
  title: 'Examples/Report Card/Empowerment Metric/DualRadialGauge',
  component: ReportCardEmpowermentMetricDualRadialGauge,
  args: {
    valueMin: 1,
    valueMax: 3,
    valuePrimary: 2,
    valueSecondary: 3,
    radiusPrimary: 126,
    radiusRatioPrimary: 0.77,
    radiusSecondary: 93,
    radiusRatioSecondary: 0.87,
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
