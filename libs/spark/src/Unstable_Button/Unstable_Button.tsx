import React, { cloneElement, ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import {
  default as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@material-ui/core/Button';
import { OverridableComponent, OverrideProps } from '../utils';
import { buildVariant } from '../theme/typography';
import { lighten, darken } from '@material-ui/core/styles';
import { Unstable_AvatarProps } from '../Unstable_Avatar';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_ButtonTypeMap<
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
  classKey: Unstable_ButtonClassKey;
}

export type Unstable_ButtonProps<
  D extends ElementType = Unstable_ButtonTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_ButtonTypeMap<P, D>, D>;

export type Unstable_ButtonClassKey =
  | 'root'
  | 'leadingAvatar'
  | 'leadingIcon'
  | 'trailingIcon'
  | 'label'
  | 'private-textBaselineShift';

type PrivateClassKey =
  | 'private-root-variant-primary'
  | 'private-root-variant-stroked'
  | 'private-root-variant-ghost'
  | 'private-root-variant-destructive'
  | 'private-root-size-small'
  | 'private-root-size-medium'
  | 'private-root-size-large'
  | 'private-root-ariaExpanded'
  | 'private-root-disabled'
  | 'private-label-variant-primary'
  | 'private-label-variant-stroked'
  | 'private-label-variant-ghost'
  | 'private-label-variant-destructive'
  | 'private-label-size-small'
  | 'private-label-size-medium'
  | 'private-label-size-large'
  | 'private-label-ariaExpanded'
  | 'private-label-disabled'
  | 'private-leadingAvatar-size-small'
  | 'private-leadingAvatar-size-medium'
  | 'private-leadingAvatar-size-large'
  | 'private-leadingAvatar-disabled'
  | 'private-leadingIcon-size-small'
  | 'private-leadingIcon-size-medium'
  | 'private-leadingIcon-size-large'
  | 'private-trailingIcon-size-small'
  | 'private-trailingIcon-size-medium'
  | 'private-trailingIcon-size-large'
  | 'private-textBaselineShift';

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

const styles: Styles<Unstable_ButtonClassKey | PrivateClassKey> = (theme) => ({
  root: {
    // double-specificity section for overriding v1 styles from STP
    '&&': {
      borderColor: 'transparent',
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      '&.Mui-focusVisible, &:focus-visible': {
        boxShadow: `0px 0px 2px 4px ${theme.unstable_palette.teal[300]}`,
      },
    },
  },
  label: {},
  leadingAvatar: {
    color: 'inherit',
    display: 'flex',
    marginRight: 8,
  },
  leadingIcon: {
    color: 'inherit',
    display: 'flex',
    lineHeight: 1,
    margin: '0 8px 0 0',
  },
  trailingIcon: {
    color: 'inherit',
    display: 'flex',
    lineHeight: 1,
    margin: '0 0 0 8px',
  },
  'private-textBaselineShift': {
    marginTop: theme.unstable_typography.pxToRem(1),
    marginBottom: theme.unstable_typography.pxToRem(-1),
  },
  'private-root-variant-primary': {
    '&&': {
      backgroundColor: theme.unstable_palette.background.brand,
      '&:hover': {
        backgroundColor: lighten(theme.unstable_palette.background.brand, 0.1),
      },
      '&:active': {
        backgroundColor: darken(theme.unstable_palette.background.brand, 0.2),
      },
    },
  },
  'private-root-variant-stroked': {
    '&&': {
      backgroundColor: 'transparent',
      borderColor: theme.unstable_palette.neutral[90],
      '&:hover': {
        backgroundColor: theme.unstable_palette.neutral[70],
      },
      '&:active': {
        backgroundColor: theme.unstable_palette.blue[100],
      },
    },
  },
  'private-root-variant-ghost': {
    '&&': {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: theme.unstable_palette.neutral[70],
      },
      '&:active': {
        backgroundColor: theme.unstable_palette.blue[100],
      },
    },
  },
  'private-root-variant-destructive': {
    '&&': {
      backgroundColor: theme.unstable_palette.red[700],
      '&:hover': {
        backgroundColor: theme.unstable_palette.red[600],
      },
      '&:active': {
        backgroundColor: darken(theme.unstable_palette.red[700], 0.2),
      },
    },
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
  'private-root-ariaExpanded': {
    '&&': {
      backgroundColor: theme.unstable_palette.background.inverse,
    },
  },
  'private-root-disabled': {
    '&&': {
      backgroundColor: theme.unstable_palette.neutral[80],
      color: theme.unstable_palette.text.disabled,
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
    color: theme.unstable_palette.neutral[0],
  },
  'private-label-variant-stroked': {
    color: theme.unstable_palette.brand.blue,
  },
  'private-label-variant-ghost': {
    color: theme.unstable_palette.brand.blue,
  },
  'private-label-variant-destructive': {
    color: theme.unstable_palette.neutral[0],
  },
  'private-label-ariaExpanded': {
    color: theme.unstable_palette.neutral[0],
  },
  'private-label-disabled': {
    color: theme.unstable_palette.text.disabled,
  },
  'private-leadingAvatar-size-small': {
    marginBottom: -4,
    marginLeft: -8,
    marginTop: -4,
  },
  'private-leadingAvatar-size-medium': {
    marginBottom: -8,
    marginLeft: -8,
    marginTop: -8,
  },
  'private-leadingAvatar-size-large': {
    marginBottom: -8,
    marginLeft: -8,
    marginTop: -8,
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

const Unstable_Button: OverridableComponent<Unstable_ButtonTypeMap> = forwardRef(
  function Unstable_Button(props, ref) {
    const {
      'aria-expanded': ariaExpanded,
      children,
      classes,
      disabled,
      leadingAvatar,
      leadingIcon,
      size = 'medium',
      trailingIcon,
      variant = 'primary',
      color: _color,
      ...other
    } = props;

    let leadingEl: ReactNode;
    if (leadingAvatar) {
      const avatarSize: Unstable_AvatarProps['size'] =
        size === 'small' ? 'small' : 'medium';
      leadingEl = (
        <span
          className={clsx(
            classes.leadingAvatar,
            classes[`private-leadingAvatar-size-${size}`],
            {
              [classes['private-leadingAvatar-disabled']]: disabled,
            }
          )}
        >
          {/* @ts-expect-error can't know if actually given an Unstable_Avatar instance, so prop may be invalid */}
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
              [classes['private-root-ariaExpanded']]: ariaExpanded,
              [classes['private-root-disabled']]: disabled,
            }
          ),
          label: clsx(
            classes.label,
            classes[`private-label-size-${size}`],
            classes[`private-label-variant-${variant}`],
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
      >
        {leadingEl}
        <span className={classes['private-textBaselineShift']}>{children}</span>
        {trailingEl}
      </MuiButton>
    );
  }
);

const Unstable_ButtonWithStyles = withStyles(styles, {
  name: 'MuiSparkUnstable_Button',
})(Unstable_Button) as typeof Unstable_Button;

// @ts-expect-error property does not exist
Unstable_ButtonWithStyles._PDS_ID = 'Unstable_Button';

export default Unstable_ButtonWithStyles;
