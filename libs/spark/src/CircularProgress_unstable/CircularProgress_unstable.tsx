import {
  default as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import React, { ReactNode, forwardRef, isValidElement } from 'react';
import { StandardProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface CircularProgressProps_unstable
  extends StandardProps<
    MuiCircularProgressProps,
    CircularProgressClassKey_unstable,
    'classes' | 'color'
  > {
  /**
   * The color of the circle, label (if provided).
   */
  color?: 'neutral' | 'red' | 'yellow' | 'teal' | 'green' | 'blue' | 'purple';
  children?: ReactNode;
  /**
   * The variant of the component
   */
  variant?: Exclude<MuiCircularProgressProps['variant'], 'static'>;
}

export type CircularProgressClassKey_unstable =
  | 'root'
  | 'circle'
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

const styles: Styles<CircularProgressClassKey_unstable | PrivateClassKey> = (
  theme
) => ({
  /* Styles applied to the root element. */
  root: {},
  circle: {
    color: 'inherit',
    strokeLinecap: 'round',
  },
  dashed: {},
  container: {
    position: 'relative',
    display: 'inline-flex',
  },
  label: {
    ...theme.unstable_typography.T14,
    inset: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  'private-circle-color-neutral': {
    color: theme.unstable_palette.neutral[300],
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

const UnstyledCircularProgress = forwardRef<
  HTMLDivElement,
  CircularProgressProps_unstable
>(function CircularProgress(props, ref) {
  const {
    children,
    classes,
    color = 'neutral',
    size = 56,
    thickness = 4,
    variant = 'determinate',
    value = 0,
    ...other
  } = props;

  const hasChildren = isValidElement(children);

  const progressElement = (
    <MuiCircularProgress
      classes={{
        root: classes.root,
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
  );

  if (!hasChildren) {
    return progressElement;
  }

  return (
    <div className={classes.container}>
      {progressElement}

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
    </div>
  );
});

const CircularProgress_unstable = withStyles(styles, {
  name: 'MuiSparkCircularProgress_unstable',
})(UnstyledCircularProgress) as typeof UnstyledCircularProgress;

export default CircularProgress_unstable;
