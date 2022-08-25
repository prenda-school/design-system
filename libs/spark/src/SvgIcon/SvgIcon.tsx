import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiSvgIcon,
  SvgIconProps as MuiSvgIconProps,
} from '@material-ui/core/SvgIcon';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';

export interface SvgIconTypeMap<
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
  classKey: SvgIconClassKey;
}

export type SvgIconProps<
  D extends ElementType = SvgIconTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<SvgIconTypeMap<P, D>, D>;

export type SvgIconClassKey = 'root';

// :NOTE:
//  - Duotone layer selector is & > *[opacity=".12"]
//  - Duocolor layer selector is & > *[opacity=".4"]
const useStyles = makeStyles<SvgIconClassKey>(
  (theme) => ({
    root: (props: SvgIconProps) => ({
      /* color */
      ...(props.color === 'inherit' && { color: 'inherit' }),
      ...(props.color === 'normal' && {
        color: theme.palette.text.icon,
      }),
      ...(props.color === 'secondary' && {
        color: theme.palette.text.secondaryIcon,
      }),
      ...(props.color === 'inverse' && {
        color: theme.palette.text.inverseIcon,
      }),
      ...(props.color === 'inverseSecondary' && {
        color: theme.palette.text.inverseSecondaryIcon,
      }),
      /* fontSize */
      ...(props.fontSize === 'inherit' && { fontSize: 'inherit' }),
      ...(props.fontSize === 'small' && {
        fontSize: theme.typography.pxToRem(16),
      }),
      ...(props.fontSize === 'medium' && {
        fontSize: theme.typography.pxToRem(24),
      }),
      ...(props.fontSize === 'large' && {
        fontSize: theme.typography.pxToRem(32),
      }),
      ...(props.fontSize === 'xlarge' && {
        fontSize: theme.typography.pxToRem(48),
      }),
    }),
  }),
  { name: 'MuiPDSSvgIcon' }
);

const SvgIcon: OverridableComponent<SvgIconTypeMap> = forwardRef(
  function SvgIcon(props, ref) {
    const {
      classes: classesProp,
      color = 'inherit',
      fontSize = 'inherit',
      ...other
    } = props;

    const classes = useStyles({ color, fontSize });

    return (
      <MuiSvgIcon
        classes={{ root: clsx(classes.root, classesProp?.root) }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default SvgIcon;
