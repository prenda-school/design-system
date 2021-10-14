import type {} from '@material-ui/lab/themeAugmentation';
import type { Theme } from '@material-ui/core';
import type { Overrides } from '@material-ui/core/styles/overrides';
import fontFaces from './fontFaces';
import { MuiAutocompleteStyleOverrides } from '../Autocomplete';
import { AvatarClassKey, MuiAvatarStyleOverrides } from '../Avatar';
import type { BannerClassKey } from '../Banner';
import { MuiButtonStyleOverrides } from '../Button';
import { MuiDividerStyleOverrides } from '../Divider';
import { MuiCardStyleOverrides } from '../Card';
import { MuiCardContentStyleOverrides } from '../CardContent';
import { MuiCardActionsStyleOverrides } from '../CardActions';
import { MuiCheckboxStyleOverrides } from '../Checkbox';
import { MuiFormControlLabelStyleOverrides } from '../FormControlLabel';
import { MuiFormHelperTextStyleOverrides } from '../FormHelperText';
import { MuiFormLabelStyleOverrides } from '../FormLabel';
import type { IconButtonClassKey } from '../IconButton';
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
import type { SectionMessageClassKey } from '../SectionMessage';
import type { SectionMessageTitleClassKey } from '../SectionMessageTitle';
import { MuiSelectStylesOverrides } from '../Select';
import { MuiSvgIconStyleOverrides } from '../SvgIcon';
import { MuiSwitchStyleOverrides } from '../Switch';
import { MuiTabStyleOverrides } from '../Tab';
import type { TagClassKey } from '../Tag';
import type { TypographyClassKey } from '../Typography';
import { MuiListItemSecondaryActionStyleOverrides } from '../ListItemSecondaryAction';

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiSparkAvatar: AvatarClassKey;
    MuiSparkBanner: BannerClassKey;
    MuiSparkIconButton: IconButtonClassKey;
    MuiSparkSectionMessage: SectionMessageClassKey;
    MuiSparkSectionTitleMessage: SectionMessageTitleClassKey;
    MuiSparkTag: TagClassKey;
    MuiSparkTypography: TypographyClassKey;
  }
}

const overrides = (theme: Theme): Overrides => ({
  MuiAutocomplete: MuiAutocompleteStyleOverrides(theme),
  MuiAvatar: MuiAvatarStyleOverrides(theme),
  MuiButton: MuiButtonStyleOverrides(theme),
  MuiCssBaseline: {
    '@global': {
      body: {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
      },
      '@font-face': fontFaces,
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
  MuiInputAdornment: MuiInputAdornmentStylesOverrides,
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
  MuiSvgIcon: MuiSvgIconStyleOverrides(theme),
  MuiSwitch: MuiSwitchStyleOverrides(theme),
  MuiTab: MuiTabStyleOverrides(theme),
});

export default overrides;
