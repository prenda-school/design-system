import clsx from 'clsx';
import React, { ElementType, forwardRef } from 'react';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';

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

export type Unstable_InputAdornmentClassKey = 'root';

export type Unstable_InputAdornmentProps<
  D extends ElementType = Unstable_InputAdornmentTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_InputAdornmentTypeMap<P, D>, D>;

const useStyles = makeStyles<Unstable_InputAdornmentClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: (props: Unstable_InputAdornmentProps) => ({
      /** Styles from Mui */
      display: 'flex',
      alignItems: 'flex-start',
      whiteSpace: 'nowrap',
      /** PDS styles */
      fontSize: theme.unstable_typography.pxToRem(24),
      lineHeight: 1,
      alignSelf: 'flex-start', // un-center in multiline input
      marginTop: 12, // shift-down in multiline input (= half of typical icon height + input top margin)
      /* Styles applied to the root element if `position="start"`. */
      ...(props.position === 'start' && {
        marginRight: 2,
      }),
      /* Styles applied to the root element if `position="end"`. */
      ...(props.position === 'end' && {
        marginLeft: 2,
      }),
      ...(typeof props.children === 'string' && {
        ...theme.unstable_typography.body,
      }),
    }),
  }),
  { name: 'MuiSparkUnstable_InputAdornment' }
);

const Unstable_InputAdornment: OverridableComponent<Unstable_InputAdornmentTypeMap> = forwardRef(
  function Unstable_InputAdornment(props, ref) {
    const {
      children,
      classes: classesProp,
      className,
      // @ts-expect-error prop does not exist :/
      component: Component = 'div',
      position,
      ...other
    } = props;

    const classes = useStyles({ position, children });

    return (
      <Component
        className={clsx(classes.root, classesProp?.root, className)}
        ref={ref}
        {...other}
      >
        {children}
      </Component>
    );
  }
);

export default Unstable_InputAdornment;
