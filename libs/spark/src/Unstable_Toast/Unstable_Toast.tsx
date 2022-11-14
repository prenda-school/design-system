import React, { forwardRef } from 'react';
import clsx from 'clsx';
import Unstable_Alert, {
  Unstable_AlertClassKey,
  Unstable_AlertProps,
} from '../internal/Unstable_Alert';
import { StandardProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_ToastProps
  extends StandardProps<Unstable_AlertProps, Unstable_ToastClassKey> {}

export type Unstable_ToastClassKey = Unstable_AlertClassKey;

type PrivateClassKey =
  | 'private-icon-severity-error'
  | 'private-icon-severity-info'
  | 'private-icon-severity-success'
  | 'private-icon-severity-warning';

const styles: Styles<Unstable_ToastClassKey | PrivateClassKey> = (theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.unstable_palette.background.inverse,
    color: theme.unstable_palette.text.inverseBody,
    borderRadius: 4,
    display: 'flex',
    gap: 8,
    minHeight: 56,
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

const Unstable_Toast = forwardRef<unknown, Unstable_ToastProps>(
  function Unstable_Toast(props, ref) {
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
      <Unstable_Alert
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
      </Unstable_Alert>
    );
  }
);

export default withStyles(styles, { name: 'MuiSparkUnstable_Toast' })(
  Unstable_Toast
) as typeof Unstable_Toast;
