import { Label, Meter, type MeterProps } from 'react-aria-components';
import './LinearMeter.css';
import { SvgAttributes } from 'csstype';
import { HTMLAttributes } from 'react';
import { color } from '@prenda/tokens';

type SvgViewBox = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

const toSvgViewBoxAttr = (params: {
  svgViewBox: SvgViewBox;
}): React.SVGAttributes<SVGSVGElement>['viewBox'] => {
  const { x, y, width, height } = params.svgViewBox;

  return `${x} ${y} ${width} ${height}`;
};

export interface LinearMeterProps extends MeterProps {
  /**
   * The width of the chart in px.
   */
  width: number;
  /**
   * The height of the chart in px.
   */
  height: number;
  svgViewBox?: SvgViewBox;

  leftStrokeCap?: 'butt' | 'round';
  rightStrokeCap?: 'butt' | 'round';
  // leftStrokeCap YES
  // rightStrokeCap YES
  // strokeWidth NO
  // strokeColor YES

  // OTHER
  label?: string;
}

export function LinearMeter(props: LinearMeterProps) {
  const {
    label,
    width,
    height,
    svgViewBox: svgViewBoxProp,
    leftStrokeCap,
    ...other
  } = props;

  const svgViewBox: SvgViewBox = {
    width,
    height,
    x: 0,
    y: 0,
    ...svgViewBoxProp,
  };

  const viewBox = toSvgViewBoxAttr({ svgViewBox });

  const left = {
    x: height / 2,
    y: height / 2,
  };

  return (
    <Meter {...other}>
      {({ percentage, valueText }) => (
        <>
          <Label>{label}</Label>
          {/* <span className="value">{valueText}</span> */}

          <div
            className="surface"
            style={{ width, height, backgroundColor: '#091e4222' }}
          >
            <defs>
              <marker
                id="InverseSemicircleEnd"
                viewBox="0 0 5 10"
                refX="0"
                refY="5"
                markerUnits="strokeWidth"
                markerWidth="0.5"
                markerHeight="1"
                orient="auto"
              >
                <path d="M 0 0 L 5 0 A 5 5 0 0 0 5 10 L 0 10 z" />
              </marker>
            </defs>

            <line
              y1="75"
              x2="270"
              y2="75"
              fill="none"
              stroke="black"
              stroke-width="40"
              marker-end="url(#InverseSemicircleEnd)"
            />

            <svg
              name="surface"
              className="svg"
              viewBox={viewBox}
              width={width}
              height={height}
              fill="transparent"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="15"
                y1="15"
                x2="15"
                y2="15"
                stroke="black"
                stroke-linecap="square"
                stroke-width={30}
              />
              <line
                x1="15"
                y1="15"
                x2="15"
                y2="15"
                stroke="grey"
                stroke-linecap="round"
                stroke-width={30}
              />
            </svg>

            {/* <svg
              name="surface"
              className="svg"
              viewBox={viewBox}
              width={width}
              height={height}
              fill="transparent"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                name="track"
                d="M1,1 h4 M1,3 h4 M1,5 h4"
                stroke={color.neutral[80]}
                stroke-width={15}
              />
              <path
                name="fill"
                d="M1,1 h4 M1,3 h4 M1,5 h4"
                stroke={color.purple[500]}
                stroke-width={15}
              /> */}
            {/* 
            <line
              className="track"
              x1="0"
              y1="80"
              x2="100"
              y2="20"
              stroke="transparent"
              strokeLinecap="round"
              strokeWidth={}
            />
            <line stroke="#6554C0" strokeLinecap="round" />
            <path
              d={parametizeArc(
                center,
                outerRadius,
                percentComplete,
                1,
                outerRotation
              )}
              strokeWidth={outerStrokeWidth}
              stroke="#EBECF0" // neutral-70
              fill="transparent"
            /> */}
            {/* </svg> */}
          </div>
          {/* <div className="bar">
            <div className="fill" style={{ width: percentage + '%' }} />
          </div> */}
        </>
      )}
    </Meter>
  );
}
