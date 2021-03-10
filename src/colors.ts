const palette = {
  red1: '#F7D2DA',
  red2: '#DE5160',
  red3: '#B83345',
  red4: '#851B2C',
  red5: '#520A18',

  orange1: '#FFB78F',
  orange2: '#FF7F4D',
  orange3: '#E0662D',
  orange4: '#A34814',
  orange5: '#5C2704',

  yellow1: '#FAE6B2',
  yellow2: '#F7D054',
  yellow3: '#DBB13D',
  yellow4: '#8F691D',
  yellow5: '#4C3109',

  green1: '#B8F0D4',
  green2: '#4AA784',
  green3: '#287364',
  green4: '#0C663E',
  green5: '#084237',

  blue1: '#D7F3FF',
  blue2: '#498DCC',
  blue3: '#2967AC',
  blue4: '#0A4872',
  blue5: '#072E44',

  purple1: '#D9D8FB',
  purple2: '#8070F6',
  purple3: '#6951E0',
  purple4: '#452EA3',
  purple5: '#271466',
};

export const colors = {
  ...palette,

  brandBlue: palette.blue4,
  brandLightBlue: palette.blue1,
  brandOrange: '#f34700',
  brandPeach: palette.orange1,

  neutralWhite: '#ffffff',
  neutralNavy: palette.blue5,
  neutralLightGrey: '#f0f1f2',
  neutralMediumGrey: '#e1e3e6',
  neutralDarkGrey: '#d2d4d6',

  tertiaryGreen: palette.green2,
  tertiaryPurple: palette.purple2,
  tertiaryYellow: palette.yellow2,
  tertiaryRed: palette.red2,
  tertiaryGreenTint: palette.green1,
  tertiaryPurpleTint: palette.purple1,
  tertiaryYellowTint: palette.yellow1,
  tertiaryRedTint: palette.red1,

  primaryAction: palette.blue3,
  success: palette.green3,
  warning: palette.yellow2,
  error: palette.red3,
};

export const backgroundColors = {
  blue: palette.blue4,
  lightBlue: palette.blue1,
  lightGrey: colors.neutralLightGrey,
  navy: palette.blue5,
  white: colors.neutralWhite,
};

export const textColors = {
  textIconOnDarkHighContrast: colors.neutralLightGrey,
  textIconOnDarkLowContrast: 'rgba(240, 241, 242, 0.72)',
  textIconOnLightHighContrast: palette.blue5,
  textIconOnLightLowContrast: 'rgba(7, 46, 68, 0.72)',
};
