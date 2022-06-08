import * as React from 'react';
import clsx from 'clsx';
import {
  default as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@material-ui/core/Button';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import { buildVariant } from '../theme/typography';
import { lighten, darken } from '@material-ui/core/styles';

export interface Unstable_ButtonTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'button'
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
       * Icon placed before the children.
       */
      leadingIcon?: React.ReactNode;
      /**
       * Icon placed after the children.
       */
      trailingIcon?: React.ReactNode;
    };
  defaultComponent: D;
  classKey: Unstable_ButtonClassKey;
}

export type Unstable_ButtonProps<
  D extends React.ElementType = Unstable_ButtonTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_ButtonTypeMap<P, D>, D>;

export type Unstable_ButtonClassKey =
  | 'root'
  | 'leadingIcon'
  | 'trailingIcon'
  | 'label'
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
const useStyles = makeStyles<Unstable_ButtonClassKey>(
  (theme) => ({
    root: (props: Unstable_ButtonProps) => ({
      borderColor: 'transparent',
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      '&.Mui-focusVisible, &:focus-visible': {
        boxShadow: `0px 0px 2px 4px ${theme.unstable_palette.teal[300]}`,
      },
      /** variant */
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
        backgroundColor: 'transparent',
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
      ...(props.variant === 'ghost' && {
        backgroundColor: 'transparent',
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
      }),
      ...(props.variant === 'destructive' && {
        backgroundColor: theme.unstable_palette.red[700],
        '&:hover': {
          backgroundColor: theme.unstable_palette.red[600],
        },
        '&:active': {
          backgroundColor: darken(theme.unstable_palette.red[700], 0.2),
        },
        '&[aria-expanded="true"]': {
          backgroundColor: theme.unstable_palette.neutral[600],
        },
        '&:disabled': {
          backgroundColor: theme.unstable_palette.neutral[80],
          color: theme.unstable_palette.neutral[100],
        },
      }),
      /** size */
      ...(props.size === 'small' && {
        padding: '8px 16px',
      }),
      ...(props.size === 'medium' && {
        padding: '12px 24px',
      }),
      ...(props.size === 'large' && {
        padding: '20px 32px',
      }),
      // double-specificity section for overriding v1 styles from STP
      '&&': {
        borderColor: 'transparent',
        borderWidth: 1,
        '&:disabled': {
          opacity: 'unset',
        },
        ...(props.variant === 'stroked' && {
          borderColor: theme.unstable_palette.neutral[90],
        }),
      },
    }),

    label: (props: Unstable_ButtonProps) => ({
      /** size */
      ...(props.size === 'small' && {
        ...buttonFontVariantSmall,
      }),
      ...(props.size === 'medium' && {
        ...buttonFontVariantMedium,
      }),
      ...(props.size === 'large' && {
        ...buttonFontVariantLarge,
      }),
      /** variant */
      ...(props.variant === 'primary' && {
        color: theme.palette.common.white,
        ...(props.disabled && {
          color: theme.unstable_palette.neutral[100],
        }),
      }),
      ...(props.variant === 'stroked' && {
        color: theme.unstable_palette.brand.blue,
        '[aria-expanded="true"] > & ': {
          color: theme.palette.common.white,
        },
        ...(props.disabled && {
          color: theme.unstable_palette.neutral[100],
        }),
      }),
      ...(props.variant === 'ghost' && {
        color: theme.unstable_palette.brand.blue,
        '[aria-expanded="true"] > & ': {
          color: theme.palette.common.white,
        },
        ...(props.disabled && {
          color: theme.unstable_palette.neutral[100],
        }),
      }),
      ...(props.variant === 'destructive' && {
        color: theme.palette.common.white,
        ...(props.disabled && {
          color: theme.unstable_palette.neutral[100],
        }),
      }),
    }),
    leadingIcon: (props: Unstable_ButtonProps) => ({
      color: 'inherit',
      display: 'flex',
      lineHeight: 1,
      margin: '0 8px 0 0',
      /** size */
      ...(props.size === 'small' && {
        fontSize: theme.typography.pxToRem(16),
      }),
      ...(props.size === 'medium' && {
        fontSize: theme.typography.pxToRem(24),
      }),
      ...(props.size === 'large' && {
        fontSize: theme.typography.pxToRem(24),
      }),
    }),
    trailingIcon: (props: Unstable_ButtonProps) => ({
      color: 'inherit',
      display: 'flex',
      lineHeight: 1,
      margin: '0 0 0 8px',
      /** size */
      ...(props.size === 'small' && {
        fontSize: theme.typography.pxToRem(16),
      }),
      ...(props.size === 'medium' && {
        fontSize: theme.typography.pxToRem(24),
      }),
      ...(props.size === 'large' && {
        fontSize: theme.typography.pxToRem(24),
      }),
    }),
    'private-textBaselineShift': {
      marginTop: theme.unstable_typography.pxToRem(1),
      marginBottom: theme.unstable_typography.pxToRem(-1),
    },
  }),
  { name: 'MuiSparkUnstable_Button' }
);

const Unstable_Button: OverridableComponent<Unstable_ButtonTypeMap> = React.forwardRef(
  function Unstable_Button(props, ref) {
    const {
      children,
      classes: classesProp,
      disabled,
      leadingIcon,
      size = 'medium',
      trailingIcon,
      variant = 'primary',
      color: _color,
      ...other
    } = props;

    const classes = useStyles({ disabled, variant, size });

    let leadingEl: React.ReactNode;
    if (leadingIcon) {
      leadingEl = (
        <span className={clsx(classes.leadingIcon, classesProp?.leadingIcon)}>
          {leadingIcon}
        </span>
      );
    }

    let trailingEl: React.ReactNode;
    if (trailingIcon) {
      trailingEl = (
        <span className={clsx(classes.trailingIcon, classesProp?.trailingIcon)}>
          {trailingIcon}
        </span>
      );
    }

    return (
      <MuiButton
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
      >
        {leadingEl}
        <span className={classes['private-textBaselineShift']}>{children}</span>
        {trailingEl}
      </MuiButton>
    );
  }
);

export default Unstable_Button;
