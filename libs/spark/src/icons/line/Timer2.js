import * as React from 'react';

function SvgTimer2(props) {
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
        d="M11.25 3a.75.75 0 01.75-.75c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12a9.722 9.722 0 012.856-6.894.75.75 0 011.06 1.06 8.25 8.25 0 106.584-2.383V6a.75.75 0 01-1.5 0V3zM8.47 8.47a.75.75 0 011.06 0l3 3a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgTimer2;
