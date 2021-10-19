import * as React from 'react';
import {
  default as MuiStepper,
  Orientation,
  StepperClasskey as StepperClassKey,
  StepperProps,
} from '@material-ui/core/Stepper';
import StepConnector from '../StepConnector';
import makeStyles from '../makeStyles';
import { useMergeClasses } from '../utils';

export type { Orientation, StepperClassKey, StepperProps };

const useStyles = makeStyles<StepperClassKey>({
  root: {
    padding: 0,
    backgroundColor: 'revert',
  },
  horizontal: {},
  vertical: {},
  alternativeLabel: {},
});

const defaultConnector = <StepConnector />;

const Stepper = React.forwardRef<unknown, StepperProps>(function Stepper(
  { classes: classesProp, connector = defaultConnector, ...other },
  ref
) {
  const baseClasses = useStyles();

  const classes = useMergeClasses({ baseClasses, classesProp });

  return (
    <MuiStepper classes={classes} connector={connector} ref={ref} {...other} />
  );
});

export default Stepper;
