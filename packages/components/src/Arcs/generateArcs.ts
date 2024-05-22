export interface ArcsOut {
  angleMax: number;
  angleMin: number;
  valueMax: number;
  valueMin: number;
}

export type ArcsIn = {
  angleMax: number;
  angleMin: number;
  valueMax: number;
  valueMin: number;
};

export function generateArcs(params: ArcsIn): ArcsOut {
  return {
    angleMax: params.angleMax,
    angleMin: params.angleMin,
    valueMax: params.valueMax,
    valueMin: params.valueMin,
  };
}
