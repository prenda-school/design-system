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
        fill="currentcolor"
        fillRule="evenodd"
        d="M2.25 9a2.75 2.75 0 012-2.646V3a.75.75 0 011.5 0v3.354A2.751 2.751 0 112.25 9zM5 14.25a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75zm14-12a.75.75 0 01.75.75v3.354a2.751 2.751 0 11-1.5 0V3a.75.75 0 01.75-.75zm0 12a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75zM12.75 3a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0V3zm-1.5 18v-3.354a2.751 2.751 0 111.5 0V21a.75.75 0 01-1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSlidersVert;
