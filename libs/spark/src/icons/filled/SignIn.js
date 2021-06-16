import * as React from 'react';

function SvgSignIn(props) {
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
        d="M13.53 7.47a.75.75 0 00-1.06 1.06l2.72 2.72H7V8c0-2.828 0-4.243.879-5.121C8.757 2 10.172 2 13 2h2c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-2c-2.829 0-4.243 0-5.121-.879C7 20.243 7 18.828 7 16v-3.25h8.19l-2.72 2.72a.75.75 0 001.06 1.06l4-4a.75.75 0 000-1.06l-4-4zM7 12.75H3a.75.75 0 010-1.5h4v1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSignIn;
