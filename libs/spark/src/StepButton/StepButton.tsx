// Original credit to MUI. https://github.com/mui-org/material-ui/blob/c545ccab7edfdf4a44d4ec2f4bf10ebc7fd00259/packages/material-ui/src/StepButton/StepButton.js
import * as React from 'react';
import clsx from 'clsx';
import ButtonBase from '../ButtonBase';
import StepLabel from '../StepLabel';
import type { Orientation } from '../Stepper';
import makeStyles from '../makeStyles';
import { OverridableComponent, useMergeClasses } from '../utils';

export type StepButtonClassKey = 'root' | 'horizontal' | 'vertical';

const useStyles = makeStyles<StepButtonClassKey>(
  {
    /* Styles applied to the root element. */
    root: {
      width: '100%',
      padding: '24px 16px',
      margin: '-24px -16px',
      boxSizing: 'content-box',
    },
    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      justifyContent: 'flex-start',
      padding: '8px',
      margin: '-8px',
    },
  },
  { name: 'MuiSparkStepButton' }
);

export interface StepButtonTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'button'
> {
  props: P & StepButtonProps;
  defaultComponent: D;
  classKey: StepButtonClassKey;
}

export type StepButtonProps = {
  /**
   * Passed to children (`StepLabel` by default).
   */
  active?: boolean;
  /**
   * Passed to children (`StepLabel` by default).
   */
  alternativeLabel?: boolean;
  /**
   * Passed to children (`StepLabel` by default).
   */
  completed?: boolean;
  /**
   * Disable the button. Passed to children (`StepLabel` by default).
   */
  disabled?: boolean;
  /**
   * Passed to children (`StepLabel` by default).
   */
  icon?: React.ReactNode;
  /**
   * Passed to children (`StepLabel` by default).
   */
  orientation?: Orientation;
};

const StepButton: OverridableComponent<StepButtonTypeMap> = React.forwardRef(
  function StepButton(
    {
      active,
      alternativeLabel,
      children,
      classes: classesProp,
      className,
      completed,
      disabled,
      icon,
      orientation,
      // Unused props passed by `Step`; capture and discard
      // @ts-expect-error Property 'expanded' does not exist on type ...
      expanded,
      // @ts-expect-error Property 'last' does not exist on type ...
      last,
      ...other
    },
    ref
  ) {
    const baseClasses = useStyles();

    const classes = useMergeClasses({
      baseClasses,
      classesProp,
    });

    const childProps = {
      active,
      alternativeLabel,
      completed,
      disabled,
      icon,
      orientation,
    };
    const child =
      React.isValidElement(children) &&
      // @ts-expect-error Property 'muiName' does not exist on type ...
      children.type.muiName === 'StepLabel' ? (
        React.cloneElement(children, childProps)
      ) : (
        <StepLabel {...childProps}>{children}</StepLabel>
      );

    return (
      <ButtonBase
        disabled={disabled}
        className={clsx(className, classes.root, classes[orientation])}
        ref={ref}
        {...other}
      >
        {child}
      </ButtonBase>
    );
  }
);

export default StepButton;
