/** A global token for a skin tone value. */
export type SkinToneToken = string;

export const Cool100 = '#ecd4ca' as const satisfies SkinToneToken;
export const Cool200 = '#c19a8c' as const satisfies SkinToneToken;
export const Cool300 = '#8a605c' as const satisfies SkinToneToken;
export const Cool400 = '#6d5049' as const satisfies SkinToneToken;
export const Cool500 = '#402225' as const satisfies SkinToneToken;

export const Neutral100 = '#fde6ca' as const satisfies SkinToneToken;
export const Neutral200 = '#dbbc96' as const satisfies SkinToneToken;
export const Neutral300 = '#ad7051' as const satisfies SkinToneToken;
export const Neutral400 = '#623a19' as const satisfies SkinToneToken;
export const Neutral500 = '#301e12' as const satisfies SkinToneToken;

export const Warm100 = '#eecab0' as const satisfies SkinToneToken;
export const Warm200 = '#efc088' as const satisfies SkinToneToken;
export const Warm300 = '#b06a49' as const satisfies SkinToneToken;
export const Warm400 = '#7e3f2a' as const satisfies SkinToneToken;
export const Warm500 = '#58280c' as const satisfies SkinToneToken;

/** A palette of skin tone values. */
export type SkinTonePalette = Record<string, SkinToneToken>;

export const cool = {
  100: Cool100,
  200: Cool200,
  300: Cool300,
  400: Cool400,
  500: Cool500,
} as const satisfies SkinTonePalette;

export const neutral = {
  100: Neutral100,
  200: Neutral200,
  300: Neutral300,
  400: Neutral400,
  500: Neutral500,
} as const satisfies SkinTonePalette;

export const warm = {
  100: Warm100,
  200: Warm200,
  300: Warm300,
  400: Warm400,
  500: Warm500,
} as const satisfies SkinTonePalette;

/** All skin tone palettes. */
export type SkinToneNestedPalettes = Record<string, SkinTonePalette>;

export const skinTone = {
  cool,
  neutral,
  warm,
} as const satisfies SkinToneNestedPalettes;
