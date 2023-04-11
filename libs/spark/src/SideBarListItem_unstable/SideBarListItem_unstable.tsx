import { alpha } from '@material-ui/core/styles';
import React, { ElementType, forwardRef } from 'react';
import Unstable_ListItem, {
  Unstable_ListItemClassKey,
  Unstable_ListItemProps,
  Unstable_ListItemTypeMap,
} from '../Unstable_ListItem';
import useMediaQuery_unstable from '../useMediaQuery_unstable';
import useSideBar_unstable from '../useSideBar_unstable';
import withStyles, { Styles } from '../withStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import { ExtendButtonBase } from '../ButtonBase';

export type SideBarListItemTypeMap_unstable<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'li'
> = Omit<Unstable_ListItemTypeMap<P, D>, 'props' | 'classKey'> & {
  props: Omit<Unstable_ListItemTypeMap<P, D>['props'], 'onClick'>;
} & {
  classKey: SideBarListItemClassKey_unstable;
  props: P & {
    /**
     * :TODO:
     */
    closeSideBarOnXsDown?: boolean;
  };
};

export type SideBarListItemProps_unstable<
  D extends ElementType = SideBarListItemTypeMap_unstable['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<SideBarListItemTypeMap_unstable<P, D>, D>;

export type SideBarListItemClassKey_unstable = Exclude<
  Unstable_ListItemClassKey,
  'selected'
>;

const styles: Styles<SideBarListItemClassKey_unstable> = (theme) => ({
  root: {
    paddingLeft: 24,
    '&:hover': {
      textDecoration: 'none',
    },
    '&[aria-current="page"]': {
      backgroundColor: alpha(theme.unstable_palette.blue[300], 0.19),
    },
    '&[aria-current="page"]:hover': {
      backgroundColor: alpha(theme.unstable_palette.neutral[600], 0.08),
      color: theme.unstable_palette.text.body, // override Bootstrap.css
    },
  },
  container: {},
  disabled: {},
  secondaryAction: {},
});

// @ts-expect-error can't handle overloads by `button` values
const UnstyledSideBarListItem_unstable: OverridableComponent<
  SideBarListItemTypeMap_unstable<
    { button?: false },
    SideBarListItemTypeMap_unstable['defaultComponent']
  >
> &
  ExtendButtonBase<
    SideBarListItemTypeMap_unstable<
      { button: true },
      SideBarListItemTypeMap_unstable['defaultComponent']
    >
  > = forwardRef(function SideBarListItem_unstable(props, ref) {
  const { closeSideBarOnXsDown = true, onClick, ...other } = props;

  const sideBar = useSideBar_unstable();
  const xsDown = useMediaQuery_unstable((theme) =>
    theme.breakpoints.down('xs')
  );

  if (sideBar === null) {
    throw new Error('Missing SideBarProvider');
  }

  const handleClick: Unstable_ListItemProps['onClick'] = (event) => {
    onClick?.(event);
    if (closeSideBarOnXsDown && xsDown) {
      sideBar.close();
    }
  };

  return <Unstable_ListItem onClick={handleClick} {...other} ref={ref} />;
});

const SideBarListItem_unstable = withStyles(styles, {
  name: 'MuiSparkSideBarListItem_unstable',
})(UnstyledSideBarListItem_unstable) as typeof UnstyledSideBarListItem_unstable;

export default SideBarListItem_unstable;
