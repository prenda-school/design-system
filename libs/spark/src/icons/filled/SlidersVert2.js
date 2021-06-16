import * as React from 'react';

function SvgSlidersVert2(props) {
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
        d="M7.75 3a.75.75 0 00-1.5 0v4.095A3.001 3.001 0 007 13a3 3 0 00.75-5.905V3zm0 13a.75.75 0 00-1.5 0v5a.75.75 0 001.5 0v-5zm10-13a.75.75 0 00-1.5 0v5a.75.75 0 001.5 0V3zm-1.5 13.905A3.001 3.001 0 0117 11a3 3 0 01.75 5.905V21a.75.75 0 01-1.5 0v-4.095z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSlidersVert2;
