import * as React from 'react';

function SvgLink1(props) {
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
        d="M2.75 12A4.25 4.25 0 017 7.75h2a.75.75 0 000-1.5H7a5.75 5.75 0 100 11.5h2a.75.75 0 000-1.5H7A4.25 4.25 0 012.75 12zM15 6.25a.75.75 0 000 1.5h2a4.25 4.25 0 010 8.5h-2a.75.75 0 000 1.5h2a5.75 5.75 0 000-11.5h-2zm-7 5a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgLink1;
