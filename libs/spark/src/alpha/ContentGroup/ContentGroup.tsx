import React, { ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import Typography, { TypographyProps } from '../Typography';
import { OverridableComponent, OverrideProps, useId } from '../../utils';
import withStyles, { Styles } from '../../withStyles';

export interface ContentGroupTypeMap<
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
    primary: ReactNode;
    /**
     * Props applied to the primary `Typography` element.
     */
    primaryTypographyProps?: TypographyProps<
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
    secondaryTypographyProps?: TypographyProps<
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
    tertiaryTypographyProps?: TypographyProps<
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
  classKey: ContentGroupClassKey;
}

export type ContentGroupProps<
  D extends ElementType = ContentGroupTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<ContentGroupTypeMap<P, D>, D>;

export type ContentGroupClassKey =
  | 'root'
  | 'leadingAction'
  | 'leadingEl'
  | 'typography'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'trailingAction'
  | 'trailingEl';

type PrivateClassKey =
  | 'private-root-alignItems-baseline'
  | 'private-root-alignItems-center'
  | 'private-root-alignItems-flex-end'
  | 'private-root-alignItems-flex-start'
  | 'private-root-alignItems-stretch'
  | 'private-root-color-inherit'
  | 'private-root-color-standard'
  | 'private-root-disablePadding'
  | 'private-root-flexWrap-nowrap'
  | 'private-root-flexWrap-wrap'
  | 'private-root-flexWrap-wrapReverse'
  | 'private-typography-row'
  | 'private-typography-inset'
  | 'private-typography-flexWrap-nowrap'
  | 'private-typography-flexWrap-wrap'
  | 'private-typography-flexWrap-wrapReverse'
  | 'private-primary-secondary';

const styles: Styles<ContentGroupClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    columnGap: 16,
    display: 'flex',
    minHeight: 'unset',
    padding: '8px 16px',
    position: 'relative',
    rowGap: 8,
  },
  /* Styles applied to the leading (primary) action element. */
  leadingAction: {
    display: 'inline-flex',
    flexShrink: 0,
    // marginInlineEnd: 16,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.typography_alpha.pxToRem(24),
    // set minimum so that larger icons can still expand
    minHeight: '1em',
    minWidth: '1em',
  },
  /* Styles applied to the leading element, usually an avatar or icon. */
  leadingEl: {
    display: 'inline-flex',
    flexShrink: 0,
    maxWidth: '100%',
    // for icon
    color: 'inherit',
    fontSize: theme.typography_alpha.pxToRem(24),
  },
  /* Styles applied to the group of typography elements. */
  typography: {
    alignItems: 'baseline',
    columnGap: 8,
    display: 'flex',
    flexDirection: 'column',
  },
  /* Styles applied to the primary typography element. */
  primary: {},
  /* Styles applied to the secondary typography element. */
  secondary: {},
  /* Styles applied to the tertiary typography element. */
  tertiary: {
    // set `opacity` instead of `color` so that `color="inherit"` can work
    opacity: 0.86, // average alpha of color blending body (N500) to subdued (N400)
  },
  /* Styles applied to the trailing (secondary) action element. */
  trailingAction: {
    display: 'inline-flex',
    flexShrink: 0,
    // marginInlineEnd: 16,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.typography_alpha.pxToRem(24),
    // set minimum so that larger icons can still expand
    minHeight: '1em',
    minWidth: '1em',
  },
  /* Styles applied to the trailing element, usually an avatar or icon. */
  trailingEl: {
    display: 'inline-flex',
    flexShrink: 0,
    maxWidth: '100%',
    // for icon
    color: 'inherit',
    fontSize: theme.typography_alpha.pxToRem(24),
  },
  /* Private */
  'private-root-alignItems-baseline': {
    alignItems: 'baseline',
  },
  'private-root-alignItems-center': {
    alignItems: 'center',
  },
  'private-root-alignItems-flex-end': {
    alignItems: 'flex-end',
  },
  'private-root-alignItems-flex-start': {
    alignItems: 'flex-start',
  },
  'private-root-alignItems-stretch': {
    alignItems: 'stretch',
  },
  'private-root-color-inherit': {
    color: 'inherit',
  },
  'private-root-color-standard': {
    color: theme.palette_alpha.text.body,
  },
  'private-root-disablePadding': {
    padding: 0,
  },
  'private-root-flexWrap-nowrap': {
    flexWrap: 'nowrap',
  },
  'private-root-flexWrap-wrap': {
    flexWrap: 'wrap',
  },
  'private-root-flexWrap-wrapReverse': {
    flexWrap: 'wrap-reverse',
  },
  'private-typography-row': {
    flexDirection: 'row',
  },
  'private-typography-inset': {
    paddingInlineStart: 40,
  },
  'private-typography-flexWrap-nowrap': {
    flexWrap: 'nowrap',
  },
  'private-typography-flexWrap-wrap': {
    flexWrap: 'wrap',
  },
  'private-typography-flexWrap-wrapReverse': {
    flexWrap: 'wrap-reverse',
  },
  'private-primary-secondary': {
    fontWeight: 600,
  },
});

const ContentGroup: OverridableComponent<ContentGroupTypeMap> = forwardRef(
  function ContentGroup(props, ref) {
    const {
      alignItems = 'flex-start',
      color = 'standard',
      classes,
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
        className={clsx(
          classes.root,
          classes[`private-root-alignItems-${alignItems}`],
          classes[`private-root-color-${color}`],
          classes[`private-root-flexWrap-${flexWrap}`],
          {
            [classes['private-root-disablePadding']]: disablePadding,
          }
        )}
        ref={ref}
        {...other}
      >
        {leadingAction ? (
          <span className={classes.leadingAction}>{leadingAction}</span>
        ) : null}
        {leadingEl ? (
          <span className={classes.leadingEl}>{leadingEl}</span>
        ) : null}
        <span
          className={clsx(
            classes.typography,
            classes[`private-typography-flexWrap-${flexWrap}`],
            {
              [classes['private-typography-row']]: row,
              [classes['private-typography-inset']]: inset,
            }
          )}
        >
          <Typography
            className={clsx(classes.primary, {
              [classes['private-primary-secondary']]: !!secondary,
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
          </Typography>
          {secondary ? (
            <Typography
              className={classes.secondary}
              color="inherit"
              component="p"
              id={secondaryId}
              variant="body"
              {...secondaryTypographyProps}
            >
              {secondary}
            </Typography>
          ) : null}
          {tertiary ? (
            <Typography
              className={classes.tertiary}
              color="inherit"
              component="p"
              id={tertiaryId}
              variant="description"
              {...tertiaryTypographyProps}
            >
              {tertiary}
            </Typography>
          ) : null}
        </span>
        {trailingEl ? (
          <span className={classes.trailingEl}>{trailingEl}</span>
        ) : null}
        {trailingAction ? (
          <span className={classes.trailingAction}>{trailingAction}</span>
        ) : null}
      </div>
    );
  }
);

export default withStyles(styles, { name: 'MuiSpark_alpha_ContentGroup' })(
  ContentGroup
) as typeof ContentGroup;
