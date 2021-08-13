import * as CSS from 'csstype';

const fontFamily = '"Nunito", Avenir, sans-serif';
const defaultFontSize = 16;
const pxToRem = (size) => `${size / defaultFontSize}rem`;

export const typography = {
  fontFamily,
  fontSize: defaultFontSize,
  pxToRem,
  body1: {
    fontSize: 16,
  },
  body2: {
    fontSize: 14,
  },
  button: {
    textTransform: 'none' as const,
    fontSize: '1rem', // 16px
    fontWeight: 700,
    lineHeight: '1.25rem', // 20px},
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

const nunitoItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: [
    'url(/fonts/nunito-italic-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-italic-webfont.woff) format("woff")',
  ].join(', '),
};

const nunitoSemibold: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: [
    'url(/fonts/nunito-semibold-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-semibold-webfont.woff) format("woff")',
  ].join(', '),
};

const nunitoSemiboldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: [
    'url(/fonts/nunito-semibolditalic-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-semibolditalic-webfont.woff) format("woff")',
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
  nunitoItalic,
  nunitoBold,
  nunitoBoldItalic,
  nunitoExtrabold,
  nunitoExtraboldItalic,
  nunitoSemibold,
  nunitoSemiboldItalic,
  sourceCodeProRegular,
];
