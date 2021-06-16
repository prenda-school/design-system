import * as React from 'react';

function SvgExport2(props) {
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
        d="M2.402 12.5C2 13.196 2 14.13 2 16s0 2.804.402 3.5A3 3 0 003.5 20.598C4.196 21 5.13 21 7 21h10c1.87 0 2.804 0 3.5-.402a3 3 0 001.098-1.098C22 18.804 22 17.87 22 16s0-2.804-.402-3.5a3 3 0 00-1.098-1.098C19.804 11 18.87 11 17 11h-4.25V4.81l2.72 2.72a.75.75 0 101.06-1.06l-4-4a.75.75 0 00-1.06 0l-4 4a.75.75 0 001.06 1.06l2.72-2.72V11H7c-1.87 0-2.804 0-3.5.402A3 3 0 002.402 12.5zM11.25 11v5a.75.75 0 001.5 0v-5h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgExport2;
