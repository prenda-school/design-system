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
        fill="currentcolor"
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8.25 9.744a2.493 2.493 0 012.493-2.494h.507V6.5a.75.75 0 011.5 0v.75H13A2.75 2.75 0 0115.75 10a.75.75 0 01-1.5 0c0-.69-.56-1.25-1.25-1.25h-.25v2.71l1.295.431a2.494 2.494 0 01-.789 4.86h-.506v.75a.75.75 0 01-1.5 0v-.75H11A2.75 2.75 0 018.25 14a.75.75 0 011.5 0c0 .69.56 1.25 1.25 1.25h.25v-2.71l-1.295-.432A2.493 2.493 0 018.25 9.744zm3 1.216V8.75h-.507a.993.993 0 00-.314 1.936l.82.274zm1.5 2.08v2.21h.506a.993.993 0 00.314-1.936l-.82-.273z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgDollarCircle;
