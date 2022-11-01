import React, { forwardRef, Ref } from 'react';
import MuiPaper, {
  PaperClassKey as MuiPaperClassKey,
  PaperProps as MuiPaperProps,
} from '@material-ui/core/Paper';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { StandardProps } from '../utils';
import type { Elevation } from '../theme/unstable_elevations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_PaperProps
  extends StandardProps<
    Omit<MuiPaperProps, 'elevation'>,
    Unstable_PaperClassKey
  > {
  /**
   * Shadow depth.
   */
  elevation?: Elevation;
}

export type Unstable_PaperClassKey = MuiPaperClassKey;

const useStyles = makeStyles(
  (theme) => ({
    elevation0: {
      boxShadow: theme.unstable_elevations[0],
    },
    elevation100: {
      boxShadow: theme.unstable_elevations[100],
    },
    elevation200: {
      boxShadow: theme.unstable_elevations[200],
    },
    elevation300: {
      boxShadow: theme.unstable_elevations[300],
    },
    elevation400: {
      boxShadow: theme.unstable_elevations[400],
    },
    elevation500: {
      boxShadow: theme.unstable_elevations[500],
    },
  }),
  { name: 'MuiSparkUnstable_Paper' }
);
export const useUnstable_PaperStyles = useStyles;

const Unstable_Paper = forwardRef<unknown, Unstable_PaperProps>(
  function Unstable_Paper(props, ref) {
    const {
      className,
      classes: classesProp,
      elevation = 100,
      variant = 'elevation',
      ...other
    } = props;

    const classes = useStyles();

    return (
      <MuiPaper
        className={clsx(className, {
          [clsx(
            classes[`elevation${elevation}`],
            classesProp?.[`elevation${elevation}`]
          )]: variant === 'elevation',
        })}
        classes={classesProp}
        elevation={0}
        ref={ref as Ref<HTMLUListElement>}
        variant={variant}
        {...other}
      />
    );
  }
);

export default Unstable_Paper;
