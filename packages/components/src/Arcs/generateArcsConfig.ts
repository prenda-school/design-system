import { generateArcCircle } from '../ArcCircle/generateArcCircle';
import { generateArcSweep } from '../ArcSweep/generateArcSweep';
import { generateArc } from '../Arc/generateArc';

export interface ArcsConfigOut {
  arcs: {
    sweeps: {
      d: string;
    }[];
    circles: {
      r: number;
      cx: number;
      cy: number;
    }[];
  }[];
}

export type ArcsConfigIn = {
  angleMax: number;
  angleMin: number;
  valueMax: number;
  valueMin: number;
  arc: {
    radius: number;
    ratio: number;
    sweep?: {
      from?: number;
      to: number;
      cornerRadius: number | string;
    }[];
    circle?: {
      at: number;
      radiusRatio?: number;
    }[];
  }[];
};

export function generateArcsConfig(params: ArcsConfigIn): ArcsConfigOut {
  const arcIns = params.arc;

  const arcs = arcIns.map((arcIn) => {
    const arc = generateArc({
      ...arcIn,
      angleMax: params.angleMax,
      angleMin: params.angleMin,
      valueMax: params.valueMax,
      valueMin: params.valueMin,
    });

    const sweeps = arcIn.sweep
      ? arcIn.sweep.map((sweepIn) => generateArcSweep({ arc, ...sweepIn }))
      : [];

    const circles = arcIn.circle
      ? arcIn.circle.map((circleIn) => generateArcCircle({ arc, ...circleIn }))
      : [];

    return { sweeps, circles };
  });

  return { arcs };
}
