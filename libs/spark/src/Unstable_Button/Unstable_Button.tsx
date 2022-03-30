import * as React from 'react';
import clsx from 'clsx';
import {
  default as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@material-ui/core/Button';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';

export interface Unstable_ButtonTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'button'
> {
  props: P &
    Omit<MuiButtonProps, 'classes' | 'color' | 'fontSize'> & {
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
  classKey: Unstable_ButtonClassKey;
}

export type Unstable_ButtonProps<
  D extends React.ElementType = Unstable_ButtonTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_ButtonTypeMap<P, D>, D>;

export type Unstable_ButtonClassKey = 'root';

// :NOTE:
//  - Duotone layer selector is & > *[opacity=".12"]
//  - Duocolor layer selector is & > *[opacity=".4"]
const useStyles = makeStyles<Unstable_ButtonClassKey>(
  (theme) => ({
    root: (props: Unstable_ButtonProps) => ({
      ...(props.color === 'inherit' && { color: 'inherit' }),
      ...(props.color === 'normal' && {
        color: theme.unstable_palette.text.icon,
      }),
      ...(props.color === 'secondary' && {
        color: theme.unstable_palette.text.secondaryIcon,
      }),
      ...(props.color === 'inverse' && {
        color: theme.unstable_palette.text.inverseIcon,
      }),
      ...(props.color === 'inverseSecondary' && {
        color: theme.unstable_palette.text.inverseSecondaryIcon,
      }),
      ...(props.fontSize === 'inherit' && { fontSize: 'inherit' }),
      ...(props.fontSize === 'small' && {
        fontSize: theme.unstable_typography.pxToRem(16),
      }),
      ...(props.fontSize === 'medium' && {
        fontSize: theme.unstable_typography.pxToRem(24),
      }),
      ...(props.fontSize === 'large' && {
        fontSize: theme.unstable_typography.pxToRem(32),
      }),
      ...(props.fontSize === 'xlarge' && {
        fontSize: theme.unstable_typography.pxToRem(48),
      }),
    }),
  }),
  { name: 'MuiSparkUnstable_Button' }
);

const Unstable_Button: OverridableComponent<Unstable_ButtonTypeMap> = React.forwardRef(
  function Unstable_Button(
    { classes: classesProp, color = 'inherit', fontSize = 'inherit', ...other },
    ref
  ) {
    const classes = useStyles({ color, fontSize });

    return (
      <MuiButton
        classes={{ root: clsx(classes.root, classesProp?.root) }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_Button;
