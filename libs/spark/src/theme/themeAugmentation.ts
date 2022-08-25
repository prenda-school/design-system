import type {
  TypographyUtils,
  TypographyStyle,
  TypographyStyleOptions,
  FontStyleOptions,
} from '@material-ui/core/styles/createTypography';
import type {
  Color,
  Palette as PDSPalette,
  PaletteAction as PDSPaletteAction,
  PaletteBackground as PDSPaletteBackground,
  PaletteBrand as PDSPaletteBrand,
  PaletteText as PDSPaletteText,
} from './palette';
import { TypographyVariant } from './typography';

// Augment global interfaces so consumers TS can recognize the customizations

// Note: when augmenting, only need to declare custom properties; overriding or re-declaring will throw.

declare module '@material-ui/core/styles/createPalette' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface TypeText extends PDSPaletteText {}
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface TypeBackground extends PDSPaletteBackground {}
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface TypeAction extends PDSPaletteAction {}
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface TypeBrand extends PDSPaletteBrand {}
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface Palette extends PDSPalette {}

  interface PaletteOptions {
    text?: Partial<TypeText>;
    background?: Partial<TypeBackground>;
    brand: TypeBrand;
    red: Color;
    yellow: Color;
    green: Color;
    blue: Color;
    purple: Color;
    teal: Color;
    magenta: Color;
  }
}

// Augment global interface at top level
declare module '@material-ui/core/index' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface TypographyOptions
    extends TypographyUtils,
      Partial<
        Record<TypographyVariant, TypographyStyleOptions> & FontStyleOptions
      > {}

  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface Typography extends Record<TypographyVariant, TypographyStyle> {}
}

// Augment global interface at source -- affects Theme interface
declare module '@material-ui/core/styles/createTypography' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface TypographyOptions
    extends TypographyUtils,
      Partial<
        Record<TypographyVariant, TypographyStyleOptions> & FontStyleOptions
      > {}

  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface Typography extends Record<TypographyVariant, TypographyStyle> {}
}
