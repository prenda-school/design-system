import React, { forwardRef, Ref } from 'react';
import clsx from 'clsx';
import {
  default as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from '@material-ui/core/Switch';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';

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
  | 'sizeMedium'
  | 'sizeLarge'
  | 'switchBase'
  | 'thumb'
  | 'track';

const useStyles = makeStyles<Unstable_SwitchClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      padding: 4,
    },
    checked: {},
    disabled: {},
    error: {},
    input: {},
    sizeLarge: {
      height: 32 + 8,
      width: 56 + 8,
    },
    sizeMedium: {
      height: 24 + 8,
      width: 48 + 8,
    },
    switchBase: {
      padding: 7,
      '&:hover': {
        backgroundColor: 'unset',
      },
      '$sizeMedium &$checked': {
        transform: 'translateX(24px)',
      },
      '$sizeLarge &$checked': {
        transform: 'translateX(28px)',
      },
    },
    thumb: {
      backgroundColor: theme.unstable_palette.neutral[0],
      boxShadow: `0px 1px 1px 0px ${theme.unstable_palette.neutral[600]}29`,
      '$disabled &': {
        backgroundColor: theme.unstable_palette.neutral[90],
        boxShadow: 'none',
      },
      '$sizeLarge &': {
        height: 24,
        width: 24,
      },
      '$sizeMedium &': {
        height: 18,
        width: 18,
      },
    },
    track: {
      backgroundColor: theme.unstable_palette.neutral[80],
      '$sizeLarge &': {
        borderRadius: 16,
        height: 32,
        width: 56,
      },
      '$sizeMedium &': {
        borderRadius: 12,
        height: 24,
        width: 48,
      },
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
        boxShadow: `0 0 0 4px ${theme.unstable_palette.red[100]}`,
      },
      /* focus-visible */
      '$switchBase:focus-visible + &&, $switchBase.Mui-focusVisible + &&': {
        boxShadow: `0 0 2px 4px ${theme.unstable_palette.teal[200]}`,
      },
      // triple specificity to override PDS v1
      '&&&': {
        opacity: 1,
      },
    },
  }),
  { name: 'MuiSparkUnstable_Switch' }
);

const Unstable_Switch = forwardRef<unknown, Unstable_SwitchProps>(
  function Unstable_Switch(props, ref) {
    const { classes: classesProp, error, size = 'medium', ...other } = props;

    const classes = useStyles();

    return (
      <MuiSwitch
        classes={{
          root: clsx(classes.root, classesProp?.root, {
            [clsx(classes.sizeMedium, classesProp?.sizeMedium)]:
              size === 'medium',
            [clsx(classes.sizeLarge, classesProp?.sizeLarge)]: size === 'large',
          }),
          checked: clsx(classes.checked, classesProp?.checked),
          disabled: clsx(classes.disabled, classesProp?.disabled),
          input: clsx(classes.input, classesProp?.input),
          switchBase: clsx(classes.switchBase, classesProp?.switchBase, {
            [clsx(classes.error, classesProp?.error)]: error,
          }),
          thumb: clsx(classes.thumb, classesProp?.thumb),
          track: clsx(classes.track, classesProp?.track),
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

export default Unstable_Switch;
