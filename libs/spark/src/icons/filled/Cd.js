import * as React from 'react';

function SvgCd(props) {
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
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 3a.75.75 0 000 1.5c2.9 0 5.25 2.35 5.25 5.25a.75.75 0 001.5 0A6.75 6.75 0 0012 5.25zm0 5.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM9.25 12a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCd;
