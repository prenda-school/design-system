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
const neutral = {
  navy: blue[5],
  white: '#fff',
  lighterGrey: '#f5f5f5',
  lightGrey: '#f0f1f2',
  mediumGrey: '#e1e3e5',
  darkGrey: '#d2d4d6',
};
const text = {
  onDark: neutral.lightGrey,
  onDarkLowContrast: `${neutral.lightGrey}b8`, // 72% opacity
  onLight: blue[5],
  onLightLowContrast: `${blue[5]}b8`, // 72% opacity
};

// Only customizations are specified, view all other default theme.palette properties
//  at https://material-ui.com/customization/default-theme/?expand-path=$.palette
export const palette = {
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
  text,
  background: {
    navy: neutral.navy,
    blue: brand.blue,
    lightGrey: neutral.lightGrey,
    lightBlue: brand.lightBlue,
    white: neutral.white,
  },
  // custom properties
  brand,
  neutral,
  red,
  orange,
  yellow,
  green,
  blue,
  purple,
};
