import * as React from 'react';

function SvgBulb(props) {
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
        d="M14.25 18.236c-.596.254-1.405.514-2.25.514-.844 0-1.654-.26-2.25-.514V19a2.25 2.25 0 004.5 0v-.764zM4.25 9a7.75 7.75 0 1113.374 5.332c-1.069 1.127-1.874 2.311-1.874 3.579V19a3.75 3.75 0 11-7.5 0v-1.09c0-1.267-.805-2.45-1.874-3.578A7.726 7.726 0 014.25 9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBulb;
