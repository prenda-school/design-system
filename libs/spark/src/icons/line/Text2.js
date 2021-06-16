import * as React from 'react';

function SvgText2(props) {
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
        d="M4.25 4A.75.75 0 015 3.25h14a.75.75 0 010 1.5h-6.25V20a.75.75 0 01-1.5 0V4.75H5A.75.75 0 014.25 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgText2;
