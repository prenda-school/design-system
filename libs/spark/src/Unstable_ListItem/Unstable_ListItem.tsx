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
import Unstable_Typography, {
  Unstable_TypographyProps,
} from '../Unstable_Typography';
import { OverridableComponent, OverrideProps, useId } from '../utils';

export interface Unstable_ListItemTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'li',
  PrimaryTypographyComponent extends ElementType = 'span',
  SecondaryTypographyComponent extends ElementType = 'p',
  TertiaryTypographyComponent extends ElementType = 'p'
> {
  props: P &
    Omit<
      MuiListItemProps,
      'classes' | 'dense' | 'disableGutters' | 'divider'
    > & {
      /**
       * An alias for the `primary` prop.
       */
      children?: ReactNode;
      /**
       * Defines the `flex-wrap` style property on the root and content group elements.
       */
      flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
      /**
       *
       */
      focusableButton?: boolean;
      /**
       * Indent the content elements -- usually when no leading element is supplied.
       */
      inset?: boolean;
      /**
       * Element placed before the children -- usually an avatar or icon.
       */
      leadingEl?: ReactNode;
      /**
       * The primary content element.
       */
      primary?: ReactNode;
      /**
       * The primary action element -- usually a checkbox.
       *
       * Note: triggering the list item, when `button={true}`, should also trigger the primary action, and vice versa -- the consumer is responsible for implementing the former.
       */
      primaryAction?: ReactNode;
      /**
       * Props applied to the primary `Typography` element.
       */
      primaryTypographyProps?: Unstable_TypographyProps<
        PrimaryTypographyComponent,
        { component?: PrimaryTypographyComponent }
      >;
      /**
       * Display the content elements in a row.
       */
      row?: boolean;
      /**
       * The secondary content element.
       */
      secondary?: ReactNode;
      /**
       * Props applied to the secondary `Typography` element.
       */
      secondaryTypographyProps?: Unstable_TypographyProps<
        SecondaryTypographyComponent,
        { component?: SecondaryTypographyComponent }
      >;
      /**
       * The secondary action element -- usually a checkbox, icon button, or switch.
       *
       * Note: triggering the list item, when `button={true}`, will _not_ trigger the secondary action, and vice versa -- the component ensures this by default.
       */
      secondaryAction?: ReactNode;
      /**
       * The tertiary content element.
       */
      tertiary?: ReactNode;
      /**
       * Props applied to the tertiary `Typography` element.
       */
      tertiaryTypographyProps?: Unstable_TypographyProps<
        TertiaryTypographyComponent,
        { component?: TertiaryTypographyComponent }
      >;
    };
  defaultComponent: D;
  classKey: Unstable_ListItemClassKey;
}

export type Unstable_ListItemProps<
  D extends ElementType = Unstable_ListItemTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_ListItemTypeMap<P, D>, D>;

export type Unstable_ListItemClassKey =
  | 'root'
  | 'rootWithSecondaryAction'
  | 'button'
  | 'container'
  | 'contentGroup'
  | 'contentGroupRow'
  | 'contentGroupInset'
  | 'contentGroupWrap'
  | 'contentGroupWrapReverse'
  | 'flexWrapWrap'
  | 'flexWrapWrapReverse'
  | 'primary'
  | 'primaryAction'
  | 'primaryAndSecondary'
  | 'secondary'
  | 'secondaryAction'
  | 'secondaryActionFlexStart'
  | 'tertiary'
  | 'selected'
  | 'disabled'
  | 'leadingEl';

