import * as React from 'react';

function SvgArrowTopRight(props) {
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
        d="M7.65 6a.75.75 0 01.75-.75H18a.75.75 0 01.75.75v9.6a.75.75 0 01-1.5 0V7.81L6.53 18.53a.75.75 0 11-1.06-1.06L16.19 6.75H8.4A.75.75 0 017.65 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowTopRight;
