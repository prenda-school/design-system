import * as React from 'react';

function SvgArrowBottomLeftCircle(props) {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm2.47-13.53a.75.75 0 111.06 1.06l-4.72 4.72h2.69a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowBottomLeftCircle;
