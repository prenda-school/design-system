import { MuiButtonStyleOverrides } from '../Button';
import { MuiCardStyleOverrides } from '../Card';
import { MuiCardContentStyleOverrides } from '../CardContent';
import { MuiCardActionsStyleOverrides } from '../CardActions';
import { MuiCheckboxStyleOverrides } from '../Checkbox';
import { MuiFormControlLabelStyleOverrides } from '../FormControlLabel';
import { MuiFormHelperTextStyleOverrides } from '../FormHelperText';
import { MuiFormLabelStyleOverrides } from '../FormLabel';
import { MuiIconButtonStyleOverrides } from '../IconButton';
import { MuiInputStyleOverrides } from '../Input';
import { MuiInputBaseStyleOverrides } from '../InputBase';
import { MuiInputLabelStyleOverrides } from '../InputLabel';
import { MuiListItemStyleOverrides } from '../ListItem';
import { MuiMenuStyleOverrides } from '../Menu';
import { MuiMenuItemStyleOverrides } from '../MenuItem';
import { MuiPaginationStyleOverrides } from '../Pagination';
import { MuiPaginationItemStyleOverrides } from '../PaginationItem';
import { MuiRadioStyleOverrides } from '../Radio';
import { MuiSelectStylesOverrides } from '../Select';
import { MuiSvgIconStyleOverrides } from '../SvgIcon';
import { MuiTypographyStyleOverrides } from '../Typography';
import { fontFaces, typography } from './typography';

export const overrides = {
  MuiButton: MuiButtonStyleOverrides,
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
  MuiIconButton: MuiIconButtonStyleOverrides,
  MuiInput: MuiInputStyleOverrides,
  MuiInputBase: MuiInputBaseStyleOverrides,
  MuiInputLabel: MuiInputLabelStyleOverrides,
  MuiListItem: MuiListItemStyleOverrides,
  MuiMenu: MuiMenuStyleOverrides,
  MuiMenuItem: MuiMenuItemStyleOverrides,
  MuiPagination: MuiPaginationStyleOverrides,
  MuiPaginationItem: MuiPaginationItemStyleOverrides,
  MuiRadio: MuiRadioStyleOverrides,
  MuiSelect: MuiSelectStylesOverrides,
  MuiSvgIcon: MuiSvgIconStyleOverrides,
  MuiTypography: MuiTypographyStyleOverrides,
};
