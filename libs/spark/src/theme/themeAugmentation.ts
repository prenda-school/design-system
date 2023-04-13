import type {
  TypographyUtils,
  TypographyStyle,
  TypographyStyleOptions,
  FontStyleOptions,
} from '@material-ui/core/styles/createTypography';
import type { AvatarClassKey } from '../Avatar';
import type { BannerClassKey } from '../Banner';
import type { IconButtonClassKey } from '../IconButton';
import type { SectionMessageClassKey } from '../SectionMessage';
import type { SectionMessageTitleClassKey } from '../SectionMessageTitle';
import type { TagClassKey } from '../Tag';
import type { TypographyClassKey } from '../Typography';
import type { PaletteTertiaryColor, TypeBrand } from './palette';
import type { Theme } from './theme';
import type { SparkVariant } from './typography';
import type { Borders as Borders_alpha } from '../alpha/theme/borders';
import type { Palette as Palette_alpha } from '../alpha/theme/palette';
import type { Radii as Radii_alpha } from '../alpha/theme/radii';
import type { Shadows as Shadows_alpha } from '../alpha/theme/shadows';
import type { TypographyOptions as TypographyOptions_alpha } from '../alpha/theme/typography';

// Augment global interfaces so consumers TS can recognize the customizations

// Note: when augmenting, only need to declare custom properties; overriding or re-declaring will throw.

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    borders_alpha: Borders_alpha;
    palette_alpha: Palette_alpha;
    radii_alpha: Radii_alpha;
    shadows_alpha: Shadows_alpha;
    typography_alpha: TypographyOptions_alpha;
    /** @deprecated */
    unstable_borders: Borders_alpha;
    /** @deprecated */
    unstable_palette: Palette_alpha;
    /** @deprecated */
    unstable_radii: Radii_alpha;
    /** @deprecated */
    unstable_shadows: Shadows_alpha;
    /** @deprecated */
    unstable_typography: TypographyOptions_alpha;
  }
}

declare module '@material-ui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {
    borders_alpha: Borders_alpha;
    palette_alpha: Palette_alpha;
    radii_alpha: Radii_alpha;
    shadows_alpha: Shadows_alpha;
    typography_alpha: TypographyOptions_alpha;
    /** @deprecated */
    unstable_borders: Borders_alpha;
    /** @deprecated */
    unstable_palette: Palette_alpha;
    /** @deprecated */
    unstable_radii: Radii_alpha;
    /** @deprecated */
    unstable_shadows: Shadows_alpha;
    /** @deprecated */
    unstable_typography: TypographyOptions_alpha;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  // :unstable_: use when stable
  // interface TypeText {
  //   heading: string;
  //   body: string;
  //   subdued: string;
  //   // disabled exists
  //   // icon exists
  //   secondaryIcon: string;
  //   inverseHeading: string;
  //   inverseBody: string;
  //   inverseSubdued: string;
  //   inverseDisabled: string;
  //   inverseIcon: string;
  //   inverseSecondaryIcon: string;
  // }
  // interface TypeBackground {
  //   default: string;
  //   alternative: string;
  //   brand: string;
  //   inverse: string;
  // }
  // interface TypeAction {
  //   focusBoxShadow: CSS.Property.BoxShadow;
  // }
  // interface Palette {
  //   text: TypeText;
  //   background: TypeBackground;
  //   brand: TypeBrand;
  //   red: Color;
  //   yellow: Color;
  //   green: Color;
  //   blue: Color;
  //   purple: Color;
  //   teal: Color;
  //   magenta: Color;
  // }
  // interface PaletteOptions {
  //   text: TypeText;
  //   background: TypeBackground;
  //   brand: TypeBrand;
  //   red: Color;
  //   yellow: Color;
  //   green: Color;
  //   blue: Color;
  //   purple: Color;
  //   teal: Color;
  //   magenta: Color;
  // }

  interface TypeText {
    dark: string;
    darkLowContrast: string;
    light: string;
    lightLowContrast: string;
  }

  interface TypeBackground {
    navy: string;
    blue: string;
    lightGrey: string;
    lightBlue: string;
  }

  interface Palette {
    text: TypeText;
    background: TypeBackground;
    brand: TypeBrand;
    red: PaletteTertiaryColor;
    orange: PaletteTertiaryColor;
    yellow: PaletteTertiaryColor;
    green: PaletteTertiaryColor;
    blue: PaletteTertiaryColor;
    purple: PaletteTertiaryColor;
  }

  interface PaletteOptions {
    brand: TypeBrand;
    red: PaletteTertiaryColor;
    orange: PaletteTertiaryColor;
    yellow: PaletteTertiaryColor;
    green: PaletteTertiaryColor;
    blue: PaletteTertiaryColor;
    purple: PaletteTertiaryColor;
  }
}

declare module '@material-ui/core/index' {
  // Only need to declare custom properties here; extending will throw
  interface Color {
    lighter: string;
    light: string;
    medium: string;
    dark: string;
  }
}

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiSparkAvatar: AvatarClassKey;
    MuiSparkBanner: BannerClassKey;
    MuiSparkIconButton: IconButtonClassKey;
    MuiSparkSectionMessage: SectionMessageClassKey;
    MuiSparkSectionTitleMessage: SectionMessageTitleClassKey;
    MuiSparkTag: TagClassKey;
    MuiSparkTypography: TypographyClassKey;
  }
}

// Augment global interface at top level
declare module '@material-ui/core/index' {
  // :unstable_: replace `SparkVariant` with `unstable_TypographyVariant`
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface TypographyOptions
    extends TypographyUtils,
      Partial<
        Record<SparkVariant, TypographyStyleOptions> & FontStyleOptions
      > {}

  // :unstable_: replace `SparkVariant` with `unstable_TypographyVariant`
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface Typography extends Record<SparkVariant, TypographyStyle> {}
}

// Augment global interface at source -- affects Theme interface
declare module '@material-ui/core/styles/createTypography' {
  // :unstable_: replace `SparkVariant` with `unstable_TypographyVariant`
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface TypographyOptions
    extends TypographyUtils,
      Partial<
        Record<SparkVariant, TypographyStyleOptions> & FontStyleOptions
      > {}

  // :unstable_: replace `SparkVariant` with `unstable_TypographyVariant`
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface Typography extends Record<SparkVariant, TypographyStyle> {}
}
