import { MuiAutocompleteStyleOverrides } from '../Autocomplete';
import { AvatarClassKey, MuiAvatarStyleOverrides } from '../Avatar';
import { MuiButtonStyleOverrides } from '../Button';
import { MuiDividerStyleOverrides } from '../Divider';
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
import { MuiListStyleOverrides } from '../List';
import { MuiListItemStyleOverrides } from '../ListItem';
import { MuiListItemAvatarStyleOverrides } from '../ListItemAvatar';
import { MuiListItemIconStyleOverrides } from '../ListItemIcon';
import { MuiListItemTextStyleOverrides } from '../ListItemText';
import { MuiListSubheaderStyleOverrides } from '../ListSubheader';
import { MuiMenuStyleOverrides } from '../Menu';
import { MuiMenuItemStyleOverrides } from '../MenuItem';
import { MuiPaginationStyleOverrides } from '../Pagination';
import { MuiPaginationItemStyleOverrides } from '../PaginationItem';
import { MuiRadioStyleOverrides } from '../Radio';
import { MuiSelectStylesOverrides } from '../Select';
import { MuiSvgIconStyleOverrides } from '../SvgIcon';
import { TagClassKey } from '../Tag';
import { MuiTypographyStyleOverrides, TypographyClassKey } from '../Typography';
import { fontFaces, typography } from './typography';

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiSparkAvatar: AvatarClassKey;
    MuiSparkTag: TagClassKey;
    MuiSparkTypography: TypographyClassKey;
  }
}

export const overrides = {
  MuiAutocomplete: MuiAutocompleteStyleOverrides,
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
  MuiDivider: MuiDividerStyleOverrides,
  MuiFormControlLabel: MuiFormControlLabelStyleOverrides,
  MuiFormHelperText: MuiFormHelperTextStyleOverrides,
  MuiFormLabel: MuiFormLabelStyleOverrides,
  MuiIconButton: MuiIconButtonStyleOverrides,
  MuiInput: MuiInputStyleOverrides,
  MuiInputAdornment: MuiInputAdornmentStylesOverrides,
  MuiInputBase: MuiInputBaseStyleOverrides,
  MuiInputLabel: MuiInputLabelStyleOverrides,
  MuiList: MuiListStyleOverrides,
  MuiListItem: MuiListItemStyleOverrides,
  MuiListItemAvatar: MuiListItemAvatarStyleOverrides,
  MuiListItemIcon: MuiListItemIconStyleOverrides,
  MuiListItemText: MuiListItemTextStyleOverrides,
  MuiListSubheader: MuiListSubheaderStyleOverrides,
  MuiMenu: MuiMenuStyleOverrides,
  MuiMenuItem: MuiMenuItemStyleOverrides,
  MuiPagination: MuiPaginationStyleOverrides,
  MuiPaginationItem: MuiPaginationItemStyleOverrides,
  MuiRadio: MuiRadioStyleOverrides,
  MuiSelect: MuiSelectStylesOverrides,
  MuiSvgIcon: MuiSvgIconStyleOverrides,
  MuiTypography: MuiTypographyStyleOverrides,
};
