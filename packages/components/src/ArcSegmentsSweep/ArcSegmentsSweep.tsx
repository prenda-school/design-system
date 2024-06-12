import React from 'react';
import { ArcSegmentsSweepProps } from './ArcSegmentsSweepProps';
import { drawArcSegmentsSweep } from '../utils';

export type ArcSegmentsSweepRef = SVGGElement;

export const ArcSegmentsSweep = React.forwardRef<
  ArcSegmentsSweepRef,
  ArcSegmentsSweepProps
>((props, ref) => {
  const { from, to, cornerRadius, renderProps, ctx, ...other } = props;

  if (ctx === undefined) {
    throw Error(
      'Oops! `ArcSegmentsSweep` received `ctx: undefined`. Did you mean to either (1) render as a child of `ArcSegments`? or (2) specify `ctx` explicitly?'
    );
  }

  const sweeps = drawArcSegmentsSweep({
    from,
    to,
    cornerRadius,
    arc: ctx.arc,
    arcScale: ctx.arcScale,
    arcSegments: ctx.arcSegments,
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
