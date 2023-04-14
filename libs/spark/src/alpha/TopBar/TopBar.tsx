import type { AppBarProps as MuiAppBarProps } from '@material-ui/core/AppBar';
import { default as MuiAppBar } from '@material-ui/core/AppBar';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import type { StandardProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface TopBarProps
  extends StandardProps<
    MuiAppBarProps,
    TopBarClassKey,
    'classes' | 'color' | 'elevation' | 'square' | 'variant'
  > {
  /**
   * The color of the component.
   */
  color?: 'standard' | 'inverse' | 'brand' | 'transparent' | 'alternative';
}

export type TopBarClassKey = 'root';

type PrivateClassKey =
  | 'private-root-color-alternative'
  | 'private-root-color-inverse'
  | 'private-root-color-brand'
  | 'private-root-color-standard'
  | 'private-root-color-transparent';

const styles: Styles<TopBarClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    borderBottom: theme.borders_alpha.standard,
    borderColor: theme.palette_alpha.neutral[80],
    minHeight: 64,
    [theme.breakpoints.down('sm')]: {
      minHeight: 48,
    },
  },
  /* Private */
  'private-root-color-alternative': {
    backgroundColor: theme.palette_alpha.background.alternative,
  },
  'private-root-color-brand': {
    backgroundColor: theme.palette_alpha.background.brand,
    borderColor: theme.palette_alpha.neutral[600],
  },
  'private-root-color-inverse': {
    backgroundColor: theme.palette_alpha.background.inverse,
    borderColor: theme.palette_alpha.neutral[0],
  },
  'private-root-color-standard': {
    backgroundColor: theme.palette_alpha.background.default,
  },
  'private-root-color-transparent': {
    backgroundColor: 'transparent',
  },
});

const UnstyledTopBar = forwardRef<HTMLDivElement, TopBarProps>(function TopBar(
  props,
  ref
) {
  const { classes, color = 'standard', ...other } = props;

  return (
    <MuiAppBar
      classes={{
        root: clsx(classes.root, {
          [classes['private-root-color-alternative']]: color === 'alternative',
          [classes['private-root-color-brand']]: color === 'brand',
          [classes['private-root-color-inverse']]: color === 'inverse',
          [classes['private-root-color-standard']]: color === 'standard',
          [classes['private-root-color-transparent']]: color === 'transparent',
        }),
      }}
      elevation={0}
      ref={ref}
      {...other}
    />
  );
});

const TopBar = withStyles(styles, {
  name: 'MuiSpark_alpha_TopBar',
})(UnstyledTopBar) as typeof UnstyledTopBar;

export default TopBar;
