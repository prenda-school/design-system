import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Chart,
  BarScale,
  Bar,
  BarFill,
  BarLabel,
  BarLabelProps,
} from '../../../src';

const BrandBlue = '#0A4872';
const Teal200 = '#B3F5FF';
const Teal300 = '#79E2F2';
const Teal400 = '#00C7E6';
const Teal500 = '#00B8D9';
const Teal600 = '#00A3BF';
const Teal700 = '#008DA6';

const styleBody = {
  fill: BrandBlue,
  fontFamily: 'Inter',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
};

const ReportCardPortfolioBarChart = (props: {
  data: { value: number; label: string }[];
  valueMin: number;
  colors: string[];
  barThickness: number;
  barGapRatio: number;
  barLabelPosition: BarLabelProps['position'];
  barLabelOffset: BarLabelProps['offset'];
  // extra
  width: number;
  height: number;
  'data.0.value': number;
}) => {
  const {
    data: dataProp,
    valueMin,
    colors,
    barThickness,
    barGapRatio,
    barLabelPosition,
    barLabelOffset,
    // extra
    width,
    height,
  } = props;

  const data = dataProp
    .map((datum, i) => {
      // @ts-expect-error blah
      const value = (props['data.' + i + '.value'] as number) ?? datum.value;
      return { ...datum, value };
    })
    .sort((a, b) => b.value - a.value);
  const values = data.map((d) => d.value);
  const valueMax = Math.max(...values);
  const lengthMax = width;

  const gap = barThickness * barGapRatio;

  const gdy =
    barLabelPosition === 'above' ? 24 : barLabelPosition === 'below' ? 0 : 0;

  return (
    <Chart width={width} height={height}>
      <g transform={`translate(0, ${gdy})`}>
        <BarScale valueMin={valueMin} valueMax={valueMax} lengthMax={lengthMax}>
          {data.map((datum, i) => (
            <Bar
              dy={i * (barThickness + gap)}
              key={i}
              thickness={barThickness}
              cornerRadius={{ start: 4, end: '50%' }}
            >
              <BarFill to={datum.value} style={{ fill: colors[i] }} />
              <BarLabel
                offset={barLabelOffset}
                position={barLabelPosition}
                style={styleBody}
              >
                {datum.label} ({datum.value})
              </BarLabel>
            </Bar>
          ))}
        </BarScale>
      </g>
    </Chart>
  );
};

const meta: Meta<typeof ReportCardPortfolioBarChart> = {
  title: 'Examples/Report Card/Portfolio/BarChart',
  component: ReportCardPortfolioBarChart,
  args: {
    data: [
      { value: 17, label: 'Social Studies' },
      { value: 15, label: 'Science' },
      { value: 12, label: 'Reading' },
      { value: 8, label: 'Other' },
      { value: 6, label: 'Art' },
      { value: 3, label: 'Music' },
    ],
    valueMin: 0,
    colors: [Teal700, Teal600, Teal500, Teal400, Teal300, Teal200],
    barThickness: 40,
    barGapRatio: (24 + 20) / 40,
    barLabelPosition: 'above',
    barLabelOffset: 6,
    // extra
    height: 484,
    width: 320,
    'data.0.value': 17,
  },
  argTypes: {
    data: { control: { type: 'object' } },
    valueMin: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    colors: { control: { type: 'object' } },
    barThickness: { control: { type: 'range', min: 0, max: 40, step: 1 } },
    barGapRatio: { control: { type: 'range', min: 0, max: 2, step: 0.1 } },
    barLabelPosition: {
      options: ['above', 'below', 'inside'],
      control: { type: 'radio' },
    },
    barLabelOffset: {
      control: { type: 'range', min: -20, max: 20, step: 1 },
    },
    // extra
    height: { control: { type: 'range', min: 0, max: 484, step: 1 } },
    width: { control: { type: 'range', min: 0, max: 320, step: 1 } },
    'data.0.value': { control: { type: 'range', min: 0, max: 50, step: 1 } },
  },
};

export default meta;

type Story = StoryObj<typeof Chart>;

export const Example: Story = {};
