import React, { ElementType, forwardRef, Ref } from 'react';
import clsx from 'clsx';
import Unstable_ListItem, {
  Unstable_ListItemProps,
  Unstable_ListItemTypeMap,
} from '../Unstable_ListItem';
import { OverridableComponent, OverrideProps } from '../utils';
import { ExtendButtonBase } from '../ButtonBase';
import withStyles from '../withStyles';

export type Unstable_MenuItemTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'li'
> = Omit<Unstable_ListItemTypeMap<P, D>, 'classKey'> & {
  classKey: Unstable_MenuItemClassKey;
  props: P & {
    /**
     * The `classes` prop applied to the `ListItem` element.
     */
    ListItemClasses?: Unstable_ListItemProps['classes'];
  };
};

export type Unstable_MenuItemProps<
  D extends ElementType = Unstable_MenuItemTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_MenuItemTypeMap<P, D>, D>;

export type Unstable_MenuItemClassKey = 'root' | 'selected';

const withClasses = withStyles(
  {
    root: {
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
    selected: {},
  },
  { name: 'MuiSparkUnstable_MenuItem' }
);

// @ts-expect-error can't handle overloads by `button` values
const Unstable_MenuItem: OverridableComponent<
  Unstable_MenuItemTypeMap<
    { button: false },
    Unstable_MenuItemTypeMap['defaultComponent']
  >
> &
  ExtendButtonBase<
    Unstable_MenuItemTypeMap<
      { button?: true },
      Unstable_MenuItemTypeMap['defaultComponent']
    >
  > = forwardRef(function Unstable_MenuItem(props, ref) {
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
    <Unstable_ListItem
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
    </Unstable_ListItem>
  );
});

export default withClasses(Unstable_MenuItem) as typeof Unstable_MenuItem;
