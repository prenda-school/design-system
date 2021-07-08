import * as React from 'react';
import { SvgIcon } from '@material-ui/core';

function SvgCheckCircle({ fillColor = '#F0F1F2', ...other }) {
  return (
    <SvgIcon {...other}>
      <circle cx={12} cy={12} r={9} fill={fillColor} />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.53 7.28a.75.75 0 00-1.06-1.06L11 12.94l-1.47-1.47a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l5-5z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
}

export default SvgCheckCircle;
