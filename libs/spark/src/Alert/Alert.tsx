import * as React from 'react';
import {
  AlertOctagonFilled,
  AlertTriangleFilled,
  CheckCircleFilled,
  InfoFilled,
} from '../internal';

export { default } from '@material-ui/lab/Alert';
export * from '@material-ui/lab/Alert';

export const MuiAlertDefaultProps = {
  iconMapping: {
    error: <AlertOctagonFilled fontSize="inherit" />,
    info: <InfoFilled fontSize="inherit" />,
    success: <CheckCircleFilled fontSize="inherit" />,
    warning: <AlertTriangleFilled fontSize="inherit" />,
  },
};
