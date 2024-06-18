import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  RadialBar,
  RadialBarSegments,
  RadialBarSegmentsSweep,
  RadialBarScale,
  LinearScale,
  LinearUnits,
  LinearUnitLabel,
  useResponsiveChart,
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

  const scaleGap = 32;
  const fontSize = 16;
  const marginTop = 8;
  const marginRight = 8;
  const marginBottom = 8 + scaleGap + fontSize;
  const marginLeft = 8;
  const innerWidth = radius * 2;
  const innerHeight = radius * 2;
  const height = innerHeight + marginTop + marginBottom;

  const chart = useResponsiveChart({
    height,
    innerWidth,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  });

  return (
    <div {...chart.container.props} ref={chart.container.ref}>
      <svg {...chart.svg.props}>
        {/* inner */}
        <g {...chart.inner.props}>
          {/* inner-center */}
          <g
            transform={`translate(${
              Math.max(
                0,
                chart.svg.dim.width -
                  chart.inner.dim.margin.left -
                  chart.inner.dim.margin.right -
                  chart.inner.dim.width
              ) / 2
            },0)`}
          >
            {/* center-radial-bar */}
            <g transform={`translate(${radius},${radius})`}>
              <RadialBarScale
                angleMin={0 + startAngleOffset}
                angleMax={2 * Math.PI + startAngleOffset}
                valueMin={valueMin}
                valueMax={valueMax}
              >
                <RadialBar radius={radius} ratio={radiusRatio}>
                  <RadialBarSegments
                    count={segments}
                    padAngle={padAngle}
                    cornerRadius={cornerRadius}
                  >
                    <RadialBarSegmentsSweep style={{ fill: Neutral80 }} />
                    <RadialBarSegmentsSweep
                      to={valueContinuous === 0.9 ? value : valueContinuous}
                      style={{ fill: Yellow500 }}
                    />
                  </RadialBarSegments>
                </RadialBar>
              </RadialBarScale>

              <circle r={118 / 2} fill={Yellow300} />
            </g>
          </g>

          {/* y-scale-offset */}
          <g transform={`translate(0, ${chart.inner.dim.height + scaleGap})`}>
            <LinearScale
              valueMin={valueMin}
              valueMax={valueMax}
              lengthMax={Math.max(
                chart.svg.dim.width - 16,
                chart.inner.dim.width
              )}
            >
              <LinearUnits>
                <LinearUnitLabel at={1} style={unitLabelStyle(1, value)}>
                  Not really
                </LinearUnitLabel>
                <LinearUnitLabel at={2} style={unitLabelStyle(2, value)}>
                  Kind of
                </LinearUnitLabel>
                <LinearUnitLabel at={3} style={unitLabelStyle(3, value)}>
                  A lot
                </LinearUnitLabel>
              </LinearUnits>
            </LinearScale>
          </g>
        </g>
      </svg>
    </div>
  );
};

const meta: Meta<typeof ReportCardEmpowermentMetricSegmentedCircularGauge> = {
  title: 'Examples/Report Card/Empowerment Metric/SegmentedCircularGauge',
  component: ReportCardEmpowermentMetricSegmentedCircularGauge,
  args: {
    valueMin: 1,
    valueMax: 3,
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
        max: 3,
        step: 1,
      },
    },
    valueContinuous: {
      control: {
        type: 'range',
        min: 0.9,
        max: 3,
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

type Story = StoryObj<typeof ReportCardEmpowermentMetricSegmentedCircularGauge>;

export const Example: Story = {};
