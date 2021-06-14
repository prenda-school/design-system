import * as React from 'react';

function SvgChevronsDown(props) {
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
        d="M8.53 7.47a.75.75 0 00-1.06 1.06l4 4a.75.75 0 001.06 0l4-4a.75.75 0 00-1.06-1.06L12 10.94 8.53 7.47zm-2 4a.75.75 0 00-1.06 1.06l5.717 5.717.013.014c.053.053.137.137.223.202.11.085.306.204.577.204.271 0 .467-.12.577-.204.086-.065.17-.149.223-.202l.013-.014 5.717-5.717a.75.75 0 10-1.06-1.06L12 16.94l-5.47-5.47z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgChevronsDown;
