import * as React from 'react';

function SvgSlidersVert(props) {
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
        d="M3 9a2 2 0 114 0 2 2 0 01-4 0zm14 0a2 2 0 114 0 2 2 0 01-4 0zm-5 4a2 2 0 100 4 2 2 0 000-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M4.25 6.354a2.751 2.751 0 101.5 0V3a.75.75 0 00-1.5 0v3.354zM5 7.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM5.75 14a.75.75 0 00-1.5 0v7a.75.75 0 001.5 0v-7zm14-11a.75.75 0 00-1.5 0v3.354a2.751 2.751 0 101.5 0V3zm0 11a.75.75 0 00-1.5 0v7a.75.75 0 001.5 0v-7zM12 2.25a.75.75 0 01.75.75v7a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zm-.75 15.396V21a.75.75 0 001.5 0v-3.354a2.751 2.751 0 10-1.5 0zM19 7.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM10.75 15a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSlidersVert;
