import type {
  LinearProgressProps as MuiLinearProgressProps} from '@material-ui/core/LinearProgress';
import {
  default as MuiLinearProgress
} from '@material-ui/core/LinearProgress';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef, isValidElement } from 'react';
import type { StandardProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface LinearProgressProps
  extends StandardProps<
    MuiLinearProgressProps,
    LinearProgressClassKey,
    'classes' | 'color' | 'variant'
  > {
  /**
   * The color of the bar, label (if provided).
   */
  color?: 'neutral' | 'red' | 'yellow' | 'teal' | 'green' | 'blue' | 'purple';
  /**
   * The variant of the component
   */
  variant?: Exclude<MuiLinearProgressProps['variant'], 'buffer'>;
  children?: ReactNode;
  labelPlacement?: 'start' | 'end';
}

export type LinearProgressClassKey =
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

const styles: Styles<LinearProgressClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    backgroundColor: theme.palette_alpha.neutral[80],
    borderRadius: 4,
    height: 8,
  },
  bar: {
    backgroundColor: theme.palette_alpha.blue[500],
    borderRadius: 4,
  },
  dashed: {},
  container: {
    alignItems: 'center',
    display: 'flex',
    gap: 8,
  },
  label: {
    ...theme.typography_alpha.T14,
  },
  'private-root-with-label': {
    width: '100%',
  },
  'private-bar-color-neutral': {
    backgroundColor: theme.palette_alpha.neutral[300],
  },
  'private-bar-color-red': {
    backgroundColor: theme.palette_alpha.red[600],
  },
  'private-bar-color-yellow': {
    backgroundColor: theme.palette_alpha.yellow[500],
  },
  'private-bar-color-teal': {
    backgroundColor: theme.palette_alpha.teal[500],
  },
  'private-bar-color-green': {
    backgroundColor: theme.palette_alpha.green[600],
  },
  'private-bar-color-blue': {
    backgroundColor: theme.palette_alpha.blue[600],
  },
  'private-bar-color-purple': {
    backgroundColor: theme.palette_alpha.purple[500],
  },
  'private-label-color-neutral': {
    color: theme.palette_alpha.neutral[500],
  },
  'private-label-color-red': {
    color: theme.palette_alpha.red[600],
  },
  'private-label-color-yellow': {
    color: theme.palette_alpha.yellow[500],
  },
  'private-label-color-teal': {
    color: theme.palette_alpha.teal[500],
  },
  'private-label-color-green': {
    color: theme.palette_alpha.green[600],
  },
  'private-label-color-blue': {
    color: theme.palette_alpha.blue[600],
  },
  'private-label-color-purple': {
    color: theme.palette_alpha.purple[500],
  },
});

const UnstyledLinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>(
  function LinearProgress(props, ref) {
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
  }
);

const LinearProgress = withStyles(styles, {
  name: 'MuiSpark_alpha_LinearProgress',
})(UnstyledLinearProgress) as typeof UnstyledLinearProgress;

export default LinearProgress;
