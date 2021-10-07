import * as React from 'react';
import type { AlertProps, AlertClassKey } from '@material-ui/lab';
import Alert from '@material-ui/lab/Alert';
import {
  AlertOctagonFilled,
  AlertTriangleFilled,
  CheckCircleFilled,
  InfoFilled,
} from '../internal';

export default Alert;

export type { AlertProps, AlertClassKey };

export const MuiAlertDefaultProps = {
  iconMapping: {
    error: <AlertOctagonFilled fontSize="inherit" />,
    info: <InfoFilled fontSize="inherit" />,
    success: <CheckCircleFilled fontSize="inherit" />,
    warning: <AlertTriangleFilled fontSize="inherit" />,
  },
};
