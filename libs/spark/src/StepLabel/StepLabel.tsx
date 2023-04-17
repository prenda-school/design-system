import React, { forwardRef } from 'react';
import type {
  StepLabelClasskey as StepLabelClassKey,
  StepLabelProps as MuiStepLabelProps,
} from '@material-ui/core/StepLabel';
import { default as MuiStepLabel } from '@material-ui/core/StepLabel';
import type { StepIconProps } from '../StepIcon';
import { default as StepIcon } from '../StepIcon';
import makeStyles from '../makeStyles';
import { useMergeClasses } from '../utils';

export type { StepLabelClassKey };

const useCustomStyles = makeStyles<StepLabelClassKey>(
  ({ palette, typography }) => ({
    /* Styles applied to the root element. */
    root: {},
    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {},
    /* Pseudo-class applied to the `Typography` component if `active={true}`. */
    active: {},
    /* Pseudo-class applied to the `Typography` component if `completed={true}`. */
    completed: {},
    /* Pseudo-class applied to the root element and `Typography` component if `error={true}`. */
    error: {},
    /* Pseudo-class applied to the root element and `Typography` component if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the `icon` container element. */
    iconContainer: {
      paddingRight: 0,
    },
    /* Styles applied to the container element which wraps `Typography` and `optional`. */
    labelContainer: {},
    /* Styles applied to the `Typography` component which wraps `children`. */
    label: {
      paddingLeft: 8,
      paddingRight: 8,
      ...typography['label-xl-strong'],
      color: palette.text.darkLowContrast,
      '.Mui-disabled &': {
        opacity: 0.5,
      },
      '&$completed': {
        fontWeight: typography['label-xl-strong'].fontWeight,
        color: palette.text.darkLowContrast,
      },
      '&$error': {
        color: palette.red[3],
      },
      '&$active': {
        fontWeight: typography['label-xl-strong'].fontWeight,
        color: palette.text.dark,
      },
      '&$alternativeLabel': {
        marginTop: 8,
      },
    },
    /* Pseudo-class applied to the root and icon container and `Typography` if `alternativeLabel={true}`. */
    alternativeLabel: {},
  }),
  { name: 'MuiSparkStepLabel' }
);

export interface StepLabelProps
  extends Omit<MuiStepLabelProps, 'StepIconProps'> {
  /**
   * Props applied to the `StepIcon` element.
   */
  StepIconProps?: Partial<StepIconProps>;
}

const defaultStepIcon = StepIcon;

const StepLabel = forwardRef<unknown, StepLabelProps>(function StepLabel(
  { StepIconComponent = defaultStepIcon, classes: classesProp, ...other },
  ref
) {
  const baseClasses = useCustomStyles();

  const classes = useMergeClasses({ classesProp, baseClasses });

  return (
    // @ts-expect-error the types of 'StepIconProps.on*' are not assignable to type 'StepLabelProps'.
    <MuiStepLabel
      StepIconComponent={StepIconComponent}
      classes={classes}
      ref={ref}
      {...other}
    />
  );
});

// `StepButton` expects `StepLabel` to have this property
// @ts-expect-error Property 'muiName' does not exist on type ...
StepLabel.muiName = 'StepLabel';

export default StepLabel;
