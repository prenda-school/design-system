import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@material-ui/core/IconButton';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import { lighten, darken, alpha } from '@material-ui/core/styles';

export interface Unstable_IconButtonTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'button'
> {
  props: P &
    Omit<
      MuiIconButtonProps,
      | 'classes'
      | 'color'
      | 'disableFocusRipple'
      | 'centerRipple'
      | 'disableRipple'
      | 'disableTouchRipple'
      | 'focusRipple'
      | 'size'
      | 'TouchRippleProps'
    > & {
      /**
       * The color of the component.
       */
      color?: 'standard' | 'inverse';
      /**
       * The size of the component.
       */
      size?: 'small' | 'medium';
      /**
       * The variant to use.
       */
      variant?: 'primary' | 'stroked' | 'ghost';
    };
  defaultComponent: D;
  classKey: Unstable_IconButtonClassKey;
}

export type Unstable_IconButtonProps<
  D extends ElementType = Unstable_IconButtonTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_IconButtonTypeMap<P, D>, D>;

export type Unstable_IconButtonClassKey = 'root' | 'label';

const useStyles = makeStyles<Unstable_IconButtonClassKey>(
  (theme) => ({
    root: (props: Unstable_IconButtonProps) => ({
      borderColor: 'transparent',
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      '&.Mui-focusVisible, &:focus-visible': {
        boxShadow: `0px 0px 2px 4px ${theme.unstable_palette.teal[300]}`,
      },
      ...(props.variant === 'primary' && {
        backgroundColor: theme.unstable_palette.brand.blue,
        '&:hover': {
          backgroundColor: lighten(theme.unstable_palette.brand.blue, 0.1),
        },
        '&:active': {
          backgroundColor: darken(theme.unstable_palette.brand.blue, 0.2),
        },
        '&[aria-expanded="true"]': {
          backgroundColor: theme.unstable_palette.neutral[600],
        },
        '&:disabled': {
          backgroundColor: theme.unstable_palette.neutral[80],
        },
      }),
      ...(props.variant === 'stroked' && {
        backgroundColor: theme.unstable_palette.neutral[0],
        borderColor: theme.unstable_palette.neutral[90],
        '&:hover': {
          backgroundColor: theme.unstable_palette.neutral[70],
        },
        '&:active': {
          backgroundColor: theme.unstable_palette.blue[100],
        },
        '&[aria-expanded="true"]': {
          backgroundColor: theme.unstable_palette.neutral[600],
        },
        '&:disabled': {
          backgroundColor: theme.unstable_palette.neutral[80],
          color: theme.unstable_palette.neutral[100],
        },
      }),
      ...(props.variant === 'ghost' &&
        props.color === 'standard' && {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: alpha(theme.unstable_palette.neutral[600], 0.08),
          },
          '&:active': {
            backgroundColor: alpha(theme.unstable_palette.blue[300], 0.19),
          },
          '&[aria-expanded="true"]': {
            backgroundColor: alpha(theme.unstable_palette.neutral[600], 0.8),
          },
          '&:disabled': {
            backgroundColor: alpha(theme.unstable_palette.neutral[200], 0.2),
          },
        }),
      ...(props.variant === 'ghost' &&
        props.color === 'inverse' && {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: alpha(theme.unstable_palette.neutral[0], 0.08),
          },
          '&:active': {
            backgroundColor: alpha(theme.unstable_palette.blue[300], 0.19),
          },
          '&[aria-expanded="true"]': {
            backgroundColor: alpha(theme.unstable_palette.neutral[90], 0.4),
          },
          '&:disabled': {
            backgroundColor: alpha(theme.unstable_palette.neutral[200], 0.2),
          },
        }),

      ...(props.size === 'small' && {
        padding: 4,
      }),
      ...(props.size === 'medium' && {
        padding: 12,
      }),
    }),

    label: (props: Unstable_IconButtonProps) => ({
      fontSize: '1.5rem',
      ...(props.variant === 'primary' && {
        color: theme.unstable_palette.neutral[0],
      }),
      ...(props.variant === 'stroked' && {
        color: theme.unstable_palette.brand.blue,
      }),
      ...(props.variant === 'ghost' &&
        props.color === 'standard' && {
          color: theme.unstable_palette.brand.blue,
        }),
      ...(props.variant === 'ghost' &&
        props.color === 'inverse' && {
          color: theme.unstable_palette.neutral[0],
        }),
      '[aria-expanded="true"] > &': {
        color: theme.unstable_palette.neutral[0],
      },
      ...(props.disabled && {
        color: theme.unstable_palette.neutral[100],
      }),
    }),
  }),
  { name: 'MuiSparkUnstable_IconButton' }
);

const Unstable_IconButton: OverridableComponent<Unstable_IconButtonTypeMap> = forwardRef(
  function Unstable_IconButton(props, ref) {
    const {
      color = 'standard',
      classes: classesProp,
      disabled,
      size = 'medium',
      variant = 'primary',
      // `color` happens to be an html attribute as well; conflicts with Mui prop type
      color: _color,
      ...other
    } = props;

    const classes = useStyles({ color, disabled, size, variant });

    return (
      <MuiIconButton
        classes={{
          root: clsx(classes.root, classesProp?.root),
          label: clsx(classes.label, classesProp?.label),
        }}
        disabled={disabled}
        disableFocusRipple
        disableRipple
        disableTouchRipple
        focusRipple={false}
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_IconButton;
