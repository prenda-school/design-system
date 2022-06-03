import * as React from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import Unstable_Alert, {
  Unstable_AlertClassKey,
  Unstable_AlertProps,
} from '../internal/Unstable_Alert';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_BannerProps extends Unstable_AlertProps {}

export type Unstable_BannerClassKey = Unstable_AlertClassKey;

const useStyles = makeStyles<Unstable_BannerClassKey>(
  (theme) => ({
    root: (props: Unstable_BannerProps) => ({
      alignItems: 'flex-start',
      display: 'flex',
      gap: 16,
      padding: 24,
      ...(props.severity === 'error' && {
        backgroundColor: theme.unstable_palette.red[700],
      }),
      ...(props.severity === 'info' && {
        backgroundColor: theme.unstable_palette.blue[700],
      }),
      ...(props.severity === 'success' && {
        backgroundColor: theme.unstable_palette.green[700],
      }),
      ...(props.severity === 'warning' && {
        backgroundColor: theme.unstable_palette.yellow[600],
      }),
    }),
    icon: (props: Unstable_BannerProps) => ({
      color: theme.unstable_palette.neutral[0],
      display: 'flex',
      fontSize: theme.unstable_typography.pxToRem(24),
      lineHeight: 1,
      paddingBottom: 4,
      paddingTop: 4,
      ...(props.severity === 'warning' && {
        color: theme.unstable_palette.neutral[600],
      }),
    }),
    message: (props: Unstable_BannerProps) => ({
      ...theme.unstable_typography.body,
      color: theme.unstable_palette.neutral[0],
      flexGrow: 2,
      paddingTop: 4,
      ...(props.severity === 'warning' && {
        color: theme.unstable_palette.neutral[600],
      }),
    }),
    action: {
      justifySelf: 'flex-end',
      marginTop: -2,
    },
  }),
  { name: 'MuiSparkUnstable_Banner' }
);

const Unstable_Banner = React.forwardRef<unknown, Unstable_BannerProps>(
  function Unstable_Banner(props, ref) {
    const {
      classes: classesProp,
      severity = 'info',
      CloseProps: ClosePropsProp,
      ...other
    } = props;

    const classes = useStyles({ severity });

    let CloseProps: Unstable_AlertProps['CloseProps'] = ClosePropsProp;
    if (['info', 'success', 'error'].includes(severity)) {
      CloseProps = { color: 'inverse', ...CloseProps };
    }

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
        CloseProps={CloseProps}
        {...other}
      />
    );
  }
);

export default Unstable_Banner;
