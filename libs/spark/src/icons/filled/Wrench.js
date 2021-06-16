import * as React from 'react';

function SvgWrench(props) {
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
        d="M3.99 17.853a2 2 0 002.828 2.829l6.605-6.606a6.003 6.003 0 008.002-8.002l-3.294 3.294c-.666.667-1 1-1.414 1-.414 0-.747-.333-1.414-1-.667-.667-1-1-1-1.414 0-.414.333-.748 1-1.414l3.294-3.295a6.002 6.002 0 00-8.003 8.003L3.99 17.853z"
      />
    </svg>
  );
}

export default SvgWrench;
