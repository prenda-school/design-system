import React, { forwardRef } from 'react';
import type {
  StepContentClasskey as StepContentClassKey,
  StepContentProps} from '@material-ui/core/StepContent';
import {
  default as MuiStepContent
} from '@material-ui/core/StepContent';
import makeStyles from '../makeStyles';
import { useMergeClasses } from '../utils';

export type { StepContentClassKey, StepContentProps };

const useStyles = makeStyles<StepContentClassKey>(({ palette }) => ({
  root: {
    marginTop: 0,
    marginLeft: 24 - 1,
    paddingLeft: 8 + (24 - 1),
    paddingRight: 8,
    borderLeftColor: palette.blue[5],
    borderLeftStyle: 'solid',
    borderLeftWidth: '2px',
    color: palette.text.darkLowContrast,
  },
  last: {},
  transition: {},
}));

const StepContent = forwardRef<unknown, StepContentProps>(function StepContent(
  { classes: classesProp, ...other },
  ref
) {
  const baseClasses = useStyles();

  const classes = useMergeClasses({ baseClasses, classesProp });

  return <MuiStepContent classes={classes} ref={ref} {...other} />;
});

export default StepContent;
