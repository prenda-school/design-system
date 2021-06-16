import * as React from 'react';

function SvgChevronsUp(props) {
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
        d="M12.53 6.47a.75.75 0 00-1.06 0l-6 6a.75.75 0 101.06 1.06L12 8.06l5.47 5.47a.75.75 0 101.06-1.06l-6-6zm4 10l-4-4a.75.75 0 00-1.06 0l-4 4a.75.75 0 101.06 1.06L12 14.06l3.47 3.47a.75.75 0 101.06-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgChevronsUp;
