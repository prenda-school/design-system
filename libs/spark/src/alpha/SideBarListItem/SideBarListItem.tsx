import { alpha } from '@material-ui/core/styles';
import React, { ElementType, forwardRef } from 'react';
import ListItem, {
  ListItemClassKey,
  ListItemProps,
  ListItemTypeMap,
} from '../ListItem';
import useMediaQuery from '../useMediaQuery';
import useSideBar from '../useSideBar';
import withStyles, { Styles } from '../../withStyles';
import { OverridableComponent, OverrideProps } from '../../utils';
import { ExtendButtonBase } from '../ButtonBase';

export type SideBarListItemTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'li'
> = Omit<ListItemTypeMap<P, D>, 'props' | 'classKey'> & {
  props: Omit<ListItemTypeMap<P, D>['props'], 'onClick'>;
} & {
  classKey: SideBarListItemClassKey;
  props: P & {
    /**
     * :TODO:
     */
    closeSideBarOnXsDown?: boolean;
  };
};

export type SideBarListItemProps<
  D extends ElementType = SideBarListItemTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<SideBarListItemTypeMap<P, D>, D>;

export type SideBarListItemClassKey = Exclude<ListItemClassKey, 'selected'>;

const styles: Styles<SideBarListItemClassKey> = (theme) => ({
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
const UnstyledSideBarListItem: OverridableComponent<
  SideBarListItemTypeMap<
    { button?: false },
    SideBarListItemTypeMap['defaultComponent']
  >
> &
  ExtendButtonBase<
    SideBarListItemTypeMap<
      { button: true },
      SideBarListItemTypeMap['defaultComponent']
    >
  > = forwardRef(function SideBarListItem(props, ref) {
  const { closeSideBarOnXsDown = true, onClick, ...other } = props;

  const sideBar = useSideBar();
  const xsDown = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  if (sideBar === null) {
    throw new Error('Missing SideBarProvider');
  }

  const handleClick: ListItemProps['onClick'] = (event) => {
    onClick?.(event);
    if (closeSideBarOnXsDown && xsDown) {
      sideBar.close();
    }
  };

  return <ListItem onClick={handleClick} {...other} ref={ref} />;
});

const SideBarListItem = withStyles(styles, {
  name: 'MuiSparkSideBarListItem',
})(UnstyledSideBarListItem) as typeof UnstyledSideBarListItem;

export default SideBarListItem;
