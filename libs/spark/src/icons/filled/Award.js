import * as React from 'react';

function SvgAward(props) {
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
        fillRule="evenodd"
        d="M12 2a7 7 0 00-4.353 12.482l-1.384 7.38a.75.75 0 001.016.834L12 20.808l4.721 1.888a.75.75 0 001.016-.834l-1.384-7.38A7 7 0 0012 2zm2.987 13.333A6.973 6.973 0 0112 16c-1.068 0-2.08-.24-2.987-.667L7.99 20.797l3.733-1.493a.75.75 0 01.556 0l3.733 1.493-1.024-5.464z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgAward;
