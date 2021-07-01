import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import { palette } from './palette';
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
import {
  MuiButtonBasePropOverrides,
  MuiButtonBaseStyleOverrides,
} from '../ButtonBase';
import { MuiCardPropOverrides, MuiCardStyleOverrides } from '../Card';
import { MuiCardContentStyleOverrides } from '../CardContent';
import { MuiCardActionsStyleOverrides } from '../CardActions';
import {
  MuiCheckboxPropOverrides,
  MuiCheckboxStyleOverrides,
} from '../Checkbox';
import { MuiFormControlLabelStyleOverrides } from '../FormControlLabel';
import { MuiFormHelperTextStyleOverrides } from '../FormHelperText';
import { MuiInputPropOverrides, MuiInputStyleOverrides } from '../Input';
import { MuiInputLabelStyleOverrides } from '../InputLabel';
import { MuiMenuPropOverrides, MuiMenuStyleOverrides } from '../Menu';
import { MuiMenuItemStyleOverrides } from '../MenuItem';
import { MuiRadioPropOverrides, MuiRadioStyleOverrides } from '../Radio';
import { MuiSvgIconPropOverride, MuiSvgIconStyleOverrides } from '../SvgIcon';

export const prendaTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Nunito", Avenir, sans-serif',
    fontSize: 16,
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
  },
  overrides: {
    MuiButtonBase: MuiButtonBaseStyleOverrides,
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: '"Nunito", Avenir, sans-serif',
          fontSize: 16,
        },
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
    MuiCheckbox: MuiCheckboxStyleOverrides,
    MuiFormControlLabel: MuiFormControlLabelStyleOverrides,
    MuiFormHelperText: MuiFormHelperTextStyleOverrides,
    MuiInput: MuiInputStyleOverrides,
    MuiInputLabel: MuiInputLabelStyleOverrides,
    MuiMenu: MuiMenuStyleOverrides,
    MuiMenuItem: MuiMenuItemStyleOverrides,
    MuiRadio: MuiRadioStyleOverrides,
    MuiSvgIcon: MuiSvgIconStyleOverrides,
  },
  shadows,
  palette,
  props: {
    MuiButtonBase: MuiButtonBasePropOverrides,
    MuiCard: MuiCardPropOverrides,
    MuiCheckbox: MuiCheckboxPropOverrides,
    MuiInput: MuiInputPropOverrides,
    MuiMenu: MuiMenuPropOverrides,
    MuiRadio: MuiRadioPropOverrides,
    MuiSvgIcon: MuiSvgIconPropOverride,
  },
};

export const muiTheme = createMuiTheme(prendaTheme);
