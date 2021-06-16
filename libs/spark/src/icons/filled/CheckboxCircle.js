import * as React from 'react';

function SvgCheckboxCircle(props) {
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
        d="M12 21a9 9 0 007.709-13.648L21.53 5.53a.75.75 0 00-1.06-1.06l-1.654 1.653A9 9 0 1012 21zm6.816-14.877L12 12.939l-2.47-2.47a.75.75 0 00-1.06 1.061l3 3a.75.75 0 001.06 0l7.179-7.178a9.03 9.03 0 00-.893-1.229z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCheckboxCircle;
