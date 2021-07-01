import { Color as MuiColor } from '@material-ui/core';
import {
  TypeText as MuiTypeText,
  TypeBackground as MuiTypeBackground,
  PaletteOptions as MuiPaletteOptions,
} from '@material-ui/core/styles/createPalette';

// Customized types
interface TypeText extends MuiTypeText {
  onDark: string;
  onDarkLowContrast: string;
  onLight: string;
  onLightLowContrast: string;
}

interface TypeBackground extends MuiTypeBackground {
  navy: string;
  blue: string;
  lightGrey: string;
  lightBlue: string;
  white: string;
}

interface Color extends MuiColor {
  lighter: '#f5f5f5';
  light: '#f0f1f2';
  medium: '#e1e3e5';
  dark: '#d2d4d6';
}

// Custom types
interface PaletteTertiaryColor {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}

interface TypeBrand {
  blue: string;
  lightBlue: string;
  orange: string;
  peach: string;
}

interface PaletteOptions extends MuiPaletteOptions {
  grey: Color;
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

// Re-declare overridden interface so that modules outside of this one can
//  recognize our customizations
declare module '@material-ui/core/index' {
  // Only need to declare custom properties here; extending will throw
  interface Color {
    lighter: string;
    light: string;
    medium: string;
    dark: string;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  // Only need to declare custom properties here; extending will throw
  interface TypeText {
    onDark: string;
    onDarkLowContrast: string;
    onLight: string;
    onLightLowContrast: string;
  }

  interface TypeBackground {
    navy: string;
    blue: string;
    lightGrey: string;
    lightBlue: string;
    white: string;
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
}

// Palette properties with repeatedly used values are extracted
const red = {
  1: '#f7d2da',
  2: '#de5160',
  3: '#b83345',
  4: '#851b2c',
  5: '#520a18',
};

const orange = {
  1: '#ffb78f',
  2: '#ff7f4d',
  3: '#e0662d',
  4: '#a34814',
  5: '#5c2704',
};

const yellow = {
  1: '#fae6b2',
  2: '#f7d054',
  3: '#dbb13d',
  4: '#8f691d',
  5: '#4c3109',
};

const green = {
  1: '#b8f0d4',
  2: '#4aa784',
  3: '#2e7f64',
  4: '#0c664e',
  5: '#084237',
};

const blue = {
  1: '#d7f3ff',
  2: '#498dcc',
  3: '#2967a6',
  4: '#0a4872',
  5: '#072e44',
};

const purple = {
  1: '#d9d8fb',
  2: '#8070f6',
  3: '#6951e0',
  4: '#452ea3',
  5: '#271466',
};

const brand = {
  blue: blue[4],
  lightBlue: blue[1],
  orange: '#f34700',
  peach: orange[1],
};

const grey = {
  lighter: '#f5f5f5' as const,
  light: '#f0f1f2' as const,
  medium: '#e1e3e5' as const,
  dark: '#d2d4d6' as const,
  // unchanged from Mui
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161',
};

const text = {
  onDark: grey.light,
  onDarkLowContrast: `${grey.light}b8`, // 72% opacity
  onLight: blue[5],
  onLightLowContrast: `${blue[5]}b8`, // 72% opacity
  // unchanged from Mui
  primary: 'rgba(0, 0, 0, 0.87)',
  secondary: 'rgba(0, 0, 0, 0.54)',
  disabled: 'rgba(0, 0, 0, 0.38)',
  hint: 'rgba(0, 0, 0, 0.38)',
};

// Only customizations are specified, view all other default theme.palette properties
//  at https://material-ui.com/customization/default-theme/?expand-path=$.palette
export const palette: PaletteOptions = {
  // Mui default properties, with only necessary values changed
  error: {
    main: red[3],
    contrastText: text.onDark,
  },
  warning: {
    main: yellow[2],
    contrastText: text.onLight,
  },
  // "Primary Action" -> info
  info: {
    main: blue[3],
    contrastText: text.onDark,
  },
  success: {
    main: green[3],
    contrastText: text.onDark,
  },
  grey,
  text,
  background: {
    navy: blue[5],
    blue: brand.blue,
    lightGrey: grey.light,
    lightBlue: brand.lightBlue,
    white: grey[0],
    // unchanged from Mui
    paper: '#fff',
    default: '#fafafa',
  },
  // custom properties
  brand,
  red,
  orange,
  yellow,
  green,
  blue,
  purple,
};
