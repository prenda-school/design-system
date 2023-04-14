import type { ElementType, Ref } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { ListItemProps, ListItemTypeMap } from '../ListItem';
import ListItem from '../ListItem';
import type { OverridableComponent, OverrideProps } from '../../utils';
import type { ExtendButtonBase } from '../../ButtonBase';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export type MenuItemTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'li'
> = Omit<ListItemTypeMap<P, D>, 'classKey'> & {
  classKey: MenuItemClassKey;
  props: P & {
    /**
     * The `classes` prop applied to the `ListItem` element.
     */
    ListItemClasses?: ListItemProps['classes'];
  };
};

export type MenuItemProps<
  D extends ElementType = MenuItemTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<MenuItemTypeMap<P, D>, D>;

export type MenuItemClassKey = 'root' | 'selected';

const styles: Styles<MenuItemClassKey> = {
  root: {
    width: 'auto',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  selected: {},
};

// @ts-expect-error can't handle overloads by `button` values
const MenuItem: OverridableComponent<
  MenuItemTypeMap<{ button: false }, MenuItemTypeMap['defaultComponent']>
> &
  ExtendButtonBase<
    MenuItemTypeMap<{ button?: true }, MenuItemTypeMap['defaultComponent']>
  > = forwardRef(function MenuItem(props, ref) {
  const {
    children,
    classes,
    className,
    // @ts-expect-error not picked up
    component = 'li',
    ListItemClasses,
    role = 'menuitem',
    selected,
    tabIndex: tabIndexProp,
    ...other
  } = props;

  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return (
    <ListItem
      button
      classes={ListItemClasses}
      className={clsx(
        classes.root,
        {
          [classes.selected]: selected,
        },
        className
      )}
      component={component}
      ref={ref as Ref<HTMLLIElement>}
      role={role}
      selected={selected}
      tabIndex={tabIndex}
      {...other}
    >
      {children}
    </ListItem>
  );
});

export default withStyles(styles, { name: 'MuiSpark_alpha_MenuItem' })(
  MenuItem
) as typeof MenuItem;
