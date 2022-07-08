import React, { ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import Unstable_ListSubheader, {
  Unstable_ListSubheaderProps,
} from '../Unstable_ListSubheader';
import { OverridableComponent, OverrideProps, useId } from '../utils';
import makeStyles from '../makeStyles';

export interface Unstable_ListTypeMap<
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
    ListSubheaderProps?: Partial<Unstable_ListSubheaderProps>;
    /**
     * The content of the `ListSubheader` element.
     *
     * Note: this element is also considered the label of the list. To avoid this behavior, avoid using this prop and use the `ListSubheader` component directly.
     */
    subheader?: ReactNode;
  };
  defaultComponent: D;
  classKey: Unstable_ListClassKey;
}

export type Unstable_ListClassKey =
  | 'root'
  | 'rootWithSubheader'
  | 'rootWithPadding';

export type Unstable_ListProps<
  D extends ElementType = Unstable_ListTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_ListTypeMap<P, D>, D>;

const useStyles = makeStyles<Unstable_ListClassKey>(
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
  { name: 'MuiSparkUnstable_List' }
);
const Unstable_List: OverridableComponent<Unstable_ListTypeMap> = forwardRef(
  function Unstable_List(props, ref) {
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
          <Unstable_ListSubheader id={subheaderId} {...ListSubheaderProps}>
            {subheader}
          </Unstable_ListSubheader>
        ) : null}
        {children}
      </Component>
    );
  }
);

export default Unstable_List;
