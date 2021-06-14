import * as React from 'react';

function SvgFilmReel(props) {
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
        d="M22.75 12c0 3.935-2.115 7.377-5.27 9.25H22a.75.75 0 010 1.5H12C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12zM12 10.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM9.25 12a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zM12 7a1 1 0 100-2 1 1 0 000 2zm-5 5a1 1 0 11-2 0 1 1 0 012 0zm11 1a1 1 0 100-2 1 1 0 000 2zm-5 5a1 1 0 11-2 0 1 1 0 012 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFilmReel;
