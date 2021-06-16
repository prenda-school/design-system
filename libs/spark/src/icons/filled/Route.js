import * as React from 'react';

function SvgRoute(props) {
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
        d="M15.25 5a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zM6 16.25a2.75 2.75 0 102.646 3.5H16.5a4.25 4.25 0 000-8.5h-9a2.75 2.75 0 110-5.5h2.69l-.72.72a.75.75 0 001.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72H7.5a4.25 4.25 0 000 8.5h9a2.75 2.75 0 110 5.5H8.646a2.751 2.751 0 00-2.646-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgRoute;
