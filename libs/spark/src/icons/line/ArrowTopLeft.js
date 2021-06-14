import * as React from 'react';

function SvgArrowTopLeft(props) {
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
        d="M5.25 6A.75.75 0 016 5.25h9.6a.75.75 0 010 1.5H7.81l10.72 10.72a.75.75 0 11-1.06 1.06L6.75 7.81v7.79a.75.75 0 01-1.5 0V6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowTopLeft;