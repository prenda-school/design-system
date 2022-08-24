import {
  default as MuiTooltip,
  TooltipClassKey as MuiTooltipClassKey,
  TooltipProps as MuiTooltipProps,
} from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import makeStyles from '../makeStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_TooltipProps extends MuiTooltipProps {}

export type Unstable_TooltipClassKey = MuiTooltipClassKey;

const useStyles = makeStyles(
  (theme) => ({
    arrow: {
      color: theme.unstable_palette.neutral[600],
    },
    arrowPlacementBottom: {
      '&::before': {
        borderTopLeftRadius: 4,
      },
    },
    arrowPlacementLeft: {
      '&::before': {
        borderTopRightRadius: 4,
      },
    },
    arrowPlacementRight: {
      '&::before': {
        borderBottomLeftRadius: 4,
      },
    },
    arrowPlacementTop: {
      '&::before': {
        borderBottomRightRadius: 4,
      },
    },
    tooltip: {
      ...theme.unstable_typography.body,
      alignItems: 'flex-start',
      backgroundColor: theme.unstable_palette.neutral[600],
      borderRadius: 8,
      color: theme.unstable_palette.neutral[80],
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 256,
      padding: '8px 12px',
    },
    tooltipPlacementBottom: {
      marginTop: 15,
    },
    tooltipPlacementLeft: {
      marginRight: 15,
    },
    tooltipPlacementTop: {
      marginBottom: 15,
    },
    tooltipPlacementRight: {
      marginLeft: 15,
    },
  }),
  { name: 'MuiSparkUnstable_Tooltip' }
);

const Unstable_Tooltip = forwardRef<unknown, Unstable_TooltipProps>(
  function Unstable_Tooltip(props, ref) {
    const {
      arrow = true,
      classes: classesProp,
      // match MUI default `enterDelay`
      enterTouchDelay = 100,
      interactive = true,
      // match MUI default `leaveDelay`
      leaveTouchDelay = 0,
      placement = 'bottom',
      ...other
    } = props;

    const classes = useStyles();

    return (
      <MuiTooltip
        arrow={arrow}
        classes={{
          ...classesProp,
          arrow: clsx(classes.arrow, classesProp?.arrow, {
            [classes.arrowPlacementBottom]: placement === 'bottom',
            [classes.arrowPlacementLeft]: placement === 'left',
            [classes.arrowPlacementRight]: placement === 'right',
            [classes.arrowPlacementTop]: placement === 'top',
          }),
          tooltip: clsx(classes.tooltip, classesProp?.tooltip),
          tooltipPlacementBottom: clsx(
            classes.tooltipPlacementBottom,
            classesProp?.tooltipPlacementBottom
          ),
          tooltipPlacementLeft: clsx(
            classes.tooltipPlacementLeft,
            classesProp?.tooltipPlacementLeft
          ),
          tooltipPlacementRight: clsx(
            classes.tooltipPlacementRight,
            classesProp?.tooltipPlacementRight
          ),
          tooltipPlacementTop: clsx(
            classes.tooltipPlacementTop,
            classesProp?.tooltipPlacementTop
          ),
        }}
        enterTouchDelay={enterTouchDelay}
        interactive={interactive}
        leaveTouchDelay={leaveTouchDelay}
        placement={placement}
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_Tooltip;
