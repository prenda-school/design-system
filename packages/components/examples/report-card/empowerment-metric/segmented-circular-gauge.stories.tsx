import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Arc,
  ArcSegments,
  ArcSegmentsSweep,
  ArcUnitLabel,
  Arcs,
  Chart,
} from '../../../src';

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

const ReportCardEmpowermentMetricSegmentedCircularGauge = (props: {
  valueMin: number;
  valueMax: number;
  value: number;
  valueContinuous: number;
  radius: number;
  radiusRatio: number;
  segments: number;
  padAngle: number;
  cornerRadius: number | string;
}) => {
  const {
    valueMin,
    valueMax,
    value,
    valueContinuous,
    radius,
    radiusRatio,
    segments,
    padAngle,
    cornerRadius,
  } = props;

  const startAngleOffset = 0; // -0.05;

  const Neutral80 = '#DFE1E6';
  const Yellow300 = '#FFE380';
  const Yellow500 = '#FFAB00';

  return (
    <Chart
      width={200 + 68 + 68}
      height={200 + 28 + 28}
      marginBottom={28}
      marginLeft={68}
      marginRight={68}
      marginTop={28}
    >
      <Arcs
        angleMin={0 + startAngleOffset}
        angleMax={2 * Math.PI + startAngleOffset}
        valueMin={valueMin}
        valueMax={valueMax}
      >
        <Arc radius={radius} ratio={radiusRatio}>
          <ArcSegments
            count={segments}
            padAngle={padAngle}
            cornerRadius={cornerRadius}
          >
            <ArcSegmentsSweep renderProps={{ style: { fill: Neutral80 } }} />
            <ArcSegmentsSweep
              to={valueContinuous === 0.9 ? value : valueContinuous}
              renderProps={{ style: { fill: Yellow500 } }}
            />
          </ArcSegments>
          <ArcUnitLabel at={1 + 0.1} dx={12} style={unitLabelStyle(1, value)}>
            Sad
          </ArcUnitLabel>
          <ArcUnitLabel at={2} style={unitLabelStyle(2, value)}>
            Fair
          </ArcUnitLabel>
          <ArcUnitLabel
            at={3}
            textAnchor="middle"
            dominantBaseline="hanging"
            style={unitLabelStyle(3, value)}
          >
            Okay
          </ArcUnitLabel>
          <ArcUnitLabel at={4} style={unitLabelStyle(4, value)}>
            Good
          </ArcUnitLabel>
          <ArcUnitLabel at={5 - 0.1} dx={-4} style={unitLabelStyle(5, value)}>
            Happy
          </ArcUnitLabel>
        </Arc>
      </Arcs>
      <g>
        <circle r={118 / 2} fill={Yellow300} />
      </g>
    </Chart>
  );
};

const meta: Meta<typeof ReportCardEmpowermentMetricSegmentedCircularGauge> = {
  title: 'Examples/Report Card/Empowerment Metric/SegmentedCircularGauge',
  component: ReportCardEmpowermentMetricSegmentedCircularGauge,
  args: {
    valueMin: 1,
    valueMax: 5,
    value: 2,
    radius: 100,
    radiusRatio: 0.74,
    padAngle: 0.042,
    cornerRadius: '1.5px',
    segments: 52,
    valueContinuous: 0.9,
  },
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 1,
        max: 5,
        step: 1,
      },
    },
    valueContinuous: {
      control: {
        type: 'range',
        min: 0.9,
        max: 5,
        step: 0.1,
      },
    },
    radius: {
      control: {
        type: 'range',
        min: 1,
        max: 100,
        step: 1,
      },
    },
    radiusRatio: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    padAngle: {
      control: {
        type: 'range',
        min: 0,
        max: 0.1,
        step: 0.001,
      },
    },
    segments: {
      control: {
        type: 'range',
        min: 1,
        max: 52,
        step: 1,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chart>;

export const Example: Story = {};
