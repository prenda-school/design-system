import * as React from 'react';

function SvgGrid16(props) {
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
        d="M11.25 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v.25h9.25V2zM2 16V9.75h9.25V22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16zm10.75-.25V22H16c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-.25h-9.25zm9.25-1.5V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2h-3.25v12.25H22z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGrid16;
