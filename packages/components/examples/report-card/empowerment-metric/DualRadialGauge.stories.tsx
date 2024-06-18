import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Arc,
  ArcCircle,
  ArcSweep,
  ArcUnitLabel,
  ArcScale,
  ArcUnits,
  useResponsiveChart,
} from '../../../src';

const Neutral70 = '#EBECF0';
const Purple600 = '#5243AA';
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
  // extra
  unitsOffset?: number;
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
    unitsOffset,
    cornerRadius,
  } = props;

  const labelFontSize = 16;
  const labelOffset = 8;
  const labelLength = 70;
  const marginTop = 8 + labelOffset + labelFontSize;
  const marginRight = 8 + labelOffset + labelLength;
  const marginBottom = 8 + labelFontSize / 2;
  const marginLeft = 8 + labelOffset + labelLength;
  const innerWidth = radiusPrimary * 2;
  const innerHeight = radiusPrimary;
  const height = innerHeight + marginTop + marginBottom;

  const chart = useResponsiveChart({
    height,
    innerWidth,
    innerHeight,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  });

  return (
    <div ref={chart.container.ref} {...chart.container.props}>
      <svg {...chart.svg.props}>
        {/* inner */}
        <g {...chart.inner.props}>
          {/* inner-center */}
          <g
            transform={`translate(${
              Math.max(
                0,
                chart.svg.dim.width -
                  chart.inner.dim.margin.right -
                  chart.inner.dim.margin.left -
                  chart.inner.dim.width
              ) / 2
            },0)`}
          >
            {/* center-arc */}
            <g transform={`translate(${radiusPrimary}, ${radiusPrimary})`}>
              <ArcScale
                angleMin={(-1 * Math.PI) / 2}
                angleMax={Math.PI / 2}
                valueMin={valueMin}
                valueMax={valueMax}
              >
                <Arc
                  radius={radiusPrimary}
                  ratio={radiusRatioPrimary}
                  cornerRadius={cornerRadius}
                >
                  <ArcSweep style={{ fill: Neutral70 }} />
                  <ArcCircle at={valuePrimary} style={{ fill: Purple600 }} />
                  <ArcUnits offset={unitsOffset}>
                    <ArcUnitLabel
                      at={1}
                      style={unitLabelStyle(1, valuePrimary)}
                    >
                      Too easy
                    </ArcUnitLabel>
                    <ArcUnitLabel
                      at={2}
                      style={unitLabelStyle(2, valuePrimary)}
                    >
                      Just right
                    </ArcUnitLabel>
                    <ArcUnitLabel
                      at={3}
                      style={unitLabelStyle(3, valuePrimary)}
                    >
                      Too hard
                    </ArcUnitLabel>
                  </ArcUnits>
                </Arc>
                <Arc
                  radius={radiusSecondary}
                  ratio={radiusRatioSecondary}
                  cornerRadius={cornerRadius}
                >
                  <ArcSweep style={{ fill: Neutral70 }} />
                  <ArcCircle at={valueSecondary} style={{ fill: Purple200 }} />
                </Arc>
              </ArcScale>
            </g>
          </g>
        </g>
      </svg>
    </div>
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
    unitsOffset: 8,
    cornerRadius: '50%',
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
    unitsOffset: {
      control: {
        type: 'range',
        min: 0,
        max: 16,
        step: 1,
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

type Story = StoryObj<typeof ReportCardEmpowermentMetricDualRadialGauge>;

export const Example: Story = {};
