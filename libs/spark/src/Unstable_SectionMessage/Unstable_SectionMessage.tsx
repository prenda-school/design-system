import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import Unstable_Alert, {
  Unstable_AlertClassKey,
  Unstable_AlertProps,
} from '../internal/Unstable_Alert';
import { StandardProps } from '../utils';
import withStyles from '../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_SectionMessageProps
  extends StandardProps<Unstable_AlertProps, Unstable_SectionMessageClassKey> {
  /**
   * Display a formatted title above the section message.
   */
  title?: ReactNode;
}

export type Unstable_SectionMessageClassKey = Unstable_AlertClassKey | 'title';

type PrivateClassKey =
  | 'root-severity-error'
  | 'root-severity-info'
  | 'root-severity-success'
  | 'root-severity-warning'
  | 'icon-severity-error'
  | 'icon-severity-info'
  | 'icon-severity-success'
  | 'icon-severity-warning';

const usePrivateStyles = makeStyles<PrivateClassKey>(
  (theme) => ({
    'root-severity-error': {
      backgroundColor: theme.unstable_palette.red[100],
      borderColor: theme.unstable_palette.red[700],
    },
    'root-severity-info': {
      backgroundColor: theme.unstable_palette.blue[100],
      borderColor: theme.unstable_palette.blue[600],
    },
    'root-severity-success': {
      backgroundColor: theme.unstable_palette.green[100],
      borderColor: theme.unstable_palette.green[600],
    },
    'root-severity-warning': {
      backgroundColor: theme.unstable_palette.yellow[100],
      borderColor: theme.unstable_palette.yellow[600],
    },
    'icon-severity-error': {
      color: theme.unstable_palette.red[700],
    },
    'icon-severity-info': {
      color: theme.unstable_palette.blue[600],
    },
    'icon-severity-success': {
      color: theme.unstable_palette.green[600],
    },
    'icon-severity-warning': {
      color: theme.unstable_palette.yellow[600],
    },
  }),
  { name: 'MuiSparkPrivate-SectionMessage' }
);

const Unstable_SectionMessage = forwardRef<
  unknown,
  Unstable_SectionMessageProps
>(function Unstable_SectionMessage(props, ref) {
  const { children, classes, severity = 'info', title, ...other } = props;

  const privateClasses = usePrivateStyles({ severity });

  return (
    <Unstable_Alert
      classes={{
        root: clsx(classes.root, privateClasses[`root-severity-${severity}`]),
        icon: clsx(classes.icon, privateClasses[`icon-severity-${severity}`]),
        message: classes.message,
        action: classes.action,
      }}
      severity={severity}
      ref={ref}
      {...other}
    >
      {title ? <div className={classes.title}>{title}</div> : null}

      {children}
    </Unstable_Alert>
  );
});

export default withStyles<Unstable_SectionMessageClassKey>(
  (theme) => ({
    root: {
      alignItems: 'flex-start',
      borderRadius: 4,
      display: 'flex',
      gap: 16,
      padding: 24,
      borderWidth: 1,
      borderStyle: 'solid',
    },
    icon: {
      display: 'flex',
      fontSize: theme.unstable_typography.pxToRem(24),
      lineHeight: 1,
    },
    message: {
      ...theme.unstable_typography.body,
      color: theme.unstable_palette.text.body,
      flexGrow: 2,
    },
    action: {
      alignSelf: 'flex-start',
      justifySelf: 'flex-end',
    },
    title: {
      ...theme.unstable_typography.label,
      color: theme.unstable_palette.text.heading,
      marginBottom: 4,
    },
  }),
  { name: 'MuiSparkUnstable_SectionMessage' }
)(Unstable_SectionMessage) as typeof Unstable_SectionMessage;
