// Original credit to MUI. https://github.com/mui-org/material-ui/blob/c545ccab7edfdf4a44d4ec2f4bf10ebc7fd00259/packages/material-ui/src/StepConnector/StepConnector.js
import React, { forwardRef, HTMLAttributes, Ref } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { StandardProps, useMergeClasses } from '../utils';
import type { Orientation } from '../Stepper';

export type StepConnectorClassKey =
  | 'root'
  | 'horizontal'
  | 'vertical'
  | 'alternativeLabel'
  | 'active'
  | 'completed'
  | 'disabled'
  | 'line'
  | 'lineHorizontal'
  | 'lineVertical';

const useCustomStyles = makeStyles<StepConnectorClassKey>(
  ({ palette }) => ({
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto',
    },
    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      marginLeft: 24 - 1, // (half of `StepIcon` width) - (account for 2px width)
    },
    /* Styles applied to the root element if `alternativeLabel={true}`. */
    alternativeLabel: {
      position: 'absolute',
      top: 24 - 1, // (half of `StepIcon` width) - (account for 2px width)
      left: 'calc(-50% + 24px)',
      right: 'calc(50% + 24px)',
    },
    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},
    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the line element. */
    line: {
      display: 'block',
      borderColor: palette.grey.medium,
      '.Mui-disabled &': {
        opacity: 0.5,
      },
      '$active &': {
        borderColor: palette.blue[5],
      },
      '$completed &': {
        borderColor: palette.blue[5],
      },
    },
    /* Styles applied to the root element if `orientation="horizontal"`. */
    lineHorizontal: {
      borderTopStyle: 'solid',
      borderTopWidth: 2,
    },
    /* Styles applied to the root element if `orientation="vertical"`. */
    lineVertical: {
      borderLeftStyle: 'solid',
      borderLeftWidth: 2,
      minHeight: 40,
    },
  }),
  { name: 'MuiSparkStepConnector' }
);

export interface StepConnectorProps
  extends StandardProps<
    HTMLAttributes<HTMLDivElement>,
    StepConnectorClassKey,
    'children'
  > {
  ref?: Ref<HTMLDivElement>;
  /**
   * Whether connected step is active.
   */
  active?: boolean;
  /**
   * If set to 'true' and orientation is horizontal, then the step connector will be positioned vertically under the label.
   */
  alternativeLabel?: boolean;
  /**
   * Whether the connected step is completed.
   */
  completed?: boolean;
  /**
   * Whether the connected step is disabled.
   */
  disabled?: boolean;
  /**
   * The connector orientation (layout flow direction).
   */
  orientation?: Orientation;
}

const StepConnector = forwardRef<HTMLDivElement, StepConnectorProps>(
  function StepConnector(
    {
      active,
      alternativeLabel,
      classes: classesProp,
      className,
      completed,
      disabled,
      orientation = 'horizontal',
      ...other
    },
    ref
  ) {
    const baseClasses = useCustomStyles();

    const classes = useMergeClasses({ baseClasses, classesProp });

    return (
      <div
        className={clsx(className, classes.root, classes[orientation], {
          [classes.alternativeLabel]: alternativeLabel,
          [classes.active]: active,
          [classes.completed]: completed,
          [classes.disabled]: disabled,
        })}
        ref={ref}
        {...other}
      >
        <span
          className={clsx(classes.line, {
            [classes.lineHorizontal]: orientation === 'horizontal',
            [classes.lineVertical]: orientation === 'vertical',
          })}
        />
      </div>
    );
  }
);

export default StepConnector;
