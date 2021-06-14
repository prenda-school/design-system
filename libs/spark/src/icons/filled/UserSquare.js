import * as React from 'react';

function SvgUserSquare(props) {
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
        d="M2 12c0-3.738 0-5.608.804-7A6 6 0 015 2.804C6.392 2 8.262 2 12 2c3.739 0 5.608 0 7 .804A6 6 0 0121.196 5C22 6.392 22 8.262 22 12c0 3.739 0 5.608-.804 7A6.002 6.002 0 0119 21.196C17.608 22 15.739 22 12 22c-3.738 0-5.608 0-7-.804A6 6 0 012.804 19C2 17.608 2 15.739 2 12zm9.333 0A3.333 3.333 0 008 15.333C8 16.253 8.746 17 9.667 17h4.666c.92 0 1.667-.746 1.667-1.667A3.333 3.333 0 0012.667 12h-1.334zM12 10a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUserSquare;
