import * as CSS from 'csstype';

export const typography = {
  fontFamily: '"Nunito", Avenir, sans-serif',
  fontSize: 16,
  body1: {
    fontSize: 16,
  },
  body2: {
    fontSize: 14,
  },
};

const nunitoRegular: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: [
    'url(/fonts/nunito-regular-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-regular-webfont.woff) format("woff")',
  ].join(', '),
};

const nunitoMedium: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: [
    'url(/fonts/nunito-medium-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-medium-webfont.woff) format("woff")',
  ].join(', '),
};

const nunitoRegularItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: [
    'url(/fonts/nunito-italic-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-italic-webfont.woff) format("woff")',
  ].join(', '),
};

const nunitoExtraboldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: [
    'url(/fonts/nunito-extrabolditalic-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-extrabolditalic-webfont.woff) format("woff")',
  ].join(', '),
};

const nunitoExtrabold: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: [
    'url(/fonts/nunito-extrabold-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-extrabold-webfont.woff) format("woff")',
  ].join(', '),
};

const nunitoBoldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: [
    'url(/fonts/nunito-bolditalic-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-bolditalic-webfont.woff) format("woff")',
  ].join(', '),
};

const nunitoBold: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: [
    'url(/fonts/nunito-bold-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-bold-webfont.woff) format("woff")',
  ].join(', '),
};

const nunitoSemibold: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: [
    'url(/fonts/nunito-bold-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-bold-webfont.woff) format("woff")',
  ].join(', '),
};

const nunitoSemiboldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: [
    'url(/fonts/nunito-bolditalic-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-bolditalic-webfont.woff) format("woff")',
  ].join(', '),
};

const sourceCodeProRegular: CSS.AtRule.FontFace = {
  fontFamily: '"Source Code Pro"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: [
    'url(/fonts/sourcecodepro-web-medium.woff2) format("woff2")',
    'url(/fonts/sourcecodepro-web-medium.woff) format("woff")',
  ].join(', '),
};

export const fontFaces = [
  nunitoRegular,
  nunitoRegularItalic,
  nunitoMedium,
  nunitoBold,
  nunitoBoldItalic,
  nunitoExtrabold,
  nunitoExtraboldItalic,
  nunitoSemibold,
  nunitoSemiboldItalic,
  sourceCodeProRegular,
];

// Unicode Ranges are copied from google's suggested ranges

// const latinExtUnicodeRange = 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF';
// const vietnameseUnicodeRange = 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB';
// const cyrillicUnicodeRange = 'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116';
// const cyrillicExtUnicodeRange = 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F'
