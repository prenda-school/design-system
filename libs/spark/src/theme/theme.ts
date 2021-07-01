import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import { overrides } from './overrides';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';
import { MuiButtonBasePropOverrides } from '../ButtonBase';
import { MuiCardPropOverrides } from '../Card';
import { MuiCheckboxPropOverrides } from '../Checkbox';
import { MuiInputPropOverrides } from '../Input';
import { MuiMenuPropOverrides } from '../Menu';
import { MuiRadioPropOverrides } from '../Radio';
import { MuiSvgIconPropOverride } from '../SvgIcon';

export const prendaTheme: ThemeOptions = {
  typography,
  overrides,
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
