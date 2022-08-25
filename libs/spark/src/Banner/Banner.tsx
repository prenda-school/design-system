import React, { forwardRef } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import Alert, { AlertClassKey, AlertProps } from '../internal/Alert';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BannerProps extends AlertProps {}

export type BannerClassKey = AlertClassKey;

const useStyles = makeStyles<BannerClassKey>(
  (theme) => ({
    root: (props: BannerProps) => ({
      alignItems: 'flex-start',
      display: 'flex',
      gap: 16,
      padding: 24,
      /* severity */
      ...(props.severity === 'error' && {
        backgroundColor: theme.palette.red[700],
      }),
      ...(props.severity === 'info' && {
        backgroundColor: theme.palette.blue[700],
      }),
      ...(props.severity === 'success' && {
        backgroundColor: theme.palette.green[700],
      }),
      ...(props.severity === 'warning' && {
        backgroundColor: theme.palette.yellow[600],
      }),
    }),
    icon: (props: BannerProps) => ({
      color: theme.palette.neutral[0],
      display: 'flex',
      fontSize: theme.typography.pxToRem(24),
      lineHeight: 1,
      paddingBottom: 4,
      paddingTop: 4,
      /* severity */
      ...(props.severity === 'warning' && {
        color: theme.palette.neutral[600],
      }),
    }),
    message: (props: BannerProps) => ({
      ...theme.typography.body,
      color: theme.palette.neutral[0],
      flexGrow: 2,
      paddingTop: 4,
      /* severity */
      ...(props.severity === 'warning' && {
        color: theme.palette.neutral[600],
      }),
    }),
    action: {
      justifySelf: 'flex-end',
      marginTop: -2,
    },
  }),
  { name: 'MuiPDSBanner' }
);

const Banner = forwardRef<unknown, BannerProps>(function Banner(props, ref) {
  const {
    classes: classesProp,
    severity = 'info',
    CloseProps: ClosePropsProp,
    ...other
  } = props;

  const classes = useStyles({ severity });

  let CloseProps: AlertProps['CloseProps'] = ClosePropsProp;
  if (['info', 'success', 'error'].includes(severity)) {
    CloseProps = { color: 'inverse', ...CloseProps };
  }

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
      CloseProps={CloseProps}
      {...other}
    />
  );
});

export default Banner;
