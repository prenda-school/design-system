import MuiTab, { TabProps as MuiTabProps } from '@material-ui/core/Tab';
import clsx from 'clsx';
import React, { ElementType, forwardRef } from 'react';
import { ButtonBaseTypeMap } from '../ButtonBase';
import useTabs from '../useTabs';
import { OverridableComponent, OverrideProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';

export interface TabTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = ButtonBaseTypeMap['defaultComponent']
> {
  props: P &
    Omit<
      MuiTabProps,
      | 'icon'
      | 'label'
      | 'textColor'
      // button base
      | 'centerRipple'
      | 'disableFocusRipple'
      | 'disableRipple'
      | 'disableTouchRipple'
      | 'focusRipple'
      | 'TouchRippleProps'
    >;
  defaultComponent: D;
  classKey: TabClassKey;
}

export type TabProps<
  D extends ElementType = TabTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<TabTypeMap<P, D>, D>;

export type TabClassKey = 'root' | 'label';

type PrivateClassKey =
  | 'private-root-disabled'
  | 'private-root-orientation-horizontal'
  | 'private-root-orientation-vertical'
  | 'private-label-disabled'
  | 'private-label-orientation-horizontal'
  | 'private-label-orientation-vertical';

const styles: Styles<TabClassKey | PrivateClassKey> = (theme) => ({
  root: {
    minHeight: 'unset',
    maxWidth: 'unset',
    minWidth: 'unset',
    // override v1
    border: theme.unstable_borders.none,
    borderRadius: theme.unstable_radii.zero,
    // override MUI defaults
    '&&': {
      opacity: 1,
    },
    textDecoration: 'unset', // override Bootstrap.css
    color: 'unset', // override Bootstrap.css
    '&:focus': {
      outline: 'unset', // override Bootstrap.css
      color: 'unset', // override Bootstrap.css
      textDecoration: 'unset', // override Bootstrap.css
    },
    '&:hover': {
      // override Bootstrap.css
      color: 'unset', // override Bootstrap.css
      textDecoration: 'unset', // override Bootstrap.css
    },
  },
  label: {
    ...theme.unstable_typography.label,
    color: theme.unstable_palette.text.body,
    textTransform: 'none',
  },
  'private-root-disabled': {
    '&:hover': {
      boxShadow: theme.unstable_shadows.none,
    },
  },
  'private-root-orientation-horizontal': {
    padding: '16px 0',
    '&:hover': {
      boxShadow: `inset 0px -2px ${theme.unstable_palette.neutral[100]}`,
    },
    '&:active': {
      zIndex: 2,
      boxShadow: `inset 0px -2px ${theme.unstable_palette.blue[400]}`,
    },
    '&.Mui-focusVisible, &:focus-visible': {
      zIndex: 2,
      borderRadius: theme.unstable_radii.md,
      boxShadow: theme.unstable_shadows.focus,
    },
  },
  'private-root-orientation-vertical': {
    padding: '12px 12px',
    '&:hover': {
      boxShadow: `inset -2px 0 ${theme.unstable_palette.neutral[100]}`,
    },
    '&:active': {
      zIndex: 2,
      boxShadow: `inset -2px 0px ${theme.unstable_palette.blue[400]}`,
    },
    '&.Mui-focusVisible, &:focus-visible': {
      zIndex: 2,
      borderRadius: theme.unstable_radii.md,
      boxShadow: theme.unstable_shadows.focus,
    },
  },
  'private-label-disabled': {
    color: theme.unstable_palette.text.disabled,
  },
  'private-label-orientation-horizontal': {},
  'private-label-orientation-vertical': {
    alignItems: 'flex-start',
  },
});

const Tab: OverridableComponent<TabTypeMap> = forwardRef(function Tab(
  props,
  ref
) {
  const { children, classes, disabled, selected, ...other } = props;

  const tabs = useTabs();
  if (tabs === null) {
    throw new Error('No Tabs provided');
  }

  return (
    <MuiTab
      classes={{
        root: clsx(
          classes.root,
          classes[`private-root-orientation-${tabs.orientation}`],
          {
            [classes['private-root-disabled']]: disabled,
          }
        ),
        wrapper: clsx(
          classes.label,
          classes[`private-label-orientation-${tabs.orientation}`],
          {
            [classes['private-label-disabled']]: disabled,
          }
        ),
      }}
      label={children}
      disabled={disabled}
      selected={selected}
      ref={ref}
      {...other}
      // button base
      disableFocusRipple
      disableRipple
      disableTouchRipple
      focusRipple={false}
    />
  );
});

export default withStyles(styles, {
  name: 'MuiSparkTab',
})(Tab) as typeof Tab;
