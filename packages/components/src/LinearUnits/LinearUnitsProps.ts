import React from 'react';
import { LinearScaleParams, LinearUnitsParams } from '../utils';

export interface LinearUnitsProps extends LinearUnitsParams {
  children?: React.ReactNode;
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: {
    /**
     * The scale of the linear arrangement.
     */
    linearScale: LinearScaleParams;
  };
}

export type LinearUnitsChildProps = {
  ctx: {
    linearScale: LinearScaleParams;
    linearUnits: LinearUnitsParams;
  };
};
