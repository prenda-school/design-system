import React, { ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import Unstable_Typography, {
  Unstable_TypographyProps,
} from '../Unstable_Typography';
import { OverridableComponent, OverrideProps, useId } from '../utils';

export interface Unstable_ContentGroupTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div',
  PrimaryTypographyComponent extends ElementType = 'span',
  SecondaryTypographyComponent extends ElementType = 'p',
  TertiaryTypographyComponent extends ElementType = 'p'
> {
  props: P & {
    /**
     * Defines the `align-items` style property.
     */
    alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
    /**
     * Use the `primary` prop instead.
     */
    children?: never;
    /**
     * The color of the component.
     */
    color?: 'standard' | 'inherit';
    /**
     * Disable the default, root padding of the component.
     */
    disablePadding?: boolean;
    /**
     * Defines the `flex-wrap` style property.
     */
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    /**
     * Indent the content elements -- usually when no leading element is supplied.
     */
    inset?: boolean;
    /**
     * Action element placed before the leading element.
     */
    leadingAction?: ReactNode;
    /**
     * Element placed before the group of typography elements.
     */
    leadingEl?: ReactNode;
    /**
     * The primary typography element.
     */
    primary?: ReactNode;
    /**
     * Props applied to the primary `Typography` element.
     */
    primaryTypographyProps?: Unstable_TypographyProps<
      PrimaryTypographyComponent,
      { component?: PrimaryTypographyComponent }
    >;
    /**
     * Display the group of typography elements in a row.
     */
    row?: boolean;
    /**
     * The secondary typography element.
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
    /**
     * Action element placed after the trailing element.
     */
    trailingAction?: ReactNode;
    /**
     * Element placed after the group of typography elements.
     */
    trailingEl?: ReactNode;
  };
  defaultComponent: D;
  classKey: Unstable_ContentGroupClassKey;
}

export type Unstable_ContentGroupProps<
  D extends ElementType = Unstable_ContentGroupTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_ContentGroupTypeMap<P, D>, D>;

export type Unstable_ContentGroupClassKey =
  | 'root'
  | 'alignItemsBaseline'
  | 'alignItemsCenter'
  | 'alignItemsFlexEnd'
  | 'alignItemsStretch'
  | 'colorInherit'
  | 'disablePadding'
  | 'leadingAction'
  | 'leadingEl'
  | 'typography'
  | 'typographyRow'
  | 'typographyInset'
  | 'typographyWrap'
  | 'typographyWrapReverse'
  | 'primary'
  | 'primaryWithSecondary'
  | 'secondary'
  | 'tertiary'
  | 'trailingAction'
  | 'trailingActionFlexStart'
  | 'trailingEl'
  | 'wrap'
  | 'wrapReverse';

const useStyles = makeStyles<Unstable_ContentGroupClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
      color: theme.unstable_palette.text.body,
      columnGap: 16,
      display: 'flex',
      minHeight: 'unset',
      padding: '8px 16px',
      position: 'relative',
      rowGap: 8,
    },
    /* Styles applied to the root element when `alignItems='baseline'`. */
    alignItemsBaseline: {
      alignItems: 'baseline',
    },
    /* Styles applied to the root element when `alignItems='center'`. */
    alignItemsCenter: {
      alignItems: 'center',
    },
    /* Styles applied to the root element when `alignItems='flex-start'`. */
    alignItemsFlexEnd: {
      alignItems: 'flex-end',
    },
    /* Styles applied to the root element when `alignItems='stretch'`. */
    alignItemsStretch: {
      alignItems: 'stretch',
    },
    /* Styles applied to the root element when `color='inherit'`. */
    colorInherit: {
      color: 'inherit',
    },
    disablePadding: {
      padding: 0,
    },
    /* Styles applied to the root element when `flexWrap='wrap'`. */
    wrap: {
      flexWrap: 'wrap',
    },
    /* Styles applied to the root element when `flexWrap='wrap-reverse'`. */
    wrapReverse: {
      flexWrap: 'wrap-reverse',
    },
    /* Styles applied to the group of typography elements. */
    typography: {
      alignItems: 'baseline',
      columnGap: 8,
      display: 'flex',
      flexDirection: 'column',
    },
    /* Styles applied to the group of typography elements when `inset={true}`. */
    typographyInset: {
      paddingInlineStart: 40,
    },
    /* Styles applied to the group of typography elements when `row={true}`. */
    typographyRow: {
      flexDirection: 'row',
    },
    /* Styles applied to the group of typography elements when `flexWrap='wrap'`. */
    typographyWrap: {
      flexWrap: 'wrap',
    },
    /* Styles applied to the group of typography elements when `flexWrap='wrap-reverse'`. */
    typographyWrapReverse: {
      flexWrap: 'wrap-reverse',
    },
    /* Styles applied to the primary element. */
    primary: {},
    /* Styles applied to the primary action element. */
    leadingAction: {
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
    /* Styles applied to the primary typography element when secondary is also supplied. */
    primaryWithSecondary: {
      fontWeight: 600,
    },
    /* Styles applied to the secondary typography element. */
    secondary: {},
    /* Styles applied to the secondary action element. */
    trailingAction: {
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
    /* Styles applied to the secondary action element when `alignItems='flex-start'`. */
    trailingActionFlexStart: {
      top: 0,
      transform: 'none',
    },
    /* Styles applied to the tertiary typography element. */
    tertiary: {
      // set `opacity` instead of `color` so that `color="inherit"` can work
      opacity: 0.86, // average alpha of color blending body (N500) to subdued (N400)
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
    /* Styles applied to the trailing element, usually an avatar or icon. */
    trailingEl: {
      display: 'inline-flex',
      flexShrink: 0,
      maxWidth: '100%',
      // for icon
      color: 'inherit',
      fontSize: theme.unstable_typography.pxToRem(24),
    },
  }),
  { name: 'MuiSparkUnstable_ContentGroup' }
);

