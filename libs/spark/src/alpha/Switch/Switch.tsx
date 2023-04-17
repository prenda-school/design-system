import type { Ref } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { SwitchProps as MuiSwitchProps } from '@material-ui/core/Switch';
import { default as MuiSwitch } from '@material-ui/core/Switch';
import type { StyledComponentProps, Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface SwitchProps
  extends Omit<
      MuiSwitchProps,
      | 'checkedIcon'
      | 'classes'
      | 'color'
      | 'centerRipple'
      | 'disableRipple'
      | 'disableFocusRipple'
      | 'disableTouchRipple'
      | 'edge'
      | 'focusRipple'
      | 'icon'
      | 'size'
      | 'TouchRippleProps'
    >,
    StyledComponentProps<SwitchClassKey> {
  /**
   * If `true`, the component should be displayed in an error state.
   */
  error?: boolean;
  /**
   * The size of the switch.
   */
  size?: 'medium' | 'large';
}

export type SwitchClassKey =
  | 'root'
  | 'checked'
  | 'disabled'
  | 'error'
  | 'input'
  | 'switchBase'
  | 'thumb'
  | 'track';

type PrivateClassKey =
  | 'private-root-size-medium'
  | 'private-root-size-large'
  | 'private-switchBase-size-medium'
  | 'private-switchBase-size-large'
  | 'private-thumb-size-medium'
  | 'private-thumb-size-large'
  | 'private-track-size-medium'
  | 'private-track-size-large';

const styles: Styles<SwitchClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    padding: 4,
  },
  checked: {},
  disabled: {},
  error: {},
  input: {},
  switchBase: {
    '&:hover': {
      backgroundColor: 'unset',
    },
  },
  thumb: {
    backgroundColor: theme.palette_alpha.neutral[0],
    boxShadow: theme.shadows_alpha.E100,
    '$disabled &': {
      backgroundColor: theme.palette_alpha.neutral[90],
      boxShadow: theme.shadows_alpha.none,
    },
  },
  track: {
    backgroundColor: theme.palette_alpha.neutral[80],
    // double specificity to override PDS v1
    '$checked + &&': {
      backgroundColor: theme.palette_alpha.blue[600],
    },
    '$disabled + &&': {
      backgroundColor: theme.palette_alpha.neutral[80],
    },
    '$switchBase:hover + &&': {
      backgroundColor: theme.palette_alpha.neutral[90],
    },
    '$disabled:hover + &&': {
      backgroundColor: theme.palette_alpha.neutral[80],
    },
    '$checked:hover + &&': {
      backgroundColor: theme.palette_alpha.blue[400],
    },
    '$checked$disabled:hover + &&': {
      backgroundColor: theme.palette_alpha.neutral[80],
    },
    /* error */
    '.Mui-error + &&': {
      boxShadow: theme.shadows_alpha.error,
    },
    /* focus-visible */
    '$switchBase:focus-visible + &&, $switchBase.Mui-focusVisible + &&': {
      boxShadow: theme.shadows_alpha.focus,
    },
    // triple specificity to override PDS v1
    '&&&': {
      opacity: 1,
    },
  },
  'private-root-size-medium': {
    height: 24 + 8,
    width: 48 + 8,
  },
  'private-root-size-large': {
    height: 32 + 8,
    width: 56 + 8,
  },
  'private-switchBase-size-medium': {
    padding: 7,
    '&$checked': {
      transform: 'translateX(24px)',
    },
  },
  'private-switchBase-size-large': {
    padding: 8,
    '&$checked': {
      transform: 'translateX(24px)',
    },
  },
  'private-thumb-size-medium': {
    height: 18,
    width: 18,
  },
  'private-thumb-size-large': {
    height: 24,
    width: 24,
  },
  'private-track-size-medium': {
    borderRadius: theme.radii_alpha.full,
    height: 24,
    width: 48,
  },
  'private-track-size-large': {
    borderRadius: theme.radii_alpha.full,
    height: 32,
    width: 56,
  },
});

const Switch = forwardRef<unknown, SwitchProps>(function Switch(props, ref) {
  const { classes, error, size = 'medium', ...other } = props;

  return (
    <MuiSwitch
      classes={{
        root: clsx(classes.root, classes[`private-root-size-${size}`]),
        checked: classes.checked,
        disabled: classes.disabled,
        input: classes.input,
        switchBase: clsx(
          classes.switchBase,
          classes[`private-switchBase-size-${size}`],
          {
            [classes.error]: error,
          }
        ),
        thumb: clsx(classes.thumb, classes[`private-thumb-size-${size}`]),
        track: clsx(classes.track, classes[`private-track-size-${size}`]),
      }}
      color="default"
      disableFocusRipple
      disableRipple
      disableTouchRipple
      focusRipple={false}
      ref={ref as Ref<HTMLButtonElement>}
      {...other}
    />
  );
});

export default withStyles(styles, { name: 'MuiSpark_alpha_Switch' })(
  Switch
) as typeof Switch;
