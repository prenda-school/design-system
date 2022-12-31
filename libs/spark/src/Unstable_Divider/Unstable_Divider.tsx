import React, { ElementType, forwardRef } from 'react';
import {
  default as MuiDivider,
  DividerProps as MuiDividerProps,
} from '@material-ui/core/Divider';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';
import clsx from 'clsx';

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

export type Unstable_DividerClassKey = 'root';

type PrivateClassKey =
  | 'private-root-darker'
  | 'private-root-inset'
  | 'private-root-middle';

const styles: Styles<Unstable_DividerClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    backgroundColor: theme.unstable_palette.neutral[80],
    display: 'block',
  },
  /* Private */
  'private-root-darker': {
    backgroundColor: theme.unstable_palette.neutral[90],
  },
  'private-root-inset': {
    marginLeft: 'unset',
    marginInlineStart: 40,
  },
  'private-root-middle': {
    marginLeft: 'unset',
    marginInlineEnd: 16,
    marginInlineStart: 16,
    marginRight: 'unset',
  },
});

const Unstable_Divider: OverridableComponent<Unstable_DividerTypeMap> =
  forwardRef(function Unstable_Divider(props, ref) {
    const { classes, darker, ...other } = props;

    return (
      <MuiDivider
        classes={{
          root: clsx(classes.root, {
            [classes['private-root-darker']]: darker,
          }),
          inset: classes['private-root-inset'],
          middle: classes['private-root-middle'],
        }}
        ref={ref}
        {...other}
      />
    );
  });

export default withStyles(styles, { name: 'MuiSparkUnstable_Divider' })(
  Unstable_Divider
) as typeof Unstable_Divider;
