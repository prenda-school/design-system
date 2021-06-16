import * as React from 'react';

function SvgMoon(props) {
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
        d="M3 11a9 9 0 0017.397 3.245 8 8 0 01-9.719-12.149A9.002 9.002 0 003 11z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M11.326 1.718a.75.75 0 01-.055.838 7.25 7.25 0 008.807 11.01.75.75 0 011.019.95A9.753 9.753 0 0112 20.75 9.75 9.75 0 012.25 11c0-4.9 3.613-8.953 8.32-9.646a.75.75 0 01.756.364zm-2.25 1.565a8.25 8.25 0 109.809 12.263A8.75 8.75 0 019.077 3.283z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMoon;
