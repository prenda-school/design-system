import React from 'react';
import { ArcSweepProps } from './ArcSweepProps';
import { drawArcSweep } from '../utils';

export type ArcSweepRef = SVGPathElement;

export const ArcSweep = React.forwardRef<ArcSweepRef, ArcSweepProps>(
  (props, ref) => {
    const {
      from,
      to,
      cornerRadius,
      angleMin,
      angleMax,
      valueMax,
      valueMin,
      radius,
      ratio,
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

    const { d } = drawArcSweep({
      from,
      to,
      cornerRadius,
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

    return <path ref={ref} d={d} {...other} />;
  }
);

const getMissingPropMessage = (propName: string) => {
  return `Oops! \`ArcSweep\` received \`${propName}: undefined\`. Did you mean to either (1) render as a child of \`Arc\`? or (2) set \`${propName}\`?`;
};
