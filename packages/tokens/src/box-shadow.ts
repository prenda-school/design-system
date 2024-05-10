import type { Property } from 'csstype';
import * as color from './color';

/** A composite token for a CSS box shadow property value. */
export type BoxShadowToken = Property.BoxShadow;

export const none = 'none' as const satisfies BoxShadowToken;

export const E100 =
  `0px 1px 1px 0px ${color.shadow}` as const satisfies BoxShadowToken;
export const E200 =
  `0px 3px 5px 0px ${color.shadow}` as const satisfies BoxShadowToken;
export const E300 =
  `0px 8px 12px 0px ${color.shadow}` as const satisfies BoxShadowToken;
export const E400 =
  `0px 10px 18px 0px ${color.shadow}` as const satisfies BoxShadowToken;
export const E500 =
  `0px 18px 28px 0px ${color.shadow}` as const satisfies BoxShadowToken;

export const focus =
  `0 0 2px 4px ${color.T300}` as const satisfies BoxShadowToken;

export const error =
  `0 0 0 4px ${color.R100}` as const satisfies BoxShadowToken;
export const info = `0 0 0 4px ${color.B100}` as const satisfies BoxShadowToken;
export const success =
  `0 0 0 4px ${color.G100}` as const satisfies BoxShadowToken;
export const warning =
  `0 0 0 4px ${color.Y100}` as const satisfies BoxShadowToken;

/** A palette of shadow tokens. */
export type BoxShadowPalette = Record<string, BoxShadowToken>;

export const elevation = {
  none,
  E100,
  E200,
  E300,
  E400,
  E500,
} as const satisfies BoxShadowPalette;

export const action = {
  focus,
} as const satisfies BoxShadowPalette;

export const severity = {
  error,
  info,
  success,
  warning,
} as const satisfies BoxShadowPalette;

/** All shadow palettes. */
export type BoxShadowNestedPalettes = Record<string, BoxShadowPalette>;

export const boxShadow = {
  elevation,
  action,
  severity,
} as const satisfies BoxShadowNestedPalettes;
