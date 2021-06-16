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
        fill={props.fillColor || '#F0F1F2'}
        fillRule="evenodd"
        d="M6 10a3 3 0 100-6 3 3 0 000 6zm12 10a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M17.397 3.364a.75.75 0 01.239 1.034l-10 16a.75.75 0 11-1.272-.795l10-16a.75.75 0 011.033-.239zM6 4.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM2.25 7a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zm13.5 10a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM18 13.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgProcent;
