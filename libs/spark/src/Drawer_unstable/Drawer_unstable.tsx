import {
  default as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from '@material-ui/core/Drawer';
import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import { StandardProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface DrawerProps_unstable
  extends StandardProps<
    MuiDrawerProps,
    DrawerClassKey_unstable,
    'classes' | 'elevation'
  > {
  /**
   * The background color of the component.
   */
  bgcolor?: 'standard' | 'alternative' | 'inverse' | 'brand';
  /**
   * The width of the component.
   */
  width?: CSSProperties['width'];
}

export type DrawerClassKey_unstable = 'root' | 'paper';

type PrivateClassKey =
  | 'private-paper-bgcolor-standard'
  | 'private-paper-bgcolor-alternative'
  | 'private-paper-bgcolor-brand'
  | 'private-paper-bgcolor-inverse'
  | 'private-paper-variant-temporary';

const styles: Styles<DrawerClassKey_unstable | PrivateClassKey> = (theme) => ({
  root: {},
  paper: {
    paddingTop: 8,
  },
  'private-container-closed': {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'private-container-open': {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'private-paper-bgcolor-standard': {
    backgroundColor: theme.unstable_palette.background.default,
  },
  'private-paper-bgcolor-alternative': {
    backgroundColor: theme.unstable_palette.background.alternative,
  },
  'private-paper-bgcolor-brand': {
    backgroundColor: theme.unstable_palette.background.brand,
  },
  'private-paper-bgcolor-inverse': {
    backgroundColor: theme.unstable_palette.background.inverse,
  },
  'private-paper-variant-temporary': {
    boxShadow: theme.unstable_shadows.E300,
  },
});

const UnstyledDrawer_unstable = (props: DrawerProps_unstable) => {
  const { bgcolor, classes: classesProp, variant, width, ...other } = props;

  const classes = classesProp as Exclude<typeof classesProp, undefined> &
    Record<PrivateClassKey, string>;

  return (
    <MuiDrawer
      elevation={0}
      classes={{
        root: classes.root,
        paper: clsx(classes.paper, {
          [classes['private-paper-bgcolor-alternative']]:
            bgcolor === 'alternative',
          [classes['private-paper-bgcolor-brand']]: bgcolor === 'brand',
          [classes['private-paper-bgcolor-inverse']]: bgcolor === 'inverse',
          [classes['private-paper-bgcolor-standard']]: bgcolor === 'standard',
          [classes['private-paper-variant-temporary']]: variant === 'temporary',
        }),
      }}
      PaperProps={{
        style: { width, ...other?.PaperProps?.style },
        ...other?.PaperProps,
      }}
      style={{ width, ...other?.style }}
      variant={variant}
      {...other}
    />
  );
};

const Drawer_unstable = withStyles(styles, {
  name: 'MuiSparkDrawer_unstable',
})(UnstyledDrawer_unstable) as typeof UnstyledDrawer_unstable;

export default Drawer_unstable;