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
export const palette = {
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
