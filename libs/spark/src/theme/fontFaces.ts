import * as CSS from 'csstype';

const nunitoRegular: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: 'url(/fonts/nunito-regular-webfont.woff2) format("woff2")',
};

const nunitoItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: 'url(/fonts/nunito-italic-webfont.woff2) format("woff2")',
};

const nunitoSemibold: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: 'url(/fonts/nunito-semibold-webfont.woff2) format("woff2")',
};

const nunitoSemiboldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: 'url(/fonts/nunito-semibolditalic-webfont.woff2) format("woff2")',
};

const nunitoBoldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: 'url(/fonts/nunito-bolditalic-webfont.woff2) format("woff2")',
};

const nunitoBold: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: 'url(/fonts/nunito-bold-webfont.woff2) format("woff2")',
};

const nunitoExtraboldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: 'url(/fonts/nunito-extrabolditalic-webfont.woff2) format("woff2")',
};

const nunitoExtrabold: CSS.AtRule.FontFace = {
  fontFamily: '"Nunito"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: 'url(/fonts/nunito-extrabold-webfont.woff2) format("woff2")',
};

const sourceCodeProRegular: CSS.AtRule.FontFace = {
  fontFamily: '"Source Code Pro"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: 'url(/fonts/sourcecodepro-medium-webfont.woff2) format("woff2")',
};

const fontFaces: Array<CSS.AtRule.FontFace> = [
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

export default fontFaces;
