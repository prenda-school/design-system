import * as React from 'react';

function SvgRuler(props) {
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
        d="M4.329 18.328c-1.334-1.333-2-2-2-2.828 0-.828.666-1.495 2-2.829l8.343-8.343c1.333-1.333 2-2 2.828-2 .829 0 1.495.667 2.829 2l1.343 1.344c1.333 1.333 2 2 2 2.828 0 .627-.383 1.162-1.148 1.964L17.03 6.97a.75.75 0 00-1.06 1.06l3.5 3.5-1.94 1.94-2-2a.75.75 0 00-1.06 1.06l2 2-1.94 1.94-3.5-3.5a.75.75 0 00-1.06 1.06l3.5 3.5-1.94 1.94-2-2a.75.75 0 00-1.06 1.06l1.994 1.995c-.802.764-1.336 1.147-1.964 1.147-.828 0-1.495-.667-2.828-2l-1.343-1.344z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgRuler;
