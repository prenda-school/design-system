import * as React from 'react';

function SvgGrid10(props) {
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
        d="M2.879 2.879C2 3.757 2 5.172 2 8v.25h20V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2H8c-2.828 0-4.243 0-5.121.879zM14.75 9.75h-5.5V22h5.5V9.75zM16.25 22V9.75H22V16c0 2.828 0 4.243-.879 5.121-.852.853-2.208.878-4.871.879zM2 9.75h5.75V22c-2.663 0-4.019-.026-4.871-.879C2 20.243 2 18.828 2 16V9.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGrid10;
