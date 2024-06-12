import React from 'react';
import {
  ArcSegmentsSweepParams,
  CtxWithArc,
  CtxWithArcScale,
  CtxWithArcSegments,
} from '../utils';

export interface ArcSegmentsSweepProps extends ArcSegmentsSweepParams {
  renderProps?:
    | React.SVGProps<SVGPathElement>
    | ((props: { d: string }, index: number) => React.SVGProps<SVGPathElement>);

  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: CtxWithArcScale & CtxWithArc & CtxWithArcSegments;
}
