import * as React from 'react';

function SvgArrowTopCircle(props) {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm.53-14.53a.75.75 0 00-1.06 0l-3 3a.75.75 0 001.06 1.06l1.72-1.72V16a.75.75 0 001.5 0V9.81l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowTopCircle;
