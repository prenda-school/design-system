import * as React from 'react';

function SvgGlassWine(props) {
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
        d="M3.25 4.222c0-1.089.883-1.972 1.972-1.972h13.556c1.09 0 1.972.883 1.972 1.972V6a8.75 8.75 0 01-8 8.718v5.532H16a.75.75 0 010 1.5H8a.75.75 0 010-1.5h3.25v-5.532A8.75 8.75 0 013.25 6V4.222z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGlassWine;
