import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles from '../withStyles';

export interface Unstable_ListSubheaderTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'li'
> {
  props: P & {
    /**
     * Disable sticking to the top during scroll.
     */
    disableSticky?: boolean;
    /**
     * Indent the content.
     */
    inset?: boolean;
  };
  defaultComponent: D;
  classKey: Unstable_ListSubheaderClassKey;
}

export type Unstable_ListSubheaderProps<
  D extends ElementType = Unstable_ListSubheaderTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_ListSubheaderTypeMap<P, D>, D>;

export type Unstable_ListSubheaderClassKey = 'root';

type PrivateClassKey = 'private-root-inset' | 'private-root-sticky';

const withClasses = withStyles<
  Unstable_ListSubheaderClassKey | PrivateClassKey
>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      ...theme.unstable_typography.description,
      alignItems: 'center',
      color: theme.unstable_palette.text.subdued,
      display: 'flex',
      fontWeight: 600,
      height: 40,
      listStyle: 'none',
      paddingInlineStart: 16,
    },
    /* Private */
    'private-root-inset': {
      paddingInlineStart: 40,
    },
    'private-root-sticky': {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: 'inherit',
    },
  }),
  { name: 'MuiSparkUnstable_ListSubheader' }
);

const Unstable_ListSubheader: OverridableComponent<Unstable_ListSubheaderTypeMap> = forwardRef(
  function Unstable_ListSubheader(props, ref) {
    const {
      classes,
      className,
      // @ts-expect-error not picked up
      component: Component = 'li',
      disableSticky = false,
      inset = false,
      ...other
    } = props;

    return (
      <Component
        className={clsx(
          classes.root,
          {
            [classes['private-root-inset']]: inset,
            [classes['private-root-sticky']]: !disableSticky,
          },
          className
        )}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withClasses(
  Unstable_ListSubheader
) as typeof Unstable_ListSubheader;
