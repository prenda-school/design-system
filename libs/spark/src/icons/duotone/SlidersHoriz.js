import * as React from 'react';

function SvgSlidersHoriz(props) {
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
        d="M13 5a2 2 0 114 0 2 2 0 01-4 0zm0 14a2 2 0 114 0 2 2 0 01-4 0zm-4-9a2 2 0 100 4 2 2 0 000-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M15 2.25a2.75 2.75 0 102.646 3.5H21a.75.75 0 000-1.5h-3.354a2.751 2.751 0 00-2.646-2zM16.25 5a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM3 4.25a.75.75 0 000 1.5h7a.75.75 0 000-1.5H3zm0 14a.75.75 0 000 1.5h7a.75.75 0 000-1.5H3zm12-2a2.75 2.75 0 012.646 2H21a.75.75 0 010 1.5h-3.354A2.751 2.751 0 1115 16.25zm0 4a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM2.25 12a.75.75 0 01.75-.75h3.354a2.751 2.751 0 015.396.75 2.75 2.75 0 01-5.396.75H3a.75.75 0 01-.75-.75zm11 0a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75zm-5.5 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSlidersHoriz;
