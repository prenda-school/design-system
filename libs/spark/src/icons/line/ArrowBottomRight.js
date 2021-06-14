import * as React from 'react';

function SvgArrowBottomRight(props) {
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
        d="M5.47 5.47a.75.75 0 011.06 0l10.72 10.72V8.4a.75.75 0 011.5 0V18a.75.75 0 01-.75.75H8.4a.75.75 0 110-1.5h7.79L5.47 6.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowBottomRight;
