import * as React from 'react';

function SvgNut(props) {
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
        d="M3.276 16.837c.276.47.778.749 1.781 1.306l5 2.778c.95.527 1.424.791 1.943.791.518 0 .993-.264 1.942-.791l5-2.778c1.003-.557 1.505-.836 1.781-1.306.277-.47.277-1.043.277-2.19V9.353c0-1.148 0-1.722-.277-2.192-.276-.469-.777-.748-1.78-1.305l-5-2.778c-.95-.527-1.425-.791-1.943-.791-.519 0-.993.264-1.943.791l-5 2.778c-1.003.557-1.505.836-1.781 1.305C3 7.632 3 8.206 3 9.354v5.292c0 1.148 0 1.722.276 2.191zM12 9a3 3 0 100 6 3 3 0 000-6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgNut;
