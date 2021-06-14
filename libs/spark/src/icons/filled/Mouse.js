import * as React from 'react';

function SvgMouse(props) {
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
        d="M12 2a8 8 0 00-8 8v4a8 8 0 1016 0v-4a8 8 0 00-8-8zm.75 5a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0V7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMouse;
