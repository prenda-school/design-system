import clsx from 'clsx';
import React, { ElementType, forwardRef } from 'react';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_InputAdornmentTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P & {
    position: 'start' | 'end';
  };
  defaultComponent: D;
  classKey: Unstable_InputAdornmentClassKey;
}

export type Unstable_InputAdornmentProps<
  D extends ElementType = Unstable_InputAdornmentTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_InputAdornmentTypeMap<P, D>, D>;

export type Unstable_InputAdornmentClassKey = 'root';

type PrivateClassKey =
  | 'private-root-position-start'
  | 'private-root-position-end'
  | 'private-root-children-string';

const styles: Styles<Unstable_InputAdornmentClassKey | PrivateClassKey> = (
  theme
) => ({
  /* Styles applied to the root element. */
  root: {
    /* from Mui */
    display: 'flex',
    alignItems: 'flex-start',
    whiteSpace: 'nowrap',
    /* for PDS */
    fontSize: theme.unstable_typography.pxToRem(24),
    lineHeight: 1,
    alignSelf: 'flex-start', // un-center in multiline input
    marginTop: 12, // shift-down in multiline input (= half of typical icon height + input top margin)
  },
  'private-root-position-start': {
    marginRight: 2,
  },
  'private-root-position-end': {
    marginLeft: 2,
  },
  'private-root-children-string': {
    ...theme.unstable_typography.body,
  },
});

const Unstable_InputAdornment: OverridableComponent<Unstable_InputAdornmentTypeMap> = forwardRef(
  function Unstable_InputAdornment(props, ref) {
    const {
      children,
      classes,
      className,
      // @ts-expect-error prop does not exist :/
      component: Component = 'div',
      position,
      ...other
    } = props;

    return (
      <Component
        className={clsx(
          classes.root,
          classes[`private-root-position-${position}`],
          {
            [classes['private-root-children-string']]:
              typeof props.children === 'string',
          },
          className
        )}
        ref={ref}
        {...other}
      >
        {children}
      </Component>
    );
  }
);

export default withStyles(styles, { name: 'MuiSparkUnstable_InputAdornment' })(
  Unstable_InputAdornment
) as typeof Unstable_InputAdornment;
