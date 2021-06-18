import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import { colors } from './colors';
import { createShadow } from './shadows';
import {
  nunitoRegular,
  nunitoRegularItalic,
  nunitoMedium,
  nunitoBold,
  nunitoBoldItalic,
  nunitoExtrabold,
  nunitoExtraboldItalic,
  nunitoSemibold,
  nunitoSemiboldItalic,
  sourceCodeProRegular,
} from './fonts';

export type TertiaryColor = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};

declare module '@material-ui/core/styles/createPalette' {
  export interface TypeBackground {
    navy: string;
    blue: string;
    darkContrastText: string;
    darkLowContrastText: string;
    lightGrey: string;
    lightBlue: string;
    white: string;
    lightContrastText: string;
    lightLowContrastText: string;
    default: string;
    paper: string;
  }

  export interface Palette {
    brand: {
      blue: string;
      lightBlue: string;
      orange: string;
      peach: string;
    };
    neutral: {
      navy: string;
      lightGrey: string;
      mediumGrey: string;
      darkGrey: string;
      white: string;
    };
    tertiary: {
      red: TertiaryColor;
      orange: TertiaryColor;
      yellow: TertiaryColor;
      green: TertiaryColor;
      blue: TertiaryColor;
      purple: TertiaryColor;
    };
  }

  interface PaletteOptions {
    brand?: {
      blue: string;
      lightBlue: string;
      orange: string;
      peach: string;
    };
    neutral?: {
      navy: string;
      lightGrey: string;
      mediumGrey: string;
      darkGrey: string;
      white: string;
    };
    tertiary?: {
      red: TertiaryColor;
      orange: TertiaryColor;
      yellow: TertiaryColor;
      green: TertiaryColor;
      blue: TertiaryColor;
      purple: TertiaryColor;
    };
  }
}

export const prendaTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Nunito", Avenir, sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          nunitoRegular,
          nunitoRegularItalic,
          nunitoMedium,
          nunitoBold,
          nunitoBoldItalic,
          nunitoExtrabold,
          nunitoExtraboldItalic,
          nunitoSemibold,
          nunitoSemiboldItalic,
          sourceCodeProRegular,
        ],
      },
    },
  },
  shadows: [
    'none',
    createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1),
    createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2),
    createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2),
    createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  palette: {
    // follow material
    error: {
      light: colors.colorsRed[2],
      main: colors.colorsRed[3],
      dark: colors.colorsRed[4],
      contrastText: colors.colorsPrendaLightGrey,
    },
    warning: {
      light: colors.colorsYellow[1],
      main: colors.colorsYellow[2],
      dark: colors.colorsYellow[3],
      contrastText: colors.colorsBlue[5],
    },
    info: {
      // all bumped by 1 to have constant contrastText value
      light: colors.colorsBlue[3],
      main: colors.colorsBlue[4],
      dark: colors.colorsBlue[5],
      contrastText: colors.colorsPrendaLightGrey,
    },
    success: {
      // all bumped by 1 to have constant contrastText value
      light: colors.colorsGreen[3],
      main: colors.colorsGreen[4],
      dark: colors.colorsGreen[5],
      contrastText: colors.colorsPrendaLightGrey,
    },
    // kinda material
    background: {
      // dark backgrounds
      navy: colors.colorsBackgroundNavy,
      blue: colors.colorsBackgroundBlue,
      darkContrastText: colors.colorsTextIconOnDarkHighContrast,
      darkLowContrastText: colors.colorsTextIconOnDarkLowContrast,
      // light backgrounds
      lightGrey: colors.colorsBackgroundLightGrey,
      lightBlue: colors.colorsBackgroundLightBlue,
      white: colors.colorsBackgroundWhite,
      lightContrastText: colors.colorsTextIconOnLightHighContrast,
      lightLowContrastText: colors.colorsTextIconOnLightLowContrast,
      default: colors.colorsBackgroundDefault,
      paper: colors.colorsBackgroundPaper,
    },
    // very custom
    brand: {
      blue: colors.colorsPrendaBlue,
      lightBlue: colors.colorsPrendaLightBlue,
      orange: colors.colorsPrendaOrange,
      peach: colors.colorsPrendaPeach,
    },
    neutral: {
      navy: colors.colorsPrendaNavy,
      lightGrey: colors.colorsPrendaLightGrey,
      mediumGrey: colors.colorsPrendaMediumGrey,
      darkGrey: colors.colorsPrendaDarkGrey,
      white: colors.colorsPrendaWhite,
    },
    tertiary: {
      red: colors.colorsRed,
      orange: colors.colorsOrange,
      yellow: colors.colorsYellow,
      green: colors.colorsGreen,
      blue: colors.colorsBlue,
      purple: colors.colorsPurple,
    },
    text: {
      disabled: colors.colorsTextDisabled,
      hint: colors.colorsTextHint,
      primary: colors.colorsTextPrimary,
      secondary: colors.colorsTextSecondary,
    },
    action: {
      disabled: colors.colorsActionDisabled,
      active: colors.colorsActionActive,
      activatedOpacity: colors.colorsActionActivatedOpacity,
      disabledBackground: colors.colorsActionDisabledBackground,
      focus: colors.colorsActionFocus,
      focusOpacity: colors.colorsActionFocusOpacity,
      hover: colors.colorsActionHover,
      hoverOpacity: colors.colorsActionHoverOpacity,
      selected: colors.colorsActionSelected,
      selectedOpacity: colors.colorsActionSelectedOpacity,
      disabledOpacity: colors.colorsActionDisabledOpacity,
    },
  },
};

export const muiTheme = createMuiTheme(prendaTheme);
