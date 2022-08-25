import Paper, { PaperProps } from '@material-ui/core/Paper';
import clsx from 'clsx';
import React, { forwardRef, ReactNode, SyntheticEvent } from 'react';
import Unstable_AlertTriangle from './Unstable_AlertTriangle';
import Unstable_AlertOctagon from './Unstable_AlertOctagon';
import Unstable_CheckCircle2 from './Unstable_CheckCircle2';
import Unstable_Cross from './Unstable_Cross';
import Unstable_Info from './Unstable_Info';
import Unstable_IconButton, {
  Unstable_IconButtonProps,
} from '../Unstable_IconButton';
import { StandardProps } from '../utils';

export interface Unstable_AlertProps
  extends StandardProps<
    Omit<PaperProps, 'title'>,
    Unstable_AlertClassKey,
    'variant'
  > {
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
  CloseProps?: Unstable_IconButtonProps;
}

export type Unstable_AlertClassKey = 'root' | 'icon' | 'message' | 'action';

const defaultIconMapping = {
  success: <Unstable_CheckCircle2 />,
  warning: <Unstable_AlertTriangle />,
  error: <Unstable_AlertOctagon />,
  info: <Unstable_Info />,
};

const Unstable_Alert = forwardRef(function Unstable_Alert(
  props: Unstable_AlertProps,
  ref
) {
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
        <Unstable_IconButton
          aria-label={closeText}
          className={clsx(classes?.action)}
          onClick={onClose}
          size="small"
          variant="ghost"
          {...CloseProps}
        >
          <Unstable_Cross />
        </Unstable_IconButton>
      ) : null}
    </Paper>
  );
});

export default Unstable_Alert;
