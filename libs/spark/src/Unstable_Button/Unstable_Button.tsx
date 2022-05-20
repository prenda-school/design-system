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
  | 'startIcon'
  | 'endIcon'
  | 'label';

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
      ...(props.size === 'small' && {
        ...buttonFontVariantSmall,
        // top/bottom margin is part of re-aligning text and icon baselines: shift label baseline down
        margin: '1px 0 -1x 0',
      }),
      ...(props.size === 'medium' && {
        ...buttonFontVariantMedium,
        // top/bottom margin is part of re-aligning text and icon baselines: shift label baseline down
        margin: '2px 0 -2x 0',
      }),
      ...(props.size === 'large' && {
        ...buttonFontVariantLarge,
        // top/bottom margin is part of re-aligning text and icon baselines: shift label baseline down
        margin: '2px 0 -2x 0',
      }),

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
    startIcon: (props: Unstable_ButtonProps) => ({
      color: 'inherit',
      lineHeight: 1,
      // top margin is part of re-aligning text and icon baselines: shift icon baseline up
      margin: '-2px 8px 0 0',
      ...(props.size === 'small' && {
        fontSize: theme.typography.pxToRem(16),
      }),
      ...(props.size === 'medium' && {
        fontSize: theme.typography.pxToRem(24),
      }),
      ...(props.size === 'large' && {
        fontSize: theme.typography.pxToRem(24),
      }),
      '& > :first-child': { fontSize: 'inherit' },
    }),
    endIcon: (props: Unstable_ButtonProps) => ({
      color: 'inherit',
      lineHeight: 1,
      // top margin is part of re-aligning text and icon baselines: shift icon baseline up
      margin: '-2px 0 0 8px',
      ...(props.size === 'small' && {
        fontSize: theme.typography.pxToRem(16),
      }),
      ...(props.size === 'medium' && {
        fontSize: theme.typography.pxToRem(24),
      }),
      ...(props.size === 'large' && {
        fontSize: theme.typography.pxToRem(24),
      }),
      '& > :first-child': { fontSize: 'inherit' },
    }),
  }),
  { name: 'MuiSparkUnstable_Button' }
);

const Unstable_Button: OverridableComponent<Unstable_ButtonTypeMap> = React.forwardRef(
  function Unstable_Button(props, ref) {
    const {
      classes: classesProp,
      disabled,
      variant = 'primary',
      size = 'medium',
      ...other
    } = props;

    const classes = useStyles({ disabled, variant, size });

    return (
      <MuiButton
        classes={{
          root: clsx(classes.root, classesProp?.root),
          startIcon: clsx(classes.startIcon, classesProp?.startIcon),
          endIcon: clsx(classes.endIcon, classesProp?.endIcon),
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

export default Unstable_Button;
