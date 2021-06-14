import * as React from 'react';

function SvgSignOut(props) {
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
        d="M3.402 3.5C3 4.196 3 5.13 3 7v10c0 1.87 0 2.804.402 3.5A3 3 0 004.5 21.598C5.196 22 6.13 22 8 22s2.804 0 3.5-.402a3.001 3.001 0 001.098-1.098C13 19.804 13 18.87 13 17v-4.25h6.19l-2.72 2.72a.75.75 0 001.06 1.06l4-4a.75.75 0 000-1.06l-4-4a.75.75 0 00-1.06 1.06l2.72 2.72H13V7c0-1.87 0-2.804-.402-3.5A3.001 3.001 0 0011.5 2.402C10.804 2 9.87 2 8 2s-2.804 0-3.5.402A3 3 0 003.402 3.5zM13 11.25H8a.75.75 0 000 1.5h5v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSignOut;
