import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import Drawer_unstable, {
  DrawerClassKey_unstable,
  DrawerProps_unstable,
} from '../Drawer_unstable';
import useMediaQuery_unstable from '../useMediaQuery_unstable';
import useSideBar_unstable from '../useSideBar_unstable';
import { StandardProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SideBarDrawerProps_unstable
  extends StandardProps<
    DrawerProps_unstable,
    SideBarDrawerClassKey_unstable,
    'classes'
  > {
  ContainerProps?: HTMLAttributes<HTMLDivElement>;
}

export type SideBarDrawerClassKey_unstable =
  | DrawerClassKey_unstable
  | 'container';

type PrivateClassKey = 'private-container-closed' | 'private-container-open';

const styles: Styles<SideBarDrawerClassKey_unstable | PrivateClassKey> = (
  theme
) => ({
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

const UnstyledSideBarDrawer_unstable = (props: SideBarDrawerProps_unstable) => {
  const {
    classes: classesProp,
    ContainerProps,
    variant: variantProp,
    width: widthProp = 256,
    ...other
  } = props;

  const classes = classesProp as Exclude<typeof classesProp, undefined> &
    Record<PrivateClassKey, string>;

  const sideBar = useSideBar_unstable();
  const isMobile = useMediaQuery_unstable((theme) =>
    theme.breakpoints.down('xs')
  );

  if (sideBar === null) {
    throw new Error('Missing SideBarProvider');
  }

  const handleClose = () => {
    sideBar.close();
  };

  const variant: SideBarDrawerProps_unstable['variant'] =
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
      <Drawer_unstable
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

const SideBarDrawer_unstable = withStyles(styles, {
  name: 'MuiSparkSideBarDrawer_unstable',
})(UnstyledSideBarDrawer_unstable) as typeof UnstyledSideBarDrawer_unstable;

export default SideBarDrawer_unstable;
