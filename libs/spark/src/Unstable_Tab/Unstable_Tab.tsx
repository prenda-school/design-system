import MuiTab, { TabProps as MuiTabProps } from '@material-ui/core/Tab';
import clsx from 'clsx';
import React, { ElementType, forwardRef } from 'react';
import { ButtonBaseTypeMap } from '../ButtonBase';
import { useTabsContext } from '../Unstable_Tabs';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_TabTypeMap<
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
  classKey: Unstable_TabClassKey;
}

export type Unstable_TabProps<
  D extends ElementType = Unstable_TabTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_TabTypeMap<P, D>, D>;

export type Unstable_TabClassKey = 'root' | 'label';

type PrivateClassKey =
  | 'private-root-disabled'
  | 'private-root-orientation-horizontal'
  | 'private-root-orientation-vertical'
  | 'private-label-disabled'
  | 'private-label-orientation-horizontal'
  | 'private-label-orientation-vertical';

const styles: Styles<Unstable_TabClassKey | PrivateClassKey> = (theme) => ({
  root: {
    minHeight: 'unset',
    maxWidth: 'unset',
    minWidth: 'unset',
    // override v1
    border: 'none',
    borderRadius: 0,
    // override MUI defaults
    '&&': {
      opacity: 1,
    },
  },
  label: {
    ...theme.unstable_typography.label,
    color: theme.unstable_palette.text.body,
    textTransform: 'none',
  },
  'private-root-disabled': {
    '&:hover': {
      boxShadow: 'none',
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
      borderRadius: 8,
      boxShadow: `0px 0px 2px 4px ${theme.unstable_palette.teal[300]}`,
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
      borderRadius: 8,
      boxShadow: `0px 0px 2px 4px ${theme.unstable_palette.teal[300]}`,
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

const Unstable_Tab: OverridableComponent<Unstable_TabTypeMap> = forwardRef(
  function Unstable_Tab(props, ref) {
    const { children, classes, disabled, selected, ...other } = props;

    const context = useTabsContext();
    if (context === null) {
      throw new Error('No TabsContext provided');
    }

    return (
      <MuiTab
        classes={{
          root: clsx(
            classes.root,
            classes[`private-root-orientation-${context.orientation}`],
            {
              [classes['private-root-disabled']]: disabled,
            }
          ),
          wrapper: clsx(
            classes.label,
            classes[`private-label-orientation-${context.orientation}`],
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
  }
);

export default withStyles(styles, {
  name: 'MuiSparkUnstable_Tab',
})(Unstable_Tab) as typeof Unstable_Tab;
