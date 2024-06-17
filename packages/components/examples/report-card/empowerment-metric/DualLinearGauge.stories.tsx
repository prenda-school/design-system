import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Bar,
  BarFill,
  BarProps,
  BarScale,
  BarUnitLabel,
  BarUnits,
  Chart,
} from '../../../src';

const Purple500 = '#6554C0';
const Purple200 = '#C0B6F2';

const Neutral400 = '#42526E';
const Neutral100 = '#6B778C';
const FontWeightNormal = 400;
const FontWeightBold = 600;

const unitLabelStyle = (at: number, value: number) => {
  const isPrimaryValue = at === value;
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

const ReportCardEmpowermentMetricDualLinearGauge = (props: {
  valueMin: number;
  valueMax: number;
  // current week
  valuePrimary: number;
  thicknessPrimary: number;
  // previous week
  valueSecondary: number;
  thicknessSecondary: number;
  // extra
  cornerRadius: BarProps['cornerRadius'];
  valuePrimaryContinuous: number;
  valueSecondaryContinuous: number;
  borderWidth: BarProps['borderWidth'];
  unitsOffset: number;
}) => {
  const {
    valueMin,
    valueMax,
    valuePrimary: valuePrimaryProp,
    valueSecondary: valueSecondaryProp,
    thicknessPrimary,
    thicknessSecondary,
    cornerRadius,
    valuePrimaryContinuous,
    valueSecondaryContinuous,
    borderWidth,
    unitsOffset,
  } = props;

  const valuePrimary =
    valuePrimaryContinuous < valueMin
      ? valuePrimaryProp
      : valuePrimaryContinuous;
  const valueSecondary =
    valueSecondaryContinuous < valueMin
      ? valueSecondaryProp
      : valueSecondaryContinuous;

  return (
    <Chart
      width={544 + 8 + 8}
      height={70 + 8 + 8 + 16}
      marginBottom={8}
      marginLeft={8}
      marginRight={8}
      marginTop={8 + 16}
    >
      <BarScale lengthMax={544} valueMin={valueMin} valueMax={valueMax}>
        <Bar
          thickness={thicknessPrimary}
          cornerRadius={cornerRadius}
          borderWidth={borderWidth}
        >
          <BarFill
            overrides={{
              barScale: {
                lengthMin: thicknessPrimary / 2,
              },
            }}
            to={valuePrimary}
            style={{ fill: Purple500 }}
          />

          <BarUnits offset={thicknessSecondary + unitsOffset}>
            <BarUnitLabel at={1} style={unitLabelStyle(1, valuePrimary)}>
              Not really
            </BarUnitLabel>
            <BarUnitLabel at={2} style={unitLabelStyle(2, valuePrimary)}>
              Kind of
            </BarUnitLabel>
            <BarUnitLabel at={3} style={unitLabelStyle(3, valuePrimary)}>
              Very
            </BarUnitLabel>
          </BarUnits>
        </Bar>

        <Bar
          thickness={thicknessSecondary}
          cornerRadius={cornerRadius}
          dy={thicknessPrimary}
          borderWidth={borderWidth}
        >
          <BarFill
            overrides={{
              barScale: {
                lengthMin: thicknessSecondary / 2,
              },
            }}
            to={valueSecondary}
            style={{ fill: Purple200 }}
          />
        </Bar>
      </BarScale>
    </Chart>
  );
};

const meta: Meta<typeof ReportCardEmpowermentMetricDualLinearGauge> = {
  title: 'Examples/Report Card/Empowerment Metric/DualLinearGauge',
  component: ReportCardEmpowermentMetricDualLinearGauge,
  args: {
    valueMin: 1,
    valueMax: 3,
    valuePrimary: 2,
    valueSecondary: 3,
    thicknessPrimary: 30,
    thicknessSecondary: 16,
    cornerRadius: { end: '50%' },
    valuePrimaryContinuous: 1 - 0.05,
    valueSecondaryContinuous: 1 - 0.05,
    borderWidth: 1.66,
    unitsOffset: 6,
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
    thicknessPrimary: {
      control: {
        type: 'range',
        min: 1,
        max: 30,
        step: 1,
      },
    },
    thicknessSecondary: {
      control: {
        type: 'range',
        min: 1,
        max: 30,
        step: 1,
      },
    },
    cornerRadius: {
      control: { type: 'object' },
    },
    valuePrimaryContinuous: {
      control: {
        type: 'range',
        min: 1 - 0.05,
        max: 3,
        step: 0.05,
      },
    },
    valueSecondaryContinuous: {
      control: {
        type: 'range',
        min: 1 - 0.05,
        max: 3,
        step: 0.05,
      },
    },
    borderWidth: {
      control: {
        type: 'range',
        min: 0,
        max: 2,
        step: 0.33,
      },
    },
    unitsOffset: {
      control: {
        type: 'range',
        min: 0,
        max: 16,
        step: 1,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chart>;

export const Example: Story = {};
