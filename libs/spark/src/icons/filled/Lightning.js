import * as React from 'react';

function SvgLightning(props) {
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
        d="M14.75 2a.75.75 0 00-1.374-.416l-8 12A.75.75 0 006 14.75h4.25V22a.75.75 0 001.374.416l8-12A.75.75 0 0019 9.25h-4.25V2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgLightning;
