import * as React from 'react';
import clsx from 'clsx';
import {
  default as MuiAvatar,
  AvatarClassKey as MuiAvatarClassKey,
  AvatarProps as MuiAvatarProps,
} from '@material-ui/core/Avatar';
import makeStyles from '../makeStyles';
import type { Theme } from '../theme';
import {
  OverridableComponent,
  OverrideProps,
  capitalize,
  useTriMergeClasses,
} from '../utils';

export type AvatarClassKey = MuiAvatarClassKey | CustomClassKey;

type CustomClassKey = 'sizeLarge' | 'sizeMedium' | 'sizeSmall' | 'sizeXsmall';

export interface AvatarTypeMap<
  P = Record<string, unknown>,
  D extends React.ElementType = 'div'
> {
  props: P &
    Omit<MuiAvatarProps, 'variant' | 'classes'> & {
      /**
       * The size of the avatar.
       */
      size?: 'large' | 'medium' | 'small' | 'xsmall';
    };
  defaultComponent: D;
  classKey: AvatarClassKey;
}

export type AvatarProps<
  D extends React.ElementType = AvatarTypeMap['defaultComponent'],
  P = Record<string, unknown>
> = OverrideProps<AvatarTypeMap<P, D>, D>;

export const MuiAvatarStyleOverrides = ({ palette }: Theme) => ({
  root: {
    border: `2px solid ${palette.grey.medium}`,
  },
  colorDefault: {
    backgroundColor: palette.common.white,
    color: palette.text.onLight,
    '& [class*=MuiSvgIcon-root]': {
      color: palette.text.onLightLowContrast,
    },
  },
});

const useCustomStyles = makeStyles(
  (theme: Theme) => ({
    sizeLarge: {
      ...theme.typography['heading-lg'],
      width: 80,
      height: 80,
      '& [class*=MuiSvgIcon-root]': {
        fontSize: theme.typography.pxToRem(40),
      },
    },
    sizeMedium: {
      ...theme.typography['heading-md'],
      width: 56,
      height: 56,
      '& [class*=MuiSvgIcon-root]': {
        fontSize: theme.typography.pxToRem(28),
      },
    },
    sizeSmall: {
      ...theme.typography['label-md'],
      fontWeight: 700,
      width: 32,
      height: 32,
      '& [class*=MuiSvgIcon-root]': {
        fontSize: theme.typography.pxToRem(16),
      },
    },
    sizeXsmall: {
      width: 24,
      height: 24,
      fontSize: theme.typography.pxToRem(8),
      lineHeight: 1.5,
      fontWeight: 700,
      '& [class*=MuiSvgIcon-root]': {
        fontSize: theme.typography.pxToRem(12),
      },
    },
  }),
  { name: 'MuiSparkAvatar' }
);

const Avatar: OverridableComponent<AvatarTypeMap> = React.forwardRef(
  function Avatar(
    { classes: passedClasses = {}, size = 'medium', ...other },
    ref
  ) {
    const baseCustomClasses = useCustomStyles();

    const { underlyingClasses, customClasses } = useTriMergeClasses<
      MuiAvatarClassKey,
      CustomClassKey
    >({
      baseUnderlyingClasses: {},
      baseCustomClasses,
      passedClasses,
    });

    return (
      <MuiAvatar
        classes={{
          ...underlyingClasses,
          root: clsx(
            underlyingClasses.root,
            customClasses[`size${capitalize(size)}`]
          ),
        }}
        {...other}
        ref={ref}
      />
    );
  }
);

export default Avatar;
