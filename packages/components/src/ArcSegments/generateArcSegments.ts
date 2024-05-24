export type ArcsSegmentsIn = {
  count: number;
  padAngle: number;
  cornerRadius?: number | string;
};

export type ArcSegmentsOut = {
  count: number;
  padAngle: number;
  cornerRadius?: number | string;
};

export function generateArcSegments(params: ArcsSegmentsIn): ArcSegmentsOut {
  const arcSegments = {
    count: params.count,
    padAngle: params.padAngle,
    cornerRadius: params.cornerRadius,
  };

  return arcSegments;
}
