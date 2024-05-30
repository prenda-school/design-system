import React from 'react';
import { ArcOut } from '../Arc/generateArc';

export interface ArcUnitLabelProps
  extends React.SVGTextElementAttributes<SVGTextElement> {
  /**
   * The value at which the unit label is located.
   */
  at: number;
  /**
   * The offset of the unit label from the arc's (primary/outer) radius.
   */
  offset?: number;
  /**
   * The arc on which the unit label is located.
   */
  arc?: ArcOut;
}
