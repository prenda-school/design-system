import React from 'react';
import { ArcCtx, ArcUnitLabelParams } from '../utils';

export interface ArcUnitLabelProps
  extends ArcUnitLabelParams,
    Omit<React.SVGTextElementAttributes<SVGTextElement>, 'offset'> {
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: Pick<ArcCtx, 'arc' | 'arcScale' | 'arcUnits'>;
}
