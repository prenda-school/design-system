import * as React from 'react';

function SvgDollarCircle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <path
        fill={props.fillColor || '#F0F1F2'}
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M12 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.257a2.493 2.493 0 012.493-2.493h.507V6.5a.75.75 0 011.5 0v.75H13A2.75 2.75 0 0115.75 10a.75.75 0 01-1.5 0c0-.69-.56-1.25-1.25-1.25h-.25v2.71l1.295.431a2.493 2.493 0 01-.788 4.86h-.507v.75a.75.75 0 11-1.5 0v-.75H11A2.75 2.75 0 018.25 14a.75.75 0 111.5 0c0 .69.56 1.25 1.25 1.25h.25v-2.71l-1.295-.432A2.493 2.493 0 018.25 9.743zm3 1.216V8.75h-.507a.993.993 0 00-.314 1.936l.82.274zm1.5 2.082v2.21h.507a.993.993 0 00.314-1.937l-.821-.273z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgDollarCircle;
