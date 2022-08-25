import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import {
  default as MuiInputBase,
  InputBaseProps as MuiInputBaseProps,
} from '@material-ui/core/InputBase';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';
import InputAdornment from '../InputAdornment';

export interface InputProps
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
    StyledComponentProps<InputClassKey> {
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

export type InputClassKey = 'root' | 'input';

const useStyles = makeStyles<InputClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: (props: InputProps) => ({
      ...theme.typography.body,
      boxSizing: 'border-box',
      backgroundColor: theme.palette.neutral[0],
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.neutral[90],
      borderRadius: 4,
      color: theme.palette.text.body,
      letterSpacing: 0,
      margin: 0,
      width: theme.typography.pxToRem(320),
      '&:hover': {
        backgroundColor: theme.palette.neutral[60],
      },
      /* value */
      ...(props.value && {
        backgroundColor: theme.palette.neutral[60],
        borderColor: theme.palette.neutral[100],
        '&:hover': {
          backgroundColor: theme.palette.neutral[70],
        },
      }),
      // must come after `value`
      '&.Mui-focused, &:focus-visible': {
        backgroundColor: theme.palette.neutral[0],
        borderColor: theme.palette.blue[600],
        boxShadow: `0 0 0 4px ${theme.palette.blue[100]}`,
      },
      /* multiline */
      ...(props.multiline && {
        padding: 0,
      }),
      /* leadingEl */
      ...(props.leadingEl && {
        paddingLeft: 14,
      }),
      /* trailingEl */
      ...(props.trailingEl && {
        paddingRight: 14,
      }),
      /* success */
      ...(props.success && {
        borderColor: theme.palette.green[600],
        boxShadow: `0 0 0 4px ${theme.palette.green[100]}`,
      }),
      /* error -- -- can get from internal context => can't condition on prop */
      '&.Mui-error': {
        borderColor: theme.palette.red[700],
        boxShadow: `0 0 0 4px ${theme.palette.red[100]}`,
      },
      /* disabled -- can get from internal context => can't condition on prop */
      '&.Mui-disabled': {
        backgroundColor: theme.palette.neutral[80],
        opacity: 1,
        color: theme.palette.text.disabled, // override Mui default
      },
    }),
    /* Styles applied to the `input` element. */
    input: (props: InputProps) => ({
      borderRadius: 4,
      color: 'inherit',
      height: 'unset', // override weird default `em` height
      padding: '12px 16px',
      /* placeholder */
      ...(props.placeholder && {
        color: theme.palette.neutral[400],
        opacity: 0.87,
        // override mui default
        '&::placeholder': {
          color: theme.palette.neutral[400],
          opacity: 0.87,
        },
      }),
      /* multiline */
      ...(props.multiline && {
        padding: '12px 16px',
      }),
      /* leadingEl */
      ...(props.leadingEl && {
        paddingLeft: 8,
      }),
      /* trailingEl */
      ...(props.trailingEl && {
        paddingRight: 8,
      }),
      /* disabled -- can get from internal context => can't condition on prop */
      '&.Mui-disabled': {
        color: 'inherit',
        opacity: 1,
      },
    }),
  }),
  { name: 'MuiPDSInput' }
);

const Input = forwardRef<unknown, InputProps>(function Input(props, ref) {
  const {
    classes: classesProp,
    disabled,
    error,
    leadingEl,
    multiline,
    placeholder,
    success,
    trailingEl,
    value,
    ...other
  } = props;

  const classes = useStyles({
    disabled,
    error,
    leadingEl,
    multiline,
    placeholder,
    success,
    trailingEl,
    value,
  });

  return (
    <MuiInputBase
      classes={{
        root: clsx(classes.root, classesProp?.root),
        input: clsx(classes.input, classesProp?.input),
      }}
      disabled={disabled}
      endAdornment={
        trailingEl ? (
          <InputAdornment position="end">{trailingEl}</InputAdornment>
        ) : undefined
      }
      error={error}
      multiline={multiline}
      placeholder={placeholder}
      startAdornment={
        leadingEl ? (
          <InputAdornment position="start">{leadingEl}</InputAdornment>
        ) : undefined
      }
      value={value}
      ref={ref}
      {...other}
    />
  );
});

export default Input;
