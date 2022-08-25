import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import Alert, { AlertClassKey, AlertProps } from '../internal/Alert';
import { StandardProps } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SectionMessageProps
  extends StandardProps<AlertProps, SectionMessageClassKey> {
  /**
   * Display a formatted title above the section message.
   */
  title?: ReactNode;
}

export type SectionMessageClassKey = AlertClassKey | 'title';

const useStyles = makeStyles<SectionMessageClassKey>(
  (theme) => ({
    root: (props: SectionMessageProps) => ({
      alignItems: 'flex-start',
      borderRadius: 4,
      display: 'flex',
      gap: 16,
      padding: 24,
      borderWidth: 1,
      borderStyle: 'solid',
      /* severity */
      ...(props.severity === 'error' && {
        backgroundColor: theme.palette.red[100],
        borderColor: theme.palette.red[700],
      }),
      ...(props.severity === 'info' && {
        backgroundColor: theme.palette.blue[100],
        borderColor: theme.palette.blue[600],
      }),
      ...(props.severity === 'success' && {
        backgroundColor: theme.palette.green[100],
        borderColor: theme.palette.green[600],
      }),
      ...(props.severity === 'warning' && {
        backgroundColor: theme.palette.yellow[100],
        borderColor: theme.palette.yellow[600],
      }),
    }),
    icon: (props: SectionMessageProps) => ({
      color: theme.palette.text.icon,
      display: 'flex',
      fontSize: theme.typography.pxToRem(24),
      lineHeight: 1,
      /* severity */
      ...(props.severity === 'error' && {
        color: theme.palette.red[700],
      }),
      ...(props.severity === 'info' && {
        color: theme.palette.blue[600],
      }),
      ...(props.severity === 'success' && {
        color: theme.palette.green[600],
      }),
      ...(props.severity === 'warning' && {
        color: theme.palette.yellow[600],
      }),
    }),
    message: {
      ...theme.typography.body,
      color: theme.palette.text.body,
      flexGrow: 2,
    },
    action: {
      alignSelf: 'flex-start',
      justifySelf: 'flex-end',
    },
    title: {
      ...theme.typography.label,
      color: theme.palette.text.heading,
      marginBottom: 4,
    },
  }),
  { name: 'MuiPDSSectionMessage' }
);

const SectionMessage = forwardRef<unknown, SectionMessageProps>(
  function SectionMessage(props, ref) {
    const {
      children,
      classes: classesProp,
      severity = 'info',
      title,
      ...other
    } = props;

    const classes = useStyles({ severity });

    return (
      <Alert
        classes={{
          root: clsx(classes.root, classesProp?.root),
          icon: clsx(classes.icon, classesProp?.icon),
          message: clsx(classes.message, classesProp?.message),
          action: clsx(classes.action, classesProp?.action),
        }}
        severity={severity}
        ref={ref}
        {...other}
      >
        {title ? (
          <div className={clsx(classes.title, classesProp?.title)}>{title}</div>
        ) : null}

        {children}
      </Alert>
    );
  }
);

export default SectionMessage;
