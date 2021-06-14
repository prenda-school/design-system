import * as React from 'react';

function SvgZoomOut(props) {
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
        d="M20 11a9 9 0 11-18 0 9 9 0 0118 0zM7.25 11a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zm12.28 7.47a.75.75 0 10-1.06 1.06l2 2a.75.75 0 101.06-1.06l-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgZoomOut;
