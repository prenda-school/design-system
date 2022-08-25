import React, { ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import {
  default as MuiListItem,
  ListItemProps as MuiListItemProps,
} from '@material-ui/core/ListItem';
import { default as MuiListItemSecondaryAction } from '@material-ui/core/ListItemSecondaryAction';
import { darken, alpha } from '@material-ui/core/styles';
import { ExtendButtonBase } from '../ButtonBase';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import ContentGroup, { ContentGroupProps } from '../ContentGroup';

export interface ListItemTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'li'
> {
  props: P &
    Omit<
      MuiListItemProps,
      'classes' | 'dense' | 'disableGutters' | 'divider'
    > & {
      /**
       * Props applied to the `ContentGroup` element.
       */
      ContentGroupProps?: Partial<ContentGroupProps>;
      /**
       * Remove the component from the tab-order of the page.
       */
      disableFocusable?: boolean;
      /**
       * Indent all elements to create an appearance of a nested list item.
       */
      nested?: boolean;
      /**
       * The primary action element -- usually a checkbox.
       *
       * Note: triggering the list item, when `button={true}`, should also trigger the primary action, and vice versa -- the consumer is responsible for implementing the former.
       */
      primaryAction?: ReactNode;
      /**
       * The secondary action element, an alias for trailing action with custom behavior -- usually a checkbox, icon button, or switch.
       *
       * Note: triggering the list item, when `button={true}`, will _not_ trigger the secondary action, and vice versa -- the component ensures this by default.
       */
      secondaryAction?: ReactNode;
    };
  defaultComponent: D;
  classKey: ListItemClassKey;
}

export type ListItemProps<
  D extends ElementType = ListItemTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<ListItemTypeMap<P, D>, D>;

export type ListItemClassKey =
  | 'root'
  | 'rootWithSecondaryAction'
  | 'button'
  | 'container'
  | 'nested'
  | 'selected'
  | 'disabled'
  | 'secondaryAction'
  | 'secondaryActionFlexStart';

const useStyles = makeStyles<ListItemClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      padding: '8px 16px',
    },
    /* Styles applied to the root element when a secondary action is given. */
    rootWithSecondaryAction: {
      // add some space to avoid collision since secondary action is absolutely positioned.
      paddingRight: 40 + 16, // width of small icon button + gap
    },
    /* Styles applied to the added container element when a secondary action is given. */
    container: {
      listStyle: 'none',
    },
    /* Styles applied to the root element when `button={true}`. */
    button: {
      cursor: 'pointer',
      userSelect: 'text',
      '&:hover': {
        backgroundColor: alpha(theme.palette.neutral[600], 0.08),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.blue[300], 0.19),
      },
      '&$selected': {
        backgroundColor: theme.palette.blue[600],
        color: theme.palette.text.inverseBody,
      },
      '&$selected:hover': {
        backgroundColor: alpha(theme.palette.blue[600], 0.86),
      },
      '&$selected:active': {
        backgroundColor: darken(theme.palette.blue[600], 0.2),
      },
      '&$disabled': {
        backgroundColor: 'transparent',
        color: theme.palette.text.disabled,
        opacity: 1, // reset Mui default
      },
      '&$selected$disabled': {
        backgroundColor: theme.palette.neutral[80],
        color: theme.palette.text.disabled,
      },
      '&.Mui-focusVisible, &:focus-visible': {
        // doesn't appear in story because is under `Mui-focusVisible`
        // backgroundColor: 'transparent',
        boxShadow: `0 0 2px 4px ${theme.palette.teal[200]}`,
      },
    },
    /* Pseudo-class applied to the root element when `disabled={true}`. */
    disabled: {},
    /* Pseudo-class applied to the root element when `selected={true}`. */
    selected: {},
    /* Styles applied to the root element when `nested={true}`. */
    nested: {
      paddingInlineStart: 24,
    },
    /* Styles applied to the secondary action element. */
    secondaryAction: {
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',
      right: 0,
      // don't leave slivers of space for the behind list item
      fontSize: theme.typography.pxToRem(40),
      minHeight: '1em',
      minWidth: '1em',
    },
    /* Styles applied to the secondary action element when `alignItems='flex-start'`. */
    secondaryActionFlexStart: {
      top: 0,
      transform: 'none',
    },
  }),
  { name: 'MuiPDSListItem' }
);

// @ts-expect-error can't handle overloads by `button` values
const ListItem: OverridableComponent<
  ListItemTypeMap<{ button?: false }, 'li'>
> &
  ExtendButtonBase<ListItemTypeMap<{ button: true }, 'div'>> = forwardRef(
  function ListItem(props, ref) {
    const {
      alignItems = 'flex-start',
      button,
      children,
      classes: classesProp,
      ContentGroupProps = {},
      disableFocusable = true,
      nested = false,
      primaryAction,
      secondaryAction,
      value,
      ...other
    } = props;

    const classes = useStyles();

    return (
      <MuiListItem
        alignItems={alignItems}
        // @ts-expect-error ???
        button={disableFocusable ? false : button}
        classes={{
          root: clsx(classes.root, classesProp?.root, {
            [clsx(classes.button, classesProp?.button)]: button,
            [clsx(classes.nested, classesProp?.nested)]: nested,
          }),
          selected: clsx(classes.selected, classesProp?.selected),
          disabled: clsx(classes.disabled, classesProp?.disabled),
          secondaryAction: clsx(
            classes.rootWithSecondaryAction,
            classesProp?.rootWithSecondaryAction
          ),
          container: clsx(classes.container, classesProp?.container),
        }}
        // `value` doesn't mean anything for a list item, so add a data attribute
        data-value={value}
        // @ts-expect-error `ref` types are slightly different
        ref={ref}
        {...other}
        {...(button &&
          !disableFocusable && {
            disableRipple: true,
            disableTouchRipple: true,
            focusRipple: false,
          })}
      >
        <ContentGroup
          alignItems={alignItems}
          color="inherit"
          // disable padding so that consumers can customize it with this component's `'root'` class key
          disablePadding
          leadingAction={primaryAction}
          // `ContentGroupProps.primary` should and will override this
          primary={children}
          {...ContentGroupProps}
        />
        {secondaryAction ? (
          <MuiListItemSecondaryAction
            classes={{
              root: clsx(
                classes.secondaryAction,
                classesProp?.secondaryAction,
                {
                  [clsx(
                    classes.secondaryActionFlexStart,
                    classesProp?.secondaryActionFlexStart
                  )]: alignItems === 'flex-start',
                }
              ),
            }}
          >
            {secondaryAction}
          </MuiListItemSecondaryAction>
        ) : null}
      </MuiListItem>
    );
  }
);

export default ListItem;
