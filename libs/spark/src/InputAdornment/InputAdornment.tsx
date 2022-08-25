import clsx from 'clsx';
import React, { ElementType, forwardRef } from 'react';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';

export interface InputAdornmentTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P & {
    position: 'start' | 'end';
  };
  defaultComponent: D;
  classKey: InputAdornmentClassKey;
}

export type InputAdornmentClassKey = 'root';

export type InputAdornmentProps<
  D extends ElementType = InputAdornmentTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<InputAdornmentTypeMap<P, D>, D>;

const useStyles = makeStyles<InputAdornmentClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: (props: InputAdornmentProps) => ({
      /* from Mui */
      display: 'flex',
      alignItems: 'flex-start',
      whiteSpace: 'nowrap',
      /* for PDS */
      fontSize: theme.typography.pxToRem(24),
      lineHeight: 1,
      alignSelf: 'flex-start', // un-center in multiline input
      marginTop: 12, // shift-down in multiline input (= half of typical icon height + input top margin)
      /* position */
      ...(props.position === 'start' && {
        marginRight: 2,
      }),
      ...(props.position === 'end' && {
        marginLeft: 2,
      }),
      /* children */
      ...(typeof props.children === 'string' && {
        ...theme.typography.body,
      }),
    }),
  }),
  { name: 'MuiPDSInputAdornment' }
);

const InputAdornment: OverridableComponent<InputAdornmentTypeMap> = forwardRef(
  function InputAdornment(props, ref) {
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

export default InputAdornment;
