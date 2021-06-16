import * as React from 'react';

function SvgElements2(props) {
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
        d="M6.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm11 0a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm3.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM6.5 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M3.75 6.5a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zM6.5 2.25a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm8.25 4.25a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zm2.75-4.25a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm0 12.5a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm-4.25 2.75a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0zm-9.5 0a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zm2.75-4.25a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgElements2;
