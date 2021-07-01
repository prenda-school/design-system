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
import { MuiPaginationStyleOverrides } from '../Pagination';
import { MuiPaginationItemStyleOverrides } from '../PaginationItem';
import { MuiRadioStyleOverrides } from '../Radio';
import { MuiSvgIconStyleOverrides } from '../SvgIcon';
import { fontFaces, typography } from './typography';
// import { Overrides as MuiOverrides } from '@material-ui/core/styles/overrides';
// import { PaginationClassKey, PaginationItemClassKey } from '@material-ui/lab';
// import { CSSProperties } from '@material-ui/styles';


// declare module '@material-ui/core/styles/createMuiTheme' {
//   interface Overrides {
//     // Define additional lab components here as needed....
//     MuiPagination: Partial<
//       Record<PaginationClassKey, CSSProperties | (() => CSSProperties)>
//     >;
//     MuiPaginationItem: Partial<
//       Record<PaginationItemClassKey, CSSProperties | (() => CSSProperties)>
//     >;
//   }
// }

// interface Overrides extends MuiOverrides {
//   // Define additional lab components here as needed....
//   MuiPagination: Partial<
//     Record<PaginationClassKey, CSSProperties | (() => CSSProperties)>
//   >;
//   MuiPaginationItem: Partial<
//     Record<PaginationItemClassKey, CSSProperties | (() => CSSProperties)>
//   >;
// }

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
  MuiPagination: MuiPaginationStyleOverrides,
  MuiPaginationItem: MuiPaginationItemStyleOverrides,
  MuiRadio: MuiRadioStyleOverrides,
  MuiSvgIcon: MuiSvgIconStyleOverrides,
};
