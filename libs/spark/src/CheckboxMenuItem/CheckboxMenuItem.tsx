import React, { ElementType, forwardRef, Ref } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import CheckboxListItem, {
  CheckboxListItemProps,
  CheckboxListItemTypeMap,
} from '../CheckboxListItem';
import { OverridableComponent, OverrideProps } from '../utils';
import { ExtendButtonBase } from '../ButtonBase';
import { alpha } from '@material-ui/core/styles';

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

const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      '&& .MuiPDSCheckboxIcon-root': {
        // remove focus shadow because menu item should be only element with the styling
        boxShadow: 'none',
      },
      // reset selected styles since only checkbox should appear selected
      '&$selected': {
        backgroundColor: 'transparent',
        color: theme.palette.text.body,
      },
      '&$selected:hover': {
        backgroundColor: alpha(theme.palette.neutral[600], 0.08),
      },
      '&$selected:active': {
        backgroundColor: alpha(theme.palette.blue[300], 0.19),
      },
    },
    selected: {},
  }),
  { name: 'MuiPDSCheckboxMenuItem' }
);

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
    classes: classesProp,
    className,
    // @ts-expect-error not picked up
    component = 'li',
    ListItemClasses,
    role = 'menuitem',
    selected,
    tabIndex: tabIndexProp,
    ...other
  } = props;

  const classes = useStyles();

  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return (
    <CheckboxListItem
      classes={ListItemClasses}
      className={clsx(
        classes.root,
        classesProp?.root,
        {
          [clsx(classes.selected, classesProp?.selected)]: selected,
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
    </CheckboxListItem>
  );
});

export default CheckboxMenuItem;
