import React from 'react';
import { ArcCircleProps } from './ArcCircleProps';
import { drawArcCircle } from '../utils';

export type ArcCircleRef = SVGCircleElement;

export const ArcCircle = React.forwardRef<ArcCircleRef, ArcCircleProps>(
  (props, ref) => {
    const {
      at,
      radiusRatio,
      valueMin,
      valueMax,
      angleMin,
      angleMax,
      radius,
      ratio,
      cornerRadius: _cornerRadius,
      ...other
    } = props;

    if (valueMin === undefined) {
      throw Error(getMissingPropMessage('valueMin'));
    }

    if (valueMax === undefined) {
      throw Error(getMissingPropMessage('valueMax'));
    }

    if (angleMin === undefined) {
      throw Error(getMissingPropMessage('angleMin'));
    }

    if (angleMax === undefined) {
      throw Error(getMissingPropMessage('angleMax'));
    }

    if (radius === undefined) {
      throw Error(getMissingPropMessage('radius'));
    }

    if (ratio === undefined) {
      throw Error(getMissingPropMessage('ratio'));
    }

    const { r, cx, cy } = drawArcCircle({
      at,
      radiusRatio,
      arc: {
        angle: {
          min: angleMin,
          max: angleMax,
        },
        value: {
          min: valueMin,
          max: valueMax,
        },
        radius,
        ratio,
      },
    });

    return <circle ref={ref} r={r} cx={cx} cy={cy} {...other} />;
  }
);

const getMissingPropMessage = (propName: string) => {
  return `Oops! \`ArcCircle\` received \`${propName}: undefined\`. Did you mean to either (1) render as a child of \`Arc\`? or (2) set \`${propName}\`?`;
};