const useStyles = makeStyles<Unstable_ListItemClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: 'transparent',
      color: theme.unstable_palette.text.body,
      columnGap: 16,
      display: 'flex',
      minHeight: 'unset',
      padding: '8px 16px',
      rowGap: 8,
      '&$disabled': {
        opacity: 1, // reset Mui default
      },
    },
    /* Styles applied to the root element when `flexWrap='wrap'`. */
    flexWrapWrap: {
      flexWrap: 'wrap',
    },
    /* Styles applied to the root element when `flexWrap='wrap-reverse'`. */
    flexWrapWrapReverse: {
      flexWrap: 'wrap-reverse',
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
    /* Styles applied to the content group element. */
    contentGroup: {
      alignItems: 'baseline',
      columnGap: 8,
      display: 'flex',
      flexDirection: 'column',
    },
    /* Styles applied to the content group element when `inset={true}`. */
    contentGroupInset: {
      paddingInlineStart: 40,
    },
    /* Styles applied to the content group element when `row={true}`. */
    contentGroupRow: {
      flexDirection: 'row',
    },
    /* Styles applied to the content group element when `flexWrap='wrap'`. */
    contentGroupWrap: {
      flexWrap: 'wrap',
    },
    /* Styles applied to the content group element when `flexWrap='wrap-reverse'`. */
    contentGroupWrapReverse: {
      flexWrap: 'wrap-reverse',
    },
    /* Styles applied to the primary content element. */
    primary: {},
    /* Styles applied to the primary action element. */
    primaryAction: {
      display: 'inline-flex',
      flexShrink: 0,
      // marginInlineEnd: 16,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: theme.unstable_typography.pxToRem(24),
      // set minimum so that larger icons can still expand
      minHeight: '1em',
      minWidth: '1em',
    },
    /* Styles applied to the primary content element when secondary content is also supplied. */
    primaryAndSecondary: {
      fontWeight: 600,
    },
    /* Styles applied to the secondary content element. */
    secondary: {},
    /* Styles applied to the secondary action element. */
    secondaryAction: {
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',
      right: 0,
      // don't leave slivers of space for the behind list item
      fontSize: theme.unstable_typography.pxToRem(40),
      minHeight: '1em',
      minWidth: '1em',
    },
    /* Styles applied to the secondary action element when `alignItems='flex-start'`. */
    secondaryActionFlexStart: {
      top: 0,
      transform: 'none',
    },
    /* Styles applied to the tertiary content element. */
    tertiary: {
      color: theme.unstable_palette.text.subdued,
      '$selected &': {
        color: theme.unstable_palette.text.inverseSubdued,
      },
      '$disabled &': {
        color: theme.unstable_palette.text.disabled,
      },
    },
    /* Styles applied to the root element when `button={true}`. */
    button: {
      cursor: 'pointer',
      userSelect: 'text',
      '&:hover': {
        backgroundColor: alpha(theme.unstable_palette.neutral[600], 0.08),
      },
      '&:active': {
        backgroundColor: alpha(theme.unstable_palette.blue[300], 0.19),
      },
      '&$selected': {
        backgroundColor: theme.unstable_palette.blue[600],
        color: theme.unstable_palette.text.inverseBody,
      },
      '&$selected:hover': {
        backgroundColor: alpha(theme.unstable_palette.blue[600], 0.86),
      },
      '&$selected:active': {
        backgroundColor: darken(theme.unstable_palette.blue[600], 0.2),
      },
      '&$disabled': {
        backgroundColor: 'transparent',
        color: theme.unstable_palette.text.disabled,
      },
      '&$selected$disabled': {
        backgroundColor: theme.unstable_palette.neutral[80],
        color: theme.unstable_palette.text.disabled,
      },
      '&.Mui-focusVisible, &:focus-visible': {
        // doesn't appear in story because is under `Mui-focusVisible`
        // backgroundColor: 'transparent',
        boxShadow: `0 0 2px 4px ${theme.unstable_palette.teal[200]}`,
      },
    },
    /* Styles applied to the leading element, usually an avatar or icon. */
    leadingEl: {
      display: 'inline-flex',
      flexShrink: 0,
      maxWidth: '100%',
      // for icon
      color: 'inherit',
      fontSize: theme.unstable_typography.pxToRem(24),
    },
    /* Pseudo-class applied to the root element when `disabled={true}`. */
    disabled: {},
    /* Pseudo-class applied to the root element when `selected={true}`. */
    selected: {},
  }),
  { name: 'MuiSparkUnstable_ListItem' }
);

// @ts-expect-error can't handle overloads by `button` values
const Unstable_ListItem: OverridableComponent<
  Unstable_ListItemTypeMap<{ button?: false }, 'li'>
