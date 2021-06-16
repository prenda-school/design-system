import * as React from 'react';

function SvgGrid02(props) {
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
        d="M8 2h3.25v9.25H2V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2zM2 12.75V16c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h3.25v-9.25H2zm10.75 0V22H16c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-3.25h-9.25zm9.25-1.5V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2h-3.25v9.25H22z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGrid02;
