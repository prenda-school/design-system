import React, { ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import Unstable_ListSubheader, {
  Unstable_ListSubheaderProps,
} from '../Unstable_ListSubheader';
import { OverridableComponent, OverrideProps, useId } from '../utils';
import withStyles, { Styles } from '../withStyles';

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

export type Unstable_ListProps<
  D extends ElementType = Unstable_ListTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_ListTypeMap<P, D>, D>;

export type Unstable_ListClassKey = 'root';

type PrivateClassKey = 'private-root-subheader' | 'private-root-padding';

const styles: Styles<Unstable_ListClassKey | PrivateClassKey> = {
  /* Styles applied to the root element. */
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  /* Private */
  'private-root-subheader': {
    paddingBlockStart: 0,
  },
  'private-root-padding': {
    paddingBlockStart: 8,
    paddingBlockEnd: 8,
  },
};
const Unstable_List: OverridableComponent<Unstable_ListTypeMap> = forwardRef(
  function Unstable_List(props, ref) {
    const {
      children,
      classes,
      className,
      // @ts-expect-error not picked up
      component: Component = 'ul',
      disablePadding = false,
      ListSubheaderProps,
      subheader,
      ...other
    } = props;

    const subheaderId = useId(ListSubheaderProps?.id);

    return (
      <Component
        className={clsx(
          classes.root,
          {
            [classes['private-root-subheader']]: !!subheader,
            [classes['private-root-padding']]: !disablePadding,
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

export default withStyles(styles, { name: 'MuiSparkUnstable_List' })(
  Unstable_List
) as typeof Unstable_List;
