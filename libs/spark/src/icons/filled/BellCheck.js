import * as React from 'react';

function SvgBellCheck(props) {
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
        d="M4.512 8.86a7.547 7.547 0 0114.976 0l.99 7.912a2.65 2.65 0 01-2.63 2.978h-1.36l-.053.118a4.853 4.853 0 01-8.87 0l-.052-.118H6.152a2.65 2.65 0 01-2.63-2.978l.99-7.911zm10.283 10.89h-5.59a3.354 3.354 0 005.59 0zm.735-10.28a.75.75 0 010 1.06l-4 4a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 011.06-1.06l.97.97 3.47-3.47a.75.75 0 011.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBellCheck;
