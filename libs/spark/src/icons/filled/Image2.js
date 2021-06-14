import * as React from 'react';

function SvgImage2(props) {
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
        d="M16.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM3.962 14.837l1.673-2.603C7.15 9.877 7.908 8.699 9 8.699s1.85 1.178 3.365 3.535L13.5 14c.14.218.21.327.275.395a1 1 0 001.45 0c.065-.068.135-.177.275-.395.28-.435.42-.653.55-.79a2 2 0 012.9 0c.13.137.27.354.55.79l1.255 1.953c1.1 1.71 1.649 2.564 1.57 3.27a2 2 0 01-.726 1.328C21.048 21 20.032 21 18 21H7.327c-3.234 0-4.85 0-5.42-1.042-.568-1.041.306-2.401 2.055-5.121z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgImage2;