> &
  ExtendButtonBase<
    Unstable_ListItemTypeMap<{ button: true }, 'div'>
  > = forwardRef(function Unstable_ListItem(props, ref) {
  const {
    alignItems,
    button,
    children,
    classes: classesProp,
    flexWrap,
    focusableButton = true,
    leadingEl,
    inset = false,
    primary,
    primaryAction,
    primaryTypographyProps,
    row = false,
    secondary,
    secondaryTypographyProps,
    secondaryAction,
    tertiary,
    tertiaryTypographyProps,
    value,
    ...other
  } = props;

  const classes = useStyles();

  const primaryId = useId(primaryTypographyProps?.id);
  const secondaryId = useId(secondaryTypographyProps?.id);
  const tertiaryId = useId(tertiaryTypographyProps?.id);

  // `clsx` is useful even though these aren't class names
  const primaryAriaDescribedBy = clsx({
    [secondaryId]: !!secondary,
    [tertiaryId]: !!tertiary,
  });

  let primaryEl = null;
  if (primary != null || children !== null) {
    primaryEl = (
      <Unstable_Typography
        className={clsx(classes.primary, classesProp?.primary, {
          [clsx(
            classes.primaryAndSecondary,
            classesProp?.primaryAndSecondary
          )]: !!secondary,
        })}
        color="inherit"
        component="span"
        id={primaryId}
        {...(primaryAriaDescribedBy && {
          'aria-describedby': primaryAriaDescribedBy,
        })}
        variant="body"
        {...primaryTypographyProps}
      >
        {children || primary}
      </Unstable_Typography>
    );
  }

  let secondaryEl = null;
  if (secondary != null) {
    secondaryEl = (
      <Unstable_Typography
        className={clsx(classes.secondary, classesProp?.secondary)}
        color="inherit"
        component="p"
        id={secondaryId}
        variant="body"
        {...secondaryTypographyProps}
      >
        {secondary}
      </Unstable_Typography>
    );
  }

  let tertiaryEl = null;
  if (tertiary != null) {
    tertiaryEl = (
      <Unstable_Typography
        className={clsx(classes.tertiary, classesProp?.tertiary)}
        component="p"
        id={tertiaryId}
        variant="description"
        {...tertiaryTypographyProps}
      >
        {tertiary}
      </Unstable_Typography>
    );
  }

  return (
    <MuiListItem
      alignItems={alignItems}
      // @ts-expect-error ???
      button={focusableButton ? button : false}
      classes={{
        root: clsx(classes.root, classesProp?.root, {
          [clsx(classes.flexWrapWrap, classesProp?.flexWrapWrap)]:
            flexWrap === 'wrap',
          [clsx(classes.flexWrapWrapReverse, classesProp?.flexWrapWrapReverse)]:
            flexWrap === 'wrap-reverse',
          [clsx(classes.button, classesProp?.button)]: button,
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
      {...(focusableButton &&
        button && {
          disableRipple: true,
          disableTouchRipple: true,
          focusRipple: false,
        })}
    >
      {primaryAction ? (
        <span
          className={clsx(classes.primaryAction, classesProp?.primaryAction)}
        >
          {primaryAction}
        </span>
      ) : null}
      {leadingEl ? (
        <span className={clsx(classes.leadingEl, classesProp?.leadingEl)}>
          {leadingEl}
        </span>
      ) : null}
      <span
        className={clsx(classes.contentGroup, classesProp?.contentGroup, {
          [clsx(classes.contentGroupRow, classesProp?.contentGroupRow)]: row,
          [clsx(
            classes.contentGroupInset,
            classesProp?.contentGroupInset
          )]: inset,
          [clsx(classes.contentGroupWrap, classesProp?.contentGroupWrap)]:
            flexWrap === 'wrap',
          [clsx(
            classes.contentGroupWrapReverse,
            classesProp?.contentGroupWrapReverse
          )]: flexWrap === 'wrap-reverse',
        })}
      >
        {primaryEl}
        {secondaryEl}
        {tertiaryEl}
      </span>
      {secondaryAction ? (
        <MuiListItemSecondaryAction
          classes={{
            root: clsx(classes.secondaryAction, classesProp?.secondaryAction, {
              [clsx(
                classes.secondaryActionFlexStart,
                classesProp?.secondaryActionFlexStart
              )]: alignItems === 'flex-start',
            }),
          }}
        >
          {secondaryAction}
        </MuiListItemSecondaryAction>
      ) : null}
    </MuiListItem>
  );
});

export default Unstable_ListItem;
