import * as React from 'react';

function SvgEuro(props) {
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
        d="M13 4.75a7.252 7.252 0 00-6.71 4.5H13a.75.75 0 010 1.5H5.857a7.297 7.297 0 000 2.5H11a.75.75 0 010 1.5H6.29a7.252 7.252 0 0012.148 2.046.75.75 0 111.124.992A8.754 8.754 0 014.691 14.75H3a.75.75 0 010-1.5h1.339a8.825 8.825 0 010-2.5H3a.75.75 0 010-1.5h1.69a8.754 8.754 0 0114.872-3.038.75.75 0 11-1.124.993A7.23 7.23 0 0013 4.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgEuro;
