import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import {
  default as MuiInputBase,
  InputBaseProps as MuiInputBaseProps,
} from '@material-ui/core/InputBase';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';
import Unstable_InputAdornment from '../Unstable_InputAdornment';

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

const useStyles = makeStyles<Unstable_InputClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: (props: Unstable_InputProps) => ({
      ...theme.unstable_typography.body,
      boxSizing: 'border-box',
      backgroundColor: theme.unstable_palette.neutral[0],
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.unstable_palette.neutral[90],
      borderRadius: 4,
      color: theme.unstable_palette.text.body,
      letterSpacing: 0,
      width: theme.unstable_typography.pxToRem(320),
      '&:hover': {
        backgroundColor: theme.unstable_palette.neutral[60],
      },
      /* Styles applied to the root element if `value` is provided and truthy. */
      ...(props.value && {
        backgroundColor: theme.unstable_palette.neutral[60],
        borderColor: theme.unstable_palette.neutral[100],
        '&:hover': {
          backgroundColor: theme.unstable_palette.neutral[70],
        },
      }),
      '&.Mui-focused, &:focus-visible': {
        backgroundColor: theme.unstable_palette.neutral[0],
        borderColor: theme.unstable_palette.blue[600],
        boxShadow: `0 0 0 4px ${theme.unstable_palette.blue[100]}`,
      },
      /* Styles applied to the root element if `success={true}`. */
      ...(props.success && {
        borderColor: theme.unstable_palette.green[600],
        boxShadow: `0 0 0 4px ${theme.unstable_palette.green[100]}`,
      }),
      /* Styles applied to the root element if `error={true}`. */
      ...(props.error && {
        borderColor: theme.unstable_palette.red[700],
        boxShadow: `0 0 0 4px ${theme.unstable_palette.red[100]}`,
      }),
      // duped because underlying component can set this independently based on form control context
      '&.Mui-error': {
        borderColor: theme.unstable_palette.red[700],
        boxShadow: `0 0 0 4px ${theme.unstable_palette.red[100]}`,
      },
      /* Styles applied to the root element if `disabled={true}`. */
      ...(props.disabled && {
        backgroundColor: theme.unstable_palette.neutral[80],
      }),
      // duped because underlying component can set this independently based on form control context
      '&.Mui-disabled': {
        backgroundColor: theme.unstable_palette.neutral[80],
        opacity: 1,
        // override mui disabled
        color: theme.unstable_palette.text.disabled,
      },
      /* Styles applied to the root element if `multiline={true}`. */
      ...(props.multiline && {
        padding: 0,
      }),
      /* Styles applied to the root element if `leadingEl` is provided. */
      ...(props.leadingEl && {
        paddingLeft: 14,
      }),
      /* Styles applied to the root element if `trailingEl` is provided. */
      ...(props.trailingEl && {
        paddingRight: 14,
      }),
    }),
    /* Styles applied to the `input` element. */
    input: (props: Unstable_InputProps) => ({
      borderRadius: 4,
      color: 'inherit',
      height: 'unset', // override weird default `em` height
      padding: '12px 16px',
      /* Styles applied to the `input` element if `placeholder` is provided and truthy. */
      ...(props.placeholder && {
        color: theme.unstable_palette.neutral[400],
        opacity: 0.87,
        // override mui default
        '&::placeholder': {
          color: theme.unstable_palette.neutral[400],
          opacity: 0.87,
        },
      }),
      /* Styles applied to the root element if `disabled={true}`. */
      ...(props.disabled && {
        color: 'inherit',
      }),
      // duped because underlying component can set this independently based on form control context
      '&.Mui-disabled': {
        color: 'inherit',
        opacity: 1,
      },
      /* Styles applied to the `input` element if `multiline={true}`. */
      ...(props.multiline && {
        padding: '12px 16px',
      }),
      /* Styles applied to the `input` element if `leadingEl` is provided. */
      ...(props.leadingEl && {
        paddingLeft: 8,
      }),
      /* Styles applied to the `input` element if `trailingEl` is provided. */
      ...(props.trailingEl && {
        paddingRight: 8,
      }),
    }),
  }),
  { name: 'MuiSparkUnstable_Input' }
);

const Unstable_Input = forwardRef(function Unstable_Input(
  props: Unstable_InputProps,
  ref
) {
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
          <Unstable_InputAdornment position="end">
            {trailingEl}
          </Unstable_InputAdornment>
        ) : undefined
      }
      error={error}
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
});

export default Unstable_Input;
