import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import {
  default as MuiInputBase,
  InputBaseProps as MuiInputBaseProps,
} from '@material-ui/core/InputBase';
import Unstable_InputAdornment from '../Unstable_InputAdornment';
import withStyles, { StyledComponentProps, Styles } from '../withStyles';
import { buildVariant } from '../theme/typography';

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
  /**
   * The size of the input.
   */
  size?: 'medium' | 'small';
}

export type Unstable_InputClassKey = 'root' | 'input';

type PrivateClassKey =
  | 'private-root-value'
  | 'private-root-multiline'
  | 'private-root-size-small'
  | 'private-root-size-small-leadingEl'
  | 'private-root-size-small-trailingEl'
  | 'private-root-size-medium'
  | 'private-root-size-medium-leadingEl'
  | 'private-root-size-medium-trailingEl'
  | 'private-root-success'
  | 'private-input-placeholder'
  | 'private-input-size-small'
  | 'private-input-size-medium'
  | 'private-input-leadingEl'
  | 'private-input-trailingEl';

const sizeSmallVariant = buildVariant(
  400,
  14,
  24,
  undefined,
  'none',
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);

const styles: Styles<Unstable_InputClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    boxSizing: 'border-box',
    backgroundColor: theme.unstable_palette.neutral[0],
    border: theme.unstable_borders.standard,
    borderRadius: theme.unstable_radii.sm,
    color: theme.unstable_palette.text.body,
    letterSpacing: 0,
    margin: 0,
    width: theme.unstable_typography.pxToRem(320),
    '&:hover': {
      backgroundColor: theme.unstable_palette.neutral[60],
    },
    '&.Mui-focused, &:focus-visible': {
      backgroundColor: theme.unstable_palette.neutral[0],
      border: theme.unstable_borders.focus,
      boxShadow: theme.unstable_shadows.info,
    },
    /* error -- can get from internal context => can't condition on prop */
    '&.Mui-error': {
      border: theme.unstable_borders.error,
      boxShadow: theme.unstable_shadows.error,
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
    borderRadius: theme.unstable_radii.sm,
    color: 'inherit',
    height: 'unset', // override weird default `em` height
    /* disabled -- can get from internal context => can't condition on prop */
    '&.Mui-disabled': {
      color: 'inherit',
      opacity: 1,
    },
  },
  /* Private */
  'private-root-value': {
    backgroundColor: theme.unstable_palette.neutral[60],
    border: theme.unstable_borders.bold,
    '&:hover': {
      backgroundColor: theme.unstable_palette.neutral[70],
    },
  },
  'private-root-multiline': {
    padding: 0,
  },
  'private-root-size-medium': {
    ...theme.unstable_typography.body,
  },
  'private-root-size-small': {
    ...sizeSmallVariant,
  },
  'private-root-size-medium-leadingEl': {
    paddingLeft: 16,
  },
  'private-root-size-medium-trailingEl': {
    paddingRight: 16,
  },
  'private-root-size-small-leadingEl': {
    paddingLeft: 8,
  },
  'private-root-size-small-trailingEl': {
    paddingRight: 8,
  },
  'private-root-success': {
    border: theme.unstable_borders.success,
    boxShadow: theme.unstable_shadows.success,
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
  'private-input-size-medium': {
    padding: '12px 16px',
  },
  'private-input-size-small': {
    padding: '6px 8px',
  },
  'private-input-leadingEl': {
    paddingLeft: 8,
  },
  'private-input-trailingEl': {
    paddingRight: 8,
  },
});

const Unstable_Input = forwardRef<unknown, Unstable_InputProps>(
  function Unstable_Input(props, ref) {
    const {
      classes,
      leadingEl,
      multiline,
      placeholder,
      size = 'medium',
      success,
      trailingEl,
      value,
      ...other
    } = props;

    return (
      <MuiInputBase
        classes={{
          root: clsx(classes.root, classes[`private-root-size-${size}`], {
            [classes['private-root-value']]: value,
            [classes['private-root-multiline']]: multiline,
            [classes[`private-root-size-${size}-leadingEl`]]: leadingEl,
            [classes[`private-root-size-${size}-trailingEl`]]: trailingEl,
            [classes['private-root-success']]: success,
          }),
          input: clsx(classes.input, classes[`private-input-size-${size}`], {
            [classes['private-input-placeholder']]: placeholder,
            [classes['private-input-leadingEl']]: leadingEl,
            [classes['private-input-trailingEl']]: trailingEl,
          }),
        }}
        endAdornment={
          trailingEl ? (
            <Unstable_InputAdornment position="end" size={size}>
              {trailingEl}
            </Unstable_InputAdornment>
          ) : undefined
        }
        multiline={multiline}
        placeholder={placeholder}
        startAdornment={
          leadingEl ? (
            <Unstable_InputAdornment position="start" size={size}>
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

export default withStyles(styles, { name: 'MuiSparkUnstable_Input' })(
  Unstable_Input
) as typeof Unstable_Input;
