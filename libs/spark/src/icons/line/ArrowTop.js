import * as React from 'react';

function SvgArrowTop(props) {
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
        d="M11.47 4.47a.75.75 0 011.06 0l6 6a.75.75 0 01-1.06 1.06l-4.72-4.72V19a.75.75 0 01-1.5 0V6.81l-4.72 4.72a.75.75 0 11-1.06-1.06l6-6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowTop;
