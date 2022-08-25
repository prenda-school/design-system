import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from '@material-ui/core/Avatar';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import { buildVariant } from '../theme/typography';

export interface AvatarTypeMap<
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
  classKey: AvatarClassKey;
}

export type AvatarProps<
  D extends ElementType = AvatarTypeMap['defaultComponent'],
  P = Record<string, unknown>
> = OverrideProps<AvatarTypeMap<P, D>, D>;

export type AvatarClassKey = 'root' | 'img' | 'fallback';

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

const useStyles = makeStyles<AvatarClassKey>(
  (theme) => ({
    root: (props: AvatarProps) => ({
      backgroundColor: theme.palette.neutral[70],
      color: theme.palette.text.heading,
      /* size */
      // must set height/width instead of padding because different children (text, icon) require different padding but there's no way to tell which is passed here
      // set min height/width to match design, and lesser-responsive height/width to scale with user's browser-set font size to maintain a11y
      ...(props.size === 'large' && {
        borderRadius: 8,
        minHeight: 64,
        minWidth: 64,
        height: theme.typography.pxToRem(32),
        width: theme.typography.pxToRem(32),
        ...avatarFontVariantLarge,
      }),
      ...(props.size === 'medium' && {
        borderRadius: 6,
        minHeight: 40,
        minWidth: 40,
        height: theme.typography.pxToRem(24),
        width: theme.typography.pxToRem(24),
        ...avatarFontVariantMedium,
      }),
      ...(props.size === 'small' && {
        borderRadius: 4,
        minHeight: 24,
        minWidth: 24,
        height: theme.typography.pxToRem(16),
        width: theme.typography.pxToRem(16),
        ...avatarFontVariantSmall,
      }),
      /* color */
      ...(props.color === 'neutral' && {
        backgroundColor: theme.palette.neutral[70],
      }),
      ...(props.color === 'orange' && {
        backgroundColor: theme.palette.red[200],
      }),
      ...(props.color === 'yellow' && {
        backgroundColor: theme.palette.yellow[200],
      }),
      ...(props.color === 'green' && {
        backgroundColor: theme.palette.green[200],
      }),
      ...(props.color === 'blue' && {
        backgroundColor: theme.palette.blue[200],
      }),
      ...(props.color === 'purple' && {
        backgroundColor: theme.palette.purple[200],
      }),
      ...(props.color === 'teal' && {
        backgroundColor: theme.palette.teal[200],
      }),
      ...(props.color === 'magenta' && {
        backgroundColor: theme.palette.magenta[300],
      }),
      /* icon children */
      '& [class*=MuiSvgIcon-root]': {
        color: theme.palette.text.icon,
        /* size */
        ...(props.size === 'large' && {
          fontSize: theme.typography.pxToRem(32),
        }),
        ...(props.size === 'medium' && {
          fontSize: theme.typography.pxToRem(24),
        }),
        ...(props.size === 'small' && {
          fontSize: theme.typography.pxToRem(16),
        }),
      },
    }),
    img: {},
    fallback: {},
  }),
  { name: 'MuiPDSAvatar' }
);

const Avatar: OverridableComponent<AvatarTypeMap> = forwardRef(function Avatar(
  props,
  ref
) {
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
});

export default Avatar;
