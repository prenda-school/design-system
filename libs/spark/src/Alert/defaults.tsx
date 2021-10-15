import * as React from 'react';
import type { AlertProps } from './Alert';
import {
  AlertOctagonFilled,
  AlertTriangleFilled,
  CheckCircleFilled,
  InfoFilled,
} from '../internal';

export const MuiAlertDefaultProps: Partial<AlertProps> = {
  iconMapping: {
    error: <AlertOctagonFilled fontSize="inherit" />,
    info: <InfoFilled fontSize="inherit" />,
    success: <CheckCircleFilled fontSize="inherit" />,
    warning: <AlertTriangleFilled fontSize="inherit" />,
  },
};
