import {
  ScaleLinear as D3ScaleLinear,
  scaleLinear as d3ScaleLinear,
} from 'd3-scale';
import { Value } from './value';

/**
 * A amount of segments. Non-negative integer.
 */
export type Segments = number;

/**
 * A linear, continuous scale that maps the domain of values to the range of segments.
 */
export type ValueSegmentsScale = D3ScaleLinear<Value, Segments>;

/**
 * Construct a linear, continuous scale that maps the domain of values to an amount of segments.
 */
export const getValueSegmentsScale = (params: {
  value: {
    min: Value;
    max: Value;
  };
  segments: Segments;
}): ValueSegmentsScale => {
  const domain = [params.value.min, params.value.max];

  const range = [0, params.segments];

  const scale = d3ScaleLinear().domain(domain).range(range);

  return scale;
};
