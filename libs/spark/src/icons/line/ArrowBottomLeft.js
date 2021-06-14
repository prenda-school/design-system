import * as React from 'react';

function SvgArrowBottomLeft(props) {
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
        d="M18.53 5.47a.75.75 0 00-1.06 0L6.75 16.19V8.4a.75.75 0 10-1.5 0V18c0 .414.336.75.75.75h9.6a.75.75 0 100-1.5H7.81L18.53 6.53a.75.75 0 000-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowBottomLeft;
