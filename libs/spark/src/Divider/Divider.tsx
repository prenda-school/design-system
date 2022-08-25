import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiDivider,
  DividerProps as MuiDividerProps,
} from '@material-ui/core/Divider';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';

export interface DividerTypeMap<
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
  classKey: DividerClassKey;
}

export type DividerProps<
  D extends ElementType = DividerTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<DividerTypeMap<P, D>, D>;

export type DividerClassKey =
  | 'root'
  | 'rootDarker'
  | 'rootInset'
  | 'rootMiddle';

const useStyles = makeStyles<DividerClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.neutral[80],
      display: 'block',
    },
    /* Styles applied to the root element if `darker={true}`. */
    rootDarker: {
      backgroundColor: theme.palette.neutral[90],
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
  { name: 'MuiPDSDivider' }
);

const Divider: OverridableComponent<DividerTypeMap> = forwardRef(
  function Divider(props, ref) {
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

export default Divider;
