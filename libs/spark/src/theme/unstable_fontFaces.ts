import * as CSS from 'csstype';

const poppinsExtrabold: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: 'url(/fonts/poppins/extrabold.woff2) format("woff2")',
};

const poppinsExtraboldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: 'url(/fonts/poppins/extrabolditalic.woff2) format("woff2")',
};

const poppinsBold: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: 'url(/fonts/poppins/bold.woff2) format("woff2")',
};

const poppinsBoldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: 'url(/fonts/poppins/bolditalic.woff2) format("woff2")',
};

const poppinsSemibold: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: 'url(/fonts/poppins/semibold.woff2) format("woff2")',
};

const poppinsSemiboldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Poppins"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: 'url(/fonts/poppins/semibolditalic.woff2) format("woff2")',
};

const interRegular: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: 'url(/fonts/inter/regular.woff2) format("woff2")',
};

const interItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: 'url(/fonts/inter/italic.woff2) format("woff2")',
};

const interSemibold: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: 'url(/fonts/inter/semibold.woff2) format("woff2")',
};

const interSemiboldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: 'url(/fonts/inter/semibolditalic.woff2) format("woff2")',
};

const interBold: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: 'url(/fonts/inter/bold.woff2) format("woff2")',
};

const interBoldItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Inter"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: 'url(/fonts/inter/bolditalic.woff2) format("woff2")',
};

const robotoMonoRegular: CSS.AtRule.FontFace = {
  fontFamily: '"Roboto Mono"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: 'url(/fonts/robotomono/regular.woff2) format("woff2")',
};

const robotoMonoItalic: CSS.AtRule.FontFace = {
  fontFamily: '"Roboto Mono"',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: 'url(/fonts/robotomono/italic.woff2) format("woff2")',
};

const unstable_fontFaces: Array<CSS.AtRule.FontFace> = [
  poppinsExtrabold,
  poppinsExtraboldItalic,
  poppinsBold,
  poppinsBoldItalic,
  poppinsSemibold,
  poppinsSemiboldItalic,
  interRegular,
  interItalic,
  interSemibold,
  interSemiboldItalic,
  interBold,
  interBoldItalic,
  robotoMonoRegular,
  robotoMonoItalic,
];

export default unstable_fontFaces;
