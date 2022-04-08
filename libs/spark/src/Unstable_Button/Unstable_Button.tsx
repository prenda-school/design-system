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

// Extracted as we dont have a unstable_variant
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
      borderRadius: 4,
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
        '&$disabled': {
          backgroundColor: theme.unstable_palette.neutral[80],
        },
      }),
      ...(props.variant === 'stroked' && {
        border: `1px solid ${theme.unstable_palette.neutral[90]}`,
        backgroundColor: theme.palette.common.white,
        '&:hover': {
          backgroundColor: theme.unstable_palette.neutral[70],
        },
        '&:active': {
          backgroundColor: theme.unstable_palette.blue[100],
        },
        '&[aria-expanded="true"]': {
          backgroundColor: theme.unstable_palette.neutral[600],
        },
        '&$disabled': {
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
        '&$disabled': {
          backgroundColor: theme.unstable_palette.neutral[80],
        },
        '&.Mui-focusVisible, &:focus-visible': {
          backgroundColor: theme.palette.common.white,
        },
      }),
      ...(props.variant === 'destructive' && {
        border: '2px solid transparent',
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
        '&$disabled': {
          backgroundColor: theme.unstable_palette.neutral[80],
          color: theme.unstable_palette.neutral[100],
        },
      }),
      ...(props.size === 'small' && {
        ...buttonFontVariantSmall,
        padding: '8px 16px',
      }),
      ...(props.size === 'medium' && {
        ...buttonFontVariantMedium,
        padding: '12px 24px',
      }),
      ...(props.size === 'large' && {
        ...buttonFontVariantLarge,
        padding: '20px 32px',
      }),
    }),

    label: (props: Unstable_ButtonProps) => ({
      color: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      ...(props.variant === 'primary' && {
        color: theme.palette.common.white,
        '&$disabled': {
          color: theme.unstable_palette.neutral[100],
        },
      }),
      ...(props.variant === 'stroked' && {
        color: theme.unstable_palette.brand.blue,
        '&[aria-expanded="true"]': {
          color: theme.palette.common.white,
        },
      }),
      ...(props.variant === 'ghost' && {
        color: theme.unstable_palette.brand.blue,
        '&[aria-expanded="true"]': {
          color: theme.palette.common.white,
        },
        '&$disabled': {
          color: theme.unstable_palette.neutral[100],
        },
      }),
      ...(props.variant === 'destructive' && {
        color: theme.palette.common.white,
        '&$disabled': {
          color: theme.unstable_palette.neutral[100],
        },
      }),
    }),
    startIcon: (props: Unstable_ButtonProps) => ({
      display: 'inherit',
      // -2px accounts for label vs icon size difference
      // have to specify individually to override defaults
      margin: '-2px',
      marginBottom: '-2px',
      marginRight: '8px',
      marginLeft: 0,
      color: 'inherit',
      ...(props.size === 'small' && {
        fontSize: theme.typography.pxToRem(16),
        lineHeight: theme.typography.pxToRem(16),
      }),
      ...(props.size === 'medium' && {
        fontSize: theme.typography.pxToRem(24),
        lineHeight: theme.typography.pxToRem(24),
      }),
      ...(props.size === 'large' && {
        fontSize: theme.typography.pxToRem(24),
        lineHeight: theme.typography.pxToRem(24),
      }),
    }),
    endIcon: (props: Unstable_ButtonProps) => ({
      display: 'inherit',
      // -2px accounts for label vs icon size difference
      // have to specify individually to override defaults
      marginTop: '-2px',
      marginBottom: '-2px',
      marginLeft: '8px',
      marginRight: 0,
      color: 'inherit',
      ...(props.size === 'small' && {
        fontSize: theme.typography.pxToRem(16),
        lineHeight: theme.typography.pxToRem(16),
      }),
      ...(props.size === 'medium' && {
        fontSize: theme.typography.pxToRem(24),
        lineHeight: theme.typography.pxToRem(24),
      }),
      ...(props.size === 'large' && {
        fontSize: theme.typography.pxToRem(24),
        lineHeight: theme.typography.pxToRem(24),
      }),
    }),
  }),
  { name: 'MuiSparkUnstable_Button' }
);

const Unstable_Button: OverridableComponent<Unstable_ButtonTypeMap> = React.forwardRef(
  function Unstable_Button(props, ref) {
    const {
      classes: classesProp,
      variant = 'primary',
      size = 'medium',
      ...other
    } = props;

    const classes = useStyles({ variant, size });

    return (
      <MuiButton
        classes={{
          root: clsx(classes.root, classesProp?.root),
          startIcon: clsx(classes.startIcon, classesProp?.startIcon),
          endIcon: clsx(classes.endIcon, classesProp?.endIcon),
          label: clsx(classes.label, classesProp?.label),
        }}
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
