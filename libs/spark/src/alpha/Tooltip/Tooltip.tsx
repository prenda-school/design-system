import {
  default as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import withStyles, { StyledComponentProps, Styles } from '../../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TooltipProps
  extends Omit<MuiTooltipProps, 'classes'>,
    StyledComponentProps<TooltipClassKey> {}

export type TooltipClassKey = 'arrow' | 'tooltip' | 'popper';

type PrivateClassKey =
  | 'private-arrow-placement-bottom'
  | 'private-arrow-placement-left'
  | 'private-arrow-placement-right'
  | 'private-arrow-placement-top'
  | 'private-tooltip-placement-bottom'
  | 'private-tooltip-placement-left'
  | 'private-tooltip-placement-right'
  | 'private-tooltip-placement-top';

const styles: Styles<TooltipClassKey | PrivateClassKey> = (theme) => ({
  arrow: {
    color: theme.unstable_palette.neutral[600],
  },
  'private-arrow-placement-bottom': {
    '&::before': {
      borderTopLeftRadius: 4,
    },
  },
  'private-arrow-placement-left': {
    '&::before': {
      borderTopRightRadius: 4,
    },
  },
  'private-arrow-placement-right': {
    '&::before': {
      borderBottomLeftRadius: 4,
    },
  },
  'private-arrow-placement-top': {
    '&::before': {
      borderBottomRightRadius: 4,
    },
  },
  tooltip: {
    ...theme.unstable_typography.body,
    alignItems: 'flex-start',
    backgroundColor: theme.unstable_palette.neutral[600],
    borderRadius: theme.unstable_radii.md,
    color: theme.unstable_palette.neutral[80],
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 256,
    padding: '8px 12px',
  },
  'private-tooltip-placement-bottom': {
    marginTop: 15,
  },
  'private-tooltip-placement-left': {
    marginRight: 15,
  },
  'private-tooltip-placement-top': {
    marginBottom: 15,
  },
  'private-tooltip-placement-right': {
    marginLeft: 15,
  },
  popper: {},
});

const Tooltip = forwardRef<unknown, TooltipProps>(function Tooltip(props, ref) {
  const {
    arrow = true,
    classes,
    // match MUI default `enterDelay`
    enterTouchDelay = 100,
    interactive = true,
    // match MUI default `leaveDelay`
    leaveTouchDelay = 0,
    placement = 'bottom',
    ...other
  } = props;

  return (
    <MuiTooltip
      arrow={arrow}
      classes={{
        arrow: clsx(
          classes.arrow,
          classes[`private-arrow-placement-${placement}`]
        ),
        tooltip: clsx(
          classes.tooltip,
          classes[`private-tooltip-placement-${placement}`]
        ),
        popper: classes.popper,
      }}
      enterTouchDelay={enterTouchDelay}
      interactive={interactive}
      leaveTouchDelay={leaveTouchDelay}
      placement={placement}
      ref={ref}
      {...other}
    />
  );
});

export default withStyles(styles, { name: 'MuiSpark_alpha_Tooltip' })(
  Tooltip
) as typeof Tooltip;
