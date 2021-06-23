import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import { colors } from './colors';
import { shadows } from './shadows';
import {
  nunitoRegular,
  nunitoRegularItalic,
  nunitoMedium,
  nunitoBold,
  nunitoBoldItalic,
  nunitoExtrabold,
  nunitoExtraboldItalic,
  nunitoSemibold,
  nunitoSemiboldItalic,
  sourceCodeProRegular,
} from './fonts';
import { MuiCardPropOverrides, MuiCardStyleOverrides } from '../Card';
import { MuiCardContentStyleOverrides } from '../CardContent';
import { MuiCardActionsStyleOverrides } from '../CardActions';

export type TertiaryColor = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};

declare module '@material-ui/core/styles/createPalette' {
  export interface TypeBackground {
    navy: string;
    blue: string;
    darkContrastText: string;
    darkLowContrastText: string;
    lightGrey: string;
    lightBlue: string;
    white: string;
    lightContrastText: string;
    lightLowContrastText: string;
    default: string;
    paper: string;
  }

  export interface Palette {
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
  }

  interface PaletteOptions {
    brand?: {
      blue: string;
      lightBlue: string;
      orange: string;
      peach: string;
    };
    neutral?: {
      navy: string;
      lightGrey: string;
      mediumGrey: string;
      darkGrey: string;
      white: string;
    };
    tertiary?: {
      red: TertiaryColor;
      orange: TertiaryColor;
      yellow: TertiaryColor;
      green: TertiaryColor;
      blue: TertiaryColor;
      purple: TertiaryColor;
    };
  }
}

export const prendaTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Nunito", Avenir, sans-serif',
    fontSize: 1,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          nunitoRegular,
          nunitoRegularItalic,
          nunitoMedium,
          nunitoBold,
          nunitoBoldItalic,
          nunitoExtrabold,
          nunitoExtraboldItalic,
          nunitoSemibold,
          nunitoSemiboldItalic,
          sourceCodeProRegular,
        ],
      },
    },
    MuiCard: MuiCardStyleOverrides,
    MuiCardContent: MuiCardContentStyleOverrides,
    MuiCardActions: MuiCardActionsStyleOverrides,
  },
  shadows,
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
      default: colors.colorsBackgroundDefault,
      paper: colors.colorsBackgroundPaper,
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
    text: {
      disabled: colors.colorsTextDisabled,
      hint: colors.colorsTextHint,
      primary: colors.colorsTextPrimary,
      secondary: colors.colorsTextSecondary,
    },
    action: {
      disabled: colors.colorsActionDisabled,
      active: colors.colorsActionActive,
      activatedOpacity: colors.colorsActionActivatedOpacity,
      disabledBackground: colors.colorsActionDisabledBackground,
      focus: colors.colorsActionFocus,
      focusOpacity: colors.colorsActionFocusOpacity,
      hover: colors.colorsActionHover,
      hoverOpacity: colors.colorsActionHoverOpacity,
      selected: colors.colorsActionSelected,
      selectedOpacity: colors.colorsActionSelectedOpacity,
      disabledOpacity: colors.colorsActionDisabledOpacity,
    },
  },
  props: {
    MuiCard: MuiCardPropOverrides,
  },
};

export const muiTheme = createMuiTheme(prendaTheme);
