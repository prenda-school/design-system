import type { Property } from 'csstype';
import * as color from './color';

/** A composite token for a CSS border property value. */
export type BorderToken = Property.Border;

export const none = 'none' as const satisfies BorderToken;
export const transparent =
  `1px solid ${color.transparent}` as const satisfies BorderToken;
export const subtle = `1px solid ${color.N70}` as const satisfies BorderToken;
export const standard = `1px solid ${color.N90}` as const satisfies BorderToken;
export const bold = `1px solid ${color.N100}` as const satisfies BorderToken;

export const selected =
  `1px solid ${color.B600}` as const satisfies BorderToken;
export const active = `1px solid ${color.B100}` as const satisfies BorderToken;
export const expanded =
  `1px solid ${color.B600}` as const satisfies BorderToken;
export const hover = `1px solid ${color.N100}` as const satisfies BorderToken;
export const focus = `1px solid ${color.B600}` as const satisfies BorderToken;

export const error = `1px solid ${color.R700}` as const satisfies BorderToken;
export const info = `1px solid ${color.B600}` as const satisfies BorderToken;
export const success = `1px solid ${color.G600}` as const satisfies BorderToken;
export const warning = `1px solid ${color.Y600}` as const satisfies BorderToken;

/** A palette of border tokens. */
export type BorderPalette = Record<string, BorderToken>;

export const stylistic = {
  none,
  transparent,
  subtle,
  standard,
  bold,
} as const satisfies BorderPalette;

export const action = {
  selected,
  active,
  expanded,
  hover,
  focus,
} as const satisfies BorderPalette;

export const severity = {
  error,
  info,
  success,
  warning,
} as const satisfies BorderPalette;

/** All border palettes. */
export type BorderNestedPalettes = Record<string, BorderPalette>;

export const border = {
  stylistic,
  action,
  severity,
} as const satisfies BorderNestedPalettes;
