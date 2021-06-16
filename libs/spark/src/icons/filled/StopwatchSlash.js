import * as React from 'react';

function SvgStopwatchSlash(props) {
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
        d="M10 .25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4zM2.47 3.47a.75.75 0 011.06 0l2.636 2.636 6.364 6.364 6.364 6.364 2.636 2.636a.75.75 0 11-1.06 1.06l-2.126-2.126A9.714 9.714 0 0112 22.75 9.75 9.75 0 012.25 13c0-2.422.884-4.639 2.346-6.344L2.47 4.53a.75.75 0 010-1.06zM12 4.75a8.213 8.213 0 00-3.666.857.75.75 0 01-.668-1.343A9.713 9.713 0 0112 3.25c2.422 0 4.639.884 6.344 2.346L19.97 3.97a.75.75 0 111.06 1.06l-1.626 1.626A9.714 9.714 0 0121.75 13a9.713 9.713 0 01-1.014 4.334.75.75 0 11-1.343-.668A8.212 8.212 0 0020.25 13c0-2.278-.923-4.34-2.416-5.834A8.222 8.222 0 0012 4.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgStopwatchSlash;
