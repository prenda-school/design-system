import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from '@material-ui/core/Avatar';
import { buildVariant } from '../theme/typography';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles from '../withStyles';

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

type PrivateClassKey =
  | 'private-root-size-small'
  | 'private-root-size-medium'
  | 'private-root-size-large'
  | 'private-root-color-neutral'
  | 'private-root-color-orange'
  | 'private-root-color-yellow'
  | 'private-root-color-green'
  | 'private-root-color-blue'
  | 'private-root-color-purple'
  | 'private-root-color-teal'
  | 'private-root-color-magenta';

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

const withClasses = withStyles<Unstable_AvatarClassKey | PrivateClassKey>(
  (theme) => ({
    root: {
      backgroundColor: theme.unstable_palette.neutral[70],
      color: theme.unstable_palette.text.heading,
      '& [class*=MuiSvgIcon-root]': {
        color: theme.unstable_palette.text.icon,
      },
    },
    img: {},
    fallback: {},
    /* Private */
    'private-root-color-neutral': {
      backgroundColor: theme.unstable_palette.neutral[70],
    },
    'private-root-color-orange': {
      backgroundColor: theme.unstable_palette.red[200],
    },
    'private-root-color-yellow': {
      backgroundColor: theme.unstable_palette.yellow[200],
    },
    'private-root-color-green': {
      backgroundColor: theme.unstable_palette.green[200],
    },
    'private-root-color-blue': {
      backgroundColor: theme.unstable_palette.blue[200],
    },
    'private-root-color-purple': {
      backgroundColor: theme.unstable_palette.purple[200],
    },
    'private-root-color-teal': {
      backgroundColor: theme.unstable_palette.teal[200],
    },
    'private-root-color-magenta': {
      backgroundColor: theme.unstable_palette.magenta[300],
    },
    /* 
      size
        - must set height/width instead of padding because different children (text, icon) require different padding but there's no way to tell which is passed here
        - set min height/width to match design, and lesser-responsive height/width to scale with user's browser-set font size to maintain a11y
    */
    'private-root-size-small': {
      borderRadius: 4,
      minHeight: 24,
      minWidth: 24,
      height: theme.unstable_typography.pxToRem(16),
      width: theme.unstable_typography.pxToRem(16),
      ...avatarFontVariantSmall,
      '& [class*=MuiSvgIcon-root]': {
        fontSize: theme.unstable_typography.pxToRem(16),
      },
    },
    'private-root-size-medium': {
      borderRadius: 6,
      minHeight: 40,
      minWidth: 40,
      height: theme.unstable_typography.pxToRem(24),
      width: theme.unstable_typography.pxToRem(24),
      ...avatarFontVariantMedium,
      '& [class*=MuiSvgIcon-root]': {
        fontSize: theme.unstable_typography.pxToRem(24),
      },
    },
    'private-root-size-large': {
      borderRadius: 8,
      minHeight: 64,
      minWidth: 64,
      height: theme.unstable_typography.pxToRem(32),
      width: theme.unstable_typography.pxToRem(32),
      ...avatarFontVariantLarge,
      '& [class*=MuiSvgIcon-root]': {
        fontSize: theme.unstable_typography.pxToRem(32),
      },
    },
  }),
  { name: 'MuiSparkUnstable_Avatar' }
);

const Unstable_Avatar: OverridableComponent<Unstable_AvatarTypeMap> = forwardRef(
  function Unstable_Avatar(props, ref) {
    const { classes, color = 'neutral', size = 'large', ...other } = props;

    return (
      <MuiAvatar
        classes={{
          root: clsx(
            classes.root,
            classes[`private-root-color-${color}`],
            classes[`private-root-size-${size}`]
          ),
          img: clsx(classes.img),
          fallback: clsx(classes.fallback),
        }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withClasses(Unstable_Avatar) as typeof Unstable_Avatar;
