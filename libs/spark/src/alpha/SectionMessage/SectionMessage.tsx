import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import Alert, { AlertClassKey, AlertProps } from '../internal/Alert';
import { StandardProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SectionMessageProps
  extends StandardProps<AlertProps, SectionMessageClassKey> {
  /**
   * Display a formatted title above the section message.
   */
  title?: ReactNode;
}

export type SectionMessageClassKey = AlertClassKey | 'title';

type PrivateClassKey =
  | 'private-root-severity-error'
  | 'private-root-severity-info'
  | 'private-root-severity-success'
  | 'private-root-severity-warning'
  | 'private-icon-severity-error'
  | 'private-icon-severity-info'
  | 'private-icon-severity-success'
  | 'private-icon-severity-warning';

const styles: Styles<SectionMessageClassKey | PrivateClassKey> = (theme) => ({
  root: {
    alignItems: 'flex-start',
    borderRadius: theme.radii_alpha.sm,
    display: 'flex',
    gap: 16,
    padding: 24,
    border: theme.borders_alpha.bold,
    [theme.breakpoints.down('sm')]: {
      gap: 12,
      padding: 18,
    },
  },
  icon: {
    display: 'flex',
    fontSize: theme.typography_alpha.pxToRem(24),
    lineHeight: 1,
  },
  message: {
    ...theme.typography_alpha.body,
    color: theme.palette_alpha.text.body,
    flexGrow: 2,
  },
  action: {
    alignSelf: 'flex-start',
    justifySelf: 'flex-end',
  },
  title: {
    ...theme.typography_alpha.label,
    color: theme.palette_alpha.text.heading,
    marginBottom: 4,
  },
  /* Private */
  'private-root-severity-error': {
    backgroundColor: theme.palette_alpha.red[100],
    border: theme.borders_alpha.error,
  },
  'private-root-severity-info': {
    backgroundColor: theme.palette_alpha.blue[100],
    border: theme.borders_alpha.info,
  },
  'private-root-severity-success': {
    backgroundColor: theme.palette_alpha.green[100],
    border: theme.borders_alpha.success,
  },
  'private-root-severity-warning': {
    backgroundColor: theme.palette_alpha.yellow[100],
    border: theme.borders_alpha.warning,
  },
  'private-icon-severity-error': {
    color: theme.palette_alpha.red[700],
  },
  'private-icon-severity-info': {
    color: theme.palette_alpha.blue[600],
  },
  'private-icon-severity-success': {
    color: theme.palette_alpha.green[600],
  },
  'private-icon-severity-warning': {
    color: theme.palette_alpha.yellow[600],
  },
});

const SectionMessage = forwardRef<unknown, SectionMessageProps>(
  function SectionMessage(props, ref) {
    const { children, classes, severity = 'info', title, ...other } = props;

    return (
      <Alert
        classes={{
          root: clsx(
            classes.root,
            classes[`private-root-severity-${severity}`]
          ),
          icon: clsx(
            classes.icon,
            classes[`private-icon-severity-${severity}`]
          ),
          message: classes.message,
          action: classes.action,
        }}
        severity={severity}
        ref={ref}
        {...other}
      >
        {title ? <div className={classes.title}>{title}</div> : null}

        {children}
      </Alert>
    );
  }
);

export default withStyles(styles, { name: 'MuiSpark_alpha_SectionMessage' })(
  SectionMessage
) as typeof SectionMessage;
