import * as React from 'react';

function SvgUserPlus(props) {
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
        d="M4.25 7a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0zM6 14.25A4.75 4.75 0 001.25 19 2.75 2.75 0 004 21.75h10A2.75 2.75 0 0016.75 19 4.75 4.75 0 0012 14.25H6zM20.75 7a.75.75 0 00-1.5 0v2.25H17a.75.75 0 000 1.5h2.25V13a.75.75 0 001.5 0v-2.25H23a.75.75 0 000-1.5h-2.25V7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUserPlus;
