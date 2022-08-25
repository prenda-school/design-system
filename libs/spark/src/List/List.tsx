import React, { ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import ListSubheader, { ListSubheaderProps } from '../ListSubheader';
import { OverridableComponent, OverrideProps, useId } from '../utils';
import makeStyles from '../makeStyles';

export interface ListTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'ul'
> {
  props: P & {
    /** Remove vertical padding from the list. */
    disablePadding?: boolean;
    /**
     * Props applied to the `ListSubheader` element.
     */
    ListSubheaderProps?: Partial<ListSubheaderProps>;
    /**
     * The content of the `ListSubheader` element.
     *
     * Note: this element is also considered the label of the list. To avoid this behavior, avoid using this prop and use the `ListSubheader` component directly.
     */
    subheader?: ReactNode;
  };
  defaultComponent: D;
  classKey: ListClassKey;
}

export type ListClassKey = 'root' | 'rootWithSubheader' | 'rootWithPadding';

export type ListProps<
  D extends ElementType = ListTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<ListTypeMap<P, D>, D>;

const useStyles = makeStyles<ListClassKey>(
  {
    /* Styles applied to the root element. */
    root: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      position: 'relative',
    },
    /* Styles applied to the root element when a `subheader` is provided. */
    rootWithSubheader: {
      paddingBlockStart: 0,
    },
    /* Styles applied to the root element if `disablePadding={false}`. */
    rootWithPadding: {
      paddingBlockStart: 8,
      paddingBlockEnd: 8,
    },
  },
  { name: 'MuiPDSList' }
);
const List: OverridableComponent<ListTypeMap> = forwardRef(function List(
  props,
  ref
) {
  const {
    children,
    classes: classesProp,
    className,
    // @ts-expect-error not picked up
    component: Component = 'ul',
    disablePadding = false,
    ListSubheaderProps,
    subheader,
    ...other
  } = props;

  const classes = useStyles();

  const subheaderId = useId(ListSubheaderProps?.id);

  return (
    <Component
      className={clsx(
        classes.root,
        classesProp?.root,
        {
          [clsx(
            classes.rootWithSubheader,
            classesProp?.rootWithSubheader
          )]: !!subheader,
          [clsx(
            classes.rootWithPadding,
            classesProp?.rootWithPadding
          )]: !disablePadding,
        },
        className
      )}
      ref={ref}
      {...(subheader && { 'aria-labelledby': subheaderId })}
      {...other}
    >
      {subheader ? (
        <ListSubheader id={subheaderId} {...ListSubheaderProps}>
          {subheader}
        </ListSubheader>
      ) : null}
      {children}
    </Component>
  );
});

export default List;
