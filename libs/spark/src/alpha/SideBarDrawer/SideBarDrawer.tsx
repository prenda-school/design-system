import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import React from 'react';
import type { DrawerClassKey, DrawerProps } from '../Drawer';
import Drawer from '../Drawer';
import useMediaQuery from '../useMediaQuery';
import useSideBar from '../useSideBar';
import type { StandardProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SideBarDrawerProps
  extends StandardProps<DrawerProps, SideBarDrawerClassKey, 'classes'> {
  ContainerProps?: HTMLAttributes<HTMLDivElement>;
}

export type SideBarDrawerClassKey = DrawerClassKey | 'container';

type PrivateClassKey = 'private-container-closed' | 'private-container-open';

const styles: Styles<SideBarDrawerClassKey | PrivateClassKey> = (theme) => ({
  root: {},
  paper: {
    padding: '8px 0',
  },
  container: {},
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
});

const UnstyledSideBarDrawer = (props: SideBarDrawerProps) => {
  const {
    classes: classesProp,
    ContainerProps,
    variant: variantProp,
    width: widthProp = 256,
    ...other
  } = props;

  const classes = classesProp as Exclude<typeof classesProp, undefined> &
    Record<PrivateClassKey, string>;

  const sideBar = useSideBar();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  if (sideBar === null) {
    throw new Error('Missing SideBarProvider');
  }

  const handleClose = () => {
    sideBar.close();
  };

  const variant: SideBarDrawerProps['variant'] =
    variantProp !== undefined
      ? variantProp
      : isMobile
      ? 'temporary'
      : 'persistent';

  const containerWidth = isMobile ? 0 : sideBar.isOpen ? widthProp : 0;
  const drawerWidth = widthProp;

  return (
    <div
      style={{ width: containerWidth }}
      {...ContainerProps}
      className={clsx(
        classes.container,
        {
          [classes['private-container-closed']]: !sideBar.isOpen,
          [classes['private-container-open']]: sideBar.isOpen,
        },
        ContainerProps?.className
      )}
    >
      <Drawer
        anchor="left"
        open={sideBar.isOpen}
        onClose={handleClose}
        variant={variant}
        classes={{
          root: classes.root,
          paper: classes.paper,
        }}
        width={drawerWidth}
        {...other}
      />
    </div>
  );
};

const SideBarDrawer = withStyles(styles, {
  name: 'MuiSpark_alpha_SideBarDrawer',
})(UnstyledSideBarDrawer) as typeof UnstyledSideBarDrawer;

export default SideBarDrawer;
