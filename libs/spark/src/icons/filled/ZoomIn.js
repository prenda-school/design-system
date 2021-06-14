import * as React from 'react';

function SvgZoomIn(props) {
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
        d="M20 11a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75a.75.75 0 01.75.75v2.25H14a.75.75 0 010 1.5h-2.25V14a.75.75 0 01-1.5 0v-2.25H8a.75.75 0 010-1.5h2.25V8a.75.75 0 01.75-.75zm8.53 11.22a.75.75 0 10-1.06 1.06l2 2a.75.75 0 101.06-1.06l-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgZoomIn;
