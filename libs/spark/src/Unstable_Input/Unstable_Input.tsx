import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import {
  default as MuiInputBase,
  InputBaseProps as MuiInputBaseProps,
} from '@material-ui/core/InputBase';
import Unstable_InputAdornment from '../Unstable_InputAdornment';
import withStyles, { StyledComponentProps } from '../withStyles';

export interface Unstable_InputProps
  extends Omit<
      MuiInputBaseProps,
      | 'classes'
      | 'color'
      | 'endAdornment'
      | 'margin'
      | 'rows'
      | 'rowsMax'
      | 'rowsMin'
      | 'startAdornment'
    >,
    StyledComponentProps<Unstable_InputClassKey> {
  /**
   * The content of the `startAdornment` (an InputAdornment), usually an Icon, IconButton, or string.
   */
  leadingEl?: ReactNode;
  /**
   * The content of the `endAdornment` (an InputAdornment), usually an Icon, IconButton, or string.
   */
  trailingEl?: ReactNode;
  /**
   * If `true`, the input will indicate a success.
   */
  success?: boolean;
}

export type Unstable_InputClassKey = 'root' | 'input';

type PrivateClassKey =
  | 'private-root-value'
  | 'private-root-multiline'
  | 'private-root-leadingEl'
  | 'private-root-trailingEl'
  | 'private-root-success'
  | 'private-input-placeholder'
  | 'private-input-multiline'
  | 'private-input-leadingEl'
  | 'private-input-trailingEl';

const withClasses = withStyles<Unstable_InputClassKey | PrivateClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      ...theme.unstable_typography.body,
      boxSizing: 'border-box',
      backgroundColor: theme.unstable_palette.neutral[0],
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.unstable_palette.neutral[90],
      borderRadius: 4,
      color: theme.unstable_palette.text.body,
      letterSpacing: 0,
      margin: 0,
      width: theme.unstable_typography.pxToRem(320),
      '&:hover': {
        backgroundColor: theme.unstable_palette.neutral[60],
      },
      '&.Mui-focused, &:focus-visible': {
        backgroundColor: theme.unstable_palette.neutral[0],
        borderColor: theme.unstable_palette.blue[600],
        boxShadow: `0 0 0 4px ${theme.unstable_palette.blue[100]}`,
      },
      /* error -- can get from internal context => can't condition on prop */
      '&.Mui-error': {
        borderColor: theme.unstable_palette.red[700],
        boxShadow: `0 0 0 4px ${theme.unstable_palette.red[100]}`,
      },
      /* disabled -- can get from internal context => can't condition on prop */
      '&.Mui-disabled': {
        backgroundColor: theme.unstable_palette.neutral[80],
        opacity: 1,
        color: theme.unstable_palette.text.disabled, // override Mui default
      },
    },
    /* Styles applied to the `input` element. */
    input: {
      borderRadius: 4,
      color: 'inherit',
      height: 'unset', // override weird default `em` height
      padding: '12px 16px',
      /* disabled -- can get from internal context => can't condition on prop */
      '&.Mui-disabled': {
        color: 'inherit',
        opacity: 1,
      },
    },
    /* Private */
    'private-root-value': {
      backgroundColor: theme.unstable_palette.neutral[60],
      borderColor: theme.unstable_palette.neutral[100],
      '&:hover': {
        backgroundColor: theme.unstable_palette.neutral[70],
      },
    },
    'private-root-multiline': {
      padding: 0,
    },
    'private-root-leadingEl': {
      paddingLeft: 14,
    },
    'private-root-trailingEl': {
      paddingRight: 14,
    },
    'private-root-success': {
      borderColor: theme.unstable_palette.green[600],
      boxShadow: `0 0 0 4px ${theme.unstable_palette.green[100]}`,
    },
    'private-input-placeholder': {
      color: theme.unstable_palette.neutral[400],
      opacity: 0.87,
      // override mui default
      '&::placeholder': {
        color: theme.unstable_palette.neutral[400],
        opacity: 0.87,
      },
    },
    'private-input-multiline': {
      padding: '12px 16px',
    },
    'private-input-leadingEl': {
      paddingLeft: 8,
    },
    'private-input-trailingEl': {
      paddingRight: 8,
    },
  }),
  { name: 'MuiSparkUnstable_Input' }
);

const Unstable_Input = forwardRef<unknown, Unstable_InputProps>(
  function Unstable_Input(props, ref) {
    const {
      classes,
      leadingEl,
      multiline,
      placeholder,
      success,
      trailingEl,
      value,
      ...other
    } = props;

    return (
      <MuiInputBase
        classes={{
          root: clsx(classes.root, {
            [classes['private-root-value']]: value,
            [classes['private-root-multiline']]: multiline,
            [classes['private-root-leadingEl']]: leadingEl,
            [classes['private-root-trailingEl']]: trailingEl,
            [classes['private-root-success']]: success,
          }),
          input: clsx(classes.input, {
            [classes['private-input-placeholder']]: placeholder,
            [classes['private-input-multiline']]: multiline,
            [classes['private-input-leadingEl']]: leadingEl,
            [classes['private-input-trailingEl']]: trailingEl,
          }),
        }}
        endAdornment={
          trailingEl ? (
            <Unstable_InputAdornment position="end">
              {trailingEl}
            </Unstable_InputAdornment>
          ) : undefined
        }
        multiline={multiline}
        placeholder={placeholder}
        startAdornment={
          leadingEl ? (
            <Unstable_InputAdornment position="start">
              {leadingEl}
            </Unstable_InputAdornment>
          ) : undefined
        }
        value={value}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withClasses(Unstable_Input) as typeof Unstable_Input;
