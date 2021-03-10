import { createMuiTheme } from '@material-ui/core';

const red = {
  1: '#f7d2da', // dark text
  2: '#de5160', // light text
  3: '#b83345', // light text
  4: '#851b2c', // light text
  5: '#520a18', // light text
};
const orange = {
  1: '#ffb78f', // dark text
  2: '#ff7f4d', // dark text
  3: '#e0662d', // dark text
  4: '#a34814', // light text
  5: '#5c2704', // light text
};
const yellow = {
  1: '#fae6b2', // dark text
  2: '#f7d054', // dark text
  3: '#dbb13d', // dark text
  4: '#8f691d', // light text
  5: '#4c3109', // light text
};
const green = {
  1: '#b8f0d4', // dark text
  2: '#4aa784', // dark text
  3: '#2e7f64', // light text
  4: '#0c664e', // light text
  5: '#084237', // light text
};
const blue = {
  1: '#d7f3ff', // dark text
  2: '#498dcc', // dark text
  3: '#2967a6', // light text
  4: '#0a4872', // light text
  5: '#072e44', // light text
};
const purple = {
  1: '#d9d8fb', // dark text
  2: '#8070f6', // light text
  3: '#6951e0', // light text
  4: '#452ea3', // light text
  5: '#271466', // light text
};

export const theme = {
  palette: {
    // follow material
    error: {
      light: red[2],
      main: red[3],
      dark: red[4],
      contrastText: '#F0F1F2',
    },
    warning: {
      light: yellow[1],
      main: yellow[2],
      dark: yellow[3],
      contrastText: '#072E44',
    },
    info: {
      // all bumped by 1 to have constant contrastText value
      light: blue[3],
      main: blue[4],
      dark: blue[5],
      contrastText: '#F0F1F2',
    },
    success: {
      // all bumped by 1 to have constant contrastText value
      light: green[3],
      main: green[4],
      dark: green[5],
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
      red,
      orange,
      yellow,
      green,
      blue,
      purple,
    },
  },
};

export const muiTheme = createMuiTheme(theme);

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
