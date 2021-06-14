import * as React from 'react';

function SvgMinusOctagon(props) {
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
        d="M8 2.25a.75.75 0 00-.53.22l-5 5a.75.75 0 00-.22.53v8c0 .199.079.39.22.53l5 5c.14.141.331.22.53.22h8a.75.75 0 00.53-.22l5-5a.75.75 0 00.22-.53V8a.75.75 0 00-.22-.53l-5-5a.75.75 0 00-.53-.22H8zM7.25 12a.75.75 0 01.75-.75h8a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMinusOctagon;
