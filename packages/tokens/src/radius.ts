import type { Property } from 'csstype';

/** A global token for a CSS border radius property value. */
export type RadiusToken = Property.BorderRadius;

export const zero = '0px' as const satisfies RadiusToken;
export const xs = '2px' as const satisfies RadiusToken;
export const sm = '4px' as const satisfies RadiusToken;
export const md = '8px' as const satisfies RadiusToken;
export const lg = '16px' as const satisfies RadiusToken;
export const xl = '32px' as const satisfies RadiusToken;
export const full = '9999px' as const satisfies RadiusToken;

/** A palette of radius tokens. */
export type RadiusPalette = Record<string, RadiusToken>;

export const radius = {
  zero,
  xs,
  sm,
  md,
  lg,
  xl,
  full,
} as const satisfies RadiusPalette;
