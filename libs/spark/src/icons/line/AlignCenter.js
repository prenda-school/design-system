import * as React from 'react';

function SvgAlignCenter(props) {
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
        d="M4 3.25a.75.75 0 000 1.5h16a.75.75 0 000-1.5H4zM5.25 9A.75.75 0 016 8.25h12a.75.75 0 010 1.5H6A.75.75 0 015.25 9zM4 13.25a.75.75 0 000 1.5h16a.75.75 0 000-1.5H4zm4 5a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgAlignCenter;
