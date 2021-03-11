import { createMuiTheme, ThemeOptions } from '@material-ui/core';

export const colorsRed = {
  1: '#f7d2da', // dark text
  2: '#de5160', // light text
  3: '#b83345', // light text
  4: '#851b2c', // light text
  5: '#520a18', // light text
};
export const colorsOrange = {
  1: '#ffb78f', // dark text
  2: '#ff7f4d', // dark text
  3: '#e0662d', // dark text
  4: '#a34814', // light text
  5: '#5c2704', // light text
};
export const colorsYellow = {
  1: '#fae6b2', // dark text
  2: '#f7d054', // dark text
  3: '#dbb13d', // dark text
  4: '#8f691d', // light text
  5: '#4c3109', // light text
};
export const colorsGreen = {
  1: '#b8f0d4', // dark text
  2: '#4aa784', // dark text
  3: '#2e7f64', // light text
  4: '#0c664e', // light text
  5: '#084237', // light text
};
export const colorsBlue = {
  1: '#d7f3ff', // dark text
  2: '#498dcc', // dark text
  3: '#2967a6', // light text
  4: '#0a4872', // light text
  5: '#072e44', // light text
};
export const colorsPurple = {
  1: '#d9d8fb', // dark text
  2: '#8070f6', // light text
  3: '#6951e0', // light text
  4: '#452ea3', // light text
  5: '#271466', // light text
};
export const colorsPrimaryAction = colorsBlue[3];
export const colorsSuccess = colorsGreen[3];
export const colorsWarning = colorsYellow[2];
export const colorsError = colorsRed[3];
export const colorsBackgroundNavy = '#072E44';
export const colorsBackgroundBlue = '#0A4872';
export const colorsBackgroundLightGrey = '#F0F1F2';
export const colorsBackgroundLightBlue = '#D7F3FF';
export const colorsBackgroundWhite = '#FFFFFF';
export const colorsTextIconOnDarkHighContrast = '#F0F1F2';
export const colorsTextIconOnDarkLowContrast = 'rgba(240, 241, 242, 0.72)';
export const colorsTextIconOnLightHighContract = '#072E44';
export const colorsTextIconOnLightLowContract = 'rgba(7, 46, 68, 0.72)';
export const colors = {
  colorsPrimaryAction,
  colorsSuccess,
  colorsWarning,
  colorsError,
  colorsBlue,
  colorsGreen,
  colorsOrange,
  colorsPurple,
  colorsRed,
  colorsYellow,
};

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
      light: colorsRed[2],
      main: colorsRed[3],
      dark: colorsRed[4],
      contrastText: '#F0F1F2',
    },
    warning: {
      light: colorsYellow[1],
      main: colorsYellow[2],
      dark: colorsYellow[3],
      contrastText: '#072E44',
    },
    info: {
      // all bumped by 1 to have constant contrastText value
      light: colorsBlue[3],
      main: colorsBlue[4],
      dark: colorsBlue[5],
      contrastText: '#F0F1F2',
    },
    success: {
      // all bumped by 1 to have constant contrastText value
      light: colorsGreen[3],
      main: colorsGreen[4],
      dark: colorsGreen[5],
      contrastText: '#F0F1F2',
    },
    // kinda material
    background: {
      // dark backgrounds
      navy: '#072e44',
      blue: '#0A4872',
      darkContrastText: '#F0F1F2',
      darkLowContrastText: '#F0F1F2B8', // 72% opacity
      // light backgrounds
      lightGrey: '#F0F1F2',
      lightBlue: '#D7F3FF',
      white: '#FFFFFF',
      lightContrastText: '#072E44',
      lightLowContrastText: '#072E44B8', // 72 % opacity;
    },
    // very custom
    brand: {
      blue: '#0A4872',
      lightBlue: '#D7F3FF',
      orange: '#F34700',
      peach: '#FFB87F',
    },
    neutral: {
      navy: '#072e44',
      lightGrey: '#f0f1f2',
      mediumGrey: '#e1e3e5',
      darkGrey: '#d2d4d6',
      white: '#FFFFFF',
    },
    tertiary: {
      red: colorsRed,
      orange: colorsOrange,
      yellow: colorsYellow,
      green: colorsGreen,
      blue: colorsBlue,
      purple: colorsPurple,
    },
  },
};

export const muiTheme = createMuiTheme(prendaTheme);

// // text stuff not handled yet
// const colorsTextIconOnDarkHighContrast = lightGrey;
// const colorsTextIconOnDarkLowContrast = lightGrey + 'b8';
// const colorsBackgroundLightGrey = lightGrey;
// const colorsBackgroundLightBlue = prendaLightBlue;
// const colorsBackgroundWhite = white;
// const colorsTextIconOnLightHighContrast = navy;
// const colorsTextIconOnLightLowContrast = navy + 'b8';
// const colorsPrimaryAction = colorsBlue[3];

// console.log(theme.palette);
// console.log(muiTheme.palette);
