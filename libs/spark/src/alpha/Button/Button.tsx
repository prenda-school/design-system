import type { ElementType, ReactNode } from 'react';
import React, { cloneElement, forwardRef } from 'react';
import clsx from 'clsx';
import type { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import { default as MuiButton } from '@material-ui/core/Button';
import type { OverridableComponent, OverrideProps } from '../../utils';
import { buildVariant } from '../theme/typography';
import { lighten, darken, alpha } from '@material-ui/core/styles';
import type { AvatarProps } from '../Avatar';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface ButtonTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'button'
> {
  props: P &
    Omit<
      MuiButtonProps,
      | 'classes'
      | 'color'
      | 'startIcon'
      | 'endIcon'
      | 'variant'
      | 'disableElevation'
      | 'disableFocusRipple'
      | 'centerRipple'
      | 'disableRipple'
      | 'disableTouchRipple'
      | 'focusRipple'
      | 'TouchRippleProps'
    > & {
      /**
       * The color of the component.
       */
      color?: 'standard' | 'inverse';
      /**
       * The variant to use.
       */
      variant?: 'primary' | 'stroked' | 'ghost' | 'destructive';
      /**
       * Avatar placed before the children.
       */
      leadingAvatar?: ReactNode;
      /**
       * Icon placed before the children.
       */
      leadingIcon?: ReactNode;
      /**
       * Icon placed after the children.
       */
      trailingIcon?: ReactNode;
    };
  defaultComponent: D;
  classKey: ButtonClassKey;
}

export type ButtonProps<
  D extends ElementType = ButtonTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<ButtonTypeMap<P, D>, D>;

export type ButtonClassKey =
  | 'root'
  | 'leadingAvatar'
  | 'leadingIcon'
  | 'trailingIcon'
  | 'label';

type PrivateClassKey =
  | 'private-root-size-small'
  | 'private-root-size-medium'
  | 'private-root-size-large'
  | 'private-root-leadingAvatar-size-small'
  | 'private-root-leadingAvatar-size-medium'
  | 'private-root-leadingAvatar-size-large'
  | 'private-root-variant-primary'
  | 'private-root-variant-primary-color-standard'
  | 'private-root-variant-primary-color-inverse'
  | 'private-root-variant-stroked'
  | 'private-root-variant-stroked-color-standard'
  | 'private-root-variant-stroked-color-inverse'
  | 'private-root-variant-stroked-size-small'
  | 'private-root-variant-stroked-size-medium'
  | 'private-root-variant-stroked-size-large'
  | 'private-root-leadingAvatar-variant-stroked-size-small'
  | 'private-root-leadingAvatar-variant-stroked-size-medium'
  | 'private-root-leadingAvatar-variant-stroked-size-large'
  | 'private-root-variant-ghost'
  | 'private-root-variant-ghost-color-standard'
  | 'private-root-variant-ghost-color-inverse'
  | 'private-root-variant-destructive'
  | 'private-root-disabled'
  | 'private-label-variant-primary'
  | 'private-label-variant-primary-color-standard'
  | 'private-label-variant-primary-color-inverse'
  | 'private-label-variant-stroked'
  | 'private-label-variant-stroked-color-standard'
  | 'private-label-variant-stroked-color-inverse'
  | 'private-label-variant-ghost'
  | 'private-label-variant-ghost-color-standard'
  | 'private-label-variant-ghost-color-inverse'
  | 'private-label-variant-destructive'
  | 'private-label-size-small'
  | 'private-label-size-medium'
  | 'private-label-size-large'
  | 'private-label-ariaExpanded'
  | 'private-label-disabled'
  | 'private-leadingAvatar-disabled'
  | 'private-leadingIcon-size-small'
  | 'private-leadingIcon-size-medium'
  | 'private-leadingIcon-size-large'
  | 'private-trailingIcon-size-small'
  | 'private-trailingIcon-size-medium'
  | 'private-trailingIcon-size-large';

// extracted since there's not an equivalent typography variant
const buttonFontVariantSmall = buildVariant(
  500,
  14,
  16,
  undefined,
  'none',
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);
const buttonFontVariantMedium = buildVariant(
  500,
  16,
  24,
  undefined,
  'none',
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);
const buttonFontVariantLarge = buildVariant(
  500,
  18,
  24,
  undefined,
  'none',
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);

const styles: Styles<ButtonClassKey | PrivateClassKey> = (theme) => ({
  root: {
    '&&': {
      // override PDS v1 (requires double-specifity)
      border: theme.borders_alpha.none,
      borderRadius: theme.radii_alpha.sm,
      '&.Mui-focusVisible, &:focus-visible': {
        boxShadow: theme.shadows_alpha.focus,
      },
      // overide Bootstrap (requires double-specifity)
      color: 'unset',
      outline: 'unset',
      outlineOffset: 'unset',
    },
  },
  label: {
    gap: 8,
  },
  leadingAvatar: {
    color: 'inherit',
    display: 'flex',
  },
  leadingIcon: {
    color: 'inherit',
    display: 'flex',
    lineHeight: 1,
  },
  trailingIcon: {
    color: 'inherit',
    display: 'flex',
    lineHeight: 1,
  },
  'private-root-size-small': {
    '&&': {
      padding: '8px 16px',
    },
  },
  'private-root-size-medium': {
    '&&': {
      padding: '12px 24px',
    },
  },
  'private-root-size-large': {
    '&&': {
      padding: '20px 32px',
    },
  },
  'private-root-leadingAvatar-size-small': {
    '&&': {
      padding: '4px 8px',
    },
  },
  'private-root-leadingAvatar-size-medium': {
    '&&': {
      padding: '4px 16px',
    },
  },
  'private-root-leadingAvatar-size-large': {
    '&&': {
      padding: '12px 24px',
    },
  },
  'private-root-variant-primary': {
    '&&': {
      backgroundColor: theme.palette_alpha.background.brand,
      '&:hover': {
        backgroundColor: lighten(theme.palette_alpha.background.brand, 0.1),
      },
      '&:active': {
        backgroundColor: darken(theme.palette_alpha.background.brand, 0.2),
      },
    },
  },
  'private-root-variant-primary-color-standard': {
    '&&': {
      '&[aria-expanded="true"]': {
        backgroundColor: theme.palette_alpha.background.inverse,
      },
    },
  },
  'private-root-variant-primary-color-inverse': {
    '&&': {
      '&[aria-expanded="true"]': {
        backgroundColor: theme.palette_alpha.background.default,
      },
    },
  },
  'private-root-variant-stroked': {},
  'private-root-variant-stroked-color-standard': {
    '&&': {
      backgroundColor: theme.palette_alpha.background.default,
      border: theme.borders_alpha.standard,
      '&:hover': {
        backgroundColor: theme.palette_alpha.neutral[70],
      },
      '&:active': {
        backgroundColor: theme.palette_alpha.blue[100],
      },
      '&[aria-expanded="true"]': {
        backgroundColor: theme.palette_alpha.background.inverse,
      },
    },
  },
  'private-root-variant-stroked-color-inverse': {
    '&&': {
      backgroundColor: theme.palette_alpha.background.inverse,
      border: `1px solid ${theme.palette_alpha.neutral[80]}`,
      '&:hover': {
        backgroundColor: theme.palette_alpha.neutral[500],
      },
      '&:active': {
        backgroundColor: lighten(theme.palette_alpha.background.inverse, 0.2),
      },
      '&[aria-expanded="true"]': {
        backgroundColor: theme.palette_alpha.background.default,
      },
    },
  },
  'private-root-variant-stroked-size-small': {
    '&&': {
      padding: '7px 15px',
    },
  },
  'private-root-variant-stroked-size-medium': {
    '&&': {
      padding: '11px 23px',
    },
  },
  'private-root-variant-stroked-size-large': {
    '&&': {
      padding: '19px 31px',
    },
  },
  'private-root-leadingAvatar-variant-stroked-size-small': {
    '&&': {
      padding: '3px 7px',
    },
  },
  'private-root-leadingAvatar-variant-stroked-size-medium': {
    '&&': {
      padding: '3px 15px',
    },
  },
  'private-root-leadingAvatar-variant-stroked-size-large': {
    '&&': {
      padding: '11px 23px',
    },
  },
  'private-root-variant-ghost': {
    '&&': {
      backgroundColor: 'transparent',
    },
  },
  'private-root-variant-ghost-color-standard': {
    '&&': {
      '&:hover': {
        backgroundColor: alpha(theme.palette_alpha.neutral[600], 0.08),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette_alpha.blue[300], 0.19),
      },
      '&[aria-expanded="true"]': {
        backgroundColor: alpha(theme.palette_alpha.neutral[600], 0.9),
      },
      '&:disabled': {
        backgroundColor: alpha(theme.palette_alpha.neutral[200], 0.2),
      },
    },
  },
  'private-root-variant-ghost-color-inverse': {
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
  'private-root-variant-destructive': {
    '&&': {
      backgroundColor: theme.palette_alpha.red[700],
      '&:hover': {
        backgroundColor: theme.palette_alpha.red[600],
      },
      '&:active': {
        backgroundColor: darken(theme.palette_alpha.red[700], 0.2),
      },
      '&[aria-expanded="true"]': {
        backgroundColor: theme.palette_alpha.background.inverse,
      },
    },
  },
  'private-root-disabled': {
    '&&': {
      backgroundColor: theme.palette_alpha.neutral[80],
      color: theme.palette_alpha.text.disabled,
      opacity: 'unset',
    },
  },
  'private-label-size-small': {
    ...buttonFontVariantSmall,
  },
  'private-label-size-medium': {
    ...buttonFontVariantMedium,
  },
  'private-label-size-large': {
    ...buttonFontVariantLarge,
  },
  'private-label-variant-primary': {
    color: theme.palette_alpha.text.inverseHeading,
  },
  'private-label-variant-primary-color-standard': {},
  'private-label-variant-primary-color-inverse': {
    '[aria-expanded="true"] &': {
      color: theme.palette_alpha.text.heading,
    },
  },
  'private-label-variant-stroked': {},
  'private-label-variant-stroked-color-standard': {
    color: theme.palette_alpha.brand.blue,
    '[aria-expanded="true"] &': {
      color: theme.palette_alpha.text.inverseHeading,
    },
  },
  'private-label-variant-stroked-color-inverse': {
    color: theme.palette_alpha.text.inverseHeading,
    '[aria-expanded="true"] &': {
      color: theme.palette_alpha.text.heading,
    },
  },
  'private-label-variant-ghost': {},
  'private-label-variant-ghost-color-standard': {
    color: theme.palette_alpha.brand.blue,
    '[aria-expanded="true"] &': {
      color: theme.palette_alpha.text.inverseHeading,
    },
  },
  'private-label-variant-ghost-color-inverse': {
    color: theme.palette_alpha.text.inverseHeading,
  },
  'private-label-variant-destructive': {
    color: theme.palette_alpha.neutral[0],
  },
  'private-label-ariaExpanded': {},
  'private-label-disabled': {
    color: theme.palette_alpha.text.disabled,
  },
  'private-leadingAvatar-disabled': {
    opacity: 0.62,
  },
  'private-leadingIcon-size-small': {
    fontSize: theme.typography.pxToRem(16),
  },
  'private-leadingIcon-size-medium': {
    fontSize: theme.typography.pxToRem(24),
  },
  'private-leadingIcon-size-large': {
    fontSize: theme.typography.pxToRem(24),
  },
  'private-trailingIcon-size-small': {
    fontSize: theme.typography.pxToRem(16),
  },
  'private-trailingIcon-size-medium': {
    fontSize: theme.typography.pxToRem(24),
  },
  'private-trailingIcon-size-large': {
    fontSize: theme.typography.pxToRem(24),
  },
});

const Button: OverridableComponent<ButtonTypeMap> = forwardRef(function Button(
  props,
  ref
) {
  const {
    'aria-expanded': ariaExpanded,
    children,
    classes,
    color = 'standard',
    disabled,
    leadingAvatar,
    leadingIcon,
    size = 'medium',
    trailingIcon,
    variant = 'primary',
    ...other
  } = props;

  let leadingEl: ReactNode;
  if (leadingAvatar) {
    const avatarSize: AvatarProps['size'] =
      size === 'small' ? 'small' : 'medium';
    leadingEl = (
      <span
        className={clsx(classes.leadingAvatar, {
          [classes['private-leadingAvatar-disabled']]: disabled,
        })}
      >
        {/* @ts-expect-error can't know if actually given an Avatar instance, so prop may be invalid */}
        {cloneElement(leadingAvatar, { size: avatarSize })}
      </span>
    );
  } else if (leadingIcon) {
    leadingEl = (
      <span
        className={clsx(
          classes.leadingIcon,
          classes[`private-leadingIcon-size-${size}`]
        )}
      >
        {leadingIcon}
      </span>
    );
  }

  let trailingEl: ReactNode;
  if (trailingIcon) {
    trailingEl = (
      <span
        className={clsx(
          classes.trailingIcon,
          classes[`private-trailingIcon-size-${size}`]
        )}
      >
        {trailingIcon}
      </span>
    );
  }

  return (
    <MuiButton
      aria-expanded={ariaExpanded}
      classes={{
        root: clsx(
          classes.root,
          classes[`private-root-size-${size}`],
          classes[`private-root-variant-${variant}`],
          {
            [classes['private-root-disabled']]: disabled,
            [classes[`private-root-leadingAvatar-size-${size}`]]:
              !!leadingAvatar,
            [classes[
              `private-root-leadingAvatar-variant-stroked-size-${size}`
            ]]: !!leadingAvatar && variant === 'stroked',
            [classes[`private-root-variant-stroked-size-${size}`]]:
              variant === 'stroked',
            [classes[`private-root-variant-primary-color-${color}`]]:
              variant === 'primary',
            [classes[`private-root-variant-stroked-color-${color}`]]:
              variant === 'stroked',
            [classes[`private-root-variant-ghost-color-${color}`]]:
              variant === 'ghost',
          }
        ),
        label: clsx(
          classes.label,
          classes[`private-label-size-${size}`],
          classes[`private-label-variant-${variant}`],
          {
            [classes['private-label-ariaExpanded']]: ariaExpanded,
            [classes['private-label-disabled']]: disabled,
            [classes[`private-label-variant-primary-color-${color}`]]:
              variant === 'primary',
            [classes[`private-label-variant-ghost-color-${color}`]]:
              variant === 'ghost',
            [classes[`private-label-variant-stroked-color-${color}`]]:
              variant === 'stroked',
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
    >
      {leadingEl}
      {children}
      {trailingEl}
    </MuiButton>
  );
});

const ButtonWithStyles = withStyles(styles, {
  name: 'MuiSpark_alpha_Button',
})(Button) as typeof Button;

// @ts-expect-error property does not exist
ButtonWithStyles._PDS_ID = 'Button';

export default ButtonWithStyles;
