import * as React from 'react';

function SvgPlusCircle(props) {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm.75-14a.75.75 0 00-1.5 0v3.25H8a.75.75 0 000 1.5h3.25V16a.75.75 0 001.5 0v-3.25H16a.75.75 0 000-1.5h-3.25V8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPlusCircle;