import * as React from 'react';

function SvgSortTextReverse(props) {
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
        d="M14.25 3a.75.75 0 01.75-.75h4a.75.75 0 01.624 1.166L16.401 8.25H19a.75.75 0 010 1.5h-4a.75.75 0 01-.624-1.166l3.223-4.834H15a.75.75 0 01-.75-.75zM7 5.25a.75.75 0 01.75.75v10.19l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V6A.75.75 0 017 5.25zm10 7A2.75 2.75 0 0014.25 15v4a.75.75 0 001.5 0v-1.5h2.5V19a.75.75 0 001.5 0v-4A2.75 2.75 0 0017 12.25zM18.25 15v1h-2.5v-1a1.25 1.25 0 112.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSortTextReverse;
