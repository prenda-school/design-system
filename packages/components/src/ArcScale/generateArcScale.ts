import { ArcScaleParams } from '../utils';

export function generateArcScale(params: ArcScaleParams): ArcScaleParams {
  return {
    angleMax: params.angleMax,
    angleMin: params.angleMin,
    valueMax: params.valueMax,
    valueMin: params.valueMin,
  };
}
