import React, { forwardRef, Ref } from 'react';
import clsx from 'clsx';
import {
  default as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from '@material-ui/core/Switch';
import withStyles, { StyledComponentProps, Styles } from '../withStyles';

export interface Unstable_SwitchProps
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
    StyledComponentProps<Unstable_SwitchClassKey> {
  /**
   * If `true`, the component should be displayed in an error state.
   */
  error?: boolean;
  /**
   * The size of the switch.
   */
  size?: 'medium' | 'large';
}

export type Unstable_SwitchClassKey =
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

const styles: Styles<Unstable_SwitchClassKey | PrivateClassKey> = (theme) => ({
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
    backgroundColor: theme.unstable_palette.neutral[0],
    boxShadow: theme.unstable_shadows.E100,
    '$disabled &': {
      backgroundColor: theme.unstable_palette.neutral[90],
      boxShadow: theme.unstable_shadows.none,
    },
  },
  track: {
    backgroundColor: theme.unstable_palette.neutral[80],
    // double specificity to override PDS v1
    '$checked + &&': {
      backgroundColor: theme.unstable_palette.blue[600],
    },
    '$disabled + &&': {
      backgroundColor: theme.unstable_palette.neutral[80],
    },
    '$switchBase:hover + &&': {
      backgroundColor: theme.unstable_palette.neutral[90],
    },
    '$disabled:hover + &&': {
      backgroundColor: theme.unstable_palette.neutral[80],
    },
    '$checked:hover + &&': {
      backgroundColor: theme.unstable_palette.blue[400],
    },
    '$checked$disabled:hover + &&': {
      backgroundColor: theme.unstable_palette.neutral[80],
    },
    /* error */
    '.Mui-error + &&': {
      boxShadow: theme.unstable_shadows.error,
    },
    /* focus-visible */
    '$switchBase:focus-visible + &&, $switchBase.Mui-focusVisible + &&': {
      boxShadow: theme.unstable_shadows.focus,
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
    borderRadius: theme.unstable_radii.full,
    height: 24,
    width: 48,
  },
  'private-track-size-large': {
    borderRadius: theme.unstable_radii.full,
    height: 32,
    width: 56,
  },
});

const Unstable_Switch = forwardRef<unknown, Unstable_SwitchProps>(
  function Unstable_Switch(props, ref) {
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
  }
);

export default withStyles(styles, { name: 'MuiSparkUnstable_Switch' })(
  Unstable_Switch
) as typeof Unstable_Switch;
