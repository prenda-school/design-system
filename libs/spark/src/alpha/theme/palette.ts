import * as CSS from 'csstype';

// Global tokens
// see https://spectrum.adobe.com/page/design-tokens/#Global-tokens
const globalTokens: Pick<
  Palette,
  | 'brand'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'teal'
  | 'magenta'
  | 'neutral'
  | 'tones'
> = {
  brand: {
    blue: '#0a4872',
    lightBlue: '#d7f3ff',
    orange: '#f34700',
    lightOrange: '#ffb78f',
  },
  red: {
    100: '#ffebe6',
    200: '#ffbdad',
    300: '#ff8f73',
    400: '#ff7452',
    500: '#f34700',
    600: '#de350b',
    700: '#a72100',
  },
  yellow: {
    100: '#fffae6',
    200: '#fff0b3',
    300: '#ffe380',
    400: '#ffc400',
    500: '#ffab00',
    600: '#ff991f',
    700: '#ff8b00',
  },
  green: {
    100: '#e3fcef',
    200: '#abf5d1',
    300: '#79f2c0',
    400: '#57d9a3',
    500: '#36b37e',
    600: '#00875a',
    700: '#006644',
  },
  blue: {
    100: '#deebff',
    200: '#b3d4ff',
    300: '#4c9aff',
    400: '#2684ff',
    500: '#0065ff',
    600: '#0052cc',
    700: '#0747a6',
  },
  teal: {
    100: '#e6fcff',
    200: '#b3f5ff',
    300: '#79e2f2',
    400: '#00c7e6',
    500: '#00b8d9',
    600: '#00a3bf',
    700: '#008da6',
  },
  purple: {
    100: '#eae6ff',
    200: '#c0b6f2',
    300: '#998dd9',
    400: '#8777d9',
    500: '#6554c0',
    600: '#5243aa',
    700: '#403294',
  },
  magenta: {
    100: '#fff1f4',
    200: '#f7d2da',
    300: '#f399af',
    400: '#ea7793',
    500: '#de5173',
    600: '#d0355b',
    700: '#b2103a',
  },
  neutral: {
    0: '#ffffff',
    60: '#fafbfc',
    70: '#ebecf0',
    80: '#dfe1e6',
    90: '#c1c7d0',
    100: '#6b778c',
    200: '#5e6c84',
    300: '#505f79',
    400: '#42526e',
    500: '#253858',
    600: '#091e42',
  },
  tones: {
    warm: {
      100: '#efc088',
      200: '#efc088',
      300: '#b06a49',
      400: '#7e3f2a',
      500: '#58280c',
    },
    neutral: {
      100: '#fde6ca',
      200: '#dbbc96',
      300: '#ad7951',
      400: '#623a19',
      500: '#301e12',
    },
    cool: {
      100: '#ecd4ca',
      200: '#c19a8c',
      300: '#8a605c',
      400: '#6d5049',
      500: '#402225',
    },
  },
};

// Alias tokens, composed of global tokens
// see https://spectrum.adobe.com/page/design-tokens/#Alias-tokens
const aliasTokens: Pick<Palette, 'background' | 'text' | 'action'> = {
  background: {
    default: globalTokens.neutral[0],
    alternative: globalTokens.neutral[60],
    brand: globalTokens.brand.blue,
    inverse: globalTokens.neutral[600],
    overlay: `${globalTokens.neutral[600]}cc`,
  },
  text: {
    heading: globalTokens.neutral[600],
    body: globalTokens.neutral[500],
    subdued: globalTokens.neutral[400],
    disabled: globalTokens.neutral[100],
    icon: globalTokens.neutral[500],
    secondaryIcon: globalTokens.neutral[300],
    inverseHeading: globalTokens.neutral[0],
    inverseBody: globalTokens.neutral[60],
    inverseSubdued: globalTokens.neutral[70],
    inverseDisabled: globalTokens.neutral[90],
    inverseIcon: globalTokens.neutral[60],
    inverseSecondaryIcon: globalTokens.neutral[80],
  },
  action: {
    focusBoxShadow: `0 0 2px 4px ${globalTokens.teal[300]}`,
  },
};

const palette = {
  ...globalTokens,
  ...aliasTokens,
};

export default palette;

// ***************
// ***  TYPES  ***
// ***************

// Global token types
export interface Color {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
}

export interface PaletteBrand {
  blue: string;
  lightBlue: string;
  orange: string;
  lightOrange: string;
}

export interface PaletteNeutral {
  0: string;
  60: string;
  70: string;
  80: string;
  90: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
}

type Tone = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
};

export interface PaletteTones {
  warm: Tone;
  neutral: Tone;
  cool: Tone;
}

// Alias token types
export interface PaletteBackground {
  default: string;
  alternative: string;
  brand: string;
  inverse: string;
  overlay: string;
}

export interface PaletteText {
  heading: string;
  body: string;
  subdued: string;
  disabled: string;
  icon: string;
  secondaryIcon: string;
  inverseHeading: string;
  inverseBody: string;
  inverseSubdued: string;
  inverseDisabled: string;
  inverseIcon: string;
  inverseSecondaryIcon: string;
}

export interface PaletteAction {
  focusBoxShadow: CSS.Property.BoxShadow;
}

export interface Palette {
  brand: PaletteBrand;
  red: Color;
  yellow: Color;
  green: Color;
  blue: Color;
  teal: Color;
  purple: Color;
  magenta: Color;
  neutral: PaletteNeutral;
  tones: PaletteTones;
  background: PaletteBackground;
  text: PaletteText;
  action: PaletteAction;
}
