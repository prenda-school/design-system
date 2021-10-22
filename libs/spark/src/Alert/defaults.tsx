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
    error: <AlertOctagonFilled />,
    info: <InfoFilled />,
    success: <CheckCircleFilled />,
    warning: <AlertTriangleFilled />,
  },
};
