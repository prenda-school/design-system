import * as React from 'react';
import { SvgIcon } from '@material-ui/core';

function SvgChevronDown(props) {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        d="M5.47 8.47a.75.75 0 011.06 0L12 13.94l5.47-5.47a.75.75 0 111.06 1.06l-6 6a.75.75 0 01-1.06 0l-6-6a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
}

export default SvgChevronDown;
