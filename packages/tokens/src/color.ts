/** A global token for a color value. */
export type ColorToken = string;

export const N0 = 'var(--pds-neutral-0)' as const satisfies ColorToken;
export const N60 = 'var(--pds-neutral-60)' as const satisfies ColorToken;
export const N70 = 'var(--pds-neutral-70)' as const satisfies ColorToken;
export const N80 = 'var(--pds-neutral-80)' as const satisfies ColorToken;
export const N90 = 'var(--pds-neutral-90)' as const satisfies ColorToken;
export const N100 = 'var(--pds-neutral-100)' as const satisfies ColorToken;
export const N200 = 'var(--pds-neutral-200)' as const satisfies ColorToken;
export const N300 = 'var(--pds-neutral-300)' as const satisfies ColorToken;
export const N400 = 'var(--pds-neutral-400)' as const satisfies ColorToken;
export const N500 = 'var(--pds-neutral-500)' as const satisfies ColorToken;
export const N600 = 'var(--pds-neutral-600)' as const satisfies ColorToken;

export const overlay = 'var(--pds-overlay)' as const satisfies ColorToken;
export const shadow = 'var(--pds-shadow)' as const satisfies ColorToken;
export const transparent =
  'var(--pds-transparent)' as const satisfies ColorToken;

export const R100 = 'var(--pds-red-100)' as const satisfies ColorToken;
export const R200 = 'var(--pds-red-200)' as const satisfies ColorToken;
export const R300 = 'var(--pds-red-300)' as const satisfies ColorToken;
export const R400 = 'var(--pds-red-400)' as const satisfies ColorToken;
export const R500 = 'var(--pds-red-500)' as const satisfies ColorToken;
export const R600 = 'var(--pds-red-600)' as const satisfies ColorToken;
export const R700 = 'var(--pds-red-700)' as const satisfies ColorToken;

export const Y100 = 'var(--pds-yellow-100)' as const satisfies ColorToken;
export const Y200 = 'var(--pds-yellow-200)' as const satisfies ColorToken;
export const Y300 = 'var(--pds-yellow-300)' as const satisfies ColorToken;
export const Y400 = 'var(--pds-yellow-400)' as const satisfies ColorToken;
export const Y500 = 'var(--pds-yellow-500)' as const satisfies ColorToken;
export const Y600 = 'var(--pds-yellow-600)' as const satisfies ColorToken;
export const Y700 = 'var(--pds-yellow-700)' as const satisfies ColorToken;

export const G100 = 'var(--pds-green-100)' as const satisfies ColorToken;
export const G200 = 'var(--pds-green-200)' as const satisfies ColorToken;
export const G300 = 'var(--pds-green-300)' as const satisfies ColorToken;
export const G400 = 'var(--pds-green-400)' as const satisfies ColorToken;
export const G500 = 'var(--pds-green-500)' as const satisfies ColorToken;
export const G600 = 'var(--pds-green-600)' as const satisfies ColorToken;
export const G700 = 'var(--pds-green-700)' as const satisfies ColorToken;

export const B100 = 'var(--pds-blue-100)' as const satisfies ColorToken;
export const B200 = 'var(--pds-blue-200)' as const satisfies ColorToken;
export const B300 = 'var(--pds-blue-300)' as const satisfies ColorToken;
export const B400 = 'var(--pds-blue-400)' as const satisfies ColorToken;
export const B500 = 'var(--pds-blue-500)' as const satisfies ColorToken;
export const B600 = 'var(--pds-blue-600)' as const satisfies ColorToken;
export const B700 = 'var(--pds-blue-700)' as const satisfies ColorToken;

export const T100 = 'var(--pds-teal-100)' as const satisfies ColorToken;
export const T200 = 'var(--pds-teal-200)' as const satisfies ColorToken;
export const T300 = 'var(--pds-teal-300)' as const satisfies ColorToken;
export const T400 = 'var(--pds-teal-400)' as const satisfies ColorToken;
export const T500 = 'var(--pds-teal-500)' as const satisfies ColorToken;
export const T600 = 'var(--pds-teal-600)' as const satisfies ColorToken;
export const T700 = 'var(--pds-teal-700)' as const satisfies ColorToken;

