import {
  default as MuiAppBar,
  AppBarProps as MuiAppBarProps,
} from '@material-ui/core/AppBar';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { StandardProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface TopBarProps_unstable
  extends StandardProps<
    MuiAppBarProps,
    TopBarClassKey_unstable,
    'classes' | 'color' | 'elevation' | 'square' | 'variant'
  > {
  /**
   * The color of the component.
   */
  color?: 'standard' | 'inverse' | 'brand' | 'transparent' | 'alternative';
}

export type TopBarClassKey_unstable = 'root';

type PrivateClassKey =
  | 'private-root-color-alternative'
  | 'private-root-color-inverse'
  | 'private-root-color-brand'
  | 'private-root-color-standard'
  | 'private-root-color-transparent';

const styles: Styles<TopBarClassKey_unstable | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    borderBottom: theme.unstable_borders.standard,
    borderColor: theme.unstable_palette.neutral[80],
    minHeight: 64,
    [theme.breakpoints.down('sm')]: {
      minHeight: 48,
    },
  },
  /* Private */
  'private-root-color-alternative': {
    backgroundColor: theme.unstable_palette.background.alternative,
  },
  'private-root-color-brand': {
    backgroundColor: theme.unstable_palette.background.brand,
    borderColor: theme.unstable_palette.neutral[600],
  },
  'private-root-color-inverse': {
    backgroundColor: theme.unstable_palette.background.inverse,
    borderColor: theme.unstable_palette.neutral[0],
  },
  'private-root-color-standard': {
    backgroundColor: theme.unstable_palette.background.default,
  },
  'private-root-color-transparent': {
    backgroundColor: 'transparent',
  },
});

const UnstyledTopBar = forwardRef<HTMLDivElement, TopBarProps_unstable>(
  function TopBar(props, ref) {
    const { classes, color = 'standard', ...other } = props;

    return (
      <MuiAppBar
        classes={{
          root: clsx(classes.root, {
            [classes['private-root-color-alternative']]:
              color === 'alternative',
            [classes['private-root-color-brand']]: color === 'brand',
            [classes['private-root-color-inverse']]: color === 'inverse',
            [classes['private-root-color-standard']]: color === 'standard',
            [classes['private-root-color-transparent']]:
              color === 'transparent',
          }),
        }}
        elevation={0}
        ref={ref}
        {...other}
      />
    );
  }
);

const TopBar_unstable = withStyles(styles, {
  name: 'MuiSparkTopBar_unstable',
})(UnstyledTopBar) as typeof UnstyledTopBar;

export default TopBar_unstable;
