/** A global token for a color value. */
export type ColorToken = string;

export const N0 = '#ffffff' as const satisfies ColorToken;
export const N60 = '#fafbfc' as const satisfies ColorToken;
export const N70 = '#ebecf0' as const satisfies ColorToken;
export const N80 = '#dfe1e6' as const satisfies ColorToken;
export const N90 = '#c1c7d0' as const satisfies ColorToken;
export const N100 = '#6b778c' as const satisfies ColorToken;
export const N200 = '#5e6c84' as const satisfies ColorToken;
export const N300 = '#505f79' as const satisfies ColorToken;
export const N400 = '#42526e' as const satisfies ColorToken;
export const N500 = '#253858' as const satisfies ColorToken;
export const N600 = '#091e42' as const satisfies ColorToken;

export const overlay = '#091e42cc' as const satisfies ColorToken;
export const shadow = '#091e4229' as const satisfies ColorToken;
export const transparent = 'transparent' as const satisfies ColorToken;

export const R100 = '#ffebe6' as const satisfies ColorToken;
export const R200 = '#ffbdad' as const satisfies ColorToken;
export const R300 = '#ff8f73' as const satisfies ColorToken;
export const R400 = '#ff7452' as const satisfies ColorToken;
export const R500 = '#ff5630' as const satisfies ColorToken;
export const R600 = '#de350b' as const satisfies ColorToken;
export const R700 = '#a72100' as const satisfies ColorToken;

export const Y100 = '#fffae6' as const satisfies ColorToken;
export const Y200 = '#fff0b3' as const satisfies ColorToken;
export const Y300 = '#ffe380' as const satisfies ColorToken;
export const Y400 = '#ffc400' as const satisfies ColorToken;
export const Y500 = '#ffab00' as const satisfies ColorToken;
export const Y600 = '#ff991f' as const satisfies ColorToken;
export const Y700 = '#ff8b00' as const satisfies ColorToken;

export const G100 = '#e3fcef' as const satisfies ColorToken;
export const G200 = '#abf5d1' as const satisfies ColorToken;
export const G300 = '#79f2c0' as const satisfies ColorToken;
export const G400 = '#57d9a3' as const satisfies ColorToken;
export const G500 = '#36b37e' as const satisfies ColorToken;
export const G600 = '#00875a' as const satisfies ColorToken;
export const G700 = '#006644' as const satisfies ColorToken;

export const B100 = '#deebff' as const satisfies ColorToken;
export const B200 = '#b3d4ff' as const satisfies ColorToken;
export const B300 = '#4c9aff' as const satisfies ColorToken;
export const B400 = '#2684ff' as const satisfies ColorToken;
export const B500 = '#0065ff' as const satisfies ColorToken;
export const B600 = '#0052cc' as const satisfies ColorToken;
export const B700 = '#0747a6' as const satisfies ColorToken;

export const T100 = '#e6fcff' as const satisfies ColorToken;
export const T200 = '#b3f5ff' as const satisfies ColorToken;
export const T300 = '#79e2f2' as const satisfies ColorToken;
export const T400 = '#00c7e6' as const satisfies ColorToken;
export const T500 = '#00b8d9' as const satisfies ColorToken;
export const T600 = '#00a3bf' as const satisfies ColorToken;
export const T700 = '#008da6' as const satisfies ColorToken;

export const P100 = '#eae6ff' as const satisfies ColorToken;
export const P200 = '#c0b6f2' as const satisfies ColorToken;
export const P300 = '#998dd9' as const satisfies ColorToken;
export const P400 = '#8777d9' as const satisfies ColorToken;
export const P500 = '#6554c0' as const satisfies ColorToken;
export const P600 = '#5243aa' as const satisfies ColorToken;
export const P700 = '#403294' as const satisfies ColorToken;

export const M100 = '#fff1f4' as const satisfies ColorToken;
export const M200 = '#f7d2da' as const satisfies ColorToken;
export const M300 = '#f399af' as const satisfies ColorToken;
export const M400 = '#ea7793' as const satisfies ColorToken;
export const M500 = '#de5173' as const satisfies ColorToken;
export const M600 = '#d0355b' as const satisfies ColorToken;
export const M700 = '#b2103a' as const satisfies ColorToken;

export const BrandBlue = '#0a4872' as const satisfies ColorToken;
export const BrandLightBlue = '#d7f3ff' as const satisfies ColorToken;
export const BrandDarkGreen = '#36b37e' as const satisfies ColorToken;
export const BrandLightGreen = '#79f2c0' as const satisfies ColorToken;
export const BrandDarkYellow = '#ffc400' as const satisfies ColorToken;
export const BrandLightYellow = '#fff0b3' as const satisfies ColorToken;
/** @deprecated */
export const BrandOrange = '#f34700' as const satisfies ColorToken;
/** @deprecated */
export const BrandLightOrange = '#ffb78f' as const satisfies ColorToken;

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