const Unstable_ContentGroup: OverridableComponent<Unstable_ContentGroupTypeMap> = forwardRef(
  function Unstable_ContentGroup(props, ref) {
    const {
      alignItems = 'flex-start',
      color = 'standard',
      classes: classesProp,
      disablePadding = false,
      flexWrap = 'nowrap',
      leadingAction,
      leadingEl,
      inset = false,
      primary,
      primaryTypographyProps,
      row = false,
      secondary,
      secondaryTypographyProps,
      tertiary,
      tertiaryTypographyProps,
      trailingAction,
      trailingEl,
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

    return (
      <div
        className={clsx(classes.root, classesProp?.root, {
          [clsx(classes.alignItemsBaseline, classesProp?.alignItemsBaseline)]:
            alignItems === 'baseline',
          [clsx(classes.alignItemsCenter, classesProp?.alignItemsCenter)]:
            alignItems === 'center',
          [clsx(classes.alignItemsFlexEnd, classesProp?.alignItemsFlexEnd)]:
            alignItems === 'flex-end',
          [clsx(classes.alignItemsStretch, classesProp?.alignItemsStretch)]:
            alignItems === 'stretch',
          [clsx(
            classes.disablePadding,
            classesProp?.disablePadding
          )]: disablePadding,
          [clsx(classes.colorInherit, classesProp?.colorInherit)]:
            color === 'inherit',
          [clsx(classes.wrap, classesProp?.wrap)]: flexWrap === 'wrap',
          [clsx(classes.wrapReverse, classesProp?.wrapReverse)]:
            flexWrap === 'wrap-reverse',
        })}
        ref={ref}
        {...other}
      >
        {leadingAction ? (
          <span
            className={clsx(classes.leadingAction, classesProp?.leadingAction)}
          >
            {leadingAction}
          </span>
        ) : null}
        {leadingEl ? (
          <span className={clsx(classes.leadingEl, classesProp?.leadingEl)}>
            {leadingEl}
          </span>
        ) : null}
        <span
          className={clsx(classes.typography, classesProp?.typography, {
            [clsx(classes.typographyRow, classesProp?.typographyRow)]: row,
            [clsx(
              classes.typographyInset,
              classesProp?.typographyInset
            )]: inset,
            [clsx(classes.typographyWrap, classesProp?.typographyWrap)]:
              flexWrap === 'wrap',
            [clsx(
              classes.typographyWrapReverse,
              classesProp?.typographyWrapReverse
            )]: flexWrap === 'wrap-reverse',
          })}
        >
          <Unstable_Typography
            className={clsx(classes.primary, classesProp?.primary, {
              [clsx(
                classes.primaryWithSecondary,
                classesProp?.primaryWithSecondary
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
            {primary}
          </Unstable_Typography>
          {secondary ? (
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
          ) : null}
          {tertiary ? (
            <Unstable_Typography
              className={clsx(classes.tertiary, classesProp?.tertiary)}
              color="inherit"
              component="p"
              id={tertiaryId}
              variant="description"
              {...tertiaryTypographyProps}
            >
              {tertiary}
            </Unstable_Typography>
          ) : null}
        </span>
        {trailingEl ? (
          <span className={clsx(classes.trailingEl, classesProp?.trailingEl)}>
            {trailingEl}
          </span>
        ) : null}
        {trailingAction ? (
          <span
            className={clsx(
              classes.trailingAction,
              classesProp?.trailingAction
            )}
          >
            {trailingAction}
          </span>
        ) : null}
      </div>
    );
  }
);

export default Unstable_ContentGroup;
