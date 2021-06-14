import * as React from 'react';

function SvgSearch(props) {
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
        d="M11 20a9 9 0 100-18 9 9 0 000 18zm8.53-1.53a.75.75 0 10-1.06 1.06l2 2a.75.75 0 101.06-1.06l-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSearch;
