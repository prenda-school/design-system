import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@material-ui/core/IconButton';
import { OverridableComponent, OverrideProps } from '../utils';
import { lighten, darken, alpha } from '@material-ui/core/styles';
import withStyles, { Styles } from '../withStyles';

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

type PrivateClassKey =
  | 'private-root-variant-primary'
  | 'private-root-variant-primary-color-standard'
  | 'private-root-variant-primary-color-inverse'
  | 'private-root-variant-stroked'
  | 'private-root-variant-stroked-color-standard'
  | 'private-root-variant-stroked-color-inverse'
  | 'private-root-variant-ghost'
  | 'private-root-variant-ghost-color-standard'
  | 'private-root-variant-ghost-color-inverse'
  | 'private-root-size-small'
  | 'private-root-size-medium'
  | 'private-label-variant-primary'
  | 'private-label-variant-primary-color-standard'
  | 'private-label-variant-primary-color-inverse'
  | 'private-label-variant-stroked'
  | 'private-label-variant-stroked-color-standard'
  | 'private-label-variant-stroked-color-inverse'
  | 'private-label-variant-ghost'
  | 'private-label-variant-ghost-color-standard'
  | 'private-label-variant-ghost-color-inverse'
  | 'private-label-ariaExpanded'
  | 'private-label-disabled';

const styles: Styles<Unstable_IconButtonClassKey | PrivateClassKey> = (
  theme
) => ({
  root: {
    borderColor: 'transparent',
    borderRadius: theme.unstable_radius.sm,
    borderStyle: 'solid',
    borderWidth: 1,
    '&.Mui-focusVisible, &:focus-visible': {
      boxShadow: `0px 0px 2px 4px ${theme.unstable_palette.teal[300]}`,
    },
  },
  label: {
    fontSize: '1.5rem',
  },
  'private-root-variant-primary': {
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
  },
  'private-root-variant-primary-color-standard': {},
  'private-root-variant-primary-color-inverse': {},
  'private-root-variant-stroked': {
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
    },
  },
  'private-root-variant-stroked-color-standard': {},
  'private-root-variant-stroked-color-inverse': {},
  'private-root-variant-ghost': {},
  'private-root-variant-ghost-color-standard': {
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
  },
  'private-root-variant-ghost-color-inverse': {
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
  },
  'private-root-size-small': {
    padding: 4,
  },
  'private-root-size-medium': {
    padding: 12,
  },
  'private-label-variant-primary': {
    color: theme.unstable_palette.neutral[0],
  },
  'private-label-variant-primary-color-standard': {},
  'private-label-variant-primary-color-inverse': {},
  'private-label-variant-stroked': {
    color: theme.unstable_palette.brand.blue,
  },
  'private-label-variant-stroked-color-standard': {},
  'private-label-variant-stroked-color-inverse': {},
  'private-label-variant-ghost': {},
  'private-label-variant-ghost-color-standard': {
    color: theme.unstable_palette.brand.blue,
  },
  'private-label-variant-ghost-color-inverse': {
    color: theme.unstable_palette.neutral[0],
  },
  'private-label-ariaExpanded': {
    color: theme.unstable_palette.neutral[0],
  },
  'private-label-disabled': {
    color: theme.unstable_palette.text.disabled,
  },
});

const Unstable_IconButton: OverridableComponent<Unstable_IconButtonTypeMap> = forwardRef(
  function Unstable_IconButton(props, ref) {
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
            classes[`private-root-variant-${variant}`],
            classes[`private-root-variant-${variant}-color-${color}`],
            classes[`private-root-size-${size}`]
          ),
          label: clsx(
            classes.label,
            classes[`private-label-variant-${variant}`],
            classes[`private-label-variant-${variant}-color-${color}`],
            {
              [classes['private-label-ariaExpanded']]: ariaExpanded,
              [classes['private-label-disabled']]: disabled,
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

const Unstable_IconButtonWithStyles = withStyles(styles, {
  name: 'MuiSparkUnstable_IconButton',
})(Unstable_IconButton) as typeof Unstable_IconButton;

// @ts-expect-error property does not exist
Unstable_IconButtonWithStyles._PDS_ID = 'Unstable_IconButton';

export default Unstable_IconButtonWithStyles;
