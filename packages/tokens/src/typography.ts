import type { Property } from 'csstype';
import { FontSizeDefault } from './font-size';
import {
  FontFamilyBody,
  FontFamilyCode,
  FontFamilyHeading,
} from './font-family';
import { FontFeatureSettingsBody } from './font-feature-settings';

export const pxToRem = (px: number) => `${px / FontSizeDefault}rem`;

/** A composite token for a CSS typography-related properties values. */
export type TypographyToken = {
  fontFamily: Property.FontFamily;
  fontFeatureSettings?: Property.FontFeatureSettings;
  fontSize: Property.FontSize;
  lineHeight: Property.LineHeight;
  fontWeight: Property.FontWeight;
  letterSpacing?: Property.LetterSpacing;
  textTransform?: Property.TextTransform;
};

/**
 * Generate a Prenda Design System (PDS) typography composite token.
 * @param {number} fontWeight numeric value (400, 600, 700, etc.).
 * @param {number} fontSize numeric value in pixel units
 * @param {number} lineHeight numeric value in pixel units
 * @param {number} [letterSpacing] numeric value in em units.
 * @param {('uppercase' | 'none')} [textTransform]
 * @param {string} [fontFamily]
 * @param {string} [fontFeatureSettings]
 * @returns {object}
 */
export function makeTypographyToken(params: {
  fontFamily: Property.FontFamily;
  fontSize: number;
  fontWeight: Property.FontWeight;
  lineHeight: number;
  letterSpacing?: number;
  textTransform?: Property.TextTransform;
  fontFeatureSettings?: Property.FontFeatureSettings;
}): TypographyToken {
  // convert to rem
  const fontSize = pxToRem(params.fontSize);

  // convert to unit-less
  const lineHeight = params.lineHeight / params.fontSize;

  // convert to em
  const letterSpacing = params.letterSpacing ? `${params.letterSpacing}em` : 0;

  return {
    fontFamily: params.fontFamily,
    fontSize,
    fontWeight: params.fontWeight,
    lineHeight,
    ...(params.fontFeatureSettings && {
      fontFeatureSettings: params.fontFeatureSettings,
    }),
    ...(params.letterSpacing && {
      letterSpacing,
    }),
    ...(params.textTransform && {
      textTransform: params.textTransform,
    }),
  };
}

export const display = makeTypographyToken({
  fontFamily: FontFamilyHeading,
  fontSize: 48,
  fontWeight: 800,
  lineHeight: 52,
  letterSpacing: -0.01,
});

export const T32 = makeTypographyToken({
  fontFamily: FontFamilyHeading,
  fontSize: 32,
  fontWeight: 700,
  lineHeight: 40,
  letterSpacing: -0.01,
});

export const T28 = makeTypographyToken({
  fontFamily: FontFamilyHeading,
  fontSize: 28,
  fontWeight: 700,
  lineHeight: 36,
  letterSpacing: -0.01,
});

export const T22 = makeTypographyToken({
  fontFamily: FontFamilyHeading,
  fontSize: 22,
  fontWeight: 600,
  lineHeight: 28,
  letterSpacing: -0.01,
});

export const T18 = makeTypographyToken({
  fontFamily: FontFamilyHeading,
  fontSize: 18,
  fontWeight: 600,
  lineHeight: 28,
  letterSpacing: -0.01,
});

export const T14 = makeTypographyToken({
  fontFamily: FontFamilyHeading,
  fontSize: 14,
  fontWeight: 800,
  lineHeight: 20,
  letterSpacing: 0.04,
  textTransform: 'uppercase',
});

export const body = makeTypographyToken({
  fontFamily: FontFamilyBody,
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 24,
  fontFeatureSettings: FontFeatureSettingsBody,
});

export const label = makeTypographyToken({
  fontFamily: FontFamilyBody,
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 20,
  fontFeatureSettings: FontFeatureSettingsBody,
});

export const description = makeTypographyToken({
  fontFamily: FontFamilyBody,
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 20,
  fontFeatureSettings: FontFeatureSettingsBody,
});

export const code = makeTypographyToken({
  fontFamily: FontFamilyCode,
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 24,
});

/** A palette of typography tokens. */
export type TypographyPalette = Record<string, TypographyToken>;

export const typography = {
  display,
  T32,
  T28,
  T22,
  T18,
  T14,
  body,
  label,
  description,
  code,
} as const satisfies TypographyPalette;
