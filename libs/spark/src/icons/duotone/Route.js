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
        fill={props.fillColor || '#F0F1F2'}
        fillRule="evenodd"
        d="M18 7a2 2 0 100-4 2 2 0 000 4zM6 21a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M18 3.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM15.25 5a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zM6 17.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm2.646.5a2.751 2.751 0 100 1.5H16.5a4.25 4.25 0 000-8.5h-9a2.75 2.75 0 110-5.5h2.69l-.72.72a.75.75 0 001.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72H7.5a4.25 4.25 0 000 8.5h9a2.75 2.75 0 110 5.5H8.646z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgRoute;
