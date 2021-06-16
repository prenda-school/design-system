import * as React from 'react';

function SvgArrowLeft(props) {
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
        d="M11.53 5.47a.75.75 0 010 1.06l-4.72 4.72H19a.75.75 0 010 1.5H6.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowLeft;
