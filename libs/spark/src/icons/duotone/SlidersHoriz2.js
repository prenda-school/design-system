import * as React from 'react';

function SvgSlidersHoriz2(props) {
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
        d="M14 4a3 3 0 100 6 3 3 0 000-6zm-4 10a3 3 0 100 6 3 3 0 000-6z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M10.25 7a3.75 3.75 0 017.425-.75H21a.75.75 0 010 1.5h-3.325A3.751 3.751 0 0110.25 7zM14 4.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM3 6.25a.75.75 0 000 1.5h5a.75.75 0 000-1.5H3zm0 10a.75.75 0 000 1.5h3.325A3.751 3.751 0 0013.75 17a3.75 3.75 0 00-7.425-.75H3zm4.75.75a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zm8.25-.75a.75.75 0 000 1.5h5a.75.75 0 000-1.5h-5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSlidersHoriz2;
