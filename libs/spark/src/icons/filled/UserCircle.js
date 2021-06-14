import * as React from 'react';

function SvgUserCircle(props) {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-10.667 0A3.333 3.333 0 008 15.333C8 16.253 8.746 17 9.667 17h4.666c.92 0 1.667-.746 1.667-1.667A3.333 3.333 0 0012.667 12h-1.334zM12 10a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUserCircle;
