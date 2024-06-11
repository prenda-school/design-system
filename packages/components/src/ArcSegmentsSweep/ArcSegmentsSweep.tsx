import React from 'react';
import { ArcSegmentsSweepProps } from './ArcSegmentsSweepProps';
import { generateArcSegmentsSweep } from '../utils';

export type ArcSegmentsSweepRef = SVGGElement;

export const ArcSegmentsSweep = React.forwardRef<
  ArcSegmentsSweepRef,
  ArcSegmentsSweepProps
>((props, ref) => {
  const { from, to, cornerRadius, arc, renderProps, ...other } = props;

  if (arc === undefined) {
    throw Error(
      'Oops! `ArcSegmentsSweep` received `arc: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) pass `arc` from `generateArc`?'
    );
  }

  const sweeps = generateArcSegmentsSweep({
    from,
    to,
    cornerRadius,
    arc,
    segments: arc.segments,
  });

  return (
    <g ref={ref} {...other}>
      {sweeps.map((sweep, i) => {
        const baseProps = { key: i, d: sweep.d };

        const props =
          renderProps === undefined
            ? baseProps
            : typeof renderProps === 'function'
            ? renderProps(baseProps, i)
            : Object.assign(baseProps, renderProps);

        return <path {...props} />;
      })}
    </g>
  );
});
