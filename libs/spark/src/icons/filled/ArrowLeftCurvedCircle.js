import * as React from 'react';

function SvgArrowLeftCurvedCircle(props) {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM10.53 8.53a.75.75 0 10-1.06-1.06l-2 2A.75.75 0 008 10.75h5a2.25 2.25 0 010 4.5h-2a.75.75 0 100 1.5h2a3.75 3.75 0 000-7.5H9.81l.72-.72z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowLeftCurvedCircle;
