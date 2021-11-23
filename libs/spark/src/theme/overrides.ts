import type {} from '@material-ui/lab/themeAugmentation';
import type { Theme } from '@material-ui/core';
import type { Overrides } from '@material-ui/core/styles/overrides';
import __next__fontFaces from './__next__fontFaces';
import fontFaces from './fontFaces';
import { MuiAutocompleteStyleOverrides } from '../Autocomplete/defaults';
import { MuiButtonStyleOverrides } from '../Button/defaults';
import { MuiCardStyleOverrides } from '../Card/defaults';
import { MuiCardActionsStyleOverrides } from '../CardActions/defaults';
import { MuiCardContentStyleOverrides } from '../CardContent/defaults';
import { MuiCheckboxStyleOverrides } from '../Checkbox/defaults';
import { MuiDividerStyleOverrides } from '../Divider/defaults';
import { MuiFormControlLabelStyleOverrides } from '../FormControlLabel/defaults';
import { MuiFormHelperTextStyleOverrides } from '../FormHelperText/defaults';
import { MuiFormLabelStyleOverrides } from '../FormLabel/defaults';
import { MuiInputStyleOverrides } from '../Input/defaults';
import { MuiInputAdornmentStylesOverrides } from '../InputAdornment/defaults';
import { MuiInputBaseStyleOverrides } from '../InputBase/defaults';
import { MuiInputLabelStyleOverrides } from '../InputLabel/defaults';
import { MuiListStyleOverrides } from '../List/defaults';
import { MuiListItemStyleOverrides } from '../ListItem/defaults';
import { MuiListItemAvatarStyleOverrides } from '../ListItemAvatar/defaults';
import { MuiListItemIconStyleOverrides } from '../ListItemIcon/defaults';
import { MuiListItemSecondaryActionStyleOverrides } from '../ListItemSecondaryAction/defaults';
import { MuiListItemTextStyleOverrides } from '../ListItemText/defaults';
import { MuiListSubheaderStyleOverrides } from '../ListSubheader/defaults';
import { MuiMenuStyleOverrides } from '../Menu/defaults';
import { MuiMenuItemStyleOverrides } from '../MenuItem/defaults';
import { MuiPaginationStyleOverrides } from '../Pagination/defaults';
import { MuiPaginationItemStyleOverrides } from '../PaginationItem/defaults';
import { MuiRadioStyleOverrides } from '../Radio/defaults';
import { MuiSelectStylesOverrides } from '../Select/defaults';
import { MuiSwitchStyleOverrides } from '../Switch/defaults';
import { MuiTabStyleOverrides } from '../Tab/defaults';
import { MuiTabsStyleOverrides } from '../Tabs/defaults';
import { MuiTabPanelStyleOverrides } from '../TabPanel/defaults';

const overrides = (theme: Theme): Overrides => ({
  MuiAutocomplete: MuiAutocompleteStyleOverrides(theme),
  MuiButton: MuiButtonStyleOverrides(theme),
  MuiCssBaseline: {
    '@global': {
      body: {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
      },
      '@font-face': fontFaces.concat(__next__fontFaces),
    },
  },
  MuiCard: MuiCardStyleOverrides,
  MuiCardContent: MuiCardContentStyleOverrides,
  MuiCardActions: MuiCardActionsStyleOverrides,
  MuiCheckbox: MuiCheckboxStyleOverrides(theme),
  MuiDivider: MuiDividerStyleOverrides(theme),
  MuiFormControlLabel: MuiFormControlLabelStyleOverrides(theme),
  MuiFormHelperText: MuiFormHelperTextStyleOverrides(theme),
  MuiFormLabel: MuiFormLabelStyleOverrides(theme),
  MuiInput: MuiInputStyleOverrides,
  MuiInputAdornment: MuiInputAdornmentStylesOverrides(theme),
  MuiInputBase: MuiInputBaseStyleOverrides(theme),
  MuiInputLabel: MuiInputLabelStyleOverrides(theme),
  MuiList: MuiListStyleOverrides,
  MuiListItem: MuiListItemStyleOverrides(theme),
  MuiListItemAvatar: MuiListItemAvatarStyleOverrides,
  MuiListItemIcon: MuiListItemIconStyleOverrides(theme),
  MuiListItemText: MuiListItemTextStyleOverrides(theme),
  MuiListItemSecondaryAction: MuiListItemSecondaryActionStyleOverrides,
  MuiListSubheader: MuiListSubheaderStyleOverrides(theme),
  MuiMenu: MuiMenuStyleOverrides(theme),
  MuiMenuItem: MuiMenuItemStyleOverrides(theme),
  MuiPagination: MuiPaginationStyleOverrides,
  MuiPaginationItem: MuiPaginationItemStyleOverrides(theme),
  MuiRadio: MuiRadioStyleOverrides(theme),
  MuiSelect: MuiSelectStylesOverrides(theme),
  MuiSwitch: MuiSwitchStyleOverrides(theme),
  MuiTab: MuiTabStyleOverrides(theme),
  MuiTabPanel: MuiTabPanelStyleOverrides,
  MuiTabs: MuiTabsStyleOverrides(theme),
});

export default overrides;
