import { MuiAvatarStyleOverrides } from '../Avatar';
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
import { MuiInputAdornmentStylesOverrides } from '../InputAdornment';
import { MuiInputBaseStyleOverrides } from '../InputBase';
import { MuiInputLabelStyleOverrides } from '../InputLabel';
import { MuiListItemStyleOverrides } from '../ListItem';
import { MuiListItemAvatarStyleOverrides } from '../ListItemAvatar';
import { MuiListItemIconStyleOverrides } from '../ListItemIcon';
import { MuiListItemTextStyleOverrides } from '../ListItemText';
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
  MuiAvatar: MuiAvatarStyleOverrides,
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
  MuiInputAdornment: MuiInputAdornmentStylesOverrides,
  MuiInputBase: MuiInputBaseStyleOverrides,
  MuiInputLabel: MuiInputLabelStyleOverrides,
  MuiListItem: MuiListItemStyleOverrides,
  MuiListItemAvatar: MuiListItemAvatarStyleOverrides,
  MuiListItemIcon: MuiListItemIconStyleOverrides,
  MuiListItemText: MuiListItemTextStyleOverrides,
  MuiMenu: MuiMenuStyleOverrides,
  MuiMenuItem: MuiMenuItemStyleOverrides,
  MuiPagination: MuiPaginationStyleOverrides,
  MuiPaginationItem: MuiPaginationItemStyleOverrides,
  MuiRadio: MuiRadioStyleOverrides,
  MuiSelect: MuiSelectStylesOverrides,
  MuiSvgIcon: MuiSvgIconStyleOverrides,
  MuiTypography: MuiTypographyStyleOverrides,
};
