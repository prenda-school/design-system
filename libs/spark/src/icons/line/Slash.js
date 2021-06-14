import * as React from 'react';

function SvgSlash(props) {
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
        d="M6.72 5.66a8.25 8.25 0 0111.62 11.62L6.72 5.66zM5.66 6.72a8.25 8.25 0 0011.62 11.62L5.66 6.72zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSlash;
