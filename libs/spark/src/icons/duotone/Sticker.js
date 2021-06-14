import * as React from 'react';

function SvgSticker(props) {
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
        d="M3 12a9 9 0 0017.994.33l-9.323-9.324A9 9 0 003 12z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M11.644 2.256a.75.75 0 01.557.22l9.323 9.323a.75.75 0 01.22.557c-.188 5.22-4.478 9.394-9.744 9.394A9.75 9.75 0 012.25 12c0-5.266 4.174-9.556 9.394-9.744zm-1.1 1.622a8.25 8.25 0 109.578 9.578 7.75 7.75 0 01-9.578-9.578zm1.423.484a6.25 6.25 0 007.671 7.671l-7.671-7.67z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSticker;