export const P100 = 'var(--pds-purple-100)' as const satisfies ColorToken;
export const P200 = 'var(--pds-purple-200)' as const satisfies ColorToken;
export const P300 = 'var(--pds-purple-300)' as const satisfies ColorToken;
export const P400 = 'var(--pds-purple-400)' as const satisfies ColorToken;
export const P500 = 'var(--pds-purple-500)' as const satisfies ColorToken;
export const P600 = 'var(--pds-purple-600)' as const satisfies ColorToken;
export const P700 = 'var(--pds-purple-700)' as const satisfies ColorToken;

export const M100 = 'var(--pds-magenta-100)' as const satisfies ColorToken;
export const M200 = 'var(--pds-magenta-200)' as const satisfies ColorToken;
export const M300 = 'var(--pds-magenta-300)' as const satisfies ColorToken;
export const M400 = 'var(--pds-magenta-400)' as const satisfies ColorToken;
export const M500 = 'var(--pds-magenta-500)' as const satisfies ColorToken;
export const M600 = 'var(--pds-magenta-600)' as const satisfies ColorToken;
export const M700 = 'var(--pds-magenta-700)' as const satisfies ColorToken;

export const BrandBlue = 'var(--pds-brand-blue)' as const satisfies ColorToken;
export const BrandLightBlue =
  'var(--pds-brand-light-blue)' as const satisfies ColorToken;
export const BrandDarkGreen =
  'var(--pds-brand-dark-green)' as const satisfies ColorToken;
export const BrandLightGreen =
  'var(--pds-brand-light-green)' as const satisfies ColorToken;
export const BrandDarkYellow =
  'var(--pds-brand-dark-yellow)' as const satisfies ColorToken;
export const BrandLightYellow =
  'var(--pds-brand-light-yellow)' as const satisfies ColorToken;
/** @deprecated */
export const BrandOrange =
  'var(--pds-brand-orange)' as const satisfies ColorToken;
/** @deprecated */
export const BrandLightOrange =
  'var(--pds-brand-light-orange)' as const satisfies ColorToken;

/** A palette of color tokens. */
export type ColorPalette = Record<string, ColorToken>;

export const neutral = {
  0: N0,
  60: N60,
  70: N70,
  80: N80,
  90: N90,
  100: N100,
  200: N200,
  300: N300,
  400: N400,
  500: N500,
  600: N600,
  overlay,
  shadow,
  transparent,
} as const satisfies ColorPalette;

export const red = {
  100: R100,
  200: R200,
  300: R300,
  400: R400,
  500: R500,
  600: R600,
  700: R700,
} as const satisfies ColorPalette;

export const yellow = {
  100: Y100,
  200: Y200,
  300: Y300,
  400: Y400,
  500: Y500,
  600: Y600,
  700: Y700,
} as const satisfies ColorPalette;

export const green = {
  100: G100,
  200: G200,
  300: G300,
  400: G400,
  500: G500,
  600: G600,
  700: G700,
} as const satisfies ColorPalette;

export const blue = {
  100: B100,
  200: B200,
  300: B300,
  400: B400,
  500: B500,
  600: B600,
  700: B700,
} as const satisfies ColorPalette;

export const teal = {
  100: T100,
  200: T200,
  300: T300,
  400: T400,
  500: T500,
  600: T600,
  700: T700,
} as const satisfies ColorPalette;

export const purple = {
  100: P100,
  200: P200,
  300: P300,
  400: P400,
  500: P500,
  600: P600,
  700: P700,
} as const satisfies ColorPalette;

export const magenta = {
  100: M100,
  200: M200,
  300: M300,
  400: M400,
  500: M500,
  600: M600,
  700: M700,
} as const satisfies ColorPalette;

export const brand = {
  blue: BrandBlue,
  lightBlue: BrandLightBlue,
  darkGreen: BrandDarkGreen,
  lightGreen: BrandLightGreen,
  darkYellow: BrandDarkYellow,
  lightYellow: BrandLightYellow,
  /** @deprecated */
  orange: BrandOrange,
  /** @deprecated */
  lightOrange: BrandLightOrange,
} as const satisfies ColorPalette;

/** All color palettes. */
export type ColorNestedPalettes = Record<string, ColorPalette>;

export const color = {
  neutral,
  red,
  yellow,
  green,
  blue,
  teal,
  purple,
  magenta,
  brand,
} as const satisfies ColorNestedPalettes;
