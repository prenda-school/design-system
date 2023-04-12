import React, { forwardRef } from 'react';
import clsx from 'clsx';
import Alert, { AlertClassKey, AlertProps } from '../internal/Alert';
import { StandardProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToastProps extends StandardProps<AlertProps, ToastClassKey> {}

export type ToastClassKey = AlertClassKey;

type PrivateClassKey =
  | 'private-icon-severity-error'
  | 'private-icon-severity-info'
  | 'private-icon-severity-success'
  | 'private-icon-severity-warning';

const styles: Styles<ToastClassKey | PrivateClassKey> = (theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.unstable_palette.background.inverse,
    color: theme.unstable_palette.text.inverseBody,
    borderRadius: theme.unstable_radii.sm,
    display: 'flex',
    gap: 8,
    minHeight: 54,
    padding: '11px 16px',
  },
  icon: {
    display: 'flex',
    fontSize: theme.unstable_typography.pxToRem(24),
    lineHeight: 1,
  },
  message: {
    ...theme.unstable_typography.body,
    flexGrow: 2,
  },
  action: {
    alignSelf: 'flex-start',
    justifySelf: 'flex-end',
  },
  /* Private */
  'private-icon-severity-error': {
    color: theme.unstable_palette.red[400],
  },
  'private-icon-severity-info': {
    color: theme.unstable_palette.blue[300],
  },
  'private-icon-severity-success': {
    color: theme.unstable_palette.green[400],
  },
  'private-icon-severity-warning': {
    color: theme.unstable_palette.yellow[400],
  },
});

const Toast = forwardRef<unknown, ToastProps>(function Toast(props, ref) {
  const {
    children,
    classes,
    CloseProps,
    icon: iconProp,
    onClose,
    severity,
    ...other
  } = props;

  const icon =
    iconProp !== undefined
      ? iconProp
      : severity !== undefined
      ? undefined
      : false;

  return (
    <Alert
      classes={{
        root: clsx(classes.root, {
          [classes[`private-root-severity-${severity}`]]:
            severity !== undefined,
        }),
        icon: clsx(classes.icon, {
          [classes[`private-icon-severity-${severity}`]]:
            severity !== undefined,
        }),
        message: classes.message,
        action: classes.action,
      }}
      CloseProps={{ color: 'inverse', ...CloseProps }}
      icon={icon}
      onClose={onClose}
      severity={severity}
      ref={ref}
      {...other}
    >
      {children}
    </Alert>
  );
});

export default withStyles(styles, { name: 'MuiSparkToast' })(
  Toast
) as typeof Toast;
