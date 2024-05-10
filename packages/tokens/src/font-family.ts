import type { Property } from 'csstype';

export type FontFamilyToken = Property.FontFamily;

export const FontFamilyBody =
  "'Inter', sans-serif" as const satisfies FontFamilyToken;
export const FontFamilyCode =
  "'Roboto Mono', monospace" as const satisfies FontFamilyToken;
export const FontFamilyHeading =
  "'Poppins', sans-serif" as const satisfies FontFamilyToken;
