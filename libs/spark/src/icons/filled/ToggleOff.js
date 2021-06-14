import * as React from 'react';

function SvgToggleOff(props) {
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
        d="M1.25 12A8.75 8.75 0 0110 3.25h4a8.75 8.75 0 110 17.5h-4A8.75 8.75 0 011.25 12zM10 16a4 4 0 100-8 4 4 0 000 8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgToggleOff;
