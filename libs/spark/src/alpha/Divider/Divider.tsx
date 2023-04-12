import React, { ElementType, forwardRef } from 'react';
import {
  default as MuiDivider,
  DividerProps as MuiDividerProps,
} from '@material-ui/core/Divider';
import { OverridableComponent, OverrideProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';
import clsx from 'clsx';

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

export type DividerClassKey = 'root';

type PrivateClassKey =
  | 'private-root-darker'
  | 'private-root-inset'
  | 'private-root-middle';

const styles: Styles<DividerClassKey | PrivateClassKey> = (theme) => ({
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

const Divider: OverridableComponent<DividerTypeMap> = forwardRef(
  function Divider(props, ref) {
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
  }
);

export default withStyles(styles, { name: 'MuiSpark_alpha_Divider' })(
  Divider
) as typeof Divider;
