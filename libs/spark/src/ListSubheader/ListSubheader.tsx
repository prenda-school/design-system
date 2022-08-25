import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import { OverridableComponent, OverrideProps } from '../utils';
import makeStyles from '../makeStyles';

export interface ListSubheaderTypeMap<
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
  classKey: ListSubheaderClassKey;
}

export type ListSubheaderClassKey = 'root' | 'rootInset' | 'rootSticky';

export type ListSubheaderProps<
  D extends ElementType = ListSubheaderTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<ListSubheaderTypeMap<P, D>, D>;

const useStyles = makeStyles<ListSubheaderClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      ...theme.typography.description,
      alignItems: 'center',
      color: theme.palette.text.subdued,
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
  { name: 'MuiPDSListSubheader' }
);
const ListSubheader: OverridableComponent<ListSubheaderTypeMap> = forwardRef(
  function ListSubheader(props, ref) {
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

export default ListSubheader;
