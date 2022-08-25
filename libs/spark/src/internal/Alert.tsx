import Paper, { PaperProps } from '@material-ui/core/Paper';
import clsx from 'clsx';
import React, { forwardRef, ReactNode, SyntheticEvent } from 'react';
import AlertTriangle from './AlertTriangle';
import AlertOctagon from './AlertOctagon';
import CheckCircle2 from './CheckCircle2';
import Cross from './Cross';
import Info from './Info';
import IconButton, { IconButtonProps } from '../IconButton';
import { StandardProps } from '../utils';

export interface AlertProps
  extends StandardProps<Omit<PaperProps, 'title'>, AlertClassKey, 'variant'> {
  /**
   * The action to display. It renders after the message, at the end of the component.
   */
  action?: ReactNode;
  /**
   * Override the default label for the *close popup* icon button.
   */
  closeText?: string;
  /**
   * The severity of the alert. This defines the color and icon used.
   */
  severity?: 'info' | 'success' | 'warning' | 'error';
  /**
   * Override the icon displayed before the children. (By default, the icon displayed is mapped to the value of the `severity` prop.)
   */
  icon?: ReactNode | false;
  /**
   * The ARIA role attribute of the element.
   */
  role?: string;
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   *
   * @param {object} event The event source of the callback.
   */
  onClose?: (event: SyntheticEvent) => void;
  /**
   * Props applied to the *close alert* icon button.
   */
  CloseProps?: IconButtonProps;
}

export type AlertClassKey = 'root' | 'icon' | 'message' | 'action';

const defaultIconMapping = {
  success: <CheckCircle2 />,
  warning: <AlertTriangle />,
  error: <AlertOctagon />,
  info: <Info />,
};

const Alert = forwardRef(function Alert(props: AlertProps, ref) {
  const {
    action,
    children,
    classes,
    className,
    closeText = 'Close',
    icon,
    onClose,
    role = 'alert',
    severity = 'info',
    CloseProps,
    ...other
  } = props;

  return (
    <Paper
      role={role}
      square
      elevation={0}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {icon !== false ? (
        <div className={clsx(classes?.icon)}>
          {icon || defaultIconMapping[severity]}
        </div>
      ) : null}

      <div className={clsx(classes?.message)}>{children}</div>

      {action != null ? (
        <div className={clsx(classes?.action)}>{action}</div>
      ) : null}

      {action == null && onClose ? (
        <IconButton
          aria-label={closeText}
          className={clsx(classes?.action)}
          onClick={onClose}
          size="small"
          variant="ghost"
          {...CloseProps}
        >
          <Cross />
        </IconButton>
      ) : null}
    </Paper>
  );
});

export default Alert;
