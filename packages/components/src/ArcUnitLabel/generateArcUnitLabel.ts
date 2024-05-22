import { ArcOut } from '../Arc/generateArc';
import { calcCoordinatesOnArc, getValueAngleScale } from '../utils';

type ArcUnitLabelIn = {
  at: number;
  offset?: number;
  arc: ArcOut;
};

type ArcUnitLabelOut = {
  x: number;
  y: number;
};

export function generateArcUnitLabel(params: ArcUnitLabelIn): ArcUnitLabelOut {
  const angleScale = getValueAngleScale({
    value: {
      min: params.arc.value.min,
      max: params.arc.value.max,
    },
    angle: {
      min: params.arc.angle.min,
      max: params.arc.angle.max,
    },
  });

  const angle = angleScale(params.at);

  const offset = params.offset ?? DEFAULT_OFFSET;

  const radialOffset = params.arc.radius + offset;

  const coordinates = calcCoordinatesOnArc({
    angle,
    radius: radialOffset,
  });

  return {
    x: coordinates.x,
    y: coordinates.y,
  };
}

const DEFAULT_OFFSET = 8;
