import type { ElementType } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { SvgIconProps as MuiSvgIconProps } from '@material-ui/core/SvgIcon';
import { default as MuiSvgIcon } from '@material-ui/core/SvgIcon';
import type { OverridableComponent, OverrideProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface SvgIconTypeMap<
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
  classKey: SvgIconClassKey;
}

export type SvgIconProps<
  D extends ElementType = SvgIconTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<SvgIconTypeMap<P, D>, D>;

export type SvgIconClassKey = 'root';

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

const styles: Styles<SvgIconClassKey | PrivateClassKey> = (theme) => ({
  root: {},
  /* Private */
  'private-color-inherit': {
    color: 'inherit',
  },
  'private-color-normal': {
    color: theme.palette_alpha.text.icon,
  },
  'private-color-secondary': {
    color: theme.palette_alpha.text.secondaryIcon,
  },
  'private-color-inverse': {
    color: theme.palette_alpha.text.inverseIcon,
  },
  'private-color-inverseSecondary': {
    color: theme.palette_alpha.text.inverseSecondaryIcon,
  },
  'private-fontSize-inherit': {
    fontSize: 'inherit',
  },
  'private-fontSize-small': {
    fontSize: theme.typography_alpha.pxToRem(16),
  },
  'private-fontSize-medium': {
    fontSize: theme.typography_alpha.pxToRem(24),
  },
  'private-fontSize-large': {
    fontSize: theme.typography_alpha.pxToRem(32),
  },
  'private-fontSize-xlarge': {
    fontSize: theme.typography_alpha.pxToRem(48),
  },
});

const SvgIcon: OverridableComponent<SvgIconTypeMap> = forwardRef(
  function SvgIcon(props, ref) {
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

export default withStyles(styles, { name: 'MuiSpark_alpha_SvgIcon' })(
  SvgIcon
) as typeof SvgIcon;
