import * as React from 'react';

function SvgArrowTopLeftCircle(props) {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 8.25a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-2.69l4.72 4.72a.75.75 0 101.06-1.06l-4.72-4.72h2.69a.75.75 0 000-1.5H9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowTopLeftCircle;
