import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@material-ui/core/IconButton';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import { lighten, darken, alpha } from '@material-ui/core/styles';

export interface IconButtonTypeMap<
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
  classKey: IconButtonClassKey;
}

export type IconButtonProps<
  D extends ElementType = IconButtonTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<IconButtonTypeMap<P, D>, D>;

export type IconButtonClassKey = 'root' | 'label';

const useStyles = makeStyles<IconButtonClassKey>(
  (theme) => ({
    root: (props: IconButtonProps) => ({
      borderColor: 'transparent',
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      '&.Mui-focusVisible, &:focus-visible': {
        boxShadow: `0px 0px 2px 4px ${theme.palette.teal[300]}`,
      },
      /* variant & color */
      ...(props.variant === 'primary' && {
        backgroundColor: theme.palette.brand.blue,
        '&:hover': {
          backgroundColor: lighten(theme.palette.brand.blue, 0.1),
        },
        '&:active': {
          backgroundColor: darken(theme.palette.brand.blue, 0.2),
        },
        '&[aria-expanded="true"]': {
          backgroundColor: theme.palette.neutral[600],
        },
        '&:disabled': {
          backgroundColor: theme.palette.neutral[80],
        },
      }),
      ...(props.variant === 'stroked' && {
        backgroundColor: theme.palette.neutral[0],
        borderColor: theme.palette.neutral[90],
        '&:hover': {
          backgroundColor: theme.palette.neutral[70],
        },
        '&:active': {
          backgroundColor: theme.palette.blue[100],
        },
        '&[aria-expanded="true"]': {
          backgroundColor: theme.palette.neutral[600],
        },
        '&:disabled': {
          backgroundColor: theme.palette.neutral[80],
        },
      }),
      ...(props.variant === 'ghost' &&
        props.color === 'standard' && {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: alpha(theme.palette.neutral[600], 0.08),
          },
          '&:active': {
            backgroundColor: alpha(theme.palette.blue[300], 0.19),
          },
          '&[aria-expanded="true"]': {
            backgroundColor: alpha(theme.palette.neutral[600], 0.8),
          },
          '&:disabled': {
            backgroundColor: alpha(theme.palette.neutral[200], 0.2),
          },
        }),
      ...(props.variant === 'ghost' &&
        props.color === 'inverse' && {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: alpha(theme.palette.neutral[0], 0.08),
          },
          '&:active': {
            backgroundColor: alpha(theme.palette.blue[300], 0.19),
          },
          '&[aria-expanded="true"]': {
            backgroundColor: alpha(theme.palette.neutral[90], 0.4),
          },
          '&:disabled': {
            backgroundColor: alpha(theme.palette.neutral[200], 0.2),
          },
        }),
      /* size */
      ...(props.size === 'small' && {
        padding: 4,
      }),
      ...(props.size === 'medium' && {
        padding: 12,
      }),
    }),

    label: (props: IconButtonProps) => ({
      fontSize: '1.5rem',
      /* variant & color */
      ...(props.variant === 'primary' && {
        color: theme.palette.neutral[0],
      }),
      ...(props.variant === 'stroked' && {
        color: theme.palette.brand.blue,
      }),
      ...(props.variant === 'ghost' &&
        props.color === 'standard' && {
          color: theme.palette.brand.blue,
        }),
      ...(props.variant === 'ghost' &&
        props.color === 'inverse' && {
          color: theme.palette.neutral[0],
        }),
      /* aria-expanded */
      ...(props['aria-expanded'] && {
        color: theme.palette.neutral[0],
      }),
      /* disabled */
      ...(props.disabled && {
        color: theme.palette.text.disabled,
      }),
    }),
  }),
  { name: 'MuiPDSIconButton' }
);

const IconButton: OverridableComponent<IconButtonTypeMap> = forwardRef(
  function IconButton(props, ref) {
    const {
      'aria-expanded': ariaExpanded,
      color = 'standard',
      classes: classesProp,
      disabled,
      size = 'medium',
      variant = 'primary',
      // `color` happens to be an html attribute as well; conflicts with Mui prop type
      color: _color,
      ...other
    } = props;

    const classes = useStyles({
      'aria-expanded': ariaExpanded,
      color,
      disabled,
      size,
      variant,
    });

    return (
      <MuiIconButton
        aria-expanded={ariaExpanded}
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

export default IconButton;
