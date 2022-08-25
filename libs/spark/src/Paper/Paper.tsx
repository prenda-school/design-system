import React, { forwardRef, Ref } from 'react';
import MuiPaper, {
  PaperClassKey as MuiPaperClassKey,
  PaperProps as MuiPaperProps,
} from '@material-ui/core/Paper';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { StandardProps } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PaperProps
  extends StandardProps<MuiPaperProps, PaperClassKey> {}

export type PaperClassKey = MuiPaperClassKey;

const useStyles = makeStyles(
  (theme) => {
    const shadows = [
      'none',
      `0px 1px 1px 0px ${theme.palette.neutral[600]}29`,
      `0px 3px 5px 0px ${theme.palette.neutral[600]}29`,
      `0px 8px 12px 0px ${theme.palette.neutral[600]}29`,
      `0px 10px 18px 0px ${theme.palette.neutral[600]}29`,
      `0px 18px 28px 0px ${theme.palette.neutral[600]}29`,
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
  { name: 'MuiPDSPaper' }
);
export const usePaperStyles = useStyles;

const Paper = forwardRef<unknown, PaperProps>(function Paper(props, ref) {
  const {
    classes: classesProp,
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
});

export default Paper;
