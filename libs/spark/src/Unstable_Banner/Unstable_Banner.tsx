import React, { forwardRef } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import Unstable_Alert, {
  Unstable_AlertClassKey,
  Unstable_AlertProps,
} from '../internal/Unstable_Alert';
import withStyles from '../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_BannerProps extends Unstable_AlertProps {}

export type Unstable_BannerClassKey = Unstable_AlertClassKey;

type PrivateClassKey =
  | 'root-severity-error'
  | 'root-severity-info'
  | 'root-severity-success'
  | 'root-severity-warning'
  | 'icon-severity-error'
  | 'icon-severity-info'
  | 'icon-severity-success'
  | 'icon-severity-warning'
  | 'message-severity-error'
  | 'message-severity-info'
  | 'message-severity-success'
  | 'message-severity-warning';

const usePrivateStyles = makeStyles<PrivateClassKey>(
  (theme) => ({
    'root-severity-error': {
      backgroundColor: theme.unstable_palette.red[700],
    },
    'root-severity-info': {
      backgroundColor: theme.unstable_palette.blue[700],
    },
    'root-severity-success': {
      backgroundColor: theme.unstable_palette.green[700],
    },
    'root-severity-warning': {
      backgroundColor: theme.unstable_palette.yellow[600],
    },
    'icon-severity-error': {
      color: theme.unstable_palette.neutral[0],
    },
    'icon-severity-info': {
      color: theme.unstable_palette.neutral[0],
    },
    'icon-severity-success': {
      color: theme.unstable_palette.neutral[0],
    },
    'icon-severity-warning': {
      color: theme.unstable_palette.neutral[600],
    },
    'message-severity-error': {
      color: theme.unstable_palette.neutral[0],
    },
    'message-severity-info': {
      color: theme.unstable_palette.neutral[0],
    },
    'message-severity-success': {
      color: theme.unstable_palette.neutral[0],
    },
    'message-severity-warning': {
      color: theme.unstable_palette.neutral[600],
    },
  }),
  { name: 'MuiSparkPrivate-Banner' }
);

const Unstable_Banner = forwardRef<unknown, Unstable_BannerProps>(
  function Unstable_Banner(props, ref) {
    const {
      classes,
      severity = 'info',
      CloseProps: ClosePropsProp,
      ...other
    } = props;

    const privateClasses = usePrivateStyles();

    let CloseProps: Unstable_AlertProps['CloseProps'] = ClosePropsProp;
    if (['info', 'success', 'error'].includes(severity)) {
      CloseProps = { color: 'inverse', ...CloseProps };
    }

    return (
      <Unstable_Alert
        classes={{
          root: clsx(classes.root, privateClasses[`root-severity-${severity}`]),
          icon: clsx(classes.icon, privateClasses[`icon-severity-${severity}`]),
          message: clsx(
            classes.message,
            privateClasses[`message-severity-${severity}`]
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

export default withStyles<Unstable_BannerClassKey>(
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
  }),
  { name: 'MuiSparkUnstable_Banner' }
)(Unstable_Banner) as typeof Unstable_Banner;
