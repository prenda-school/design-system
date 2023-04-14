import type { ElementType, Ref } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type {
  CheckboxListItemProps,
  CheckboxListItemTypeMap,
} from '../CheckboxListItem';
import CheckboxListItem from '../CheckboxListItem';
import type { OverridableComponent, OverrideProps } from '../../utils';
import type { ExtendButtonBase } from '../../ButtonBase';
import { alpha } from '@material-ui/core/styles';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export type CheckboxMenuItemTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'li'
> = Omit<CheckboxListItemTypeMap<P, D>, 'classKey'> & {
  classKey: CheckboxMenuItemClassKey;
  props: P & {
    /**
     * The `classes` prop applied to the `ListItem` element.
     */
    ListItemClasses?: CheckboxListItemProps['classes'];
  };
};

export type CheckboxMenuItemProps<
  D extends ElementType = CheckboxMenuItemTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<CheckboxMenuItemTypeMap<P, D>, D>;

export type CheckboxMenuItemClassKey = 'root' | 'selected';

const styles: Styles<CheckboxMenuItemClassKey> = (theme) => ({
  root: {
    width: 'auto',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    '&& .MuiSpark_alpha_CheckboxIcon-root': {
      // remove focus shadow because menu item should be only element with the styling
      boxShadow: theme.shadows_alpha.none,
    },
    // reset selected styles since only checkbox should appear selected
    '&$selected': {
      backgroundColor: 'transparent',
      color: theme.palette_alpha.text.body,
    },
    '&$selected:hover': {
      backgroundColor: alpha(theme.palette_alpha.neutral[600], 0.08),
    },
    '&$selected:active': {
      backgroundColor: alpha(theme.palette_alpha.blue[300], 0.19),
    },
  },
  selected: {},
});

// @ts-expect-error can't handle overloads by `button` values
const CheckboxMenuItem: OverridableComponent<
  CheckboxMenuItemTypeMap<
    { button: false },
    CheckboxMenuItemTypeMap['defaultComponent']
  >
> &
  ExtendButtonBase<
    CheckboxMenuItemTypeMap<
      { button?: true },
      CheckboxMenuItemTypeMap['defaultComponent']
    >
  > = forwardRef(function CheckboxMenuItem(props, ref) {
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
    <CheckboxListItem
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
    </CheckboxListItem>
  );
});

export default withStyles(styles, {
  name: 'MuiSpark_alpha_CheckboxMenuItem',
})(CheckboxMenuItem) as typeof CheckboxMenuItem;
