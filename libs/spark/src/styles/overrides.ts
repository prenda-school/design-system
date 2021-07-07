import { MuiButtonBaseStyleOverrides } from '../ButtonBase';
import { MuiCardStyleOverrides } from '../Card';
import { MuiCardContentStyleOverrides } from '../CardContent';
import { MuiCardActionsStyleOverrides } from '../CardActions';
import { MuiCheckboxStyleOverrides } from '../Checkbox';
import { MuiFormControlLabelStyleOverrides } from '../FormControlLabel';
import { MuiFormHelperTextStyleOverrides } from '../FormHelperText';
import { MuiFormLabelStyleOverrides } from '../FormLabel';
import { MuiInputBaseStyleOverrides } from '../InputBase';
import { MuiInputLabelStyleOverrides } from '../InputLabel';
import { MuiMenuStyleOverrides } from '../Menu';
import { MuiMenuItemStyleOverrides } from '../MenuItem';
import { MuiPaginationStyleOverrides } from '../Pagination';
import { MuiPaginationItemStyleOverrides } from '../PaginationItem';
import { MuiRadioStyleOverrides } from '../Radio';
import { MuiSvgIconStyleOverrides } from '../SvgIcon';
import { fontFaces, typography } from './typography';
import { MuiSelectStylesOverrides } from '../Select';

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
  MuiFormLabel: MuiFormLabelStyleOverrides,
  MuiInputBase: MuiInputBaseStyleOverrides,
  MuiInputLabel: MuiInputLabelStyleOverrides,
  MuiMenu: MuiMenuStyleOverrides,
  MuiMenuItem: MuiMenuItemStyleOverrides,
  MuiPagination: MuiPaginationStyleOverrides,
  MuiPaginationItem: MuiPaginationItemStyleOverrides,
  MuiRadio: MuiRadioStyleOverrides,
  MuiSelect: MuiSelectStylesOverrides,
  MuiSvgIcon: MuiSvgIconStyleOverrides,
};
