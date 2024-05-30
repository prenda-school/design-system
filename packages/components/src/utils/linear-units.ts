export type LinearUnitsParams = {
  /**
   * The shift along the y-axis of the units.
   */
  dy?: number;
  /**
   * The baseline used to align text and inline-level contents of the units.
   */
  dominantBaseline?: 'hanging' | 'middle' | 'alphabetic';
  /**
   * The offset of the units below (positive value) or above (negative value) the line.
   */
  offset?: number;
};
