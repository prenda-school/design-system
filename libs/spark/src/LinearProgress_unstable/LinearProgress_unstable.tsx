import {
  default as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
} from '@material-ui/core/LinearProgress';
import clsx from 'clsx';
import React, { forwardRef, isValidElement, ReactNode } from 'react';
import { StandardProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface LinearProgressProps_unstable
  extends StandardProps<
    MuiLinearProgressProps,
    LinearProgressClassKey_unstable,
    'classes' | 'color' | 'variant'
  > {
  /**
   * The color of the bar.
   */
  color?: 'neutral' | 'red' | 'yellow' | 'teal' | 'green' | 'blue' | 'purple';
  /**
   * The variant of the component
   */
  variant?: Exclude<MuiLinearProgressProps['variant'], 'buffer'>;
  children?: ReactNode;
  labelPlacement?: 'start' | 'end';
}

export type LinearProgressClassKey_unstable =
  | 'root'
  | 'bar'
  | 'dashed'
  | 'container'
  | 'label';

type PrivateClassKey =
  | 'private-root-with-label'
  | 'private-bar-color-neutral'
  | 'private-bar-color-red'
  | 'private-bar-color-yellow'
  | 'private-bar-color-teal'
  | 'private-bar-color-green'
  | 'private-bar-color-blue'
  | 'private-bar-color-purple'
  | 'private-label-color-neutral'
  | 'private-label-color-red'
  | 'private-label-color-yellow'
  | 'private-label-color-teal'
  | 'private-label-color-green'
  | 'private-label-color-blue'
  | 'private-label-color-purple';

const styles: Styles<LinearProgressClassKey_unstable | PrivateClassKey> = (
  theme
) => ({
  /* Styles applied to the root element. */
  root: {
    backgroundColor: theme.unstable_palette.neutral[80],
    borderRadius: 4,
    height: 8,
  },
  bar: {
    backgroundColor: theme.unstable_palette.blue[500],
    borderRadius: 4,
  },
  dashed: {},
  container: {
    alignItems: 'center',
    display: 'flex',
    gap: 8,
  },
  label: {},
  'private-root-with-label': {
    width: '100%',
  },
  'private-bar-color-neutral': {
    backgroundColor: theme.unstable_palette.neutral[300],
  },
  'private-bar-color-red': {
    backgroundColor: theme.unstable_palette.red[600],
  },
  'private-bar-color-yellow': {
    backgroundColor: theme.unstable_palette.yellow[500],
  },
  'private-bar-color-teal': {
    backgroundColor: theme.unstable_palette.teal[500],
  },
  'private-bar-color-green': {
    backgroundColor: theme.unstable_palette.green[600],
  },
  'private-bar-color-blue': {
    backgroundColor: theme.unstable_palette.blue[600],
  },
  'private-bar-color-purple': {
    backgroundColor: theme.unstable_palette.purple[500],
  },
  'private-label-color-neutral': {
    color: theme.unstable_palette.neutral[300],
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

const UnstyledLinearProgress = forwardRef<
  HTMLDivElement,
  LinearProgressProps_unstable
>(function LinearProgress(props, ref) {
  const {
    children,
    classes,
    color = 'neutral',
    labelPlacement = 'end',
    variant = 'determinate',
    value = 0,
    ...other
  } = props;

  const hasChildren = isValidElement(children);

  const progressElement = (
    <MuiLinearProgress
      classes={{
        root: clsx(classes.root, {
          [classes['private-root-with-label']]: hasChildren,
        }),
        bar: clsx(classes.bar, {
          [classes['private-bar-color-neutral']]: color === 'neutral',
          [classes['private-bar-color-red']]: color === 'red',
          [classes['private-bar-color-yellow']]: color === 'yellow',
          [classes['private-bar-color-teal']]: color === 'teal',
          [classes['private-bar-color-green']]: color === 'green',
          [classes['private-bar-color-blue']]: color === 'blue',
          [classes['private-bar-color-purple']]: color === 'purple',
        }),
        dashed: classes.dashed,
      }}
      ref={ref}
      value={value}
      variant={variant}
      {...other}
    />
  );

  if (!hasChildren) {
    return progressElement;
  }

  const labelElement = (
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
  );

  return (
    <div className={classes.container}>
      {labelPlacement === 'start' ? labelElement : null}

      {progressElement}

      {labelPlacement === 'end' ? labelElement : null}
    </div>
  );
});

const LinearProgress_unstable = withStyles(styles, {
  name: 'MuiSparkLinearProgress_unstable',
})(UnstyledLinearProgress) as typeof UnstyledLinearProgress;

export default LinearProgress_unstable;
