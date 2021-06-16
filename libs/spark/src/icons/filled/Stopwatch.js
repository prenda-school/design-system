import * as React from 'react';

function SvgStopwatch(props) {
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
        d="M10 .25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4zM2.25 13A9.75 9.75 0 0112 3.25c2.422 0 4.639.884 6.344 2.346L19.97 3.97a.75.75 0 111.06 1.06l-1.626 1.626A9.714 9.714 0 0121.75 13c0 5.385-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13zm10.5-3a.75.75 0 00-1.5 0v4a.75.75 0 001.5 0v-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgStopwatch;
