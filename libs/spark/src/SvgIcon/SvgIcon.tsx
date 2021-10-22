import * as React from 'react';
import clsx from 'clsx';
import {
  default as MuiSvgIcon,
  SvgIconProps as MuiSvgIconProps,
} from '@material-ui/core/SvgIcon';
import makeStyles from '../makeStyles';
import {
  capitalize,
  OverridableComponent,
  OverrideProps,
  useMergeClasses,
} from '../utils';

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

// :NOTE: Duotone fill selector is & > *[fill="#F0F1F2"]
const useStyles = makeStyles<SvgIconClassKey>(
  ({ palette, typography }) => ({
    root: {
      color: 'inherit',
      fontSize: 'inherit',
      '& > *[fill="#F0F1F2"]': {
        opacity: 0.72,
      },
    },
    colorDark: {
      color: palette.text.dark,
    },
    colorLight: {
      color: palette.text.light,
    },
    colorWhite: {
      color: palette.common.white,
    },
    colorDisabled: {
      color: palette.action.disabled,
    },
    colorError: {
      color: palette.red[2],
      '& > *[fill="#F0F1F2"]': {
        fill: palette.red[1],
      },
    },
    colorSuccess: {
      color: palette.green[2],
      '& > *[fill="#F0F1F2"]': {
        fill: palette.green[1],
      },
    },
    colorWarning: {
      color: palette.yellow[2],
      '& > *[fill="#F0F1F2"]': {
        fill: palette.yellow[1],
      },
    },
    colorInfo: {
      color: palette.blue[2],
      '& > *[fill="#F0F1F2"]': {
        fill: palette.blue[1],
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

export interface SvgIconTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'svg'
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
  D extends React.ElementType = SvgIconTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<SvgIconTypeMap<P, D>, D>;

const SvgIcon: OverridableComponent<SvgIconTypeMap> = React.forwardRef(
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
