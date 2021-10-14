import * as React from 'react';
import {
  default as MuiTab,
  TabClassKey,
  TabTypeMap,
} from '@material-ui/core/Tab';
import { ExtendButtonBase } from '../ButtonBase';
import makeStyles from '../makeStyles';
import { useCustomClasses } from '../utils';

export * from '@material-ui/core/Tab';

// subset of TabClassKey
type CustomClassKey = 'root' | 'textColorPrimary' | 'selected' | 'disabled';

// :NOTE: the focus styling is implemented with a border. To prevent layout
// shifts when that is applied, a border is always present on the root element.
// Property value calculations with "... - 2" are explicitly taking that into
// account where the "..." value is more reflective of the design measurement
// than the raw sum would be.
export const useCustomStyles = makeStyles<CustomClassKey>(
  ({ breakpoints, palette, typography }) => ({
    root: {
      ...typography['label-xl-strong'],
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderRadius: 8,
      borderWidth: 2,
      padding: `${16 - 2}px 0`,
      '&:focus': {
        borderColor: palette.blue[1],
      },
      // reset Mui default
      [breakpoints.up('sm')]: {
        minWidth: 'unset',
      },
    },
    textColorPrimary: {
      color: palette.text.onLightLowContrast,
      '&:hover': {
        color: palette.text.onLight,
      },
      '&:focus': {
        color: palette.text.onLight,
      },
      '&:active': {
        color: palette.text.onLight,
      },
      '&$selected': {
        color: palette.text.onLight,
      },
      '&$disabled': {
        color: palette.grey.medium,
      },
    },
    selected: {},
    disabled: {},
  }),
  { name: 'MuiSparkTab' }
);

// This is the smallest, silliest type error
// @ts-expect-error Property 'align' is missing in type 'HTMLAnchorElement' but required in type 'HTMLDivElement'
const Tab: ExtendButtonBase<TabTypeMap> = React.forwardRef(function Tab(
  { classes, ...other },
  ref
) {
  const baseCustomClasses = useCustomStyles();

  const { otherClasses, customClasses } = useCustomClasses<
    TabClassKey,
    CustomClassKey
  >({
    classes,
    baseCustomClasses,
  });

  return (
    <MuiTab
      classes={{
        ...otherClasses,
        // can spread because CustomClassKey is a subset, see definition comment
        ...customClasses,
      }}
      ref={ref}
      {...other}
    />
  );
});

export default Tab;
