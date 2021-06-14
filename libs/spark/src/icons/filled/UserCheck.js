import * as React from 'react';

function SvgUserCheck(props) {
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
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M4.25 7a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0zM6 14.25A4.75 4.75 0 001.25 19 2.75 2.75 0 004 21.75h10A2.75 2.75 0 0016.75 19 4.75 4.75 0 0012 14.25H6zm17.53-5.72a.75.75 0 00-1.06-1.06L19 10.94l-1.47-1.47a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUserCheck;
