import * as React from 'react';

function SvgClockZzz(props) {
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
        d="M5.53 2.53a.75.75 0 00-1.06-1.06l-3 3a.75.75 0 001.06 1.06l3-3zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm6.47-.78a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-3-3a.75.75 0 00-1.06 0zM9.25 9a.75.75 0 01.75-.75h4a.75.75 0 01.624 1.166l-3.223 4.834H14a.75.75 0 010 1.5h-4a.75.75 0 01-.624-1.166l3.223-4.834H10A.75.75 0 019.25 9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgClockZzz;
