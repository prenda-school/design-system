import * as React from 'react';

function SvgBorderInner(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <path fill={props.fillColor || '#F0F1F2'} d="M4 4h16v16H4z" />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M12 2.25a.75.75 0 01.75.75v8.25H21a.75.75 0 010 1.5h-8.25V21a.75.75 0 01-1.5 0v-8.25H3a.75.75 0 010-1.5h8.25V3a.75.75 0 01.75-.75zM21 4a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0zm0 8a1 1 0 11-2 0 1 1 0 012 0zM4 21a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zM4 17a1 1 0 100-2 1 1 0 000 2zm0-8a1 1 0 100-2 1 1 0 000 2zm12-4a1 1 0 100-2 1 1 0 000 2zM9 4a1 1 0 11-2 0 1 1 0 012 0zM4 5a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBorderInner;
