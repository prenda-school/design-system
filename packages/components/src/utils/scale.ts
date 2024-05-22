import {
  ScaleLinear as D3ScaleLinear,
  scaleLinear as d3ScaleLinear,
} from 'd3-scale';
import { Angle } from './angle';
import { Value } from './value';

/**
 * A linear, continuous scale that maps the domain of values to the range of angles.
 */
export type ValueAngleScale = D3ScaleLinear<Value, Angle>;

/**
 * Construct a linear, continuous scale that maps the domain of values to the range of angles.
 */
export const getValueAngleScale = (params: {
  value: {
    min: Value;
    max: Value;
  };
  angle: {
    min: Angle;
    max: Angle;
  };
}): ValueAngleScale => {
  const domain = [params.value.min, params.value.max];

  const range = [params.angle.min, params.angle.max];

  const scale = d3ScaleLinear().domain(domain).range(range);

  return scale;
};
