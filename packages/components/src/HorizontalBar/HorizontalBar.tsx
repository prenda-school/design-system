import * as D3Scale from 'd3-scale';
import React from 'react';
import * as VictoryBar from 'victory-bar';
import { BarProps } from '../Bar';

export type HorizontalBarProps = Omit<BarProps, 'orientation' | 'direction'>;

export type HorizontalBarRef = SVGPathElement;

export const HorizontalBar = React.forwardRef<
  HorizontalBarRef,
  HorizontalBarProps
>((props, ref) => {
  const {
    valueMin,
    valueMax,
    value,
    lengthMin,
    lengthMax,
    thickness,
    cornerRadius,
    ...other
  } = props;

  const d = getHorizontalBarPath({
    valueMin,
    valueMax,
    value,
    lengthMin,
    lengthMax,
    thickness,
    cornerRadius,
  });

  return <path ref={ref} d={d} {...other} />;
});

export const getHorizontalBarPath = (params: {
  valueMin: BarProps['valueMin'];
  valueMax: BarProps['valueMax'];
  value: BarProps['value'];
  lengthMin: BarProps['lengthMin'];
  lengthMax: BarProps['lengthMax'];
  thickness: BarProps['thickness'];
  cornerRadius: BarProps['cornerRadius'];
}) => {
  const scale = D3Scale.scaleLinear()
    .domain([params.valueMin, params.valueMax])
    .range([params.lengthMin, params.lengthMax]);

  const length = scale(params.value);

  const x0 = 0;
  const y0 = 0;
  const x = length;
  const y = 0;
  const width = params.thickness;
  const cornerRadius = params.cornerRadius ?? DEFAULT_CORNER_RADIUS;

  return victoryBar.getHorizontalBarPath(
    {
      x0,
      y0,
      x,
      y,
      horizontal: true,
      alignment: 'middle',
    },
    width,
    cornerRadius
  );
};

const DEFAULT_CORNER_RADIUS = 0;

const victoryBar = {
  getHorizontalBarPath: (
    props: {
      x: number;
      x0: number;
      y: number;
      y0: number;
      horizontal: boolean;
      alignment: 'start' | 'middle' | 'end';
    },
    width: number,
    cornerRadius:
      | number
      | Partial<{
          top: number;
          bottom: number;
          topLeft: number;
          topRight: number;
          bottomLeft: number;
          bottomRight: number;
        }>
  ) => {
    return VictoryBar.getHorizontalBarPath(props, width, cornerRadius);
  },
};
