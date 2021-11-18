import createPalette from '@material-ui/core/styles/createPalette';

// Custom types
interface PaletteTertiaryColor {
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
}

interface TypeBrand {
  blue: string;
  lightBlue: string;
  orange: string;
  lightOrange: string;
}

// Augment global interfaces so that modules outside of this one can
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
    teal: PaletteTertiaryColor;
    yellow: PaletteTertiaryColor;
    green: PaletteTertiaryColor;
    blue: PaletteTertiaryColor;
    magenta: PaletteTertiaryColor;
  }

  interface PaletteOptions {
    brand: TypeBrand;
    red: PaletteTertiaryColor;
    yellow: PaletteTertiaryColor;
    green: PaletteTertiaryColor;
    blue: PaletteTertiaryColor;
    purple: PaletteTertiaryColor;
  }
}

const red = {
  700: '#A72100',
  600: '#DE350B',
  500: '#F34700',
  400: '#FF7452',
  300: '#FF8F73',
  200: '#FFBDAD',
  100: '#FFEBE6',
};

const yellow = {
  700: '#FF8B00',
  600: '#FF991F',
  500: '#FFAB00',
  400: '#FFC400',
  300: '#FFE380',
  200: '#FFF0B3',
  100: '#FFFAE6',
};

const green = {
  700: '#006644',
  600: '#00875A',
  500: '#36B37E',
  400: '#57D9A3',
  300: '#79F2C0',
  200: '#ABF5D1',
  100: '#E3FCEF',
};

const blue = {
  700: '#0747A6',
  600: '#0052CC',
  500: '#0065FF',
  400: '#2684FF',
  300: '#4C9AFF',
  200: '#B3D4FF',
  100: '#DEEBFF',
};

const teal = {
  700: '#008DA6',
  600: '#00A3BF',
  500: '#00B8D9',
  400: '#00C7E6',
  300: '#79E2F2',
  200: '#B3F5FF',
  100: '#E6FCFF',
};

const magenta = {
  700: '#B2103A',
  600: '#D0355B',
  500: '#DE5173',
  400: '#EA7793',
  300: '#F399AF',
  200: '#F7D2DA',
  100: '#FFF1F4',
};

const tones = {
  warm: {
    1: '#58280C',
    2: '#7E3F2A',
    3: '#B06A49',
    4: '#EFC088',
    5: '#EECAB0',
  },
  neutral: {
    1: '#301E12',
    2: '#623A19',
    3: '#AD7951',
    4: '#DBBC96',
    5: '#FDE6CA',
  },
  cool: {
    1: '#402225',
    2: '#6D5049',
    3: '#8A605C',
    4: '#C19A8C',
    5: '#ECD4CA',
  },
};

const neutral = {
  dark: {
    600: '#091E42',
    500: '#253858',
    400: '#42526E',
    300: '#505F79',
    200: '#5E6C84',
    100: '#5E6C84',
  },
  light: {
    400: '#C1C7D0',
    300: '#DFE1E6',
    200: '#EBECF0',
    100: '#FAFBFC',
    0: '#FFFFFF',
  },
};

const brand = {
  blue: '#0A4872',
  lightBlue: '#D7F3FF',
  orange: red[500],
  lightOrange: '#FFB78F',
};

const text = {
  light: neutral.light[0],
  lightLowContrast: `${neutral.light[0]}b8`, // 72% opacity
  dark: neutral.dark[600],
  darkLowContrast: `${neutral.dark[600]}b8`, // 72% opacity
};

// Only customizations are specified, view all other default theme.palette properties
//  at https://v4.mui.com/customization/default-theme/?expand-path=$.palette
const palette = createPalette({
  // Mui default properties, only customizations specified
  error: {
    main: red[3],
    contrastText: text.light,
  },
  warning: {
    main: yellow[2],
    contrastText: text.dark,
  },
  // "Primary Action" in Figma
  info: {
    main: blue[3],
    contrastText: text.light,
  },
  success: {
    main: green[3],
    contrastText: text.light,
  },
  neutral,
  tones,
  text,
  background: {
    navy: blue[5],
    blue: brand.blue,
    lightBlue: brand.lightBlue,
  },
  // custom properties
  brand,
  red,
  teal,
  yellow,
  green,
  blue,
  magenta,
});

export default palette;
