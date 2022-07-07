import React, { forwardRef, Ref } from 'react';
import MuiPaper, {
  PaperClassKey as MuiPaperClassKey,
  PaperProps as MuiPaperProps,
} from '@material-ui/core/Paper';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { StandardProps } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_PaperProps
  extends StandardProps<MuiPaperProps, Unstable_PaperClassKey> {}

export type Unstable_PaperClassKey = MuiPaperClassKey;

const useStyles = makeStyles(
  (theme) => {
    const shadows = [
      'none',
      `0px 1px 1px 0px ${theme.unstable_palette.neutral[600]}29`,
      `0px 3px 5px 0px ${theme.unstable_palette.neutral[600]}29`,
      `0px 8px 12px 0px ${theme.unstable_palette.neutral[600]}29`,
      `0px 10px 18px 0px ${theme.unstable_palette.neutral[600]}29`,
      `0px 18px 28px 0px ${theme.unstable_palette.neutral[600]}29`,
    ];
    for (let i = 6; i < 25; i++) {
      shadows.push(shadows[5]);
    }

    const elevations = {};
    shadows.forEach((shadow, index) => {
      elevations[`elevation${index}`] = {
        boxShadow: shadow,
      };
    });

    return { ...elevations };
  },
  { name: 'MuiSparkUnstable_Paper' }
);
export const useUnstable_PaperStyles = useStyles;

const Unstable_Paper = forwardRef<unknown, Unstable_PaperProps>(
  function Unstable_Paper(props, ref) {
    const {
      classes: classesProp,
      className,
      elevation = 1,
      variant = 'elevation',
      ...other
    } = props;

    const classes = useStyles();

    return (
      <MuiPaper
        classes={{
          [`elevation${elevation}`]:
            variant === 'elevation' &&
            clsx(
              classes[`elevation${elevation}`],
              classesProp?.[`elevation${elevation}`]
            ),
        }}
        elevation={elevation}
        ref={ref as Ref<HTMLUListElement>}
        variant={variant}
        {...other}
      />
    );
  }
);

export default Unstable_Paper;
