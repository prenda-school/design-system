import React, { ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import {
  default as MuiListItem,
  ListItemProps as MuiListItemProps,
} from '@material-ui/core/ListItem';
import { default as MuiListItemSecondaryAction } from '@material-ui/core/ListItemSecondaryAction';
import { darken, alpha } from '@material-ui/core/styles';
import { ExtendButtonBase } from '../../ButtonBase';
import { OverridableComponent, OverrideProps } from '../../utils';
import ContentGroup, { ContentGroupProps } from '../ContentGroup';
import withStyles, { Styles } from '../../withStyles';

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
  | 'container'
  | 'secondaryAction'
  | 'selected'
  | 'disabled';

type PrivateClassKey =
  | 'private-root-secondaryAction'
  | 'private-root-button'
  | 'private-root-nested'
  | 'private-secondaryAction-alignItems-center'
  | 'private-secondaryAction-alignItems-flex-start';

const styles: Styles<ListItemClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    color: theme.palette_alpha.text.body,
    padding: '8px 16px',
  },
  /* Styles applied to the container element (added when a secondary action is given). */
  container: {
    listStyle: 'none',
  },
  /* Pseudo-class applied to the root element when `disabled={true}`. */
  disabled: {},
  /* Pseudo-class applied to the root element when `selected={true}`. */
  selected: {},
  /* Styles applied to the secondary action element. */
  secondaryAction: {
    display: 'inline-flex',
    justifyContent: 'center',
    right: 0,
    // don't leave slivers of space for the behind list item
    fontSize: theme.typography_alpha.pxToRem(40),
    minHeight: '1em',
    minWidth: '1em',
  },
  /* Private */
  'private-root-secondaryAction': {
    // add some space to avoid collision since secondary action is absolutely positioned.
    paddingRight: 40 + 16, // width of small icon button + gap
  },
  'private-root-button': {
    color: theme.palette_alpha.text.body, // override Bootstrap.css
    textDecoration: 'unset', // override Bootstrap.css
    cursor: 'pointer',
    userSelect: 'text',
    WebkitTapHighlightColor: 'transparent',
    '&:hover, &[data-focus="true"]': {
      backgroundColor: alpha(theme.palette_alpha.neutral[600], 0.08),
      color: theme.palette_alpha.text.body, // override Bootstrap.css
      textDecoration: 'unset', // override Bootstrap.css
    },
    '&:focus': {
      outline: 'unset', // override Bootstrap.css
      color: theme.palette_alpha.text.body, // override Bootstrap.css
      textDecoration: 'unset', // override Bootstrap.css
    },
    '&:active': {
      backgroundColor: alpha(theme.palette_alpha.blue[300], 0.19),
    },
    '&$selected, &[aria-selected="true"]': {
      backgroundColor: theme.palette_alpha.blue[600],
      color: theme.palette_alpha.text.inverseBody,
    },
    '&$selected:hover, &[aria-selected="true"]:hover': {
      backgroundColor: alpha(theme.palette_alpha.blue[600], 0.86),
    },
    '&$selected:active, &[aria-selected="true"]:active': {
      backgroundColor: darken(theme.palette_alpha.blue[600], 0.2),
    },
    '&$disabled, &[aria-disabled="true"]': {
      backgroundColor: 'transparent',
      color: theme.palette_alpha.text.disabled,
      opacity: 1, // reset Mui default
    },
    '&$selected$disabled, &$selected[aria-disabled="true"], &[aria-selected="true"][aria-disabled="true"]':
      {
        backgroundColor: theme.palette_alpha.neutral[80],
        color: theme.palette_alpha.text.disabled,
        pointerEvents: 'none',
      },
    '&.Mui-focusVisible, &:focus-visible': {
      // doesn't appear in story because is under `Mui-focusVisible`
      // backgroundColor: 'transparent',
      boxShadow: theme.shadows_alpha.focus,
      outline: 'unset', // override Chrome user agent
    },
  },
  'private-root-nested': {
    paddingInlineStart: 24,
  },
  'private-secondaryAction-alignItems-center': {
    alignItems: 'center',
  },
  'private-secondaryAction-alignItems-flex-start': {
    alignItems: 'center',
    top: 0,
    transform: 'none',
  },
});

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
      classes,
      ContentGroupProps = {},
      disableFocusable = true,
      nested = false,
      primaryAction,
      secondaryAction,
      value,
      ...other
    } = props;

    return (
      <MuiListItem
        alignItems={alignItems}
        // @ts-expect-error ???
        button={disableFocusable ? false : button}
        classes={{
          root: clsx(classes.root, {
            [classes['private-root-button']]: button,
            [classes['private-root-nested']]: nested,
          }),
          selected: classes.selected,
          disabled: classes.disabled,
          secondaryAction: classes['private-root-secondaryAction'],
          container: classes.container,
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
                classes[`private-secondaryAction-alignItems-${alignItems}`]
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

export default withStyles(styles, { name: 'MuiSpark_alpha_ListItem' })(
  ListItem
) as typeof ListItem;
