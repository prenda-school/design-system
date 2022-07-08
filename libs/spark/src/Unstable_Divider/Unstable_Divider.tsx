import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiDivider,
  DividerProps as MuiDividerProps,
} from '@material-ui/core/Divider';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';

export interface Unstable_DividerTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'hr'
> {
  props: P &
    Omit<MuiDividerProps, 'classes' | 'light'> & {
      /**
       * Apply a darker color.
       */
      darker?: boolean;
    };
  defaultComponent: D;
  classKey: Unstable_DividerClassKey;
}

export type Unstable_DividerProps<
  D extends ElementType = Unstable_DividerTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_DividerTypeMap<P, D>, D>;

export type Unstable_DividerClassKey =
  | 'root'
  | 'rootDarker'
  | 'rootInset'
  | 'rootMiddle';

const useStyles = makeStyles<Unstable_DividerClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.unstable_palette.neutral[80],
      display: 'block',
    },
    /* Styles applied to the root element if `darker={true}`. */
    rootDarker: {
      backgroundColor: theme.unstable_palette.neutral[90],
    },
    /* Styles applied to the root element if `variant='inset'`. */
    rootInset: {
      marginLeft: 'unset',
      marginInlineStart: 40,
    },
    /* Styles applied to the root element if `variant='middle'`. */
    rootMiddle: {
      marginLeft: 'unset',
      marginInlineEnd: 16,
      marginInlineStart: 16,
      marginRight: 'unset',
    },
  }),
  { name: 'MuiSparkUnstable_Divider' }
);

const Unstable_Divider: OverridableComponent<Unstable_DividerTypeMap> = forwardRef(
  function Unstable_Divider(props, ref) {
    const { classes: classesProp, darker, ...other } = props;

    const classes = useStyles();

    return (
      <MuiDivider
        classes={{
          root: clsx(classes.root, classesProp?.root, {
            [clsx(classes.rootDarker, classesProp?.rootDarker)]: darker,
          }),
          inset: clsx(classes.rootInset, classesProp?.rootInset),
          middle: clsx(classes.rootMiddle, classesProp?.rootMiddle),
        }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_Divider;
