import * as React from 'react';

function SvgArrowSwap(props) {
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
        d="M7.53 3.53a.75.75 0 00-1.06-1.06l-4 4a.75.75 0 000 1.06l4 4a.75.75 0 001.06-1.06L4.81 7.75H17a.75.75 0 000-1.5H4.81l2.72-2.72zm8.94 10a.75.75 0 111.06-1.06l4 4a.75.75 0 010 1.06l-4 4a.75.75 0 11-1.06-1.06l2.72-2.72H7a.75.75 0 010-1.5h12.19l-2.72-2.72z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowSwap;
