import React from 'react';
import { ArcParams, ArcScaleParams, ArcUnitsParams } from '../utils';

export interface ArcUnitsProps extends ArcUnitsParams {
  children?: React.ReactNode;
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: {
    /**
     * The arc on which the units are located.
     */
    arc: ArcParams;
    /**
     * The scale of the arc on which the units are located.
     */
    arcScale: ArcScaleParams;
  };
}

export type ArcUnitsChildProps = {
  ctx: {
    arc: ArcUnitsParams;
    arcScale: ArcScaleParams;
    arcUnits: ArcUnitsParams;
  };
};
