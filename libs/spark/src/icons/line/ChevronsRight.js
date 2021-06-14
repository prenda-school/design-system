import * as React from 'react';

function SvgChevronsRight(props) {
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
        d="M12.53 5.47a.75.75 0 10-1.06 1.06L16.94 12l-5.47 5.47a.75.75 0 101.06 1.06l6-6a.75.75 0 000-1.06l-6-6zm-4 2a.75.75 0 00-1.06 1.06L10.94 12l-3.47 3.47a.75.75 0 101.06 1.06l4-4a.75.75 0 000-1.06l-4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgChevronsRight;