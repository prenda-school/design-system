import * as React from 'react';

function SvgClock(props) {
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
        d="M5.53 1.47a.75.75 0 010 1.06l-3 3a.75.75 0 01-1.06-1.06l3-3a.75.75 0 011.06 0zm6.47.78c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 5a.75.75 0 01.75.75v3.599l2.666 1.777a.75.75 0 11-.832 1.248l-3-2A.75.75 0 0111.25 12V8a.75.75 0 01.75-.75zm6.47-4.72a.75.75 0 011.06-1.06l3 3a.75.75 0 01-1.06 1.06l-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgClock;
