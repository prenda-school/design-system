import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import Unstable_Alert, {
  Unstable_AlertClassKey,
  Unstable_AlertProps,
} from '../internal/Unstable_Alert';
import { StandardProps } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_SectionMessageProps
  extends StandardProps<Unstable_AlertProps, Unstable_SectionMessageClassKey> {
  /**
   * Display a formatted title above the section message.
   */
  title?: ReactNode;
}

export type Unstable_SectionMessageClassKey = Unstable_AlertClassKey | 'title';

const useStyles = makeStyles<Unstable_SectionMessageClassKey>(
  (theme) => ({
    root: (props: Unstable_SectionMessageProps) => ({
      alignItems: 'flex-start',
      borderRadius: 4,
      display: 'flex',
      gap: 16,
      padding: 24,
      borderWidth: 1,
      borderStyle: 'solid',
      /* severity */
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
      color: theme.unstable_palette.text.icon,
      display: 'flex',
      fontSize: theme.unstable_typography.pxToRem(24),
      lineHeight: 1,
      /* severity */
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
);

const Unstable_SectionMessage = forwardRef<
  unknown,
  Unstable_SectionMessageProps
>(function Unstable_SectionMessage(props, ref) {
  const {
    children,
    classes: classesProp,
    severity = 'info',
    title,
    ...other
  } = props;

  const classes = useStyles({ severity });

  return (
    <Unstable_Alert
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
    </Unstable_Alert>
  );
});

export default Unstable_SectionMessage;
