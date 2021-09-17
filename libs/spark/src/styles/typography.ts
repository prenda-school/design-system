import {
  TypographyOptions,
  TypographyUtils,
  TypographyStyle,
  TypographyStyleOptions,
  FontStyleOptions,
} from '@material-ui/core/styles/createTypography';

export type SparkVariant =
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'uppercase-lg'
  | 'uppercase-md'
  | 'uppercase-sm'
  | 'label-xl'
  | 'label-xl-strong'
  | 'label-lg'
  | 'label-lg-strong'
  | 'label-md'
  | 'label-md-strong'
  | 'label-sm'
  | 'label-sm-strong'
  | 'paragraph-xl'
  | 'paragraph-lg'
  | 'paragraph-md'
  | 'paragraph-sm'
  | 'code-lg'
  | 'code-md'
  | 'code-sm';

interface SparkTypographyOptions
  extends TypographyOptions,
    TypographyUtils,
    Partial<Record<SparkVariant, TypographyStyleOptions> & FontStyleOptions> {}

// Augment global interface at top level
declare module '@material-ui/core/index' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface TypographyOptions
    extends TypographyUtils,
      Partial<
        Record<SparkVariant, TypographyStyleOptions> & FontStyleOptions
      > {}

  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface Typography extends Record<SparkVariant, TypographyStyle> {}
}

// Augment global interface at source -- affects Theme interface
declare module '@material-ui/core/styles/createTypography' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface TypographyOptions
    extends TypographyUtils,
      Partial<
        Record<SparkVariant, TypographyStyleOptions> & FontStyleOptions
      > {}

  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface Typography extends Record<SparkVariant, TypographyStyle> {}
}

const defaultFontFamily = '"Nunito", Avenir, sans-serif';
const codeFontFamily =
  '"Source Code Pro", Consolas, "Andale Mono WT", "Lucida Console", Courier, monospace';
const defaultFontSize = 16;
const pxToRem = (px: number) => `${px / defaultFontSize}rem`;

/**
 * Generate Spark Design typography variants.
 * (Inspired by an internal Mui utility.)
 * @param {number} fontWeight numeric value (400, 600, 700, etc.).
 * @param {number} fontSize numeric value in pixel units
 * @param {number} lineHeight numeric value in pixel units
 * @param {number} [letterSpacing] numeric value in em units.
 * @param {('uppercase')} [textTransform]
 * @param {string} [fontFamily]
 * @returns {object}
 */
function buildVariant(
  fontWeight: number,
  fontSize: number,
  lineHeight: number,
  letterSpacing: number = undefined,
  textTransform: 'uppercase' = undefined,
  fontFamily: string = defaultFontFamily
) {
  return {
    fontFamily,
    fontSize: pxToRem(fontSize),
    // convert to unit-less
    lineHeight: `${lineHeight / fontSize}`,
    fontWeight,
    ...(letterSpacing ? { letterSpacing: `${letterSpacing}em` } : {}),
    ...(textTransform ? { textTransform } : {}),
  };
}

const customVariants: Record<SparkVariant, TypographyStyle> = {
  'display-lg': buildVariant(800, 64, 72),
  'display-md': buildVariant(800, 56, 64),
  'display-sm': buildVariant(800, 48, 56),
  'heading-xl': buildVariant(700, 34, 48),
  'heading-lg': buildVariant(700, 28, 40),
  'heading-md': buildVariant(700, 24, 32),
  'heading-sm': buildVariant(700, 20, 32),
  'uppercase-lg': buildVariant(800, 16, 16, 0.1, 'uppercase'),
  'uppercase-md': buildVariant(800, 14, 14, 0.1, 'uppercase'),
  'uppercase-sm': buildVariant(800, 12, 12, 0.1, 'uppercase'),
  'label-xl': buildVariant(600, 18, 20),
  'label-xl-strong': buildVariant(700, 18, 20),
  'label-lg': buildVariant(600, 16, 20),
  'label-lg-strong': buildVariant(700, 16, 20),
  'label-md': buildVariant(600, 14, 20),
  'label-md-strong': buildVariant(700, 14, 20),
  'label-sm': buildVariant(600, 12, 20),
  'label-sm-strong': buildVariant(700, 12, 20),
  'paragraph-xl': buildVariant(400, 18, 28),
  'paragraph-lg': buildVariant(400, 16, 24),
  'paragraph-md': buildVariant(400, 14, 20),
  'paragraph-sm': buildVariant(400, 12, 20),
  'code-lg': buildVariant(500, 18, 28, undefined, undefined, codeFontFamily),
  'code-md': buildVariant(500, 16, 24, undefined, undefined, codeFontFamily),
  'code-sm': buildVariant(500, 14, 20, undefined, undefined, codeFontFamily),
};

const typography: SparkTypographyOptions = {
  // override default Roboto
  fontFamily: defaultFontFamily,
  // override default 14px
  fontSize: defaultFontSize,
  // override default division by 14
  pxToRem,
  // specify all mui defaults (some Mui components rely on these by default)
  h1: customVariants['display-md'],
  h2: customVariants['display-sm'],
  h3: customVariants['heading-xl'],
  h4: customVariants['heading-lg'],
  h5: customVariants['heading-md'],
  h6: customVariants['heading-sm'],
  subtitle1: customVariants['label-lg'],
  subtitle2: customVariants['label-md'],
  body1: customVariants['paragraph-lg'],
  body2: customVariants['paragraph-md'],
  button: { ...customVariants['label-lg'], textTransform: 'none' },
  caption: customVariants['label-sm'],
  overline: customVariants['uppercase-sm'],
  ...customVariants,
};

export default typography;
