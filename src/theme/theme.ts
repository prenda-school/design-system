import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import { colors } from './colors';

export type TertiaryColor = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};

export type PrendaThemeOptions = ThemeOptions & {
  palette: {
    background: {
      navy: string;
      blue: string;
      darkContrastText: string;
      darkLowContrastText: string;
      lightGrey: string;
      lightBlue: string;
      white: string;
      lightContrastText: string;
      lightLowContrastText: string;
    };
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
  };
};

export const prendaTheme: PrendaThemeOptions = {
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
  },
};

export const muiTheme = createMuiTheme(prendaTheme);
