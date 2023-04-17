// Original credit to MUI. https://github.com/mui-org/material-ui/blob/c545ccab7edfdf4a44d4ec2f4bf10ebc7fd00259/packages/material-ui/src/StepIcon/StepIcon.js
import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { SvgIconProps } from '../SvgIcon';
import { default as SvgIcon } from '../SvgIcon';
import { AlertThick, CheckThick } from '../internal';
import makeStyles from '../makeStyles';
import type { StandardProps } from '../utils';
import { useMergeClasses } from '../utils';

export type StepIconClassKey =
  | 'root'
  | 'text'
  | 'active'
  | 'completed'
  | 'error';

export interface StepIconProps
  extends StandardProps<SvgIconProps, StepIconClassKey, 'children'> {
  /**
   * Whether this step is active.
   */
  active?: boolean;
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed?: boolean;
  /**
   * Mark the step as failed.
   */
  error?: boolean;
  /**
   * The label displayed in the step icon.
   */
  icon: ReactNode;
}

const useCustomStyles = makeStyles<StepIconClassKey>(
  ({ palette, typography }) => ({
    /* Styles applied to the root element. */
    root: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 48,
      minHeight: 48,
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: '50%',
      borderColor: palette.grey.medium,
      backgroundColor: palette.common.white,
      color: palette.text.darkLowContrast,
      fontSize: typography.pxToRem(24),
      '.Mui-disabled &': {
        opacity: 0.5,
      },
      '[class*="MuiSparkStepButton"]:hover &': {
        backgroundColor: palette.grey.light,
        color: palette.text.dark,
      },
      '[class*="MuiSparkStepButton"]:active &': {
        backgroundColor: palette.grey.light,
        borderColor: palette.blue[5],
        color: palette.text.dark,
      },
      '[class*="MuiSparkStepButton"]:focus-visible &': {
        boxShadow: `0 0 0 4px ${palette.blue[1]}`,
        color: palette.text.dark,
      },
      '&$completed': {
        color: palette.blue[3],
      },
      '&$error': {
        color: palette.red[3],
      },
      '&$active': {
        color: palette.common.white,
        backgroundColor: palette.blue[3],
        borderColor: palette.blue[5],
        '[class*="MuiSparkStepButton"]:hover &, [class*="MuiSparkStepButton"]:active &':
          {
            color: palette.common.white,
            backgroundColor: palette.blue[4],
          },
        '[class*="MuiSparkStepButton"]:hover &, [class*="MuiSparkStepButton"]:active &, [class*="MuiSparkStepButton"]:focus-visible &':
          {
            color: palette.common.white,
          },
      },
    },
    /* Styles applied to the SVG text element. */
    text: {
      ...typography['heading-sm'],
    },
    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},
    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
  }),
  { name: 'MuiSparkStepIcon' }
);

const StepIcon = forwardRef<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  StepIconProps
>(function StepIcon(
  {
    completed = false,
    icon: iconProp,
    active = false,
    error = false,
    classes: classesProp,
    className: classNameProp,
    ...other
  },
  ref
) {
  const baseClasses = useCustomStyles();

  const classes = useMergeClasses({ baseClasses, classesProp });

  let icon = iconProp;

  if (typeof iconProp === 'number' || typeof iconProp === 'string') {
    if (error) {
      icon = <AlertThick ref={ref} {...other} />;
    } else if (completed) {
      icon = <CheckThick ref={ref} {...other} />;
    } else {
      icon = (
        <SvgIcon viewBox="0 0 24 24" ref={ref} {...other}>
          <text
            className={classes.text}
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
          >
            {iconProp}
          </text>
        </SvgIcon>
      );
    }
  }

  return (
    <span
      className={clsx(classNameProp, classes.root, {
        [classes.active]: active,
        [classes.error]: error,
        [classes.completed]: completed,
      })}
    >
      {icon}
    </span>
  );
});

export default StepIcon;
