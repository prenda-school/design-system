import type { Property } from 'csstype';

/** A global token for a CSS border radius property value. */
export type BorderRadiusToken = Property.BorderRadius;

export const zero = '0px' as const satisfies BorderRadiusToken;
export const xs = '2px' as const satisfies BorderRadiusToken;
export const sm = '4px' as const satisfies BorderRadiusToken;
export const md = '8px' as const satisfies BorderRadiusToken;
export const lg = '16px' as const satisfies BorderRadiusToken;
export const xl = '32px' as const satisfies BorderRadiusToken;
export const full = '9999px' as const satisfies BorderRadiusToken;

/** A palette of border radius tokens. */
export type BorderRadiusPalette = Record<string, BorderRadiusToken>;

export const borderRadius = {
  zero,
  xs,
  sm,
  md,
  lg,
  xl,
  full,
} as const satisfies BorderRadiusPalette;
