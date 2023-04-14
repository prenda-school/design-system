import type { ElementType } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { SvgIconProps as MuiSvgIconProps } from '@material-ui/core/SvgIcon';
import { default as MuiSvgIcon } from '@material-ui/core/SvgIcon';
import makeStyles from '../makeStyles';
import type { OverridableComponent, OverrideProps } from '../utils';
import { capitalize, useMergeClasses } from '../utils';

/** @deprecated */
export type SvgIconClassKey =
  | 'root'
  | 'colorDark'
  | 'colorLight'
  | 'colorWhite'
  | 'colorDisabled'
  | 'colorError'
  | 'colorSuccess'
  | 'colorWarning'
  | 'colorInfo'
  | 'fontSizeSmall'
  | 'fontSizeMedium'
  | 'fontSizeLarge'
  | 'lowContrast';

// :NOTE:
//  - Duotone fill selector is & > * [fill = "#F0F1F2"]
//  - the last two chars of an eight-char hex value are the alpha channel / transparency
//    - b8 = 72%, 47 = 28%
const useStyles = makeStyles<SvgIconClassKey>(
  ({ palette, typography }) => ({
    root: {
      color: 'inherit',
      fontSize: 'inherit',
    },
    colorDark: {
      color: palette.text.dark,
    },
    colorLight: {
      color: palette.text.light,
      '& > *[fill="#F0F1F2"]': {
        fill: `#f0f1f247`,
      },
    },
    colorWhite: {
      color: palette.common.white,
      '& > *[fill="#F0F1F2"]': {
        fill: `#f0f1f247`,
      },
    },
    colorDisabled: {
      color: palette.action.disabled,
    },
    colorError: {
      color: palette.red[2],
      '& > *[fill="#F0F1F2"]': {
        fill: `${palette.red[1]}b8`,
      },
    },
    colorSuccess: {
      color: palette.green[2],
      '& > *[fill="#F0F1F2"]': {
        fill: `${palette.green[1]}b8`,
      },
    },
    colorWarning: {
      color: palette.yellow[2],
      '& > *[fill="#F0F1F2"]': {
        fill: `${palette.yellow[1]}b8`,
      },
    },
    colorInfo: {
      color: palette.blue[2],
      '& > *[fill="#F0F1F2"]': {
        fill: `${palette.blue[1]}b8`,
      },
    },
    fontSizeSmall: {
      fontSize: typography.pxToRem(16),
    },
    fontSizeMedium: {
      fontSize: typography.pxToRem(24),
    },
    fontSizeLarge: {
      fontSize: typography.pxToRem(32),
    },
    lowContrast: {
      opacity: 0.72,
    },
  }),
  { name: 'MuiSparkSvgIcon' }
);

/** @deprecated */
export interface SvgIconTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'svg'
> {
  props: P &
    Omit<MuiSvgIconProps, 'color' | 'classes'> & {
      /**
       * The color of the component.
       */
      color?:
        | 'inherit'
        | 'dark'
        | 'light'
        | 'disabled'
        | 'error'
        | 'success'
        | 'warning'
        | 'info'
        | 'white';
      /**
       * Whether the component should appear with low contrast.
       */
      lowContrast?: boolean;
    };
  defaultComponent: D;
  classKey: SvgIconClassKey;
}

export type SvgIconProps<
  D extends ElementType = SvgIconTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<SvgIconTypeMap<P, D>, D>;

/** @deprecated */
const SvgIcon: OverridableComponent<SvgIconTypeMap> = forwardRef(
  function SvgIcon(
    {
      lowContrast,
      classes: classesProp,
      color = 'inherit',
      fontSize = 'inherit',
      className,
      ...other
    },
    ref
  ) {
    const baseClasses = useStyles();

    const classes = useMergeClasses({
      baseClasses,
      classesProp,
    });

    return (
      <MuiSvgIcon
        className={clsx(className, classes.root, {
          [classes[`color${capitalize(color)}`]]: color !== 'inherit',
          [classes[`fontSize${capitalize(fontSize)}`]]: fontSize !== 'inherit',
          [classes.lowContrast]: lowContrast,
        })}
        ref={ref}
        {...other}
      />
    );
  }
);

export default SvgIcon;
