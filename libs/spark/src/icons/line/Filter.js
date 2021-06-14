import * as React from 'react';

function SvgFilter(props) {
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
        d="M2.25 7A.75.75 0 013 6.25h18a.75.75 0 010 1.5H3A.75.75 0 012.25 7zm3 5a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM10 16.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFilter;
