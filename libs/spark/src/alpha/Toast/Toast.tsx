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
    backgroundColor: theme.palette_alpha.background.inverse,
    color: theme.palette_alpha.text.inverseBody,
    borderRadius: theme.radii_alpha.sm,
    display: 'flex',
    gap: 8,
    minHeight: 54,
    padding: '11px 16px',
  },
  icon: {
    display: 'flex',
    fontSize: theme.typography_alpha.pxToRem(24),
    lineHeight: 1,
  },
  message: {
    ...theme.typography_alpha.body,
    flexGrow: 2,
  },
  action: {
    alignSelf: 'flex-start',
    justifySelf: 'flex-end',
  },
  /* Private */
  'private-icon-severity-error': {
    color: theme.palette_alpha.red[400],
  },
  'private-icon-severity-info': {
    color: theme.palette_alpha.blue[300],
  },
  'private-icon-severity-success': {
    color: theme.palette_alpha.green[400],
  },
  'private-icon-severity-warning': {
    color: theme.palette_alpha.yellow[400],
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

export default withStyles(styles, { name: 'MuiSpark_alpha_Toast' })(
  Toast
) as typeof Toast;
