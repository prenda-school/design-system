import type { TabProps as MuiTabProps } from '@material-ui/core/Tab';
import MuiTab from '@material-ui/core/Tab';
import clsx from 'clsx';
import type { ElementType } from 'react';
import React, { forwardRef } from 'react';
import type { ButtonBaseTypeMap } from '../../ButtonBase';
import useTabs from '../useTabs';
import type { OverridableComponent, OverrideProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

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
    border: theme.borders_alpha.none,
    borderRadius: theme.radii_alpha.zero,
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
    ...theme.typography_alpha.label,
    color: theme.palette_alpha.text.body,
    textTransform: 'none',
  },
  'private-root-disabled': {
    '&:hover': {
      boxShadow: theme.shadows_alpha.none,
    },
  },
  'private-root-orientation-horizontal': {
    padding: '16px 0',
    '&:hover': {
      boxShadow: `inset 0px -2px ${theme.palette_alpha.neutral[100]}`,
    },
    '&:active': {
      zIndex: 2,
      boxShadow: `inset 0px -2px ${theme.palette_alpha.blue[400]}`,
    },
    '&.Mui-focusVisible, &:focus-visible': {
      zIndex: 2,
      borderRadius: theme.radii_alpha.md,
      boxShadow: theme.shadows_alpha.focus,
    },
  },
  'private-root-orientation-vertical': {
    padding: '12px 12px',
    '&:hover': {
      boxShadow: `inset -2px 0 ${theme.palette_alpha.neutral[100]}`,
    },
    '&:active': {
      zIndex: 2,
      boxShadow: `inset -2px 0px ${theme.palette_alpha.blue[400]}`,
    },
    '&.Mui-focusVisible, &:focus-visible': {
      zIndex: 2,
      borderRadius: theme.radii_alpha.md,
      boxShadow: theme.shadows_alpha.focus,
    },
  },
  'private-label-disabled': {
    color: theme.palette_alpha.text.disabled,
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
  name: 'MuiSpark_alpha_Tab',
})(Tab) as typeof Tab;
