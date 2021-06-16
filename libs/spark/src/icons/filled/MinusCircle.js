import * as React from 'react';

function SvgMinusCircle(props) {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8 11.25a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMinusCircle;
