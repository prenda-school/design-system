import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiSvgIcon,
  SvgIconProps as MuiSvgIconProps,
} from '@material-ui/core/SvgIcon';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles from '../withStyles';
import makeStyles from '../makeStyles';

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
  | 'color-normal'
  | 'color-secondary'
  | 'color-inverse'
  | 'color-inverseSecondary'
  | 'fontSize-small'
  | 'fontSize-medium'
  | 'fontSize-large'
  | 'fontSize-xlarge';

const usePrivateStyles = makeStyles<PrivateClassKey>(
  (theme) => ({
    // :NOTE:
    //  - Duotone layer selector is & > *[opacity=".12"]
    //  - Duocolor layer selector is & > *[opacity=".4"]
    'color-inherit': {
      color: 'inherit',
    },
    'color-normal': {
      color: theme.unstable_palette.text.icon,
    },
    'color-secondary': {
      color: theme.unstable_palette.text.secondaryIcon,
    },
    'color-inverse': {
      color: theme.unstable_palette.text.inverseIcon,
    },
    'color-inverseSecondary': {
      color: theme.unstable_palette.text.inverseSecondaryIcon,
    },
    'fontSize-inherit': {
      fontSize: 'inherit',
    },
    'fontSize-small': {
      fontSize: theme.unstable_typography.pxToRem(16),
    },
    'fontSize-medium': {
      fontSize: theme.unstable_typography.pxToRem(24),
    },
    'fontSize-large': {
      fontSize: theme.unstable_typography.pxToRem(32),
    },
    'fontSize-xlarge': {
      fontSize: theme.unstable_typography.pxToRem(48),
    },
  }),
  { name: 'MuiSparkPrivate-SvgIcon' }
);

const Unstable_SvgIcon: OverridableComponent<Unstable_SvgIconTypeMap> = forwardRef(
  function Unstable_SvgIcon(props, ref) {
    const {
      classes,
      color = 'inherit',
      fontSize = 'inherit',
      ...other
    } = props;

    const privateClasses = usePrivateStyles();

    return (
      <MuiSvgIcon
        classes={{
          root: clsx(
            classes.root,
            privateClasses[`color-${color}`],
            privateClasses[`fontSize-${fontSize}`]
          ),
        }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withStyles<Unstable_SvgIconClassKey>(
  { root: {} },
  { name: 'MuiSparkUnstable_SvgIcon' }
)(Unstable_SvgIcon) as typeof Unstable_SvgIcon;
