import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import Unstable_Alert, {
  Unstable_AlertClassKey,
  Unstable_AlertProps,
} from '../internal/Unstable_Alert';
import { StandardProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

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
  | 'private-root-severity-error'
  | 'private-root-severity-info'
  | 'private-root-severity-success'
  | 'private-root-severity-warning'
  | 'private-icon-severity-error'
  | 'private-icon-severity-info'
  | 'private-icon-severity-success'
  | 'private-icon-severity-warning';

const styles: Styles<Unstable_SectionMessageClassKey | PrivateClassKey> = (
  theme
) => ({
  root: {
    alignItems: 'flex-start',
    borderRadius: theme.unstable_radii.sm,
    display: 'flex',
    gap: 16,
    padding: 24,
    border: theme.unstable_borders.bold,
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
  /* Private */
  'private-root-severity-error': {
    backgroundColor: theme.unstable_palette.red[100],
    border: theme.unstable_borders.error,
  },
  'private-root-severity-info': {
    backgroundColor: theme.unstable_palette.blue[100],
    border: theme.unstable_borders.info,
  },
  'private-root-severity-success': {
    backgroundColor: theme.unstable_palette.green[100],
    border: theme.unstable_borders.success,
  },
  'private-root-severity-warning': {
    backgroundColor: theme.unstable_palette.yellow[100],
    border: theme.unstable_borders.warning,
  },
  'private-icon-severity-error': {
    color: theme.unstable_palette.red[700],
  },
  'private-icon-severity-info': {
    color: theme.unstable_palette.blue[600],
  },
  'private-icon-severity-success': {
    color: theme.unstable_palette.green[600],
  },
  'private-icon-severity-warning': {
    color: theme.unstable_palette.yellow[600],
  },
});

const Unstable_SectionMessage = forwardRef<
  unknown,
  Unstable_SectionMessageProps
>(function Unstable_SectionMessage(props, ref) {
  const { children, classes, severity = 'info', title, ...other } = props;

  return (
    <Unstable_Alert
      classes={{
        root: clsx(classes.root, classes[`private-root-severity-${severity}`]),
        icon: clsx(classes.icon, classes[`private-icon-severity-${severity}`]),
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

export default withStyles(styles, { name: 'MuiSparkUnstable_SectionMessage' })(
  Unstable_SectionMessage
) as typeof Unstable_SectionMessage;
