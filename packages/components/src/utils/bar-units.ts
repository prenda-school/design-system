export type BarUnitsParams = {
  /**
   * The shift along the y-axis of the bar units.
   */
  dy?: number;
  /**
   * The magnitude of offset of the unit label from the bar, in the direction of its position.
   */
  offset?: number;
  /**
   * The position of the units relative to the bar.
   */
  position?: 'above' | 'below';
};
