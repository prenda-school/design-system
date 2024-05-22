export type ArcIn = {
  cornerRadius?: number | string;
  radius: number;
  ratio: number;
  valueMin: number;
  valueMax: number;
  angleMin: number;
  angleMax: number;
};

export type ArcOut = {
  cornerRadius?: number | string;
  radius: number;
  ratio: number;
  value: {
    min: number;
    max: number;
  };
  angle: {
    min: number;
    max: number;
  };
};

export function generateArc(params: ArcIn): ArcOut {
  const arc = {
    cornerRadius: params.cornerRadius,
    radius: params.radius,
    ratio: params.ratio,
    value: {
      min: params.valueMin,
      max: params.valueMax,
    },
    angle: {
      min: params.angleMin,
      max: params.angleMax,
    },
  };

  return arc;
}
