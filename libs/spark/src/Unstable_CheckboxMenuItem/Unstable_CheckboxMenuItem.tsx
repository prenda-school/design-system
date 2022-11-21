import React, { ElementType, forwardRef, Ref } from 'react';
import clsx from 'clsx';
import Unstable_CheckboxListItem, {
  Unstable_CheckboxListItemProps,
  Unstable_CheckboxListItemTypeMap,
} from '../Unstable_CheckboxListItem';
import { OverridableComponent, OverrideProps } from '../utils';
import { ExtendButtonBase } from '../ButtonBase';
import { alpha } from '@material-ui/core/styles';
import withStyles, { Styles } from '../withStyles';

export type Unstable_CheckboxMenuItemTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'li'
> = Omit<Unstable_CheckboxListItemTypeMap<P, D>, 'classKey'> & {
  classKey: Unstable_CheckboxMenuItemClassKey;
  props: P & {
    /**
     * The `classes` prop applied to the `ListItem` element.
     */
    ListItemClasses?: Unstable_CheckboxListItemProps['classes'];
  };
};

export type Unstable_CheckboxMenuItemProps<
  D extends ElementType = Unstable_CheckboxMenuItemTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_CheckboxMenuItemTypeMap<P, D>, D>;

export type Unstable_CheckboxMenuItemClassKey = 'root' | 'selected';

const styles: Styles<Unstable_CheckboxMenuItemClassKey> = (theme) => ({
  root: {
    width: 'auto',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    '&& .MuiSparkUnstable_CheckboxIcon-root': {
      // remove focus shadow because menu item should be only element with the styling
      boxShadow: theme.unstable_shadows.none,
    },
    // reset selected styles since only checkbox should appear selected
    '&$selected': {
      backgroundColor: 'transparent',
      color: theme.unstable_palette.text.body,
    },
    '&$selected:hover': {
      backgroundColor: alpha(theme.unstable_palette.neutral[600], 0.08),
    },
    '&$selected:active': {
      backgroundColor: alpha(theme.unstable_palette.blue[300], 0.19),
    },
  },
  selected: {},
});

// @ts-expect-error can't handle overloads by `button` values
const Unstable_CheckboxMenuItem: OverridableComponent<
  Unstable_CheckboxMenuItemTypeMap<
    { button: false },
    Unstable_CheckboxMenuItemTypeMap['defaultComponent']
  >
> &
  ExtendButtonBase<
    Unstable_CheckboxMenuItemTypeMap<
      { button?: true },
      Unstable_CheckboxMenuItemTypeMap['defaultComponent']
    >
  > = forwardRef(function Unstable_CheckboxMenuItem(props, ref) {
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
    <Unstable_CheckboxListItem
      classes={ListItemClasses}
      className={clsx(
        classes.root,
        { [classes.selected]: selected },
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
    </Unstable_CheckboxListItem>
  );
});

export default withStyles(styles, {
  name: 'MuiSparkUnstable_CheckboxMenuItem',
})(Unstable_CheckboxMenuItem) as typeof Unstable_CheckboxMenuItem;
