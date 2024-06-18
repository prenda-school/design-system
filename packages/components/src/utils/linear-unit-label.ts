import { Property, SvgProperties } from 'csstype';
import * as D3Scale from 'd3-scale';
import { LinearScaleParams, evalLinearScaleLengthMin } from './linear-scale';
import { LinearUnitsParams } from './linear-units';

export type LinearUnitLabelParams = {
  /**
   * The value at which the unit label is located.
   */
  at: number;
  /**
   * The baseline used to align text and inline-level contents of the unit label.
   */
  dominantBaseline?: Property.DominantBaseline;
  /**
   * The offset of the unit label below (positive value) or above (negative value) the line.
   */
  offset?: number;
};

export type DrawLinearUnitLabelParams = {
  scale: LinearScaleParams;
  units: LinearUnitsParams;
  unitLabel: LinearUnitLabelParams;
};

export function drawLinearUnitLabel(params: DrawLinearUnitLabelParams) {
  const lengthMin = evalLinearScaleLengthMin(params.scale.lengthMin);

  const scale = D3Scale.scaleLinear()
    .domain([params.scale.valueMin, params.scale.valueMax])
    .range([lengthMin, params.scale.lengthMax]);

  const value = params.unitLabel.at;

  const length = scale(value);

  const offset = evalLinearUnitLabelOffset(
    params.unitLabel.offset ?? params.units.offset
  );

  const x = length;
  const y = offset;

  const textAnchor: SvgProperties['textAnchor'] =
    x === lengthMin ? 'start' : x === params.scale.lengthMax ? 'end' : 'middle';

  const dominantBaseline: SvgProperties['dominantBaseline'] =
    evalLinearUnitLabelDominantBaseline(
      params.unitLabel.dominantBaseline ?? params.units.dominantBaseline
    );

  return {
    x,
    y,
    textAnchor,
    dominantBaseline,
  };
}

export type LinearUnitLabelOffset = number;

const DEFAULT_LINEAR_UNIT_LABEL_OFFSET: LinearUnitLabelOffset = 0;

export function evalLinearUnitLabelOffset(
  param: LinearUnitLabelParams['offset']
): LinearUnitLabelOffset {
  return param ?? DEFAULT_LINEAR_UNIT_LABEL_OFFSET;
}

export type LinearUnitLabelDominantBaseline = Property.DominantBaseline;

const DEFAULT_LINEAR_UNIT_LABEL_DOMINANT_BASELINE: LinearUnitLabelDominantBaseline =
  'text-before-edge';

export function evalLinearUnitLabelDominantBaseline(
  param: LinearUnitLabelParams['dominantBaseline']
): LinearUnitLabelDominantBaseline {
  return param ?? DEFAULT_LINEAR_UNIT_LABEL_DOMINANT_BASELINE;
}
