import type { ReactElement} from 'react';
import React, { forwardRef } from 'react';
import type {
  StepClasskey as MuiStepClassKey,
  StepProps as MuiStepProps} from '@material-ui/core/Step';
import {
  default as MuiStep
} from '@material-ui/core/Step';
import StepConnector from '../StepConnector';
import type { Orientation } from '../Stepper';
import makeStyles from '../makeStyles';
import { useClassesCapture } from '../utils';

export type StepClassKey = MuiStepClassKey | CustomClassKey;

type CustomClassKey = 'root' | 'horizontal' | 'alternativeLabel';

const useStyles = makeStyles<CustomClassKey>(
  {
    root: {
      minWidth: 48,
      minHeight: 48,
    },
    horizontal: {
      padding: 0,
    },
    alternativeLabel: {},
  },
  { name: 'MuiSparkStep' }
);

export interface StepProps extends MuiStepProps {
  /**
   * Whether the step is active.
   */
  active?: boolean;
  /**
   * If set to 'true' and orientation is horizontal, then :TODO:.
   */
  alternativeLabel?: boolean;
  /**
   * Whether the step is completed.
   */
  completed?: boolean;
  /**
   * An element before the step, if _not_ `index={0}`.
   */
  connector?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ReactElement<any, any>;
  /**
   * Whether the step is disabled.
   */
  disabled?: boolean;
  /**
   * Whether the step is expanded.
   */
  expanded?: boolean;
  /**
   * Whether the step is the last step in the sequence.
   */
  last?: boolean;
  /**
   * The step orientation (layout flow direction).
   */
  orientation?: Orientation;
  /**
   * The step number (zero-based index).
   */
  index?: number;
}

const defaultConnector = <StepConnector />;

const Step = forwardRef<unknown, StepProps>(function Step(
  { classes, connector = defaultConnector, ...other },
  ref
) {
  const baseCustomClasses = useStyles();

  const { otherClasses, customClasses } = useClassesCapture<
    MuiStepClassKey,
    CustomClassKey
  >({
    classes,
    baseCustomClasses,
  });

  return (
    <MuiStep
      // Mui doesn't document on Step
      // @ts-expect-error Property 'connector' does not exist ...
      connector={connector}
      classes={{
        ...otherClasses,
        // Can spread because CustomClassKey is subset of Mui...ClassKey
        ...customClasses,
      }}
      ref={ref}
      {...other}
    />
  );
});

export default Step;
