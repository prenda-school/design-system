import {
  default as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import React, { ReactNode, forwardRef } from 'react';
import { StandardProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';

export interface CircularProgressProps
  extends StandardProps<
    MuiCircularProgressProps,
    CircularProgressClassKey,
    'classes' | 'color'
  > {
  /**
   * The color of the circle, label (if provided).
   */
  color?: 'neutral' | 'red' | 'yellow' | 'teal' | 'green' | 'blue' | 'purple';
  /**
   * The label displayed in the center of the circle.
   */
  children?: ReactNode;
  /**
   * Whether the background circle should be hidden.
   */
  hideBgCircle?: boolean;
  /**
   * The variant of the component
   */
  variant?: Exclude<MuiCircularProgressProps['variant'], 'static'>;
}

export type CircularProgressClassKey =
  | 'root'
  | 'svg'
  | 'circle'
  | 'svgBg'
  | 'circleBg'
  | 'dashed'
  | 'container'
  | 'label';

type PrivateClassKey =
  | 'private-circle-color-neutral'
  | 'private-circle-color-red'
  | 'private-circle-color-yellow'
  | 'private-circle-color-teal'
  | 'private-circle-color-green'
  | 'private-circle-color-blue'
  | 'private-circle-color-purple'
  | 'private-label-color-neutral'
  | 'private-label-color-red'
  | 'private-label-color-yellow'
  | 'private-label-color-teal'
  | 'private-label-color-green'
  | 'private-label-color-blue'
  | 'private-label-color-purple';

const styles: Styles<CircularProgressClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {},
  svg: {
    display: 'block', // Keeps the progress centered
  },
  circle: {
    color: 'inherit',
    strokeLinecap: 'round',
  },
  svgBg: {
    position: 'absolute',
    inset: 0,
  },
  circleBg: {
    color: theme.unstable_palette.neutral[70],
    stroke: 'currentColor',
  },
  dashed: {},
  container: {
    position: 'relative',
    display: 'inline-flex',
  },
  label: {
    ...theme.unstable_typography.T14,
    fontSize: '.75rem',
    lineHeight: '1.25rem',
    letterSpacing: '-0.05em',
    inset: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  'private-circle-color-neutral': {
    color: theme.unstable_palette.neutral[200],
  },
  'private-circle-color-red': {
    color: theme.unstable_palette.red[600],
  },
  'private-circle-color-yellow': {
    color: theme.unstable_palette.yellow[500],
  },
  'private-circle-color-teal': {
    color: theme.unstable_palette.teal[500],
  },
  'private-circle-color-green': {
    color: theme.unstable_palette.green[600],
  },
  'private-circle-color-blue': {
    color: theme.unstable_palette.blue[600],
  },
  'private-circle-color-purple': {
    color: theme.unstable_palette.purple[500],
  },
  'private-label-color-neutral': {
    color: theme.unstable_palette.neutral[500],
  },
  'private-label-color-red': {
    color: theme.unstable_palette.red[600],
  },
  'private-label-color-yellow': {
    color: theme.unstable_palette.yellow[500],
  },
  'private-label-color-teal': {
    color: theme.unstable_palette.teal[500],
  },
  'private-label-color-green': {
    color: theme.unstable_palette.green[600],
  },
  'private-label-color-blue': {
    color: theme.unstable_palette.blue[600],
  },
  'private-label-color-purple': {
    color: theme.unstable_palette.purple[500],
  },
});

const SIZE = 44; // from MUI

const UnstyledCircularProgress = forwardRef<
  HTMLDivElement,
  CircularProgressProps
>(function CircularProgress(props, ref) {
  const {
    children,
    classes,
    color = 'neutral',
    size = 48,
    thickness = (SIZE / 48) * 6.7, // MUI-internal svg is scaled to hard-coded `SIZE={44}`; design spec requires 48 size relative to 6.7 thickness; so, proportionally scale the thickness down
    variant = 'determinate',
    value = 0,
    ...other
  } = props;

  return (
    <div className={classes.container}>
      {/* from MUI */}
      <svg
        className={classes.svgBg}
        viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
      >
        <circle
          className={clsx(classes.circleBg)}
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - thickness) / 2}
          fill="none"
          strokeWidth={thickness}
        />
      </svg>

      <MuiCircularProgress
        classes={{
          root: classes.root,
          svg: classes.svg,
          circle: clsx(classes.circle, {
            [classes['private-circle-color-neutral']]: color === 'neutral',
            [classes['private-circle-color-red']]: color === 'red',
            [classes['private-circle-color-yellow']]: color === 'yellow',
            [classes['private-circle-color-teal']]: color === 'teal',
            [classes['private-circle-color-green']]: color === 'green',
            [classes['private-circle-color-blue']]: color === 'blue',
            [classes['private-circle-color-purple']]: color === 'purple',
          }),
        }}
        ref={ref}
        size={size}
        thickness={thickness}
        value={value}
        variant={variant}
        {...other}
      />

      {children === undefined ? null : (
        <span
          className={clsx(classes.label, {
            [classes['private-label-color-neutral']]: color === 'neutral',
            [classes['private-label-color-red']]: color === 'red',
            [classes['private-label-color-yellow']]: color === 'yellow',
            [classes['private-label-color-teal']]: color === 'teal',
            [classes['private-label-color-green']]: color === 'green',
            [classes['private-label-color-blue']]: color === 'blue',
            [classes['private-label-color-purple']]: color === 'purple',
          })}
        >
          {children}
        </span>
      )}
    </div>
  );
});

const CircularProgress = withStyles(styles, {
  name: 'Mui_PDS_alpha_CircularProgress',
})(UnstyledCircularProgress) as typeof UnstyledCircularProgress;

export default CircularProgress;
