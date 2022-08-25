import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import { OverridableComponent, OverrideProps } from '../utils';
import makeStyles from '../makeStyles';

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

export type Unstable_ListSubheaderClassKey =
  | 'root'
  | 'rootInset'
  | 'rootSticky';

export type Unstable_ListSubheaderProps<
  D extends ElementType = Unstable_ListSubheaderTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_ListSubheaderTypeMap<P, D>, D>;

const useStyles = makeStyles<Unstable_ListSubheaderClassKey>(
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
    /* Styles applied to the root element if `inset={true}`. */
    rootInset: {
      paddingInlineStart: 40,
    },
    /* Styles applied to the root element if `disableSticky={false}`. */
    rootSticky: {
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
      classes: classesProp,
      className,
      // @ts-expect-error not picked up
      component: Component = 'li',
      disableSticky = false,
      inset = false,
      ...other
    } = props;

    const classes = useStyles();

    return (
      <Component
        className={clsx(
          classes.root,
          classesProp?.root,
          {
            [clsx(classes.rootInset, classesProp?.rootInset)]: inset,
            [clsx(classes.rootSticky, classesProp?.rootSticky)]: !disableSticky,
          },
          className
        )}
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_ListSubheader;
