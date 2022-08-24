import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from '@material-ui/core/Avatar';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import { buildVariant } from '../theme/typography';

export interface Unstable_AvatarTypeMap<
  P = Record<string, unknown>,
  D extends ElementType = 'div'
> {
  props: P &
    Omit<MuiAvatarProps, 'classes' | 'variant'> & {
      /**
       * The color of the component.
       */
      color?:
        | 'neutral'
        | 'orange'
        | 'yellow'
        | 'green'
        | 'blue'
        | 'purple'
        | 'teal'
        | 'magenta';
      /**
       * The size of the component.
       */
      size?: 'large' | 'medium' | 'small';
    };
  defaultComponent: D;
  classKey: Unstable_AvatarClassKey;
}

export type Unstable_AvatarProps<
  D extends ElementType = Unstable_AvatarTypeMap['defaultComponent'],
  P = Record<string, unknown>
> = OverrideProps<Unstable_AvatarTypeMap<P, D>, D>;

export type Unstable_AvatarClassKey = 'root' | 'img' | 'fallback';

// extracted since there's not an equivalent typography variant
const avatarFontVariantLarge = buildVariant(
  500,
  28,
  36,
  -0.01,
  'none',
  '"Poppins", sans-serif'
);
const avatarFontVariantMedium = buildVariant(
  500,
  20,
  20,
  -0.01,
  'none',
  '"Poppins", sans-serif'
);
const avatarFontVariantSmall = buildVariant(
  500,
  14,
  24,
  -0.01,
  'none',
  '"Poppins", sans-serif'
);

const useStyles = makeStyles<Unstable_AvatarClassKey>(
  (theme) => ({
    root: (props: Unstable_AvatarProps) => ({
      backgroundColor: theme.unstable_palette.neutral[70],
      color: theme.unstable_palette.text.heading,
      /* size */
      // must set height/width instead of padding because different children (text, icon) require different padding but there's no way to tell which is passed here
      // set min height/width to match design, and lesser-responsive height/width to scale with user's browser-set font size to maintain a11y
      ...(props.size === 'large' && {
        borderRadius: 8,
        minHeight: 64,
        minWidth: 64,
        height: theme.unstable_typography.pxToRem(32),
        width: theme.unstable_typography.pxToRem(32),
        ...avatarFontVariantLarge,
      }),
      ...(props.size === 'medium' && {
        borderRadius: 6,
        minHeight: 40,
        minWidth: 40,
        height: theme.unstable_typography.pxToRem(24),
        width: theme.unstable_typography.pxToRem(24),
        ...avatarFontVariantMedium,
      }),
      ...(props.size === 'small' && {
        borderRadius: 4,
        minHeight: 24,
        minWidth: 24,
        height: theme.unstable_typography.pxToRem(16),
        width: theme.unstable_typography.pxToRem(16),
        ...avatarFontVariantSmall,
      }),
      /* color */
      ...(props.color === 'neutral' && {
        backgroundColor: theme.unstable_palette.neutral[70],
      }),
      ...(props.color === 'orange' && {
        backgroundColor: theme.unstable_palette.red[200],
      }),
      ...(props.color === 'yellow' && {
        backgroundColor: theme.unstable_palette.yellow[200],
      }),
      ...(props.color === 'green' && {
        backgroundColor: theme.unstable_palette.green[200],
      }),
      ...(props.color === 'blue' && {
        backgroundColor: theme.unstable_palette.blue[200],
      }),
      ...(props.color === 'purple' && {
        backgroundColor: theme.unstable_palette.purple[200],
      }),
      ...(props.color === 'teal' && {
        backgroundColor: theme.unstable_palette.teal[200],
      }),
      ...(props.color === 'magenta' && {
        backgroundColor: theme.unstable_palette.magenta[300],
      }),
      /* icon children */
      '& [class*=MuiSvgIcon-root]': {
        color: theme.unstable_palette.text.icon,
        /* size */
        ...(props.size === 'large' && {
          fontSize: theme.unstable_typography.pxToRem(32),
        }),
        ...(props.size === 'medium' && {
          fontSize: theme.unstable_typography.pxToRem(24),
        }),
        ...(props.size === 'small' && {
          fontSize: theme.unstable_typography.pxToRem(16),
        }),
      },
    }),
    img: {},
    fallback: {},
  }),
  { name: 'MuiSparkUnstable_Avatar' }
);

const Unstable_Avatar: OverridableComponent<Unstable_AvatarTypeMap> = forwardRef(
  function Unstable_Avatar(props, ref) {
    const {
      classes: classesProp,
      color = 'neutral',
      size = 'large',
      ...other
    } = props;

    const classes = useStyles({ color, size });

    return (
      <MuiAvatar
        classes={{
          root: clsx(classes.root, classesProp?.root),
          img: clsx(classes.img, classesProp?.img),
          fallback: clsx(classes.fallback, classesProp?.fallback),
        }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_Avatar;
