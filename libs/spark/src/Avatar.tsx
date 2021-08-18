import * as React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  Theme,
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
  AvatarClassKey as MuiAvatarClassKey,
} from '@material-ui/core';
import {
  OverrideProps,
  OverridableComponent,
} from '@material-ui/core/OverridableComponent';
import { capitalize } from './utils';
import { palette } from './styles/palette';

// TEMPORARY, REMOVE ME
/* Full credit to https://github.com/mui-org/material-ui/blob/5cc1d0fc8756534f181d55af02a5a0d65b486603/packages/material-ui-styles/src/withStyles/withStyles.d.ts#L81 */
export type ClassNameMap<ClassKey extends string = string> = Record<
  ClassKey,
  string
>;

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

export const MuiAvatarStyleOverrides = {
  root: {
    border: `2px solid ${palette.grey.medium}`,
  },
  colorDefault: {
    backgroundColor: palette.common.white,
    color: palette.text.onLight,
    '& > .MuiSvgIcon-root': {
      color: palette.text.onLightLowContrast,
    },
  },
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    sizeLarge: {
      ...theme.typography['heading-lg'],
      width: 80,
      height: 80,
      '& > .MuiSvgIcon-root': {
        fontSize: theme.typography.pxToRem(40),
      },
    },
    sizeMedium: {
      ...theme.typography['heading-md'],
      width: 56,
      height: 56,
      '& > .MuiSvgIcon-root': {
        fontSize: theme.typography.pxToRem(28),
      },
    },
    sizeSmall: {
      ...theme.typography['label-md'],
      fontWeight: 700,
      width: 32,
      height: 32,
      '& > .MuiSvgIcon-root': {
        fontSize: theme.typography.pxToRem(16),
      },
    },
    sizeXsmall: {
      width: 24,
      height: 24,
      fontSize: theme.typography.pxToRem(8),
      lineHeight: 1.5,
      fontWeight: 700,
      '& > .MuiSvgIcon-root': {
        fontSize: theme.typography.pxToRem(12),
      },
    },
  }),
  { name: 'SparkAvatar' }
);

export const Avatar: OverridableComponent<AvatarTypeMap> = React.forwardRef(
  function Avatar(props, ref) {
    const { classes: passedClasses = {}, size = 'medium', ...other } = props;

    const baseCustomClasses = useStyles();

    // extract custom class keys from passed classes
    //  => produce union of customClasses and extraction
    //     & produce intersection of passed classes and complement of custom classes
    // TODO: once WET, extract to common utility func / hook
    const underlyingClasses: Partial<ClassNameMap<MuiAvatarClassKey>> = {};
    const customClasses: Partial<ClassNameMap<CustomClassKey>> = {
      ...baseCustomClasses,
    };

    for (const [key, value] of Object.entries(passedClasses)) {
      const customValue = customClasses[key];
      if (customValue) {
        customClasses[key] = `${customValue} ${value}`;
      } else {
        underlyingClasses[key] = value;
      }
    }

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