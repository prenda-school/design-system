import * as React from 'react';

function SvgModules(props) {
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
        d="M6 3a3 3 0 102.905 3.75H12a.75.75 0 000-1.5H8.905A3.001 3.001 0 006 3zm9 3a3 3 0 113.75 2.905V12a.75.75 0 01-1.5 0V8.905A3.001 3.001 0 0115 6zm-8.25 6a.75.75 0 00-1.5 0v3.095a3.001 3.001 0 101.5 0V12zM12 17.25a.75.75 0 000 1.5h3.095A3.001 3.001 0 0021 18a3 3 0 00-5.905-.75H12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgModules;
