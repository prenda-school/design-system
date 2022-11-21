import React, { forwardRef, Ref } from 'react';
import MuiPaper, { PaperProps as MuiPaperProps } from '@material-ui/core/Paper';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { StandardProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_PaperProps
  extends StandardProps<
    Omit<MuiPaperProps, 'elevation'>,
    Unstable_PaperClassKey
  > {
  /**
   * Shadow depth.
   */
  elevation?: 0 | 100 | 200 | 300 | 400 | 500;
}

export type Unstable_PaperClassKey = 'root';

type PrivateClassKey =
  | 'private-root-variant-elevation-0'
  | 'private-root-variant-elevation-100'
  | 'private-root-variant-elevation-200'
  | 'private-root-variant-elevation-300'
  | 'private-root-variant-elevation-400'
  | 'private-root-variant-elevation-500';

const styles: Styles<Unstable_PaperClassKey | PrivateClassKey> = (theme) => ({
  root: {},
  /* Private */
  'private-root-variant-elevation-0': {
    boxShadow: theme.unstable_shadows.none,
  },
  'private-root-variant-elevation-100': {
    boxShadow: theme.unstable_shadows.E100,
  },
  'private-root-variant-elevation-200': {
    boxShadow: theme.unstable_shadows.E200,
  },
  'private-root-variant-elevation-300': {
    boxShadow: theme.unstable_shadows.E300,
  },
  'private-root-variant-elevation-400': {
    boxShadow: theme.unstable_shadows.E400,
  },
  'private-root-variant-elevation-500': {
    boxShadow: theme.unstable_shadows.E500,
  },
});

export const useUnstable_PaperStyles = makeStyles(styles, {
  name: 'MuiSparkUnstable_Paper',
});

const Unstable_Paper = forwardRef<unknown, Unstable_PaperProps>(
  function Unstable_Paper(props, ref) {
    const {
      className,
      classes,
      elevation = 100,
      variant = 'elevation',
      ...other
    } = props;

    return (
      <MuiPaper
        className={clsx(className, classes.root, {
          [classes[`private-root-variant-elevation-${elevation}`]]:
            variant === 'elevation',
        })}
        elevation={0}
        ref={ref as Ref<HTMLUListElement>}
        variant={variant}
        {...other}
      />
    );
  }
);

export default withStyles(styles, {
  name: 'MuiSparkUnstable_Paper',
})(Unstable_Paper) as typeof Unstable_Paper;
