import React, { forwardRef } from 'react';
import clsx from 'clsx';
import Unstable_Alert, {
  Unstable_AlertClassKey,
  Unstable_AlertProps,
} from '../internal/Unstable_Alert';
import withStyles from '../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_BannerProps extends Unstable_AlertProps {}

export type Unstable_BannerClassKey = Unstable_AlertClassKey;

type PrivateClassKey =
  | 'private-root-severity-error'
  | 'private-root-severity-info'
  | 'private-root-severity-success'
  | 'private-root-severity-warning'
  | 'private-icon-severity-error'
  | 'private-icon-severity-info'
  | 'private-icon-severity-success'
  | 'private-icon-severity-warning'
  | 'private-message-severity-error'
  | 'private-message-severity-info'
  | 'private-message-severity-success'
  | 'private-message-severity-warning';

const withClasses = withStyles<Unstable_BannerClassKey | PrivateClassKey>(
  (theme) => ({
    root: {
      alignItems: 'flex-start',
      display: 'flex',
      gap: 16,
      padding: 24,
    },
    icon: {
      display: 'flex',
      fontSize: theme.unstable_typography.pxToRem(24),
      lineHeight: 1,
      paddingBottom: 4,
      paddingTop: 4,
    },
    message: {
      ...theme.unstable_typography.body,
      flexGrow: 2,
      paddingTop: 4,
    },
    action: {
      justifySelf: 'flex-end',
      marginTop: -2,
    },
    /* Private */
    'private-root-severity-error': {
      backgroundColor: theme.unstable_palette.red[700],
    },
    'private-root-severity-info': {
      backgroundColor: theme.unstable_palette.blue[700],
    },
    'private-root-severity-success': {
      backgroundColor: theme.unstable_palette.green[700],
    },
    'private-root-severity-warning': {
      backgroundColor: theme.unstable_palette.yellow[600],
    },
    'private-icon-severity-error': {
      color: theme.unstable_palette.neutral[0],
    },
    'private-icon-severity-info': {
      color: theme.unstable_palette.neutral[0],
    },
    'private-icon-severity-success': {
      color: theme.unstable_palette.neutral[0],
    },
    'private-icon-severity-warning': {
      color: theme.unstable_palette.neutral[600],
    },
    'private-message-severity-error': {
      color: theme.unstable_palette.neutral[0],
    },
    'private-message-severity-info': {
      color: theme.unstable_palette.neutral[0],
    },
    'private-message-severity-success': {
      color: theme.unstable_palette.neutral[0],
    },
    'private-message-severity-warning': {
      color: theme.unstable_palette.neutral[600],
    },
  }),
  { name: 'MuiSparkUnstable_Banner' }
);

const Unstable_Banner = forwardRef<unknown, Unstable_BannerProps>(
  function Unstable_Banner(props, ref) {
    const {
      classes,
      severity = 'info',
      CloseProps: ClosePropsProp,
      ...other
    } = props;

    let CloseProps: Unstable_AlertProps['CloseProps'] = ClosePropsProp;
    if (['info', 'success', 'error'].includes(severity)) {
      CloseProps = { color: 'inverse', ...CloseProps };
    }

    return (
      <Unstable_Alert
        classes={{
          root: clsx(
            classes.root,
            classes[`private-root-severity-${severity}`]
          ),
          icon: clsx(
            classes.icon,
            classes[`private-icon-severity-${severity}`]
          ),
          message: clsx(
            classes.message,
            classes[`private-message-severity-${severity}`]
          ),
          action: classes.action,
        }}
        severity={severity}
        ref={ref}
        CloseProps={CloseProps}
        {...other}
      />
    );
  }
);

export default withClasses(Unstable_Banner) as typeof Unstable_Banner;
