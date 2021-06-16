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
        fill="currentcolor"
        fillRule="evenodd"
        d="M12.25 5a2.75 2.75 0 015.396-.75H21a.75.75 0 010 1.5h-3.354A2.751 2.751 0 0112.25 5zm-10 0A.75.75 0 013 4.25h6a.75.75 0 010 1.5H3A.75.75 0 012.25 5zm0 14a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm15.396-.75H21a.75.75 0 010 1.5h-3.354a2.751 2.751 0 110-1.5zM3 11.25a.75.75 0 000 1.5h3.354a2.751 2.751 0 100-1.5H3zm12 0a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSlidersHoriz;
