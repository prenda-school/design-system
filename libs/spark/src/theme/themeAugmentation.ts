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

// Augment global interfaces so consumers TS can recognize the customizations

// Note: when augmenting, only need to declare custom properties; overriding or re-declaring will throw.

declare module '@material-ui/core/styles/createTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme {}
}

declare module '@material-ui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@material-ui/core/styles/createPalette' {
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
