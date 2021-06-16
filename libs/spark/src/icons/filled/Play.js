import * as React from 'react';

function SvgPlay(props) {
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
        d="M5 14.783V9.217C5 6.026 5 4.43 6.03 3.859c1.03-.57 2.384.275 5.09 1.966l4.453 2.783c2.436 1.522 3.653 2.284 3.653 3.392s-1.217 1.87-3.653 3.392l-4.453 2.783c-2.706 1.691-4.06 2.537-5.09 1.966C5 19.57 5 17.974 5 14.783z"
      />
    </svg>
  );
}

export default SvgPlay;
