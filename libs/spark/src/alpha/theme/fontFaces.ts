import * as CSS from 'csstype';

/**
 * A small, internal utility to generate a standard `src` property value for `@font-face` declarations.
 *
 * MAINTAINER NOTE: Whenever an expected asset file changes (in this case a font file), the version number must be incremented. Otherwise, browsers may use the previously cached file for a long time.
 */
const buildSrc = (filename: string) =>
  `url(/pds-assets-v1/fonts/${filename}.woff2) format("woff2")`;

const poppinsExtrabold: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: buildSrc('poppins-extrabold'),
};

const poppinsExtraboldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: buildSrc('poppins-extrabolditalic'),
};

const poppinsBold: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: buildSrc('poppins-bold'),
};

const poppinsBoldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: buildSrc('poppins-bolditalic'),
};

const poppinsSemibold: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: buildSrc('poppins-semibold'),
};

const poppinsSemiboldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: buildSrc('poppins-semibolditalic'),
};

const poppinsMedium: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: buildSrc('poppins-medium'),
};

const poppinsMediumItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: buildSrc('poppins-mediumitalic'),
};

const interRegular: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: buildSrc('inter-regular'),
};

const interItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: buildSrc('inter-italic'),
};

const interMedium: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: buildSrc('inter-medium'),
};

const interMediumItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: buildSrc('inter-mediumitalic'),
};

const interSemibold: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: buildSrc('inter-semibold'),
};

const interSemiboldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: buildSrc('inter-semibolditalic'),
};

const interBold: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: buildSrc('inter-bold'),
};

const interBoldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: buildSrc('inter-bolditalic'),
};

const robotoMonoRegular: CSS.AtRule.FontFace = {
  fontFamily: '"Roboto Mono"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: buildSrc('robotomono-regular'),
};

const robotoMonoItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Roboto Mono"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: buildSrc('robotomono-italic'),
};

const fontFaces: Array<CSS.AtRule.FontFace> = [
  poppinsExtrabold,
  poppinsExtraboldItalic,
  poppinsBold,
  poppinsBoldItalic,
  poppinsSemibold,
  poppinsSemiboldItalic,
  poppinsMedium,
  poppinsMediumItalic,
  interRegular,
  interItalic,
  interMedium,
  interMediumItalic,
  interSemibold,
  interSemiboldItalic,
  interBold,
  interBoldItalic,
  robotoMonoRegular,
  robotoMonoItalic,
];

export default fontFaces;
