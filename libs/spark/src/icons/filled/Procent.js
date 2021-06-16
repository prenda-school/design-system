import * as React from 'react';

function SvgProcent(props) {
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
        d="M17.398 3.364a.75.75 0 01.238 1.034l-10 16a.75.75 0 11-1.272-.795l10-16a.75.75 0 011.034-.239zM9 7a3 3 0 11-6 0 3 3 0 016 0zm9 13a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgProcent;
