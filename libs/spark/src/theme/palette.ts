import { PaletteOptions as MuiPaletteOptions } from '@material-ui/core/styles/createPalette';

// Customized types
interface TypeText {
  onDark: string;
  onDarkLowContrast: string;
  onLight: string;
  onLightLowContrast: string;
  // required by Mui but not customized
  primary?: string;
  secondary?: string;
  disabled?: string;
  hint?: string;
}

interface TypeBackground {
  navy: string;
  blue: string;
  lightGrey: string;
  lightBlue: string;
  white: string;
  // required by Mui but not customized
  paper?: string;
  default?: string;
}

interface Color {
  lighter: '#f5f5f5';
  light: '#f0f1f2';
  medium: '#e1e3e5';
  dark: '#d2d4d6';
  // required by Mui but not customized
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  A100?: string;
  A200?: string;
  A300?: string;
  A400?: string;
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
//  recognize the customizations
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
  5: '#072e44', // Also "Neutral Navy" in Figma
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
  lighter: '#f5f5f5' as const, // "Neutral Lighter Grey" in Figma
  light: '#f0f1f2' as const, // "Neutral Light Grey" in Figma
  medium: '#e1e3e5' as const, // "Neutral Medium Grey" in Figma
  dark: '#d2d4d6' as const, // "Neutral Dark Grey" in Figma
};

const text = {
  onDark: grey.light,
  onDarkLowContrast: `${grey.light}b8`, // 72% opacity
  onLight: blue[5],
  onLightLowContrast: `${blue[5]}b8`, // 72% opacity
};

// Only customizations are specified, view all other default theme.palette properties
//  at https://material-ui.com/customization/default-theme/?expand-path=$.palette
export const palette: PaletteOptions = {
  // Mui default properties, only customizations specified
  error: {
    main: red[3],
    contrastText: text.onDark,
  },
  warning: {
    main: yellow[2],
    contrastText: text.onLight,
  },
  // "Primary Action" in Figma
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
