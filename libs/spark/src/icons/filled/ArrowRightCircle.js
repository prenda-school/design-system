import * as React from 'react';

function SvgArrowRightCircle(props) {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm1.53-13.53a.75.75 0 10-1.06 1.06l1.72 1.72H8a.75.75 0 000 1.5h6.19l-1.72 1.72a.75.75 0 101.06 1.06l3-3a.75.75 0 000-1.06l-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowRightCircle;
