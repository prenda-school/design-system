import type { Property } from 'csstype';
import * as color from './color';

/** An alias token for a CSS background color property value. */
export type BackgroundColorToken = Property.BackgroundColor;

export const standard = color.N0 satisfies BackgroundColorToken;
export const alternative = color.N60 satisfies BackgroundColorToken;
export const brand = color.BrandBlue satisfies BackgroundColorToken;
export const inverse = color.N600 satisfies BackgroundColorToken;
export const overlay = color.overlay satisfies BackgroundColorToken;

/** A palette of background color tokens. */
export type BackgroundColorPalette = Record<string, BackgroundColorToken>;

export const backgroundColor = {
  standard,
  alternative,
  brand,
  inverse,
  overlay,
} as const satisfies BackgroundColorPalette;
