import * as React from 'react';

function SvgPauseCircle(props) {
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zM10.5 10a1.5 1.5 0 10-3 0v4a1.5 1.5 0 003 0v-4zM15 8.5a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-3 0v-4A1.5 1.5 0 0115 8.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPauseCircle;
