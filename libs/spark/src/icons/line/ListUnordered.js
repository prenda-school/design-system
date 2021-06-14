import * as React from 'react';

function SvgListUnordered(props) {
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
        d="M4 7a1 1 0 100-2 1 1 0 000 2zm3.25-1A.75.75 0 018 5.25h12a.75.75 0 010 1.5H8A.75.75 0 017.25 6zM8 11.25a.75.75 0 000 1.5h12a.75.75 0 000-1.5H8zm0 6a.75.75 0 000 1.5h12a.75.75 0 000-1.5H8zM5 12a1 1 0 11-2 0 1 1 0 012 0zm-1 7a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgListUnordered;
