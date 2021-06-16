import * as React from 'react';

function SvgCheck(props) {
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
        d="M20.507 5.447a.75.75 0 01.046 1.06l-11 12a.75.75 0 01-1.083.023l-5-5a.75.75 0 111.06-1.06l4.446 4.446L19.447 5.493a.75.75 0 011.06-.046z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCheck;
