import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiSvgIcon,
  SvgIconProps as MuiSvgIconProps,
} from '@material-ui/core/SvgIcon';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles from '../withStyles';

export interface Unstable_SvgIconTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'svg'
> {
  props: P &
    Omit<MuiSvgIconProps, 'classes' | 'color' | 'fontSize'> & {
      /**
       * The color of the component. Defaults to `'inherit'`.
       */
      color?:
        | 'inherit'
        | 'normal'
        | 'secondary'
        | 'inverse'
        | 'inverseSecondary';
      /**
       * The font size applied to the icon. Defaults to `'inherit'`.
       */
      fontSize?: 'inherit' | 'small' | 'medium' | 'large' | 'xlarge';
    };
  defaultComponent: D;
  classKey: Unstable_SvgIconClassKey;
}

export type Unstable_SvgIconProps<
  D extends ElementType = Unstable_SvgIconTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_SvgIconTypeMap<P, D>, D>;

export type Unstable_SvgIconClassKey = 'root';

type PrivateClassKey =
  | 'private-color-inherit'
  | 'private-color-normal'
  | 'private-color-secondary'
  | 'private-color-inverse'
  | 'private-color-inverseSecondary'
  | 'private-fontSize-inherit'
  | 'private-fontSize-small'
  | 'private-fontSize-medium'
  | 'private-fontSize-large'
  | 'private-fontSize-xlarge';

// :NOTE:
//  - Duotone layer selector is & > *[opacity=".12"]
//  - Duocolor layer selector is & > *[opacity=".4"]

const withClasses = withStyles<Unstable_SvgIconClassKey | PrivateClassKey>(
  (theme) => ({
    root: {},
    /* Private */
    'private-color-inherit': {
      color: 'inherit',
    },
    'private-color-normal': {
      color: theme.unstable_palette.text.icon,
    },
    'private-color-secondary': {
      color: theme.unstable_palette.text.secondaryIcon,
    },
    'private-color-inverse': {
      color: theme.unstable_palette.text.inverseIcon,
    },
    'private-color-inverseSecondary': {
      color: theme.unstable_palette.text.inverseSecondaryIcon,
    },
    'private-fontSize-inherit': {
      fontSize: 'inherit',
    },
    'private-fontSize-small': {
      fontSize: theme.unstable_typography.pxToRem(16),
    },
    'private-fontSize-medium': {
      fontSize: theme.unstable_typography.pxToRem(24),
    },
    'private-fontSize-large': {
      fontSize: theme.unstable_typography.pxToRem(32),
    },
    'private-fontSize-xlarge': {
      fontSize: theme.unstable_typography.pxToRem(48),
    },
  }),
  { name: 'MuiSparkUnstable_SvgIcon' }
);

const Unstable_SvgIcon: OverridableComponent<Unstable_SvgIconTypeMap> = forwardRef(
  function Unstable_SvgIcon(props, ref) {
    const {
      classes,
      color = 'inherit',
      fontSize = 'inherit',
      ...other
    } = props;

    return (
      <MuiSvgIcon
        classes={{
          root: clsx(
            classes.root,
            classes[`private-color-${color}`],
            classes[`private-fontSize-${fontSize}`]
          ),
        }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withClasses(Unstable_SvgIcon) as typeof Unstable_SvgIcon;
