import { MuiButtonBaseStyleOverrides } from '../ButtonBase';
import { MuiCardStyleOverrides } from '../Card';
import { MuiCardContentStyleOverrides } from '../CardContent';
import { MuiCardActionsStyleOverrides } from '../CardActions';
import { MuiCheckboxStyleOverrides } from '../Checkbox';
import { MuiFormControlLabelStyleOverrides } from '../FormControlLabel';
import { MuiFormHelperTextStyleOverrides } from '../FormHelperText';
import { MuiInputStyleOverrides } from '../Input';
import { MuiInputLabelStyleOverrides } from '../InputLabel';
import { MuiMenuStyleOverrides } from '../Menu';
import { MuiMenuItemStyleOverrides } from '../MenuItem';
import { MuiRadioStyleOverrides } from '../Radio';
import { MuiSvgIconStyleOverrides } from '../SvgIcon';
import { fontFaces, typography } from './typography';

export const overrides = {
  MuiButtonBase: MuiButtonBaseStyleOverrides,
  MuiCssBaseline: {
    '@global': {
      body: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
      },
      '@font-face': fontFaces,
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
};
