import * as React from 'react';

function SvgColorFilter(props) {
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
        d="M18 8A6 6 0 116 8a6 6 0 0112 0zm-4.007 6.712A7.003 7.003 0 015.205 9.69a6 6 0 108.788 5.023zm.976-.371a7.015 7.015 0 003.826-4.652 6 6 0 11-5.983 10.395 6.98 6.98 0 002.157-5.743z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgColorFilter;
