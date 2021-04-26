import * as CSS from 'csstype';

const latinUnicodeRange =
  'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';

export const nunitoRegular: CSS.AtRule.FontFace = {
  fontFamily: '"nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: [
    'url(/fonts/nunito-regular-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-regular-webfont.woff) format("woff")',
  ].join(', '),
};

export const nunitoMedium: CSS.AtRule.FontFace = {
  fontFamily: '"nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: [
    'url(/fonts/nunito-medium-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-medium-webfont.woff) format("woff")',
  ].join(', '),
};

export const nunitoRegularItalic: CSS.AtRule.FontFace = {
  fontFamily: '"nunito"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: [
    'url(/fonts/nunito-italic-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-italic-webfont.woff) format("woff")',
  ].join(', '),
};

export const nunitoExtraboldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"nunito"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: [
    'url(/fonts/nunito-extrabolditalic-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-extrabolditalic-webfont.woff) format("woff")',
  ].join(', '),
};

export const nunitoExtrabold: CSS.AtRule.FontFace = {
  fontFamily: '"nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: [
    'url(/fonts/nunito-extrabold-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-extrabold-webfont.woff) format("woff")',
  ].join(', '),
};

export const nunitoBoldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"nunito"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: [
    'url(/fonts/nunito-bolditalic-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-bolditalic-webfont.woff) format("woff")',
  ].join(', '),
};

export const nunitoBold: CSS.AtRule.FontFace = {
  fontFamily: '"nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: [
    'url(/fonts/nunito-bold-webfont.woff2) format("woff2")',
    'url(/fonts/nunito-bold-webfont.woff) format("woff")',
  ].join(', '),
};


export const sourceCodeProRegular: CSS.AtRule.FontFace = {
  fontFamily: '"Source Code Pro"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: [
    'url(/fonts/sourcecodepro-web-medium.woff2) format("woff2")',
    'url(/fonts/sourcecodepro-web-medium.woff) format("woff")',
  ].join(', '),
};

// The font-face objects in this file pertain to JSS's format, but I cannot find the type for them.
//  - See https://cssinjs.org/jss-syntax?v=v10.6.0#font-face
//  - The "fallbacks" property is avoided because it creates an ill-formed font-face rule that not all modern browsers will handle correctly. Additionally, it's likely to be deprecated.
//    - See https://github.com/cssinjs/jss/issues/1217
//    - Instead, the fallbacks src values simply follow the primary values.
//    - Fallback fonts are not compiled into completely distinct font-faces because of the unique/irregular changing of intended font size (ex: we use Raleway[700] as 500 weight)

// Raleway files were downloaded from Font Squirrel
//  - See https://www.fontsquirrel.com/fonts/raleway

// Font Squirrel Font-face Generator Configuration File
// {"mode":"expert","formats":["woff","woff2"],"tt_instructor":"default","fix_gasp":"xy","fix_vertical_metrics":"Y","metrics_ascent":"","metrics_descent":"","metrics_linegap":"","add_spaces":"Y","add_hyphens":"Y","fallback":"none","fallback_custom":"100","webonly":"Y","options_subset":"basic","subset_custom":"","subset_custom_range":"","subset_ot_features_list":"","css_stylesheet":"stylesheet.css","filename_suffix":"-web","emsquare":"2048","spacing_adjustment":"0"}

// Unicode Ranges are copied from google's suggested ranges

// const latinExtUnicodeRange = 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF';
// const vietnameseUnicodeRange = 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB';
// const cyrillicUnicodeRange = 'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116';
// const cyrillicExtUnicodeRange = 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F'
