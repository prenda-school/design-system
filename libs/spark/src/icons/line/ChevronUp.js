import * as React from 'react';

function SvgChevronUp(props) {
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
        d="M11.47 8.47a.75.75 0 011.06 0l6 6a.75.75 0 11-1.06 1.06L12 10.06l-5.47 5.47a.75.75 0 01-1.06-1.06l6-6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgChevronUp;
