import * as React from 'react';

function SvgGrid12(props) {
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
        d="M14.75 2h-5.5v9.25h5.5V2zm0 10.75h-5.5V22h5.5v-9.25zm1.5 9.25v-9.25H22V16c0 2.828 0 4.243-.879 5.121-.852.853-2.208.878-4.871.879zm0-10.75V2c2.663 0 4.019.026 4.871.879C22 3.757 22 5.172 22 8v3.25h-5.75zM2.879 2.879C3.73 2.026 5.087 2 7.75 2v20c-2.663 0-4.019-.026-4.871-.879C2 20.243 2 18.828 2 16V8c0-2.828 0-4.243.879-5.121z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGrid12;
