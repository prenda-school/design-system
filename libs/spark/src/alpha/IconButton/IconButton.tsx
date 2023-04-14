import type { ElementType} from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type {
  IconButtonProps as MuiIconButtonProps} from '@material-ui/core/IconButton';
import {
  default as MuiIconButton
} from '@material-ui/core/IconButton';
import type { OverridableComponent, OverrideProps } from '../../utils';
import { lighten, darken, alpha } from '@material-ui/core/styles';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

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

type PrivateClassKey =
  | 'private-root-size-small'
  | 'private-root-size-medium'
  | 'private-root-variant-primary'
  | 'private-root-variant-stroked'
  | 'private-root-variant-stroked-size-small'
  | 'private-root-variant-stroked-size-medium'
  | 'private-root-variant-ghost'
  | 'private-root-variant-ghost-color-standard'
  | 'private-root-variant-ghost-color-inverse'
  | 'private-label-variant-primary'
  | 'private-label-variant-stroked'
  | 'private-label-variant-ghost'
  | 'private-label-variant-ghost-color-standard'
  | 'private-label-variant-ghost-color-inverse'
  | 'private-label-ariaExpanded'
  | 'private-label-disabled';

const styles: Styles<IconButtonClassKey | PrivateClassKey> = (theme) => ({
  root: {
    border: theme.borders_alpha.none,
    borderRadius: theme.radii_alpha.sm,
    '&.Mui-focusVisible, &:focus-visible': {
      boxShadow: theme.shadows_alpha.focus,
    },
  },
  label: {
    fontSize: '1.5rem',
  },
  'private-root-size-small': {
    padding: 4,
  },
  'private-root-size-medium': {
    padding: 12,
  },
  'private-root-variant-primary': {
    backgroundColor: theme.palette_alpha.brand.blue,
    '&:hover': {
      backgroundColor: lighten(theme.palette_alpha.brand.blue, 0.1),
    },
    '&:active': {
      backgroundColor: darken(theme.palette_alpha.brand.blue, 0.2),
    },
    '&[aria-expanded="true"]': {
      backgroundColor: theme.palette_alpha.neutral[600],
    },
    '&:disabled': {
      backgroundColor: theme.palette_alpha.neutral[80],
    },
  },
  'private-root-variant-stroked': {
    backgroundColor: theme.palette_alpha.neutral[0],
    border: theme.borders_alpha.standard,
    '&:hover': {
      backgroundColor: theme.palette_alpha.neutral[70],
    },
    '&:active': {
      backgroundColor: theme.palette_alpha.blue[100],
    },
    '&[aria-expanded="true"]': {
      backgroundColor: theme.palette_alpha.neutral[600],
    },
    '&:disabled': {
      backgroundColor: theme.palette_alpha.neutral[80],
    },
  },
  'private-root-variant-stroked-size-small': {
    padding: 3,
  },
  'private-root-variant-stroked-size-medium': {
    padding: 11,
  },
  'private-root-variant-ghost': {},
  'private-root-variant-ghost-color-standard': {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: alpha(theme.palette_alpha.neutral[600], 0.08),
    },
    '&:active': {
      backgroundColor: alpha(theme.palette_alpha.blue[300], 0.19),
    },
    '&[aria-expanded="true"]': {
      backgroundColor: alpha(theme.palette_alpha.neutral[600], 0.8),
    },
    '&:disabled': {
      backgroundColor: alpha(theme.palette_alpha.neutral[200], 0.2),
    },
  },
  'private-root-variant-ghost-color-inverse': {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: alpha(theme.palette_alpha.neutral[0], 0.08),
    },
    '&:active': {
      backgroundColor: alpha(theme.palette_alpha.blue[300], 0.19),
    },
    '&[aria-expanded="true"]': {
      backgroundColor: alpha(theme.palette_alpha.neutral[90], 0.4),
    },
    '&:disabled': {
      backgroundColor: alpha(theme.palette_alpha.neutral[200], 0.2),
    },
  },
  'private-label-variant-primary': {
    color: theme.palette_alpha.neutral[0],
  },
  'private-label-variant-stroked': {
    color: theme.palette_alpha.brand.blue,
  },
  'private-label-variant-ghost': {},
  'private-label-variant-ghost-color-standard': {
    color: theme.palette_alpha.brand.blue,
  },
  'private-label-variant-ghost-color-inverse': {
    color: theme.palette_alpha.neutral[0],
  },
  'private-label-ariaExpanded': {
    color: theme.palette_alpha.neutral[0],
  },
  'private-label-disabled': {
    color: theme.palette_alpha.text.disabled,
  },
});

const IconButton: OverridableComponent<IconButtonTypeMap> = forwardRef(
  function IconButton(props, ref) {
    const {
      'aria-expanded': ariaExpanded,
      color = 'standard',
      classes,
      disabled,
      size = 'medium',
      variant = 'primary',
      ...other
    } = props;

    return (
      <MuiIconButton
        aria-expanded={ariaExpanded}
        classes={{
          root: clsx(
            classes.root,
            classes[`private-root-size-${size}`],
            classes[`private-root-variant-${variant}`],
            {
              [classes[`private-root-variant-stroked-size-${size}`]]:
                variant === 'stroked',
              [classes[`private-root-variant-ghost-color-${color}`]]:
                variant === 'ghost',
            }
          ),
          label: clsx(
            classes.label,
            classes[`private-label-variant-${variant}`],
            {
              [classes['private-label-ariaExpanded']]: ariaExpanded,
              [classes['private-label-disabled']]: disabled,
              [classes[`private-label-variant-ghost-color-${color}`]]:
                variant === 'ghost',
            }
          ),
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

const IconButtonWithStyles = withStyles(styles, {
  name: 'MuiSpark_alpha_IconButton',
})(IconButton) as typeof IconButton;

// @ts-expect-error property does not exist
IconButtonWithStyles._PDS_ID = 'IconButton';

export default IconButtonWithStyles;
