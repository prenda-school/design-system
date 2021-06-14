import * as React from 'react';

function SvgAnchor(props) {
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
        d="M12 1.25a3.75 3.75 0 00-.75 7.425v12.537a7.253 7.253 0 01-6.462-6.462H7a.75.75 0 000-1.5H4a.75.75 0 00-.75.75 8.75 8.75 0 1017.5 0 .75.75 0 00-.75-.75h-3a.75.75 0 000 1.5h2.212a7.253 7.253 0 01-6.462 6.462V8.675A3.751 3.751 0 0012 1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgAnchor;
