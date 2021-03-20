// Raleway URL's extracted manually from https://fonts.google.com/specimen/Raleway?preview.text_type=custom#standard-styles
// Unicode Ranges are copied from google's suggested ranges

const latinUnicodeRange =
  'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';
// const latinExtUnicodeRange = 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF';
// const vietnameseUnicodeRange = 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB';
// const cyrillicUnicodeRange = 'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116';
// const cyrillicExtUnicodeRange = 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F'

const ralewayRegular = {
  fontFamily: '"Raleway"',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap' as const,
  src: `
    url(https://fonts.gstatic.com/s/raleway/v19/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2) format('woff2'),
    url(https://fonts.gstatic.com/s/raleway/v19/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaooCM.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
};

const ralewayRegularItalic = {
  fontFamily: '"Raleway"',
  fontStyle: 'italic',
  fontWeight: 400,
  fontDisplay: 'swap' as const,
  src: `
    url(https://fonts.gstatic.com/s/raleway/v19/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4WjMDrMfIA.woff2) format('woff2'),
    url(https://fonts.gstatic.com/s/raleway/v19/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4WjMPrc.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
};

const ralewayMedium = {
  fontFamily: '"Raleway"',
  fontStyle: 'normal',
  fontWeight: 500,
  fontDisplay: 'swap' as const,
  src: `
    url(https://fonts.gstatic.com/s/raleway/v19/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvoorCIPrE.woff2) format('woff2'),
    url(https://fonts.gstatic.com/s/raleway/v19/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvoooCM.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
};

const ralewayMediumItalic = {
  fontFamily: '"Raleway"',
  fontStyle: 'italic',
  fontWeight: 500,
  fontDisplay: 'swap' as const,
  src: `
    url(https://fonts.gstatic.com/s/raleway/v19/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4VrMDrMfIA.woff2) format('woff2'),
    url(https://fonts.gstatic.com/s/raleway/v19/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4VrMPrc.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
};

const ralewayBold = {
  fontFamily: '"Raleway"',
  fontStyle: 'normal',
  fontWeight: 700,
  fontDisplay: 'swap' as const,
  src: `
    url(https://fonts.gstatic.com/s/raleway/v19/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVs9pbCIPrE.woff2) format('woff2'),
    url(https://fonts.gstatic.com/s/raleway/v19/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVs9pYCM.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
};

const ralewayBoldItalic = {
  fontFamily: '"Raleway"',
  fontStyle: 'italic',
  fontWeight: 700,
  fontDisplay: 'swap' as const,
  src: `
    url(https://fonts.gstatic.com/s/raleway/v19/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4Y_LDrMfIA.woff2) format('woff2'),
    url(https://fonts.gstatic.com/s/raleway/v19/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4Y_LPrc.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
};

const ralewaySemibold = {
  fontFamily: '"Raleway"',
  fontStyle: 'normal',
  fontWeight: 600,
  fontDisplay: 'swap' as const,
  src: `
    url(https://fonts.gstatic.com/s/raleway/v19/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVsEpbCIPrE.woff2) format('woff2'),
    url(https://fonts.gstatic.com/s/raleway/v19/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVsEpYCM.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
};

export const foundersGroteskRegular = {
  fontFamily: '"Founders Grotesk"',
  fontStyle: 'normal',
  fontDisplay: 'swap' as const,
  fontWeight: 400,
  src: `
    url(/fonts/founders-grotesk-web-regular.woff2) format('woff2'),
    url(/fonts/founders-grotesk-web-regular.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
  fallbacks: [ralewayRegular],
};

export const foundersGroteskRegularItalic = {
  fontFamily: '"Founders Grotesk"',
  fontStyle: 'italic',
  fontDisplay: 'swap' as const,
  fontWeight: 400,
  src: `
    url(/fonts/founders-grotesk-web-regular-italic.woff2) format('woff2'),
    url(/fonts/founders-grotesk-web-regular-italic.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
  fallbacks: [ralewayRegularItalic],
};

export const foundersGroteskMedium = {
  fontFamily: '"Founders Grotesk"',
  fontStyle: 'normal',
  fontDisplay: 'swap' as const,
  fontWeight: 500,
  src: `
    url(/fonts/founders-grotesk-web-medium.woff2) format('woff2'),
    url(/fonts/founders-grotesk-web-medium.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
  fallbacks: [ralewayMedium],
};

export const foundersGroteskMediumItalic = {
  fontFamily: '"Founders Grotesk"',
  fontStyle: 'italic',
  fontDisplay: 'swap' as const,
  fontWeight: 500,
  src: `
    url(/fonts/founders-grotesk-web-medium-italic.woff2) format('woff2'),
    url(/fonts/founders-grotesk-web-medium-italic.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
  fallbacks: [ralewayMediumItalic],
};

export const foundersGroteskBold = {
  fontFamily: '"Founders Grotesk"',
  fontStyle: 'normal',
  fontDisplay: 'swap' as const,
  fontWeight: 700,
  src: `
    url(/fonts/founders-grotesk-web-bold.woff2) format('woff2'),
    url(/fonts/founders-grotesk-web-bold.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
  fallbacks: [ralewayBold],
};

export const foundersGroteskBoldItalic = {
  fontFamily: '"Founders Grotesk"',
  fontStyle: 'italic',
  fontDisplay: 'swap' as const,
  fontWeight: 700,
  src: `
    url(/fonts/founders-grotesk-web-bold.woff2) format('woff2'),
    url(/fonts/founders-grotesk-web-bold.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
  fallbacks: [ralewayBoldItalic],
};

export const foundersGroteskCondensedSemibold = {
  fontFamily: '"Founders Grotesk Condensed"',
  fontStyle: 'normal',
  fontDisplay: 'swap' as const,
  fontWeight: 600,
  src: `
    url(/fonts/founders-grotesk-condensed-web-semibold.woff2) format('woff2'),
    url(/fonts/founders-grotesk-condensed-web-semibold.woff) format('woff');
  `,
  unicodeRange: latinUnicodeRange,
  fallbacks: [ralewaySemibold],
};
