import * as React from 'react';
import clsx from 'clsx';
import {
  default as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@material-ui/core/Button';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import { buildVariant } from '../theme/typography';

export interface Unstable_ButtonTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'button'
> {
  props: P &
    Omit<MuiButtonProps, 'classes' | 'variant'> & {
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

export type Unstable_ButtonClassKey = 'root' | 'startIcon' | 'endIcon';

// Extracted as we dont have a unstable_variant
const buttonFontVariantSmall = buildVariant(
  500,
  14,
  16,
  undefined,
  undefined,
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);
const buttonFontVariantMedium = buildVariant(
  500,
  16,
  24,
  undefined,
  undefined,
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);
const buttonFontVariantLarge = buildVariant(
  500,
  18,
  24,
  undefined,
  undefined,
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);
const useStyles = makeStyles<Unstable_ButtonClassKey>(
  (theme) => ({
    root: (props: Unstable_ButtonProps) => ({
      // account for 2px border width
      borderRadius: 24,
      borderWidth: '2px',
      borderStyle: 'solid' as const,
      '&$disabled': {
        opacity: '50%',
      },
      ...(props.variant === 'primary' && {
        boxShadow: 'none',
        border: `2px solid ${theme.palette.blue[3]}`,
        backgroundColor: theme.palette.blue[3],
        color: theme.palette.common.white,
        '&$disabled': {
          border: `2px solid ${theme.palette.blue[3]}`,
          backgroundColor: theme.palette.blue[3],
          color: theme.palette.common.white,
        },
        '&:hover': {
          boxShadow: 'none',
          borderColor: theme.palette.blue[4],
          backgroundColor: theme.palette.blue[4],
        },
        '&.Mui-focusVisible, &:focus': {
          boxShadow: `0 0 0 4px ${theme.palette.blue[1]}`,
        },
        '&:active': {
          boxShadow: 'none',
          borderColor: theme.palette.blue[5],
        },
      }),
      ...(props.variant === 'stroked' && {
        boxShadow: 'none',
        // re-declare to override default
        border: `2px solid ${theme.palette.grey.medium}`,
        backgroundColor: theme.palette.common.white,
        color: theme.palette.blue[3],
        // re-declare to override default
        padding: `${theme.typography.pxToRem(6 - 2)} ${theme.typography.pxToRem(
          16 - 2
        )}`,
        '&$disabled': {
          border: `2px solid ${theme.palette.grey.medium}`,
          backgroundColor: theme.palette.common.white,
          color: theme.palette.blue[3],
        },
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: theme.palette.grey.light,
        },
        '&.Mui-focusVisible, &:focus': {
          boxShadow: `0 0 0 4px ${theme.palette.blue[1]}`,
        },
        '&:active': {
          boxShadow: 'none',
          borderColor: theme.palette.blue[5],
        },
      }),
      ...(props.variant === 'ghost' && {
        boxShadow: 'none',
        border: '2px solid transparent',
        backgroundColor: 'transparent',
        color: theme.palette.blue[3],
        // re-declare to override default
        padding: `${theme.typography.pxToRem(6 - 2)} ${theme.typography.pxToRem(
          16 - 2
        )}`,
        '&$disabled': {
          border: '2px solid transparent',
          backgroundColor: 'transparent',
          color: theme.palette.blue[3],
        },
        '&:hover': {
          boxShadow: 'none',
          color: theme.palette.blue[4],
          backgroundColor: 'transparent',
        },
        '&.Mui-focusVisible, &:focus': {
          boxShadow: `0 0 0 4px ${theme.palette.blue[1]}`,
          borderColor: theme.palette.blue[3],
          backgroundColor: theme.palette.blue[1],
        },
        '&:active': {
          boxShadow: 'none',
          color: theme.palette.blue[4],
        },
      }),
      ...(props.variant === 'destructive' &&
        {
          // TODO
        }),
      ...(props.size === 'small' && {
        ...buttonFontVariantSmall,
        // account for 2px border width
        padding: `${theme.typography.pxToRem(2 - 2)} ${theme.typography.pxToRem(
          16 - 2
        )}`,
      }),
      ...(props.size === 'medium' && {
        ...buttonFontVariantMedium,
        // account for 2px border width
        padding: `${theme.typography.pxToRem(6 - 2)} ${theme.typography.pxToRem(
          16 - 2
        )}`,
      }),
      ...(props.size === 'large' && {
        ...buttonFontVariantLarge,
        // account for 2px border width
        padding: `${theme.typography.pxToRem(
          14 - 2
        )} ${theme.typography.pxToRem(16 - 2)}`,
      }),
    }),
    startIcon: (props: Unstable_ButtonProps) => ({
      display: 'inherit',
      // -2px accounts for label vs icon size difference
      // have to specify individually to override defaults
      marginTop: '-2px',
      marginBottom: '-2px',
      marginRight: '8px',
      marginLeft: 0,
      color: 'inherit',
      ...(props.size === 'small' && {
        fontSize: theme.typography.pxToRem(16),
        lineHeight: theme.typography.pxToRem(16),
      }),
      ...(props.size === 'medium' && {
        fontSize: theme.typography.pxToRem(20),
        lineHeight: theme.typography.pxToRem(20),
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
        fontSize: theme.typography.pxToRem(20),
        lineHeight: theme.typography.pxToRem(20),
      }),
      ...(props.size === 'large' && {
        fontSize: theme.typography.pxToRem(24),
        lineHeight: theme.typography.pxToRem(24),
      }),
    }),
    label: { color: 'inherit', fontSize: 'inherit', lineHeight: 'inherit' },
  }),
  { name: 'MuiSparkUnstable_Button' }
);

const Unstable_Button: OverridableComponent<Unstable_ButtonTypeMap> = React.forwardRef(
  function Unstable_Button(props, ref) {
    const {
      classes: classesProp,
      variant = 'primary',
      size = 'large',
      ...other
    } = props;

    const classes = useStyles({ variant, size });

    return (
      <MuiButton
        classes={{ root: clsx(classes.root, classesProp?.root) }}
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
