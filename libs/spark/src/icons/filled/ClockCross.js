import * as React from 'react';

function SvgClockCross(props) {
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
        d="M5.53 2.53a.75.75 0 00-1.06-1.06l-3 3a.75.75 0 001.06 1.06l3-3zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm6.47-.78a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-3-3a.75.75 0 00-1.06 0zm-10 7a.75.75 0 011.06 0L12 10.94l2.47-2.47a.75.75 0 111.06 1.06L13.06 12l2.47 2.47a.75.75 0 11-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 01-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgClockCross;
