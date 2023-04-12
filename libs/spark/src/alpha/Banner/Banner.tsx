import React, { forwardRef } from 'react';
import clsx from 'clsx';
import Alert, { AlertClassKey, AlertProps } from '../internal/Alert';
import withStyles, { Styles } from '../../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BannerProps extends AlertProps {}

export type BannerClassKey = AlertClassKey;

type PrivateClassKey =
  | 'private-root-severity-error'
  | 'private-root-severity-info'
  | 'private-root-severity-success'
  | 'private-root-severity-warning'
  | 'private-icon-severity-error'
  | 'private-icon-severity-info'
  | 'private-icon-severity-success'
  | 'private-icon-severity-warning'
  | 'private-message-severity-error'
  | 'private-message-severity-info'
  | 'private-message-severity-success'
  | 'private-message-severity-warning';

const styles: Styles<BannerClassKey | PrivateClassKey> = (theme) => ({
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    gap: 16,
    padding: 24,
    [theme.breakpoints.down('sm')]: {
      gap: 8,
      padding: 12,
    },
  },
  icon: {
    display: 'flex',
    fontSize: theme.typography_alpha.pxToRem(24),
    lineHeight: 1,
    paddingBottom: 4,
    paddingTop: 4,
  },
  message: {
    ...theme.typography_alpha.body,
    flexGrow: 2,
    paddingTop: 4,
  },
  action: {
    justifySelf: 'flex-end',
  },
  /* Private */
  'private-root-severity-error': {
    backgroundColor: theme.palette_alpha.red[700],
  },
  'private-root-severity-info': {
    backgroundColor: theme.palette_alpha.blue[700],
  },
  'private-root-severity-success': {
    backgroundColor: theme.palette_alpha.green[700],
  },
  'private-root-severity-warning': {
    backgroundColor: theme.palette_alpha.yellow[600],
  },
  'private-icon-severity-error': {
    color: theme.palette_alpha.neutral[0],
  },
  'private-icon-severity-info': {
    color: theme.palette_alpha.neutral[0],
  },
  'private-icon-severity-success': {
    color: theme.palette_alpha.neutral[0],
  },
  'private-icon-severity-warning': {
    color: theme.palette_alpha.neutral[600],
  },
  'private-message-severity-error': {
    color: theme.palette_alpha.neutral[0],
  },
  'private-message-severity-info': {
    color: theme.palette_alpha.neutral[0],
  },
  'private-message-severity-success': {
    color: theme.palette_alpha.neutral[0],
  },
  'private-message-severity-warning': {
    color: theme.palette_alpha.neutral[600],
  },
});

const Banner = forwardRef<unknown, BannerProps>(function Banner(props, ref) {
  const {
    classes,
    severity = 'info',
    CloseProps: ClosePropsProp,
    ...other
  } = props;

  let CloseProps: AlertProps['CloseProps'] = ClosePropsProp;
  if (['info', 'success', 'error'].includes(severity)) {
    CloseProps = { color: 'inverse', ...CloseProps };
  }

  return (
    <Alert
      classes={{
        root: clsx(classes.root, classes[`private-root-severity-${severity}`]),
        icon: clsx(classes.icon, classes[`private-icon-severity-${severity}`]),
        message: clsx(
          classes.message,
          classes[`private-message-severity-${severity}`]
        ),
        action: classes.action,
      }}
      severity={severity}
      ref={ref}
      CloseProps={CloseProps}
      {...other}
    />
  );
});

export default withStyles(styles, { name: 'MuiSpark_alpha_Banner' })(
  Banner
) as typeof Banner;
