import * as React from 'react';
import clsx from 'clsx';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import {
  Unstable_AlertOctagon,
  Unstable_AlertTriangle,
  Unstable_CheckCircle2,
  Unstable_Cross,
  Unstable_Info,
} from '../internal';
import makeStyles from '../makeStyles';
import { StandardProps } from '../utils';

interface Unstable_SectionMessageTitleProps
  extends StandardProps<
    React.HTMLAttributes<HTMLDivElement>,
    Unstable_SectionMessageTitleClassKey
  > {
  /**
   * The content of the component.
   */
  children?: string;
}

type Unstable_SectionMessageTitleClassKey = 'root';

const useStylesTitle = makeStyles<Unstable_SectionMessageTitleClassKey>(
  (theme) => ({
    root: {
      ...theme.unstable_typography.label,
      color: theme.unstable_palette.text.heading,
      marginBottom: 4,
    },
  }),
  { name: 'MuiSparkUnstable_SectionMessageTitle' }
);

const Unstable_SectionMessageTitle = function Unstable_SectionMessageTitle(
  props: Unstable_SectionMessageTitleProps
) {
  const { children, className } = props;

  const classes = useStylesTitle();

  return <div className={clsx(classes.root, className)}>{children}</div>;
};

export type Color = 'success' | 'info' | 'warning' | 'error';

export interface Unstable_SectionMessageProps
  extends StandardProps<
    PaperProps,
    Unstable_SectionMessageClassKey,
    'variant'
  > {
  /**
   * The action to display. It renders after the message, at the end of the section message.
   */
  action?: React.ReactNode;
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  closeText?: string;
  /**
   * The severity of the section message. This defines the color and icon used.
   */
  severity?: Color;
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   */
  icon?: React.ReactNode | false;
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
  onClose?: (event: React.SyntheticEvent) => void;
  /**
   * Display a formatted title above the section message.
   */
  title?: React.ReactNode;
}

export type Unstable_SectionMessageClassKey =
  | 'root'
  | 'icon'
  | 'message'
  | 'action';

const useStyles = makeStyles<Unstable_SectionMessageClassKey>(
  (theme) => ({
    root: (props: Unstable_SectionMessageProps) => ({
      borderRadius: 4,
      display: 'flex',
      gap: 16,
      padding: 24,
      borderWidth: 1,
      borderStyle: 'solid',
      ...(props.severity === 'error' && {
        backgroundColor: theme.unstable_palette.red[100],
        borderColor: theme.unstable_palette.red[700],
      }),
      ...(props.severity === 'info' && {
        backgroundColor: theme.unstable_palette.blue[100],
        borderColor: theme.unstable_palette.blue[600],
      }),
      ...(props.severity === 'success' && {
        backgroundColor: theme.unstable_palette.green[100],
        borderColor: theme.unstable_palette.green[600],
      }),
      ...(props.severity === 'warning' && {
        backgroundColor: theme.unstable_palette.yellow[100],
        borderColor: theme.unstable_palette.yellow[600],
      }),
    }),
    icon: (props: Unstable_SectionMessageProps) => ({
      fontSize: theme.unstable_typography.pxToRem(24),
      lineHeight: 1,
      color: theme.unstable_palette.text.icon,
      ...(props.severity === 'error' && {
        color: theme.unstable_palette.red[700],
      }),
      ...(props.severity === 'info' && {
        color: theme.unstable_palette.blue[600],
      }),
      ...(props.severity === 'success' && {
        color: theme.unstable_palette.green[600],
      }),
      ...(props.severity === 'warning' && {
        color: theme.unstable_palette.yellow[600],
      }),
    }),
    message: {
      ...theme.unstable_typography.body,
      color: theme.unstable_palette.text.body,
      flexGrow: 2,
    },
    action: { alignSelf: 'flex-start', justifySelf: 'flex-end' },
  }),
  { name: 'MuiSparkUnstable_SectionMessage' }
);

const defaultIconMapping = {
  success: <Unstable_CheckCircle2 />,
  warning: <Unstable_AlertTriangle />,
  error: <Unstable_AlertOctagon />,
  info: <Unstable_Info />,
};

const Unstable_SectionMessage = React.forwardRef(
  function Unstable_SectionMessage(props: Unstable_SectionMessageProps, ref) {
    const {
      action,
      children,
      classes: classesProp,
      className,
      icon,
      onClose,
      title,
      role = 'alert',
      severity = 'info',
      ...other
    } = props;

    const classes = useStyles({ severity });

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
          <div className={clsx(classesProp?.icon, classes.icon)}>
            {icon || defaultIconMapping[severity]}
          </div>
        ) : null}

        <div className={clsx(classesProp?.message, classes.message)}>
          {title ? (
            <Unstable_SectionMessageTitle>{title}</Unstable_SectionMessageTitle>
          ) : null}
          {children}
        </div>
        {action != null ? (
          <div className={clsx(classesProp?.action, classes.action)}>
            {action}
          </div>
        ) : null}
        {action == null && onClose ? (
          <div className={clsx(classesProp?.action, classes.action)}>
            <Unstable_Cross fontSize="medium" color="normal" />
          </div>
        ) : null}
      </Paper>
    );
  }
);

export default Unstable_SectionMessage;
