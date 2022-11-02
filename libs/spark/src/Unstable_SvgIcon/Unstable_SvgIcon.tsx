import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiSvgIcon,
  SvgIconProps as MuiSvgIconProps,
} from '@material-ui/core/SvgIcon';
import { capitalize, OverridableComponent, OverrideProps } from '../utils';
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
       *
       * It supports those theme colors that make sense for this component. You can use the `htmlColor` prop to apply a color attribute to the SVG element.
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

export type Unstable_SvgIconClassKey =
  | 'root'
  | 'colorNormal'
  | 'colorSecondary'
  | 'colorInverse'
  | 'colorInverseSecondary'
  | 'fontSizeSmall'
  | 'fontSizeMedium'
  | 'fontSizeLarge'
  | 'fontSizeXLarge';

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
          root: clsx(classes.root, {
            [classes[`color${capitalize(color)}`]]: color !== 'inherit',
            [classes[`fontSize${capitalize(fontSize)}`]]:
              fontSize !== 'inherit',
          }),
        }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withStyles<Unstable_SvgIconClassKey>((theme) => ({
  // :NOTE:
  //  - Duotone layer selector is & > *[opacity=".12"]
  //  - Duocolor layer selector is & > *[opacity=".4"]

  root: {
    color: 'inherit',
    fontSize: 'inherit',
  },
  colorNormal: {
    color: theme.unstable_palette.text.icon,
  },
  colorSecondary: {
    color: theme.unstable_palette.text.secondaryIcon,
  },
  colorInverse: {
    color: theme.unstable_palette.text.inverseIcon,
  },
  colorInverseSecondary: {
    color: theme.unstable_palette.text.inverseSecondaryIcon,
  },
  fontSizeSmall: {
    fontSize: theme.unstable_typography.pxToRem(16),
  },
  fontSizeMedium: {
    fontSize: theme.unstable_typography.pxToRem(24),
  },
  fontSizeLarge: {
    fontSize: theme.unstable_typography.pxToRem(32),
  },
  fontSizeXLarge: {
    fontSize: theme.unstable_typography.pxToRem(48),
  },
}))(Unstable_SvgIcon) as typeof Unstable_SvgIcon;
