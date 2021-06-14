import * as React from 'react';

function SvgKey(props) {
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
        d="M20.53 2.47a.75.75 0 010 1.06l-.47.47 2.47 2.47a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06 0L15.5 8.56l-3.938 3.94a5.75 5.75 0 11-1.06-1.06l4.468-4.47 3.5-3.5 1-1a.75.75 0 011.06 0zM16.56 7.5l1.94 1.94L20.94 7 19 5.06 16.56 7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgKey;
