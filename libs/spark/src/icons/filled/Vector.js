import * as React from 'react';

function SvgVector(props) {
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
        d="M21 6a3 3 0 01-5.907.744.756.756 0 01-.093.006A8.213 8.213 0 006.75 15a.759.759 0 01-.006.093 3.001 3.001 0 11-1.488 0A.759.759 0 015.25 15 9.713 9.713 0 0115 5.25c.031 0 .063.002.093.006A3.001 3.001 0 0121 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgVector;
