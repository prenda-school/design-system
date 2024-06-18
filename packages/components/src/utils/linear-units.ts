import { Property } from 'csstype';

export type LinearUnitsParams = {
  /**
   * The baseline used to align text and inline-level contents of the units.
   */
  dominantBaseline?: Property.DominantBaseline;
  /**
   * The shift along the y-axis of the units.
   */
  dy?: number;
  /**
   * The offset of the units below (positive value) or above (negative value) the line.
   */
  offset?: number;
};
